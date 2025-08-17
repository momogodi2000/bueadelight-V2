// useCart Hook - Shopping Cart Management for BueaDelights
import { useState, useCallback } from 'react';
import { CartItem, MenuItem } from '../types';

const CART_STORAGE_KEY = 'bueadelights_cart';

export function useCart() {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to localStorage
  const saveCart = useCallback((items: CartItem[]) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn('Failed to save cart:', error);
    }
  }, []);

  // Add item to cart
  const addToCart = useCallback((
    menuItem: MenuItem, 
    selectedSize: 'small' | 'medium' | 'large', 
    quantity: number = 1, 
    customizations = {}
  ) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.id === menuItem.id && item.selectedSize === selectedSize
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item
        newItems = [...prev];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
          customizations: { ...newItems[existingItemIndex].customizations, ...customizations }
        };
      } else {
        // Add new item
        const newCartItem: CartItem = {
          ...menuItem,
          selectedSize,
          quantity,
          customizations,
          addedAt: Date.now()
        };
        newItems = [...prev, newCartItem];
      }

      saveCart(newItems);
      return newItems;
    });

    // Analytics tracking
    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'add_to_cart', {
          currency: 'XAF',
          value: menuItem.prices[selectedSize].amount * quantity,
          items: [{
            item_id: menuItem.id,
            item_name: menuItem.name,
            item_category: menuItem.category,
            quantity: quantity,
            price: menuItem.prices[selectedSize].amount
          }]
        });
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }, [saveCart]);

  // Remove item from cart
  const removeFromCart = useCallback((itemId: string, selectedSize: 'small' | 'medium' | 'large') => {
    setCartItems(prev => {
      const newItems = prev.filter(item => !(item.id === itemId && item.selectedSize === selectedSize));
      saveCart(newItems);
      return newItems;
    });
  }, [saveCart]);

  // Update item quantity
  const updateQuantity = useCallback((
    itemId: string, 
    selectedSize: 'small' | 'medium' | 'large', 
    newQuantity: number
  ) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, selectedSize);
      return;
    }

    setCartItems(prev => {
      const newItems = prev.map(item => 
        item.id === itemId && item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      );
      saveCart(newItems);
      return newItems;
    });
  }, [removeFromCart, saveCart]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear cart:', error);
    }
  }, []);

  // Calculate totals
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((total, item) => 
    total + (item.prices[item.selectedSize].amount * item.quantity), 0
  );

  return {
    cartItems,
    cartItemsCount,
    cartSubtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
}
