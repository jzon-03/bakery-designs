import { Component, OnInit } from '@angular/core';

interface SweetTreat {
  id: number;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: 'cakes' | 'cupcakes' | 'cookies' | 'pastries';
  badge: string;
  isSpecial?: boolean;
}

interface CustomerReview {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-bake-3-home',
  templateUrl: './bake-3-home.component.html',
  styleUrl: './bake-3-home.component.scss'
})
export class Bake3HomeComponent implements OnInit {

  activeCategory: string = 'all';
  
  sweetTreats: SweetTreat[] = [
    // Cakes
    {
      id: 1,
      name: 'Rainbow Birthday Cake',
      description: 'Six layers of colorful sponge cake with vanilla buttercream and rainbow sprinkles',
      price: 45.99,
      emoji: '🎂',
      category: 'cakes',
      badge: 'Popular',
      isSpecial: true
    },
    {
      id: 2,
      name: 'Chocolate Dream Cake',
      description: 'Rich chocolate cake with chocolate ganache and fresh berries',
      price: 38.99,
      emoji: '🍰',
      category: 'cakes',
      badge: 'Favorite'
    },
    {
      id: 3,
      name: 'Unicorn Magic Cake',
      description: 'Pink vanilla cake with edible glitter and unicorn decorations',
      price: 52.99,
      emoji: '🦄',
      category: 'cakes',
      badge: 'Special'
    },

    // Cupcakes
    {
      id: 4,
      name: 'Funfetti Cupcakes',
      description: 'Vanilla cupcakes loaded with colorful sprinkles and swirl frosting',
      price: 3.99,
      emoji: '🧁',
      category: 'cupcakes',
      badge: 'Daily'
    },
    {
      id: 5,
      name: 'Strawberry Surprise',
      description: 'Strawberry cupcakes with fresh strawberry filling and pink frosting',
      price: 4.49,
      emoji: '🍓',
      category: 'cupcakes',
      badge: 'Seasonal'
    },
    {
      id: 6,
      name: 'Chocolate Chip Delight',
      description: 'Chocolate cupcakes with mini chocolate chips and fudge frosting',
      price: 4.25,
      emoji: '🍫',
      category: 'cupcakes',
      badge: 'Classic'
    },

    // Cookies
    {
      id: 7,
      name: 'Sugar Cookie Art',
      description: 'Hand-decorated sugar cookies with royal icing in fun designs',
      price: 2.99,
      emoji: '🍪',
      category: 'cookies',
      badge: 'Artistic'
    },
    {
      id: 8,
      name: 'Rainbow Macarons',
      description: 'Delicate French macarons in six different flavors and colors',
      price: 8.99,
      emoji: '🌈',
      category: 'cookies',
      badge: 'Premium'
    },
    {
      id: 9,
      name: 'Gingerbread Friends',
      description: 'Cute gingerbread cookies decorated with colorful icing faces',
      price: 3.49,
      emoji: '🍪',
      category: 'cookies',
      badge: 'Cute'
    },

    // Pastries
    {
      id: 10,
      name: 'Strawberry Danish',
      description: 'Flaky pastry filled with strawberry cream and topped with fresh fruit',
      price: 5.99,
      emoji: '🥧',
      category: 'pastries',
      badge: 'Fresh'
    },
    {
      id: 11,
      name: 'Cinnamon Twist',
      description: 'Buttery pastry twisted with cinnamon sugar and vanilla glaze',
      price: 4.99,
      emoji: '🥐',
      category: 'pastries',
      badge: 'Warm'
    },
    {
      id: 12,
      name: 'Fruit Tart Paradise',
      description: 'Crispy tart shell filled with vanilla custard and fresh seasonal fruits',
      price: 7.99,
      emoji: '🥧',
      category: 'pastries',
      badge: 'Seasonal'
    }
  ];

  customerReviews: CustomerReview[] = [
    {
      id: 1,
      name: 'Emma Thompson',
      review: 'My daughter\'s birthday cake was absolutely AMAZING! The kids couldn\'t stop talking about how beautiful and delicious it was. Thank you for making her day so special!',
      rating: 5,
      avatar: '👧'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      review: 'I come here every Friday for their fresh pastries. The cinnamon twists are to die for! The staff is always so friendly and the atmosphere is just wonderful.',
      rating: 5,
      avatar: '👨'
    },
    {
      id: 3,
      name: 'Sarah & Family',
      review: 'We had our son\'s 8th birthday party here and it was perfect! The kids baking class was so much fun, and everyone went home with smiles and sweet treats.',
      rating: 5,
      avatar: '👨‍👩‍👧‍👦'
    },
    {
      id: 4,
      name: 'Jessica Chen',
      review: 'The rainbow macarons are like little pieces of art! I order them for every special occasion. Sweet Dreams Bakery never disappoints!',
      rating: 5,
      avatar: '👩'
    }
  ];

  private specialsRotationTimer: any;
  private currentSpecialIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startSpecialsRotation();
    this.setupAnimations();
  }

  // Category filtering
  setActiveCategory(category: string): void {
    this.activeCategory = category;
    
    // Update active button styling
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const target = event?.target as HTMLElement;
    if (target) {
      target.classList.add('active');
    }
  }

  // Get filtered treats based on active category
  getFilteredTreats(): SweetTreat[] {
    if (this.activeCategory === 'all') {
      return this.sweetTreats;
    }
    return this.sweetTreats.filter(treat => treat.category === this.activeCategory);
  }

  // Format price display
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  // Get star display for ratings
  getStarDisplay(rating: number): string {
    return '⭐'.repeat(rating);
  }

  // Start rotating specials banner
  private startSpecialsRotation(): void {
    const specials = [
      { emoji: '☕', text: 'Monday: Coffee & Croissant Combo $6.99' },
      { emoji: '🧁', text: 'Tuesday: Buy 6 Cupcakes, Get 2 FREE!' },
      { emoji: '🍞', text: 'Wednesday: Fresh Bread Loaves 25% Off' },
      { emoji: '🍪', text: 'Thursday: Cookie Decorating Classes $15' },
      { emoji: '🎂', text: 'Friday: Custom Cake Consultations Available' },
      { emoji: '🥧', text: 'Weekend: Fresh Fruit Tarts & Pastries' }
    ];

    this.specialsRotationTimer = setInterval(() => {
      // Hide current special
      document.querySelectorAll('.special-item').forEach(item => {
        item.classList.remove('active');
      });

      // Show next special
      setTimeout(() => {
        this.currentSpecialIndex = (this.currentSpecialIndex + 1) % specials.length;
        const currentSpecial = specials[this.currentSpecialIndex];
        
        const activeItem = document.querySelector('.special-item.active');
        if (activeItem) {
          const emoji = activeItem.querySelector('.special-emoji');
          const text = activeItem.querySelector('.special-text');
          if (emoji && text) {
            emoji.textContent = currentSpecial.emoji;
            text.textContent = currentSpecial.text;
          }
        }
        
        document.querySelectorAll('.special-item')[0].classList.add('active');
      }, 250);
    }, 4000);
  }

  // Setup animations and interactive effects
  private setupAnimations(): void {
    if (typeof window !== 'undefined') {
      // Add scroll-based animations
      window.addEventListener('scroll', this.handleScrollAnimations.bind(this));
      
      // Add click effects for treat cards
      setTimeout(() => {
        document.querySelectorAll('.treat-card').forEach(card => {
          card.addEventListener('click', this.handleTreatCardClick.bind(this));
        });
      }, 1000);
    }
  }

  // Handle scroll animations
  private handleScrollAnimations(): void {
    const elements = document.querySelectorAll('.fact-bubble, .treat-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate-in');
      }
    });
  }

  // Handle treat card interactions
  private handleTreatCardClick(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  }

  // Get treats by category for quick access
  getCakesTreats(): SweetTreat[] {
    return this.sweetTreats.filter(treat => treat.category === 'cakes');
  }

  getCupcakesTreats(): SweetTreat[] {
    return this.sweetTreats.filter(treat => treat.category === 'cupcakes');
  }

  getCookiesTreats(): SweetTreat[] {
    return this.sweetTreats.filter(treat => treat.category === 'cookies');
  }

  getPastriesTreats(): SweetTreat[] {
    return this.sweetTreats.filter(treat => treat.category === 'pastries');
  }

  // Get special treats
  getSpecialTreats(): SweetTreat[] {
    return this.sweetTreats.filter(treat => treat.isSpecial);
  }

  // Handle newsletter subscription
  onNewsletterSubmit(email: string): void {
    if (email && this.isValidEmail(email)) {
      console.log('Newsletter subscription:', email);
      alert('🎉 Welcome to our sweet family! Check your email for a special discount code!');
    } else {
      alert('Please enter a valid email address! 📧');
    }
  }

  // Validate email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add to cart functionality (placeholder)
  addToCart(treat: SweetTreat): void {
    console.log('Added to cart:', treat);
    // Show fun notification
    this.showNotification(`🎉 ${treat.name} added to your cart!`);
  }

  // Show notification (fun popup)
  private showNotification(message: string): void {
    const notification = document.createElement('div');
    notification.innerHTML = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(45deg, #4ecdc4, #45b7d1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-weight: bold;
      z-index: 10000;
      animation: slideIn 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  ngOnDestroy(): void {
    // Clean up timers and event listeners
    if (this.specialsRotationTimer) {
      clearInterval(this.specialsRotationTimer);
    }
    
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScrollAnimations.bind(this));
    }
  }
}
