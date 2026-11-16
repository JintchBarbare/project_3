import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  featuredProducts: any[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.restaurantService.getAllProducts().subscribe({
      next: (data) => {
        this.featuredProducts = data.slice(0, 4);
      },
      error: (err) => console.error(err)
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}