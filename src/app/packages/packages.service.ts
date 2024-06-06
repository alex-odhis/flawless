import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }
  packages: any[] = [
    {
      id: 1,
      name: 'Photoshoot Makeup',
      img: './assets/images/package.jpeg',
      icon: 'fa fa-camera',
      description: " Our Photoshoot makeup is expertly tailored for the camera, emphasizing features to ensure they pop under studio lights. It involves precise application techniques, including contouring and highlighting, to achieve flawless results. From subtle enhancements to bold statements, photoshoot makeup enhances natural beauty, ensuring stunning photographs that captivate. "
    },

    {
      id: 2,
      name: 'Music Video Makeup',
      img: './assets/images/package1.jpg',
      icon: 'fa fa-music',
      description: "Music video makeup is bold, dynamic, and often pushes boundaries. It incorporates vibrant colors, dramatic accents, and creative techniques to complement the artist's vision and style.From glittering eyeshadows to statement lip colors, music video makeup is all about making a memorable impact that resonates with the audience. "
    },

    {
      id: 3,
      name: 'Bridal Makeup',
      img: './assets/images/package2.jpg',
      icon: 'fa fa-star',
      description: "Bridal makeup is timeless, elegant, and tailored to enhance the bride's natural beauty on her special day. It emphasizes a flawless complexion, soft eyeshadows, and a delicate balance of colors to ensure she radiates confidence. Bridal makeup is about creating a stunning look that withstands tears of joy and lasts through cherished moments."
    }
  ]

  getPackages() {
    return of(this.packages)
  }
}
