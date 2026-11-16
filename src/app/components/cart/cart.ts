import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}

  get cartItems() {
    return this.cartService.getItems();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  increaseQuantity(item: any): void {
    this.cartService.addToCart(item);
  }

  decreaseQuantity(item: any): void {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}