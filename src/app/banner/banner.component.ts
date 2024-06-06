import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  toPackages() {
    document.getElementById('packages')!.scrollIntoView({ behavior: 'smooth' })
  }
}
