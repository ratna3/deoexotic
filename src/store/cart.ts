import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'attar' | 'perfume' | 'oil';
  volume: string;
  inStock: boolean;
  featured: boolean;
  ingredients: string[];
  benefits: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (product: Product, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.id === product.id);

        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({
            items: [...items, { product, quantity }]
          });
        }

        // Recalculate totals
        const newItems = get().items;
        const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      removeItem: (productId: string) => {
        const items = get().items.filter(item => item.product.id !== productId);
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ items, totalItems, totalPrice });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        const items = get().items.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        );

        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        
        set({ items, totalItems, totalPrice });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      getItemQuantity: (productId: string) => {
        const item = get().items.find(item => item.product.id === productId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'deo-exotic-cart',
    }
  )
);