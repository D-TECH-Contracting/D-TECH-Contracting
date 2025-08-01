import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="apple-section hero-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl floating-element"></div>
      </div>
      
      <div className="apple-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 50+ businesses nationwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-responsive-xl mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-foreground">Clean IT Solutions.</span>
            <br />
            <span className="gradient-text">Fixed Prices.</span>
            <br />
            <span className="text-accent">Delivered Fast.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-body max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Professional IT services for small businesses and startups across the U.S. 
            <br className="hidden md:block" />
            No hidden fees, no delays, just results that drive your business forward.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-3 text-accent">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-3 text-accent">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-accent">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Expert Team</span>
            </div>
            <div className="flex items-center gap-3 text-accent">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">U.S. Based</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="apple-button group px-10 py-5 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Something Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="apple-button-secondary px-10 py-5 text-lg font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="text-center apple-card glass">
            <div className="text-4xl md:text-5xl font-display gradient-text mb-3">50+</div>
            <div className="text-muted-foreground font-body font-medium">Projects Completed</div>
          </div>
          <div className="text-center apple-card glass">
            <div className="text-4xl md:text-5xl font-display gradient-text mb-3">100%</div>
            <div className="text-muted-foreground font-body font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center apple-card glass">
            <div className="text-4xl md:text-5xl font-display gradient-text mb-3">24/7</div>
            <div className="text-muted-foreground font-body font-medium">Support Available</div>
          </div>
          <div className="text-center apple-card glass">
            <div className="text-4xl md:text-5xl font-display gradient-text mb-3">5★</div>
            <div className="text-muted-foreground font-body font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

