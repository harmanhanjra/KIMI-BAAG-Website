import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  updateSize: (productId: string, oldSize: string, newSize: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
  isInCart: (productId: string, size?: string) => boolean;
}

export const FREE_SHIPPING_THRESHOLD = 1999;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, size: string, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id && item.size === size
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.product.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...currentItems, { product, size, quantity }],
            isOpen: true,
          });
        }
      },

      removeItem: (productId: string, size: string) => {
        set({
          items: get().items.filter(
            (item) => !(item.product.id === productId && item.size === size)
          ),
        });
      },

      updateQuantity: (productId: string, size: string, quantity: number) => {
        if (quantity < 1) {
          get().removeItem(productId, size);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item
          ),
        });
      },

      updateSize: (productId: string, oldSize: string, newSize: string) => {
        const currentItems = get().items;
        const existingWithNewSize = currentItems.find(
          (item) => item.product.id === productId && item.size === newSize
        );
        const itemToUpdate = currentItems.find(
          (item) => item.product.id === productId && item.size === oldSize
        );

        if (!itemToUpdate) return;

        if (existingWithNewSize) {
          set({
            items: currentItems
              .map((item) =>
                item.product.id === productId && item.size === newSize
                  ? { ...item, quantity: item.quantity + itemToUpdate.quantity }
                  : item
              )
              .filter(
                (item) => !(item.product.id === productId && item.size === oldSize)
              ),
          });
        } else {
          set({
            items: currentItems.map((item) =>
              item.product.id === productId && item.size === oldSize
                ? { ...item, size: newSize }
                : item
            ),
          });
        }
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getTotal: () => {
        return get().getSubtotal();
      },

      isInCart: (productId: string, size?: string) => {
        return get().items.some(
          (item) =>
            item.product.id === productId && (!size || item.size === size)
        );
      },
    }),
    {
      name: 'baag-cart',
      partialize: (state: CartState) => ({ items: state.items }),
    }
  )
);
