import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
}

@Component({
  selector: 'app-bake-1-home',
  templateUrl: './bake-1-home.component.html',
  styleUrls: ['./bake-1-home.component.scss'],
  standalone: false
})
export class Bake1HomeComponent implements OnInit {

  // Sample data for products
  products: Product[] = [
    {
      id: 1,
      name: 'Artisan Breads',
      description: 'Sourdough, whole wheat, rye, and classic French baguettes',
      price: 4.50,
      image: '🥖',
      category: 'bread'
    },
    {
      id: 2,
      name: 'Pastries',
      description: 'Croissants, danishes, muffins, and seasonal specialties',
      price: 2.75,
      image: '🥐',
      category: 'pastry'
    },
    {
      id: 3,
      name: 'Custom Cakes',
      description: 'Birthday cakes, wedding cakes, and special occasion desserts',
      price: 25.00,
      image: '🎂',
      category: 'cake'
    },
    {
      id: 4,
      name: 'Cupcakes',
      description: 'Vanilla, chocolate, red velvet, and seasonal flavors',
      price: 3.25,
      image: '🧁',
      category: 'cake'
    },
    {
      id: 5,
      name: 'Fresh Pies',
      description: 'Apple, cherry, pumpkin, and savory quiches',
      price: 18.00,
      image: '🥧',
      category: 'pie'
    },
    {
      id: 6,
      name: 'Cookies',
      description: 'Chocolate chip, oatmeal raisin, sugar, and seasonal varieties',
      price: 1.50,
      image: '🍪',
      category: 'cookie'
    }
  ];

  // Sample testimonials
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      review: 'The best croissants in town! I come here every morning for my coffee and pastry. The quality is consistently amazing.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike & Lisa Chen',
      review: 'Golden Crust made our wedding cake and it was absolutely perfect. Beautiful design and incredible taste!',
      rating: 5
    },
    {
      id: 3,
      name: 'Robert Martinez',
      review: 'Their sourdough bread is incredible. You can taste the difference that comes from traditional baking methods.',
      rating: 5
    }
  ];

  // Business hours
  businessHours = {
    weekdays: '6:00 AM - 7:00 PM',
    weekends: '7:00 AM - 6:00 PM'
  };

  // Contact information
  contactInfo = {
    address: '123 Baker Street, Downtown, NY 10001',
    phone: '(555) 123-BAKE',
    email: 'hello@goldencrustbakery.com'
  };

  constructor() { }

  ngOnInit(): void {
    // Component initialization
    this.setupSmoothScrolling();
  }

  // Smooth scrolling for navigation links
  setupSmoothScrolling(): void {
    // This would typically be handled with Angular's router or a smooth scroll service
    // For now, we'll add the basic functionality
  }

  // Method to handle contact form submission
  onSubmitContactForm(formData: any): void {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We\'ll get back to you soon.');
  }

  // Method to get star rating display
  getStarRating(rating: number): string {
    return '⭐'.repeat(rating);
  }

  // Method to format price
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  // Method to handle product filtering (for future use)
  filterProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  // Method to get featured products (first 3)
  getFeaturedProducts(): Product[] {
    return this.products.slice(0, 3);
  }
}
