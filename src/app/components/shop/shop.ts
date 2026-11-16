import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: any[] = [];
  selectedCategoryId: number = 0;
  toastMessage = signal<string | null>(null);
  private toastTimeout: any;

  constructor(
    private restaurantService: RestaurantService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.restaurantService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err) => console.error(err)
    });
  }

  loadCategories(): void {
    this.restaurantService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.error(err)
    });
  }

  filterByCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    if (categoryId === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.categoryId === categoryId);
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.showToast(`"${product.name}" დაემატა კალათაში`);
  }

  private showToast(message: string): void {
    this.toastMessage.set(message);
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.toastMessage.set(null);
    }, 2500);
  }
}