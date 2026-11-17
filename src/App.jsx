import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Music,
  Phone,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  X
} from 'lucide-react'
import logo from './assets/logo.png'
import './App.css'

// ─── SERVICES (SIMPLE & CLEAR) ──────────────────────────────────────────
const services = [
  {
    number: '01',
    title: 'Wedding & Event Planning',
    text: 'Complete planning for Hindu, Christian, and Muslim weddings, engagements, receptions, and family parties.',
    icon: Sparkles
  },
  {
    number: '02',
    title: 'Catering & Kerala Sadhya',
    text: 'Authentic Ela Sadhya served on banana leaf, Malabar Dum Biryani, non-veg banquets, and live food counters.',
    icon: UtensilsCrossed
  },
  {
    number: '03',
    title: 'Stage & Floral Decoration',
    text: 'Traditional and modern stage backdrops, floral mandapam, entrance arch, walkway styling, and lighting.',
    icon: Flower2
  },
  {
    number: '04',
    title: 'Sound, Light & Entertainment',
    text: 'Quality sound systems, ambient stage lights, DJ setup, traditional Chenda Melam, and photo/video coverage.',
    icon: Music
  }
]

// ─── KERALA FOOD MENU OPTIONS ───────────────────────────────────────────
const menuCategories = [
  {
    id: 'sadhya',
    label: 'Kerala Ela Sadhya',
    title: 'Traditional Kerala Sadhya (Banana Leaf Feast)',
    description: 'Served hot on fresh banana leaf with over 20 traditional vegetarian dishes and sweet payasam.',
    items: [
      'Parippu Curry & Pure Ghee with Crispy Pappadam',
      'Traditional Kerala Sambar & Moru Curry (Pulissery)',
      'Aviyal, Thoran, Olan & Pachadi',
      'Inji Puli (Ginger Curry), Lemon Pickle & Mango Pickle',
      'Banana Chips (Upperi) & Sweet Sharkara Varatti',
      'Palada Pradhaman & Parippu Payasam'
    ]
  },
  {
    id: 'biryani',
    label: 'Biryani & Non-Veg',
    title: 'Malabar Biryani & Non-Veg Feasts',
    description: 'Rich, flavorful Malabar dishes cooked with authentic Kerala spices and fragrant kaima rice.',
    items: [
      'Thalassery / Malabar Chicken Dum Biryani with Raitha, Date Pickle & Pappadam',
      'Mutton Dum Biryani (Slow-cooked Dum preparation)',
      'Kerala Soft Porotta & Spicy Beef Roast / Beef Fry',
      'Appam / Idiyappam with Chicken Stew or Chicken Kurma',
      'Karimeen Pollichathu & Crispy Kerala Fish Fry',
      'Chicken 65 & Chilly Chicken Starters'
    ]
  },
  {
    id: 'counters',
    label: 'Live Stalls & Snacks',
    title: 'Live Counters, Evening Snacks & Drinks',
    description: 'Perfect for reception evenings, betrothals, and party gatherings.',
    items: [
      'Welcome Drinks: Fresh Mint Lime, Tender Coconut Cooler, Blue Curacao',
      'Live Tea & Filter Coffee Stall with Kerala Pazham Pori & Parippuvada',
      'Hot Chicken / Meat Cutlets & Vegetable Samosas',
      'Live Dosa Counter with Chutneys & Sambar',
      'Ice Cream Stalls with Fresh Fruit Salad & Gulab Jamun',
      'Custom Wedding Cake & Dessert Table Setup'
    ]
  }
]

// ─── PHOTO GALLERY (REAL KERALA EVENTS) ─────────────────────────────────
const gallery = [
  {
    id: 1,
    category: 'weddings',
    categoryName: 'Weddings',
    title: 'Grand Kerala Wedding Stage & Reception',
    venue: 'Kochi, Kerala',
    guests: '500+ Guests',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    description: 'Fresh floral stage decoration with warm chandelier lighting and traditional brass lamps for a Hindu wedding.'
  },
  {
    id: 2,
    category: 'catering',
    categoryName: 'Catering',
    title: 'Traditional Ela Sadhya Banquet',
    venue: 'Thrissur, Kerala',
    guests: '800 Guests',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85',
    description: 'Grand vegetarian wedding sadhya served hot on fresh plantain leaves with two varieties of payasam.'
  },
  {
    id: 3,
    category: 'decor',
    categoryName: 'Stage Decor',
    title: 'Evening Reception & Fairy Light Canopy',
    venue: 'Calicut, Kerala',
    guests: '400 Guests',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90',
    description: 'Open lawn wedding reception with fairy lights, elegant seating, and live Malabar food counters.'
  },
  {
    id: 4,
    category: 'decor',
    categoryName: 'Stage Decor',
    title: 'Christian Engagement Stage & Floral Backdrop',
    venue: 'Kottayam, Kerala',
    guests: '250 Guests',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85',
    description: 'Pastel floral arch with candlelit tablescape for an engagement and ring exchange ceremony.'
  },
  {
    id: 5,
    category: 'catering',
    categoryName: 'Catering',
    title: 'Malabar Dum Biryani & Buffet Dinner',
    venue: 'Kannur, Kerala',
    guests: '600 Guests',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    description: 'Full non-veg dinner buffet featuring hot Thalassery biryani, Kerala porotta, and live dessert counters.'
  },
  {
    id: 6,
    category: 'weddings',
    categoryName: 'Weddings',
    title: 'Intimate Family Gathering & Dinner',
    venue: 'Trivandrum, Kerala',
    guests: '120 Guests',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    description: 'Cozy housewarming and birthday celebration dinner with delicious home-style Kerala food.'
  }
]

// ─── CUSTOMER REVIEWS (SIMPLE KERALA TESTIMONIALS) ──────────────────────
const reviews = [
  {
    quote: 'The Sadhya and Palada Payasam were simply super! All our relatives praised the food. The stage decoration was neat, and the team handled everything on time without any tension.',
    name: 'Rahul & Sneha',
    event: 'Wedding & Sadhya',
    place: 'Kochi'
  },
  {
    quote: 'Dream Crafters managed my sister’s engagement function completely. The stage was beautiful and the Malabar Biryani was delicious. Very friendly staff and reasonable package.',
    name: 'Jithin Mathew',
    event: 'Engagement & Dinner',
    place: 'Kottayam'
  },
  {
    quote: 'We ordered catering for our housewarming ceremony. Food was delivered fresh and hot. The beef fry, appam, and chicken stew were outstanding. Highly recommended!',
    name: 'Faisal & Family',
    event: 'Housewarming Catering',
    place: 'Kozhikode'
  }
]

// ─── SIMPLE FAQS ────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'Which areas in Kerala do you provide event & catering services?',
    answer: 'We provide complete event management and catering across Kerala, including Kochi, Ernakulam, Thrissur, Kottayam, Kozhikode, Malappuram, Trivandrum, Palakkad, and nearby districts.'
  },
  {
    question: 'Can we book you only for Catering or only for Stage Decoration?',
    answer: 'Yes! You can book us for full event management, only for food catering (Sadhya or Biryani/Buffet), or only for stage decoration. We customize our service based on what you need.'
  },
  {
    question: 'How do you decide the price / package for an event?',
    answer: 'Our pricing is very simple and depends on the number of guests, menu choices, and decoration design. We provide a clear estimate with no hidden costs.'
  },
  {
    question: 'How many days in advance should we book?',
    answer: 'For weddings and major seasons, we suggest booking 1 to 3 months in advance to secure your preferred date. For small parties and housewarming events, 1 to 2 weeks notice is usually enough.'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeMenuTab, setActiveMenuTab] = useState('sadhya')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  // Booking Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    location: '',
    guests: '200 - 500 Guests',
    notes: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const filteredGallery = activeFilter === 'all'
    ? gallery
    : gallery.filter(item => item.category === activeFilter)

  const currentMenu = menuCategories.find(m => m.id === activeMenuTab) || menuCategories[0]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const generateWhatsAppLink = () => {
    const text = `Hello Dream Crafters! I would like to get a quote for an event in Kerala:
• Event Type: ${form.eventType}
• Date: ${form.date || 'To be decided'}
• Location: ${form.location || 'Kerala'}
• Expected Guests: ${form.guests}
• My Name: ${form.name || 'Customer'}
• Phone: ${form.phone || 'Contact provided'}
• Notes: ${form.notes || 'Looking forward to details'}`
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`
  }

  const nextReview = () => setReviewIndex((prev) => (prev + 1) % reviews.length)
  const prevReview = () => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  return (
    <main className="classic-atelier">
      {/* ─── SIMPLE TOP BAR ─── */}
      <div className="classic-topbar">
        <div className="topbar-container">
          <span className="topbar-text">
            ✦ DREAM CRAFTERS — WEDDINGS, EVENTS & CATERING SERVICES IN KERALA ✦
          </span>
          <a href="tel:+919876543210" className="topbar-phone">
            <Phone size={12} /> Call: +91 98765 43210
          </a>
        </div>
      </div>

      {/* ─── CLEAN HEADER ─── */}
      <header className="site-header classic-header">
        <nav className="header-nav left-nav">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#menu">Food Menu</a>
        </nav>

        <a className="brand classic-brand" href="#home" onClick={closeMenu} aria-label="Dream Crafters home">
          <img className="brand-logo" src={logo} alt="Dream Crafters — Caters & Event Makers" />
        </a>

        <div className="header-nav right-nav">
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a className="nav-cta-btn" href="#contact">
            <span>Book Event</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <nav className={menuOpen ? 'mobile-nav is-open' : 'mobile-nav'} aria-label="Mobile navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Our Services</a>
          <a href="#menu" onClick={closeMenu}>Catering Menu</a>
          <a href="#gallery" onClick={closeMenu}>Event Gallery</a>
          <a href="#reviews" onClick={closeMenu}>Client Reviews</a>
          <a href="#faq" onClick={closeMenu}>Common Questions</a>
          <a className="mobile-cta" href="#contact" onClick={closeMenu}>
            Book Your Event <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* ─── CLEAN & WARM HERO ─── */}
      <section className="hero classic-hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90"
          alt="Warm celebration lighting"
        />
        <div className="hero-wash" />

        <div className="hero-content">
          <span className="hero-eyebrow">CATERS & EVENT MAKERS • KERALA</span>

          <h1 className="hero-title">
            Making your celebrations<br />
            <em>happy & memorable.</em>
          </h1>

          <div className="hero-divider">
            <span className="line" />
            <span className="star">✦</span>
            <span className="line" />
          </div>

          <p className="hero-subtext">
            Weddings, engagements, stage decoration, and authentic Kerala catering. We take care of everything so you can celebrate peacefully with your family.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/919876543210?text=Hello%20Dream%20Crafters!%20I%20would%20like%20to%20know%20more%20about%20your%20catering%20and%20event%20services."
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare size={16} />
              <span>Talk on WhatsApp</span>
            </a>
            <a className="btn btn-translucent" href="#menu">
              <span>View Food Menu</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <ArrowDown size={15} />
        </a>
      </section>

      {/* ─── ABOUT US (SIMPLE & DIRECT) ─── */}
      <section className="story-section section-pad" id="about">
        <div className="story-container">
          <div className="story-heading">
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>
              Events made simple with<br />
              <em>great food & beautiful decor.</em>
            </h2>
            <div className="clean-gold-divider">
              <span className="line" />
              <span className="star">✦</span>
              <span className="line" />
            </div>
          </div>

          <p className="story-lead">
            Welcome to Dream Crafters! We are an event management and catering team based in Kerala. From traditional marriage ceremonies to modern reception parties, we deliver tasty food, creative stage decoration, and smooth on-time coordination within your budget.
          </p>

          <div className="story-pillars">
            <div className="pillar">
              <span className="pillar-num">01</span>
              <h4>Authentic Kerala Food</h4>
              <p>Hot, tasty Kerala Sadhya on banana leaf, flavorful Malabar Dum Biryani, and fresh party snacks prepared by experienced cooks.</p>
            </div>
            <div className="pillar">
              <span className="pillar-num">02</span>
              <h4>Beautiful Stage Decor</h4>
              <p>Eye-catching wedding stages, floral mandapams, entrance gates, and lighting to make your photos look stunning.</p>
            </div>
            <div className="pillar">
              <span className="pillar-num">03</span>
              <h4>Budget-Friendly Packages</h4>
              <p>Transparent pricing customized to your guest count with zero hidden charges. We respect your hard-earned money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR 4 SERVICES ─── */}
      <section className="services-section section-pad" id="services">
        <div className="section-header-center">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2>Our Core <em>Services.</em></h2>
          <p className="section-subtitle">
            Everything you need for your wedding or special function under one caring team.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-roman">{service.number}</span>
                  <div className="service-icon-wrap">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" className="service-link">
                  <span>Book this service</span>
                  <ArrowUpRight size={14} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      {/* ─── FOOD & CATERING MENU (KERALA SPECIALS) ─── */}
      <section className="gastronomy-section section-pad" id="menu">
        <div className="section-header-center">
          <span className="section-eyebrow">CATERING SPECIALS</span>
          <h2>Our Delicious <em>Food Menus.</em></h2>
          <p className="section-subtitle">
            Cooked with fresh ingredients and authentic spices. Custom menu options available for any guest count.
          </p>
        </div>

        <div className="tasting-card-container">
          {/* Menu Switcher Tabs */}
          <div className="tasting-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tasting-tab ${cat.id === activeMenuTab ? 'active' : ''}`}
                onClick={() => setActiveMenuTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="tasting-card">
            <div className="tasting-card-header">
              <UtensilsCrossed size={24} className="card-icon" />
              <h3 className="dish-name">{currentMenu.title}</h3>
              <p className="dish-desc">{currentMenu.description}</p>
            </div>

            <div className="menu-items-list">
              {currentMenu.items.map((item, idx) => (
                <div className="menu-item-row" key={idx}>
                  <Check size={16} className="item-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="tasting-action">
              <a
                href={`https://wa.me/919876543210?text=Hi%20Dream%20Crafters,%20I%20would%20like%20to%20get%20menu%20rates%20for%20${encodeURIComponent(currentMenu.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={15} />
                <span>Get Price for this Menu on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY (RECENT EVENTS) ─── */}
      <section className="portfolio-section section-pad" id="gallery">
        <div className="portfolio-header">
          <div>
            <span className="section-eyebrow">EVENT GALLERY</span>
            <h2>Our Recent <em>Works.</em></h2>
          </div>

          <div className="portfolio-filters">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === 'weddings' ? 'active' : ''}`}
              onClick={() => setActiveFilter('weddings')}
            >
              Weddings
            </button>
            <button
              className={`filter-btn ${activeFilter === 'catering' ? 'active' : ''}`}
              onClick={() => setActiveFilter('catering')}
            >
              Catering
            </button>
            <button
              className={`filter-btn ${activeFilter === 'decor' ? 'active' : ''}`}
              onClick={() => setActiveFilter('decor')}
            >
              Stage Decor
            </button>
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredGallery.map((item) => (
            <div
              className="portfolio-item"
              key={item.id}
              onClick={() => setLightboxItem(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <span className="item-cat">{item.categoryName}</span>
                <h4>{item.title}</h4>
                <div className="item-meta">
                  <span><MapPin size={12} /> {item.venue}</span>
                  <span><Users size={12} /> {item.guests}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US (SIMPLE & REASSURING) ─── */}
      <section className="why-us-section section-pad">
        <div className="section-header-center">
          <span className="section-eyebrow">WHY DREAM CRAFTERS</span>
          <h2>Your peace of mind is <em>our priority.</em></h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">1</div>
            <h4>Hygienic & Fresh Cooking</h4>
            <p>We use quality cooking oil, fresh vegetables, and clean preparation practices to keep your guests happy and healthy.</p>
          </div>
          <div className="why-card">
            <div className="why-num">2</div>
            <h4>On-Time Delivery</h4>
            <p>Stage decor is ready well in advance and food is served fresh and piping hot according to your ceremony schedule.</p>
          </div>
          <div className="why-card">
            <div className="why-num">3</div>
            <h4>Polite & Active Staff</h4>
            <p>Our serving boys and managers treat your guests with warm, friendly Kerala hospitality from start to finish.</p>
          </div>
          <div className="why-card">
            <div className="why-num">4</div>
            <h4>Any Event Size</h4>
            <p>Whether it is a 50-guest small family function or a 2000-guest grand wedding feast, we handle it smoothly.</p>
          </div>
        </div>
      </section>

      {/* ─── CUSTOMER REVIEWS ─── */}
      <section className="acclaim-section section-pad" id="reviews">
        <div className="acclaim-inner">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <Star size={16} key={i} fill="#c29f62" color="#c29f62" />
            ))}
          </div>

          <blockquote className="acclaim-quote">
            “{reviews[reviewIndex].quote}”
          </blockquote>

          <div className="patron-info">
            <strong>{reviews[reviewIndex].name}</strong>
            <span>{reviews[reviewIndex].event} • {reviews[reviewIndex].place}</span>
          </div>

          <div className="quote-controls">
            <button onClick={prevReview} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="dots">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === reviewIndex ? 'active' : ''}`}
                  onClick={() => setReviewIndex(i)}
                />
              ))}
            </div>
            <button onClick={nextReview} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CONTACT & BOOKING FORM ─── */}
      <section className="inquiry-section section-pad" id="contact">
        <div className="inquiry-box">
          <div className="inquiry-header">
            <span className="section-eyebrow">PLAN YOUR EVENT</span>
            <h2>Book an Event or <em>Get a Free Quote.</em></h2>
            <p>Fill out this simple form or call us directly. We will get back to you with the best rates.</p>
          </div>

          <form className="inquiry-form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Nair"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="field">
                <label>Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Event Type</label>
                <select
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                >
                  <option>Wedding & Reception</option>
                  <option>Engagement / Ring Exchange</option>
                  <option>Traditional Sadhya Catering Only</option>
                  <option>Stage & Floral Decoration Only</option>
                  <option>Birthday / Family Party</option>
                  <option>Housewarming (Pudukaykkal)</option>
                  <option>Corporate Event</option>
                </select>
              </div>

              <div className="field">
                <label>Event Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Event Location / Town in Kerala</label>
                <input
                  type="text"
                  placeholder="e.g. Kochi, Thrissur, Kottayam..."
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>

              <div className="field">
                <label>Approximate Number of Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                >
                  <option>50 - 100 Guests</option>
                  <option>100 - 250 Guests</option>
                  <option>250 - 500 Guests</option>
                  <option>500 - 1000 Guests</option>
                  <option>1000+ Guests</option>
                </select>
              </div>
            </div>

            <div className="field full-width">
              <label>Any specific food or decor requests?</label>
              <textarea
                rows={3}
                placeholder="e.g. Need Palada payasam and live dosa counter for 300 guests in Ernakulam..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-gold">
                <span>Send Booking Request</span>
                <Check size={16} />
              </button>
              <span className="or-text">or</span>
              <a
                className="btn btn-whatsapp"
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={16} />
                <span>Quick Chat on WhatsApp</span>
              </a>
            </div>
          </form>

          <div className="concierge-details">
            <a href="tel:+919876543210"><Phone size={14} /> Call: +91 98765 43210</a>
            <span className="dot-sep">·</span>
            <a href="mailto:dreamcrafters.events@gmail.com"><Mail size={14} /> dreamcrafters.events@gmail.com</a>
            <span className="dot-sep">·</span>
            <span><MapPin size={14} /> Services All Across Kerala</span>
          </div>
        </div>
      </section>

      {/* ─── COMMON QUESTIONS (FAQS) ─── */}
      <section className="faq-section section-pad" id="faq">
        <div className="section-header-center">
          <span className="section-eyebrow">COMMON QUESTIONS</span>
          <h2>Got questions? <em>We are here to help.</em></h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <div className="faq-row" key={i}>
                <button
                  className="faq-toggle"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer">
        <div className="footer-content">
          <a className="brand footer-brand" href="#home" aria-label="Dream Crafters home">
            <img className="brand-logo" src={logo} alt="Dream Crafters" />
          </a>
          <p className="footer-tagline">Dream Crafters — Caters & Event Makers</p>
          <p className="footer-service-area">
            Providing wedding planning, stage decoration, and catering services across Kochi, Thrissur, Kottayam, Kozhikode, Trivandrum, Palakkad, Kollam & all of Kerala.
          </p>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a href="#home">Back to top ↑</a>
          </div>
          <span className="footer-copy">© {new Date().getFullYear()} Dream Crafters. All rights reserved.</span>
        </div>
      </footer>

      {/* ─── LIGHTBOX MODAL ─── */}
      {lightboxItem && (
        <div className="modal-backdrop" onClick={() => setLightboxItem(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setLightboxItem(null)} aria-label="Close">
              <X size={20} />
            </button>
            <img src={lightboxItem.image} alt={lightboxItem.title} />
            <div className="lightbox-info">
              <span className="cat">{lightboxItem.categoryName}</span>
              <h3>{lightboxItem.title}</h3>
              <p>{lightboxItem.description}</p>
              <div className="lightbox-meta">
                <span><MapPin size={12} /> {lightboxItem.venue}</span>
                <span><Users size={12} /> {lightboxItem.guests}</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a
                  className="btn btn-whatsapp"
                  href={`https://wa.me/919876543210?text=Hi%20Dream%20Crafters,%20I%20saw%20this%20work%20(${encodeURIComponent(lightboxItem.title)})%20and%20would%20like%20similar%20service.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={14} />
                  <span>Inquire About Similar Setup</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── BOOKING CONFIRMATION MODAL ─── */}
      {formSubmitted && (
        <div className="modal-backdrop" onClick={() => setFormSubmitted(false)}>
          <div className="confirm-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setFormSubmitted(false)} aria-label="Close">
              <X size={20} />
            </button>
            <Flower2 size={40} className="confirm-flower" />
            <h3>Thank You, {form.name || 'Friend'}!</h3>
            <p>We received your inquiry for <strong>{form.eventType}</strong>. Our team will call or message you shortly with the best package options.</p>
            <div className="confirm-actions">
              <a
                className="btn btn-whatsapp"
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={15} />
                <span>Connect on WhatsApp Now</span>
              </a>
              <button className="btn btn-outline" onClick={() => setFormSubmitted(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
