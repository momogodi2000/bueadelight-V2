import { useState, useEffect } from 'react';
import { APP_CONFIG } from '@/constants';
import { getLocalStorage, setLocalStorage } from '@/utils';

/**
 * Custom hook for managing localStorage with React state
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

/**
 * Custom hook for managing cart state
 */
export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<any[]>(APP_CONFIG.storageKeys.cart, []);
  
  const addToCart = (item: any) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
      );
      
      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };
  
  const removeFromCart = (itemId: string, size: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === itemId && item.size === size))
    );
  };
  
  const updateQuantity = (itemId: string, size: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, size);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  };
}

/**
 * Custom hook for managing favorites
 */
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>(APP_CONFIG.storageKeys.favorites, []);
  
  const addToFavorites = (itemId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(itemId)) {
        return prevFavorites;
      }
      return [...prevFavorites, itemId];
    });
  };
  
  const removeFromFavorites = (itemId: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(id => id !== itemId));
  };
  
  const toggleFavorite = (itemId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(itemId)) {
        return prevFavorites.filter(id => id !== itemId);
      } else {
        return [...prevFavorites, itemId];
      }
    });
  };
  
  const isFavorite = (itemId: string) => {
    return favorites.includes(itemId);
  };
  
  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
}

/**
 * Custom hook for debounced search
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for intersection observer (lazy loading)
 */
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit = {}
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return entry;
}

/**
 * Custom hook for window size
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

/**
 * Custom hook for media queries
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

/**
 * Custom hook for scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

/**
 * Custom hook for online status
 */
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

/**
 * Custom hook for document title
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}

/**
 * Custom hook for analytics tracking
 */
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties);
      }

      // Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, properties);
      }

      // Console log for development
      if (import.meta.env.DEV) {
        console.log('Analytics Event:', eventName, properties);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackPageView = (pagePath: string) => {
    trackEvent('page_view', {
      page_path: pagePath,
      page_title: document.title
    });
  };

  const trackPurchase = (orderValue: number, items: any[]) => {
    trackEvent('purchase', {
      value: orderValue,
      currency: 'XAF',
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: item.price
      }))
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackPurchase
  };
}
