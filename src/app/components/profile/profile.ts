import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  userEmail: string = 'jintchadzebarbare007@gmail.com';
  userPhone: string = '+995 555 12 34 56';
  userAddress: string = 'თბილისი, რუსთაველის გამზირი 12';
  
  orders: any[] = [
    {
      id: 1042,
      date: '2026-06-18',
      total: 45.50,
      status: 'დასრულებული',
      items: 'მარგარიტა, კოკა-კოლა'
    },
    {
      id: 1038,
      date: '2026-06-10',
      total: 32.00,
      status: 'დასრულებული',
      items: 'ცეზარი სალათი, ლიმონათი'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/auth']);
  }
}