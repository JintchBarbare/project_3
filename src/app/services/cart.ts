import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any): void {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  decreaseQuantity(product: any): void {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        this.removeFromCart(product.id);
      }
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  clearCart(): void {
    this.items = [];
  }

  getItems(): any[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }

  getTotalItemsCount(): number {
    return this.items.reduce((count, item) => count + (item.quantity || 1), 0);
  }
}