import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'UX Web Design', href: '#services' },
      { name: 'Remote IT Help', href: '#services' },
      { name: 'Cybersecurity Setup', href: '#services' },
      { name: 'Graphic Design', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#contact' },
      { name: '24/7 Support', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/50">
      <div className="apple-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                  className="text-4xl font-display font-black gradient-text hover:scale-105 transition-transform duration-300 inline-block"
                >
                  D-TECH
                </a>
                <p className="text-muted-foreground font-body mt-4 leading-relaxed">
                  Professional IT services for small businesses and startups across the U.S. 
                  Clean solutions, fixed prices, delivered fast.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-body">hello@d-tech.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-body">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-body">Nationwide Service, USA</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-display text-lg mb-6 gradient-text">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-display text-lg mb-6 gradient-text">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-display text-lg mb-6 gradient-text">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-border/50">
          <div className="apple-card bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border-2 border-primary/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-display text-2xl mb-4 gradient-text">Stay Updated</h3>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Get the latest updates on technology trends, business tips, and D-TECH news 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground apple-focus"
                />
                <button className="apple-button px-8 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground font-body text-sm text-center md:text-left">
              <p className="flex items-center gap-2">
                © {currentYear} D-TECH. Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                for small businesses everywhere.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center pb-8">
          <button
            onClick={() => scrollToSection('#home')}
            className="apple-button-secondary px-6 py-3 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

