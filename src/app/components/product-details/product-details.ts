import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.restaurantService.getProductById(id).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => console.error(err)
      });
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}