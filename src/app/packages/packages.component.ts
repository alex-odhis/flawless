import { Component } from '@angular/core';
import { PackagesService } from './packages.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

  errorMessage = ''
  packages: any

  constructor(
    private wowService: NgwWowService,
    private packagesService: PackagesService) { }

  ngOnInit() {
    this.wowService.init();
    this.getPackages()
  }

  getPackages() {
    this.packagesService.getPackages().subscribe({
      next: data => this.packages = data,
    })
  }

  // reset() {
  //   this.wowService.init();
  // }
}
