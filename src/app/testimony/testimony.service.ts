import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  constructor() { }
  testimonies = [
    {
      name: 'Alex',
      comment: "Flawless is a true magician with makeup! Their talent turned my vision into reality, making me feel like a queen on my wedding day. From flawless skin to stunning eyes, every detail was perfect. Trustworthy, professional, and incredibly skilled—I couldn't have asked for a better makeup artist!",
      pic: './assets/images/toto.jpg'
    },
    {
      name: 'Mary',
      comment: "Absolutely thrilled with my makeup by Flawless Makeup! She flawlessly captured the exact look I envisioned for my big day. Her attention to detail and expertise truly shone through, making me feel like the most beautiful version of myself. Highly recommend her for any occasion!",
      pic: './assets/images/toto2.jpeg'
    },
    {
      name: 'Angela',
      comment: "Working with Flawless Makeup was an absolute dream! Their talent transformed me into a vision of elegance and confidence. They understood my preferences perfectly, and the result was beyond stunning. I felt radiant and camera-ready all day. Truly grateful for their skill and professionalism!",
      pic: './assets/images/toto3.jpg'
    },
    {
      name: 'Bella',
      comment: "Flawless Makeup exceeded all my expectations! Their artistry transformed me into a vision of beauty. With meticulous attention to detail and a keen understanding of my style, they created a look that was flawless and radiant. Highly recommend for anyone seeking perfection on their special day!",
      pic: './assets/images/toto10.jpg'
    },
    {
      name: 'Shikki',
      comment: "Unmatched skill and professionalism! Flawless transformed my look beyond expectations, accentuating my features flawlessly. Their attention to detail and dedication to perfection ensured I felt confident and beautiful for my special event. Grateful for their expertise—I wholeheartedly recommend them for any occasion!",
      pic: './assets/images/toto9.jpg'
    }
  ]

  getTestimony() {
    return of(this.testimonies)
  }
}
