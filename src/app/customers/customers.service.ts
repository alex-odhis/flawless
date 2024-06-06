import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  customers: any[] = [
    {
      tone: 'Chocolate',
      img: './assets/images/customer4.jpg',
      description: 'Dark skin tone makeup thrives on vibrant hues and rich pigments, embracing the beauty of deeper complexions. Foundation shades are diverse, offering options that perfectly match undertones. Bold lipsticks, from deep plums to fiery reds, complement rich skin beautifully. Eyeshadow palettes burst with metallics, earthy tones, and jewel-like colors, enhancing eyes with depth and allure. Highlighters shimmer with golden undertones, adding a luminous glow. Blushes range from warm corals to intense berries, adding a flush of color that pops. Dark skin tone makeup celebrates diversity, offering a spectrum of shades and finishes to empower every individual to embrace their unique beauty.'
    },
    {
      tone: 'Caucasian',
      img: './assets/images/customer.jpg',
      description: 'Caucasian makeup celebrates versatility with a focus on soft, natural looks and subtle enhancements. Foundation shades cater to a range of fair to medium tones, offering options to perfect complexion without masking natural beauty. Soft, neutral eyeshadows and earthy tones create understated elegance, while classic winged eyeliner or smoky eyes add sophistication. Rosy blushes and peachy tones lend a healthy flush to cheeks, while nude or soft pink lip colors complete the look. Highlighters offer a delicate glow, enhancing features with a touch of radiance. Caucasian makeup embraces simplicity and refinement, enhancing individual features with a timeless allure.'
    },
    {
      tone: 'Lightskin',
      img: './assets/images/customer7.jpeg',
      description: 'Black light skin tone makeup offers a tailored solution for individuals with darker complexions, enhancing their natural beauty with precision and vibrancy. Formulated with pigments that complement deeper skin tones, this makeup range ensures seamless blending and a flawless finish. From foundations to lipsticks and eyeshadows, each product is meticulously crafted to cater to the unique undertones and characteristics of black light skin. With rich, saturated colors and long-lasting formulas, it empowers individuals to express themselves confidently while celebrating their cultural heritage. Whether for everyday wear or special occasions, black light skin tone makeup embraces diversity and inclusivity, redefining beauty standards.'
    },
    {
      tone: 'Lightskin',
      img: './assets/images/customer5.jpeg',
      description: 'Black light skin tone makeup caters to the unique needs of individuals with deeper complexions, offering a spectrum of shades that complement and enhance their natural beauty. From foundations to blushes and lip colors, each product is meticulously designed to provide rich, pigmented coverage that stays true throughout the day. With formulas tailored to address specific concerns like hyperpigmentation and uneven skin tone, black light makeup ensures a flawless finish that empowers confidence. Celebrating diversity and inclusivity, this makeup range embraces the richness of darker skin tones, allowing individuals to express themselves authentically while embracing their cultural heritage.'
    },
    {
      tone: 'Mulato',
      img: './assets/images/customer3.jpg',
      description: 'Flawless makeup embraces the nuanced beauty of individuals with mixed-race heritage, offering a bespoke range of products tailored to their unique complexion. With shades that harmonize both lighter and darker tones, this makeup line celebrates diversity and inclusivity. From foundations that blend seamlessly to eyeshadows and lip colors that accentuate features, each product is crafted to enhance the natural radiance of mulatto skin. Formulated with care to address specific concerns such as undertones and texture, this makeup empowers individuals to express themselves authentically while honoring their heritage. Mulatto skin tone makeup redefines beauty standards, embracing the richness of mixed identities.'
    },
    {
      tone: 'Darkskin',
      img: './assets/images/customer8.jpeg',
      description: 'Black dark skin tone makeup celebrates the rich beauty of deeper complexions with a curated selection of products designed to enhance and empower. From foundations offering seamless coverage to eyeshadows and lip colors that pop with intensity, each item is meticulously crafted to complement the unique undertones and features of black dark skin. With formulas engineered for long-lasting wear and pigments that resonate vibrantly, this makeup range embodies inclusivity and diversity. It allows individuals to express themselves authentically while embracing their cultural heritage. Black dark skin tone makeup redefines beauty norms, empowering individuals to embrace their natural beauty with confidence and pride'
    },
  ]

  getCustomers() {
    return of(this.customers)
  }

}
