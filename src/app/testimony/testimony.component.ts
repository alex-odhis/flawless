import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { TestimonyService } from './testimony.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent implements OnInit{
  public testimonies: any = []
  errorMessage = '' 

  constructor(private testimonyService: TestimonyService){}
  ngOnInit(): void {
    this.getTestimonies();
  }

  getTestimonies() {
    this.testimonyService.getTestimony().subscribe({
      next: data => this.testimonies = data,
      error: err => this.errorMessage = err

    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
