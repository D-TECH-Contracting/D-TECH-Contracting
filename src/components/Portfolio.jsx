import { Button } from '@/components/ui/button'
import { ExternalLink, Clock, Briefcase } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with payment integration and inventory management for a growing retail business.',
      image: '/api/placeholder/400/300',
      status: 'completed',
      tech: ['React', 'Node.js', 'Stripe'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Secure patient management system with appointment scheduling and telemedicine capabilities.',
      image: '/api/placeholder/400/300',
      status: 'completed',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'Data Visualization',
      description: 'Real-time analytics dashboard for tracking business metrics and financial performance.',
      image: '/api/placeholder/400/300',
      status: 'completed',
      tech: ['React', 'D3.js', 'MongoDB'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      title: 'Mobile App Suite',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for customer engagement and service delivery.',
      image: '/api/placeholder/400/300',
      status: 'coming-soon',
      tech: ['React Native', 'Firebase'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 5,
      title: 'AI Integration Platform',
      category: 'Machine Learning',
      description: 'Intelligent automation system for streamlining business processes and decision making.',
      image: '/api/placeholder/400/300',
      status: 'coming-soon',
      tech: ['Python', 'TensorFlow', 'AWS'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Blockchain Solution',
      category: 'Web3 Development',
      description: 'Decentralized application for secure transactions and smart contract management.',
      image: '/api/placeholder/400/300',
      status: 'coming-soon',
      tech: ['Solidity', 'Web3.js', 'Ethereum'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const completedProjects = projects.filter(p => p.status === 'completed')
  const comingSoonProjects = projects.filter(p => p.status === 'coming-soon')

  return (
    <section id="portfolio" className="apple-section bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work & Innovation</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Explore our recent projects and see how we've helped businesses transform their digital presence 
            and achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-20">
          <h3 className="font-display text-3xl text-center mb-16 animate-fade-in-up gradient-text">Recent Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={project.id}
                className="apple-card apple-hover group animate-fade-in-up"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                {/* Project Image Placeholder */}
                <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white font-display text-lg opacity-80">Project Preview</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-accent">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-xs font-medium">Completed</span>
                    </div>
                  </div>
                  
                  <h4 className="font-display text-xl gradient-text group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="apple-button-secondary w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div>
          <h3 className="font-display text-3xl text-center mb-16 animate-fade-in-up gradient-text">Coming Soon</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProjects.map((project, index) => (
              <div
                key={project.id}
                className="apple-card apple-hover group animate-fade-in-up relative overflow-hidden"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-primary font-semibold">Coming Soon</p>
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center relative overflow-hidden opacity-60`}>
                  <div className="text-white font-display text-lg opacity-80">Project Preview</div>
                </div>

                {/* Project Info */}
                <div className="space-y-4 opacity-75">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-semibold bg-muted px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-medium">In Development</span>
                    </div>
                  </div>
                  
                  <h4 className="font-display text-xl text-muted-foreground">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                    <Clock className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center apple-card bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 animate-fade-in-up border-2 border-primary/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-3xl mb-6 gradient-text">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 font-body text-lg leading-relaxed">
              Let's bring your vision to life with our proven expertise and innovative approach. 
              Contact us today to discuss your project requirements.
            </p>
            <Button 
              className="apple-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

