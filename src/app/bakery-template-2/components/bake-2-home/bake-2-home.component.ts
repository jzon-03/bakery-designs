import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'breads' | 'pastries' | 'desserts' | 'drinks';
  icon: string;
  featured?: boolean;
}

@Component({
  selector: 'app-bake-2-home',
  templateUrl: './bake-2-home.component.html',
  styleUrls: ['./bake-2-home.component.scss'],
  standalone: false
})
export class Bake2HomeComponent implements OnInit {

  activeCategory: string = 'all';
  
  menuItems: MenuItem[] = [
    // Breads
    {
      id: 1,
      name: 'Signature Sourdough',
      description: '48-hour fermented sourdough with perfect crust and tangy flavor',
      price: 8.50,
      category: 'breads',
      icon: '🥖',
      featured: true
    },
    {
      id: 2,
      name: 'Rustic Rye',
      description: 'Dense, hearty rye bread with caraway seeds',
      price: 7.25,
      category: 'breads',
      icon: '🍞'
    },
    {
      id: 3,
      name: 'Artisan Baguette',
      description: 'Classic French baguette with crispy crust',
      price: 4.75,
      category: 'breads',
      icon: '🥖'
    },
    {
      id: 4,
      name: 'Whole Grain Seeded',
      description: 'Nutritious blend of ancient grains and seeds',
      price: 9.00,
      category: 'breads',
      icon: '🍞'
    },

    // Pastries
    {
      id: 5,
      name: 'Butter Croissants',
      description: 'Flaky, buttery perfection with 64 delicate layers',
      price: 3.75,
      category: 'pastries',
      icon: '🥐',
      featured: true
    },
    {
      id: 6,
      name: 'Pain au Chocolat',
      description: 'Croissant dough wrapped around premium Belgian chocolate',
      price: 4.25,
      category: 'pastries',
      icon: '🥐'
    },
    {
      id: 7,
      name: 'Almond Danish',
      description: 'Sweet pastry filled with almond cream and sliced almonds',
      price: 4.50,
      category: 'pastries',
      icon: '🥧'
    },
    {
      id: 8,
      name: 'Seasonal Fruit Tart',
      description: 'Vanilla custard base topped with fresh seasonal fruits',
      price: 6.75,
      category: 'pastries',
      icon: '🥧'
    },

    // Desserts
    {
      id: 9,
      name: 'Chocolate Fondant',
      description: 'Rich, molten chocolate cake with liquid center',
      price: 8.50,
      category: 'desserts',
      icon: '🍰'
    },
    {
      id: 10,
      name: 'Lemon Tart',
      description: 'Tangy lemon curd in buttery pastry shell',
      price: 5.75,
      category: 'desserts',
      icon: '🍋'
    },
    {
      id: 11,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: 7.25,
      category: 'desserts',
      icon: '🍰'
    },
    {
      id: 12,
      name: 'Artisan Donuts',
      description: 'Hand-crafted donuts with unique daily flavors',
      price: 4.25,
      category: 'desserts',
      icon: '🍩',
      featured: true
    },

    // Beverages
    {
      id: 13,
      name: 'Signature Espresso',
      description: 'Single-origin beans roasted to perfection',
      price: 3.25,
      category: 'drinks',
      icon: '☕'
    },
    {
      id: 14,
      name: 'Artisan Hot Chocolate',
      description: 'Rich Belgian chocolate with whipped cream',
      price: 4.75,
      category: 'drinks',
      icon: '☕'
    },
    {
      id: 15,
      name: 'Cold Brew',
      description: 'Smooth, refreshing cold-brewed coffee',
      price: 4.25,
      category: 'drinks',
      icon: '🥤'
    },
    {
      id: 16,
      name: 'Matcha Latte',
      description: 'Premium ceremonial grade matcha with steamed milk',
      price: 5.25,
      category: 'drinks',
      icon: '🍵'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Component initialization
    this.setupScrollEffects();
  }

  // Set active category for menu filtering
  setActiveCategory(category: string): void {
    this.activeCategory = category;
    
    // Update active tab styling
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    const target = event?.target as HTMLElement;
    if (target) {
      target.classList.add('active');
    }
  }

  // Get filtered menu items based on active category
  getFilteredMenuItems(): MenuItem[] {
    if (this.activeCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }

  // Format price for display
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  // Get featured menu items
  getFeaturedItems(): MenuItem[] {
    return this.menuItems.filter(item => item.featured);
  }

  // Handle newsletter subscription
  onSubscribeNewsletter(email: string): void {
    if (email && this.isValidEmail(email)) {
      console.log('Newsletter subscription:', email);
      // Here you would typically call a service to handle the subscription
      alert('Thank you for subscribing to our newsletter!');
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Validate email format
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Handle contact form submission
  onContactSubmit(formData: any): void {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We\'ll get back to you soon.');
  }

  // Setup scroll effects and animations
  private setupScrollEffects(): void {
    // This would typically involve intersection observers for scroll animations
    // For now, we'll keep it simple
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  private handleScroll(): void {
    // Add scroll-based animations or effects here
    // For example, changing navigation background on scroll
    const nav = document.querySelector('.modern-nav');
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }

  // Get items by category for quick access
  getBreadItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'breads');
  }

  getPastryItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'pastries');
  }

  getDessertItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'desserts');
  }

  getDrinkItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === 'drinks');
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }
}
