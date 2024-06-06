import { Component } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: any
  errorMessage: any;

  constructor(private customersService: CustomersService) { }
  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe({
      next: data => this.customers = data,
      error: err => this.errorMessage = err
    })
  }
}
