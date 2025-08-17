/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_BUSINESS_NAME: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_ENVIRONMENT: string;
  readonly NODE_ENV: string;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global Analytics Types
declare function gtag(command: string, targetId: string, config?: any): void;
declare function fbq(command: string, eventName: string, parameters?: any): void;

// Extend Window interface for global analytics
declare global {
  interface Window {
    gtag?: typeof gtag;
    fbq?: typeof fbq;
    dataLayer?: any[];
  }
}
