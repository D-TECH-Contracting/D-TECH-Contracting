import { Star, Quote, MessageCircle } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'D-TECH transformed our online presence completely. Their transparent pricing and fast delivery exceeded all our expectations. The team is incredibly professional and responsive.',
      rating: 5,
      initials: 'SJ',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GrowthLab Inc.',
      role: 'Founder',
      content: 'Working with D-TECH was a game-changer for our startup. They delivered a stunning website and comprehensive IT support that helped us scale rapidly. Highly recommended!',
      rating: 5,
      initials: 'MC',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Minds Agency',
      role: 'Marketing Director',
      content: 'The cybersecurity setup D-TECH provided gave us peace of mind. Their expertise in protecting our client data and business operations is unmatched. Excellent service!',
      rating: 5,
      initials: 'ER',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Local Retail Co.',
      role: 'Owner',
      content: 'From web design to ongoing IT support, D-TECH has been our trusted partner. Their fixed pricing model helped us budget effectively while getting top-quality results.',
      rating: 5,
      initials: 'DT',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 5,
      name: 'Lisa Park',
      company: 'HealthFirst Clinic',
      role: 'Practice Manager',
      content: 'D-TECH\'s remote IT help has been invaluable for our medical practice. Quick response times and expert solutions keep our systems running smoothly every day.',
      rating: 5,
      initials: 'LP',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'Innovation Hub',
      role: 'CTO',
      content: 'The graphic design work D-TECH delivered elevated our brand significantly. Their creative team understood our vision perfectly and brought it to life beautifully.',
      rating: 5,
      initials: 'JW',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24/7', label: 'Support Available' }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="apple-section bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Success Stories</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with D-TECH and the results we've delivered together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="apple-card apple-hover animate-fade-in-up relative"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground font-body leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-display text-sm shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-display text-lg gradient-text">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



