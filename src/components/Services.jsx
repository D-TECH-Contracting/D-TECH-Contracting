import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Monitor, Headphones, Shield, Palette, ArrowRight, Zap } from 'lucide-react'

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 'ux-web-design',
      icon: Monitor,
      title: 'UX Web Design',
      description: 'Modern, responsive websites that convert visitors into customers. Built with the latest technologies and best practices for maximum impact.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      stats: '200% avg. conversion increase'
    },
    {
      id: 'remote-it-help',
      icon: Headphones,
      title: 'Remote IT Help',
      description: 'Expert technical support when you need it most. Quick resolution of IT issues to keep your business running smoothly 24/7.',
      features: ['24/7 Support', 'Remote Access', 'Quick Response', 'Expert Technicians'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      stats: '15min avg. response time'
    },
    {
      id: 'cybersecurity-setup',
      icon: Shield,
      title: 'Cybersecurity Setup',
      description: 'Protect your business from cyber threats with comprehensive security solutions tailored to your specific industry needs.',
      features: ['Threat Assessment', 'Security Protocols', 'Data Protection', 'Compliance'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      stats: '99.9% threat prevention rate'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional visual identity and marketing materials that make your brand stand out from the competition and drive engagement.',
      features: ['Brand Identity', 'Marketing Materials', 'Digital Assets', 'Print Design'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      stats: '80% brand recall increase'
    }
  ]

  return (
    <section id="services" className="apple-section bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comprehensive IT Solutions</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Comprehensive IT solutions designed to help your business grow and succeed in the digital world. 
            From web design to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="apple-card apple-hover group cursor-pointer animate-fade-in-up"
                style={{animationDelay: `${0.2 * index}s`}}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${service.bgColor} text-foreground/80`}>
                    {service.stats}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="font-display text-2xl mb-4 text-foreground group-hover:gradient-text transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={feature} 
                      className="text-sm text-muted-foreground font-medium flex items-center gap-2 animate-fade-in-up"
                      style={{animationDelay: `${0.1 * idx}s`}}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="outline" 
                  className="apple-button-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 w-full"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center apple-card bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 animate-fade-in-up border-2 border-primary/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-3xl mb-6 gradient-text">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-8 font-body text-lg leading-relaxed">
              Let's discuss how we can help accelerate your growth with our comprehensive IT solutions. 
              Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="apple-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                className="apple-button-secondary"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

