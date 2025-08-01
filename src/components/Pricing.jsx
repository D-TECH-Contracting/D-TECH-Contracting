import { Button } from '@/components/ui/button'
import { Check, Star, ArrowRight, DollarSign } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with professional IT support.',
      features: [
        'Basic website design (5 pages)',
        'Mobile responsive layout',
        'Basic SEO setup',
        '30 days of support',
        'Email integration',
        'Contact form setup'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$999',
      period: 'one-time',
      description: 'Comprehensive solution for growing businesses that need more advanced features.',
      features: [
        'Custom website design (10 pages)',
        'Advanced SEO optimization',
        'E-commerce integration',
        '90 days of support',
        'Analytics setup',
        'Social media integration',
        'Basic cybersecurity audit',
        'Remote IT support (5 hours)'
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: 'one-time',
      description: 'Complete IT solution for established businesses requiring full-scale support.',
      features: [
        'Premium website design (unlimited pages)',
        'Advanced cybersecurity setup',
        'Custom graphic design package',
        '6 months of support',
        'Priority support access',
        'Server setup & maintenance',
        'Staff training sessions',
        'Monthly performance reports',
        'Backup & recovery solutions'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const benefits = [
    {
      icon: '💰',
      title: 'No Surprises',
      description: 'Know exactly what you\'ll pay upfront with no hidden costs or unexpected charges.'
    },
    {
      icon: '📊',
      title: 'Budget Friendly',
      description: 'Plan your IT expenses with confidence and allocate resources effectively.'
    },
    {
      icon: '🎯',
      title: 'Value Focused',
      description: 'Get maximum value for your investment with comprehensive service packages.'
    }
  ]

  return (
    <section id="pricing" className="apple-section bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Fixed Price Packages</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            No hidden fees, no surprises. Choose the package that fits your business needs and budget. 
            All prices are fixed and transparent from day one.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`apple-card apple-hover relative animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary shadow-2xl scale-105 border-primary/30' : ''
              }`}
              style={{animationDelay: `${0.2 * index}s`}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl mb-4 gradient-text">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-display gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-lg">{plan.period}</span>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={feature} className="flex items-start gap-3 animate-fade-in-up" style={{animationDelay: `${0.1 * idx}s`}}>
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-body">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${plan.popular ? 'apple-button' : 'apple-button-secondary'}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Why Fixed Pricing Section */}
        <div className="apple-card bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border-2 border-primary/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl text-center mb-16 gradient-text">Why Choose Fixed Pricing?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center animate-fade-in-up"
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <div className="text-5xl mb-6">{benefit.icon}</div>
                  <h4 className="font-display text-xl mb-4 gradient-text">{benefit.title}</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

