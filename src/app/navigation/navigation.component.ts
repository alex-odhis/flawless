import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  header_variable = false;

  @HostListener("document:scroll")

  scrollfunction() {
    //return condition ? A: B;(same as if statement)
    return (document.documentElement.scrollTop > 0) ? this.header_variable = true : this.header_variable = false;
  }

  toPackages() {
    document.getElementById('packages')!.scrollIntoView({ behavior: 'smooth' })
  }

  toClients() {
    document.getElementById('clients')!.scrollIntoView({ behavior: 'smooth' })
  }

  toLessons() {
    document.getElementById('lessons')!.scrollIntoView({ behavior: 'smooth' })
  }
  toContact() {
    document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' })
  }
}
