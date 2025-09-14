import { Target, Zap, Users, Heart } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Krish',
      role: 'CEO',
      description: 'Visionary leader with 10+ years in tech industry, driving innovation and strategic growth.',
      image: '/D-TECH-Contracting/Images/Krishav.jpg',
      initials: 'K',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Zora',
      role: 'Marketing Director',
      description: 'Creative strategist focused on building meaningful connections between brands and customers.',
      image: '/D-TECH-Contracting/Images/Zora.jpg',
      initials: 'Z',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Aryan',
      role: 'Finance Manager',
      description: 'Financial expert ensuring transparent pricing and sustainable business growth.',
      image: '/D-TECH-Contracting/Images/Aryan.jpg',
      initials: 'A',
      color: 'from-orange-500 to-amber-500'
    },
    {
      name: 'Ayaan',
      role: 'HR & IT Specialist',
      description: 'Manages human resources and provides specialized IT support, ensuring smooth operations and employee satisfaction.',
      image: '/D-TECH-Contracting/Images/Ayaan.jpg',
      initials: 'AY',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Siddharth Parreddi',
      role: 'R&D Lead',
      description: 'Innovation driver researching cutting-edge technologies to keep D-TECH ahead of the curve.',
      image: '/D-TECH-Contracting/Images/Sid.jpg',
      initials: 'SP',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver exactly what we promise, when we promise it. Every detail matters.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Fast turnaround times without compromising on quality. Your time is valuable.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, not just a vendor. Your success is our success.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="about" className="apple-section bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story & Values</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            About D-TECH
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            We're a team of passionate IT professionals dedicated to helping small businesses and startups 
            succeed through innovative technology solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="apple-card mb-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl mb-8 gradient-text">Our Story</h3>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Founded with a simple yet powerful mission: to make professional IT services accessible to every business, 
                regardless of size. We believe that transparent pricing, fast delivery, and expert support shouldn't be 
                luxuries—they should be standard.
              </p>
              <p>
                Today, we serve small businesses and startups across the United States, helping them leverage technology 
                to grow, compete, and thrive in an increasingly digital world. Our approach combines cutting-edge solutions 
                with human-centered service.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="font-display text-3xl text-center mb-16 animate-fade-in-up gradient-text">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className="apple-card apple-hover text-center animate-fade-in-up"
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-display text-2xl mb-4 gradient-text">{value.title}</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="font-display text-3xl text-center mb-16 animate-fade-in-up gradient-text">Meet Our Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="apple-card apple-hover text-center animate-fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-3xl mx-auto mb-6 shadow-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to colored initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-display text-xl`}
                    style={{display: 'none'}}
                  >
                    {member.initials}
                  </div>
                </div>
                
                {/* Member Info */}
                <h4 className="font-display text-xl mb-2 gradient-text">{member.name}</h4>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

