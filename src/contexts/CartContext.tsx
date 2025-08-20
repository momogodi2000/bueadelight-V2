import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { CartItem, MenuItem } from '@/types';
import { STORAGE_KEYS } from '@/constants';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType extends CartState {
  addItem: (item: MenuItem, size: 'small' | 'medium' | 'large', quantity?: number) => void;
  removeItem: (id: string, size: 'small' | 'medium' | 'large') => void;
  updateQuantity: (id: string, size: 'small' | 'medium' | 'large', quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string, size: 'small' | 'medium' | 'large') => number;
  getCartSummary: () => { items: number; total: number; formattedTotal: string };
  getTotalWithDelivery: (deliveryFee: number) => number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: MenuItem; size: 'small' | 'medium' | 'large'; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: 'small' | 'medium' | 'large' } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: 'small' | 'medium' | 'large'; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<CartContextType | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, size, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === size
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        newItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        const newCartItem: CartItem = {
          id: item.id,
          name: item.name,
          size,
          price: item.prices[size].amount,
          quantity,
          image: item.images[0],
          customizations: {}
        };
        newItems = [...state.items, newCartItem];
      }

      const total = newItems.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0);
      const itemCount = newItems.reduce((count, cartItem) => count + cartItem.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_ITEM': {
      const { id, size } = action.payload;
      const newItems = state.items.filter(item => !(item.id === id && item.size === size));
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((count, item) => count + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id, size } });
      }

      const newItems = state.items.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      );

      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((count, item) => count + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    case 'LOAD_CART': {
      const items = action.payload;
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = items.reduce((count, item) => count + item.quantity, 0);
      return { items, total, itemCount };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(STORAGE_KEYS.cart);
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: MenuItem, size: 'small' | 'medium' | 'large', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, size, quantity } });
    // Could add toast notification here in future
  };

  const removeItem = (id: string, size: 'small' | 'medium' | 'large') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  };

  const updateQuantity = (id: string, size: 'small' | 'medium' | 'large', quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemQuantity = (id: string, size: 'small' | 'medium' | 'large') => {
    const item = state.items.find(item => item.id === id && item.size === size);
    return item ? item.quantity : 0;
  };

  const getCartSummary = () => {
    return {
      items: state.itemCount,
      total: state.total,
      formattedTotal: state.total.toLocaleString()
    };
  };

  const getTotalWithDelivery = (deliveryFee: number) => {
    return state.total + deliveryFee;
  };

  const value: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity,
    getCartSummary,
    getTotalWithDelivery
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;