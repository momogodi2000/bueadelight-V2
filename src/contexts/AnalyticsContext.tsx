import React, { createContext, useContext, useEffect } from 'react';
import type { AnalyticsEvent } from '@/types';
import { ANALYTICS_CONFIG } from '@/constants';

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (pageName: string, pageTitle?: string) => void;
  trackPurchase: (value: number, currency: string, items: any[]) => void;
  trackSearch: (searchTerm: string, resultCount: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

// Mock Google Analytics gtag function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Google Analytics
    if (ANALYTICS_CONFIG.googleAnalytics.enabled && ANALYTICS_CONFIG.googleAnalytics.measurementId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalytics.measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: any[]) {
        window.dataLayer?.push(args);
      };

      window.gtag('js', new Date());
      window.gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Initialize Meta Pixel
    if (ANALYTICS_CONFIG.metaPixel.enabled && ANALYTICS_CONFIG.metaPixel.pixelId) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${ANALYTICS_CONFIG.metaPixel.pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  }, []);

  const trackEvent = (event: AnalyticsEvent) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters
      });
    }

    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', event.name, event.customParameters);
    }

    // Console log for development
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', event);
    }
  };

  const trackPageView = (pageName: string, pageTitle?: string) => {
    const event: AnalyticsEvent = {
      name: ANALYTICS_CONFIG.events.pageView,
      category: 'navigation',
      action: 'page_view',
      label: pageName,
      customParameters: {
        page_title: pageTitle || pageName,
        page_location: window.location.href
      }
    };
    trackEvent(event);
  };

  const trackPurchase = (value: number, currency: string, items: any[]) => {
    const event: AnalyticsEvent = {
      name: 'purchase',
      category: 'ecommerce',
      action: 'purchase',
      value,
      customParameters: {
        currency,
        items,
        transaction_id: `order_${Date.now()}`
      }
    };
    trackEvent(event);
  };

  const trackSearch = (searchTerm: string, resultCount: number) => {
    const event: AnalyticsEvent = {
      name: ANALYTICS_CONFIG.events.search,
      category: 'search',
      action: 'search',
      label: searchTerm,
      customParameters: {
        search_term: searchTerm,
        result_count: resultCount
      }
    };
    trackEvent(event);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackPurchase,
    trackSearch
  };

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

// Global analytics functions
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default AnalyticsContext;