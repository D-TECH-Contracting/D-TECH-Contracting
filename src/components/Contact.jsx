import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, CheckCircle, Rocket, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/config/emailjs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    console.log('Input change:', e.target.name, e.target.value) // Debug log
    console.log('Event type:', e.type) // Debug log
    console.log('Target:', e.target) // Debug log
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Check if EmailJS is properly configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
      // Fallback: Use mailto link
      const subject = `Contact Form Submission from ${formData.name}`
      const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}`
      
      const mailtoLink = `mailto:${EMAILJS_CONFIG.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink)
      
      // Show success message
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
      
      setTimeout(() => setIsSubmitted(false), 5000)
      setIsLoading(false)
      return
    }
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message,
        to_email: EMAILJS_CONFIG.recipientEmail
      }
      
      // Send email
      await emailjs.send(
        EMAILJS_CONFIG.serviceId, 
        EMAILJS_CONFIG.templateId, 
        templateParams, 
        EMAILJS_CONFIG.publicKey
      )
      
      // Success
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'dtechcontracts45@gmail.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Nationwide Service',
      description: 'Serving all 50 states',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const services = [
    'UX Web Design',
    'Remote IT Help',
    'Cybersecurity Setup',
    'Graphic Design',
    'Custom Solution',
    'Not Sure Yet'
  ]

  return (
    <section id="contact" className="apple-section bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up glass">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
          </div>
          
          <h2 className="font-display text-responsive-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Let's Build Something Now
          </h2>
          <p className="text-xl text-muted-foreground font-body animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Ready to transform your business with professional IT solutions? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="apple-card">
              <h3 className="font-display text-2xl mb-8 gradient-text">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in-scale">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h4 className="font-display text-xl mb-4 gradient-text">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground font-body">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" style={{ pointerEvents: 'auto' }}>
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="apple-focus"
                        placeholder="John Doe"
                        autoComplete="name"
                        style={{ pointerEvents: 'auto', cursor: 'text' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="apple-focus"
                        placeholder="john@company.com"
                        autoComplete="email"
                        style={{ pointerEvents: 'auto', cursor: 'text' }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="apple-focus"
                        placeholder="Your Company"
                        autoComplete="organization"
                        style={{ pointerEvents: 'auto', cursor: 'text' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground apple-focus"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="apple-focus min-h-32"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      style={{ pointerEvents: 'auto', cursor: 'text' }}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      type="button" 
                      className="apple-button-secondary w-full" 
                      onClick={() => {
                        console.log('Test button clicked')
                        console.log('Current form data:', formData)
                        setFormData(prev => ({ ...prev, name: 'Test Name' }))
                      }}
                    >
                      Test Form (Click to test)
                    </Button>
                    <Button 
                      type="submit" 
                      className="apple-button w-full group" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.title}
                    className="apple-card apple-hover animate-fade-in-up"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg mb-2 gradient-text">{info.title}</h4>
                      <p className="text-foreground font-semibold mb-1">{info.content}</p>
                      <p className="text-muted-foreground font-body text-sm">{info.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Response Promise */}
            <div className="apple-card bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border-2 border-primary/20">
              <div className="text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h4 className="font-display text-xl mb-4 gradient-text">Quick Response Guarantee</h4>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  call us directly for immediate assistance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-display gradient-text">24hrs</div>
                    <div className="text-sm text-muted-foreground">Email Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display gradient-text">15min</div>
                    <div className="text-sm text-muted-foreground">Phone Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="apple-card">
              <h4 className="font-display text-lg mb-4 gradient-text">Business Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">Emergency Support Only</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between">
                    <span className="text-accent font-medium">24/7 Emergency Support</span>
                    <span className="text-accent font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



