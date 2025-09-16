import { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { MessageCircle, Send, X } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to D-TECH Contracting. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        { text: 'Learn about services', action: 'services' },
        { text: 'Get a quote', action: 'quote' },
        { text: 'Contact support', action: 'support' }
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleQuickReply = (action) => {
    const quickReplyText = messages[0].quickReplies.find(reply => reply.action === action)?.text || ''
    if (quickReplyText) {
      addMessage(quickReplyText, 'user')
      handleUserMessage(quickReplyText)
    }
  }

  const addMessage = (text, sender, quickReplies = null) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date(),
      quickReplies
    }
    setMessages(prev => [...prev, newMessage])
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 1000)
  }

  const handleUserMessage = (message) => {
    const lowerMessage = message.toLowerCase()
    simulateTyping()

    setTimeout(() => {
      let botResponse = ''
      let quickReplies = null

      // Service info
      if (lowerMessage.includes('services') || lowerMessage.includes('service')) {
        botResponse = "D-TECH Contracting offers comprehensive construction services including:<br>• Road construction and maintenance<br>• Civil infrastructure development<br>• Drainage systems installation<br>• Commercial & residential projects<br>• Site preparation and excavation<br><br>Would you like a free quote for your project?"
        quickReplies = [
          { text: 'Get a quote', action: 'quote' },
          { text: 'View portfolio', action: 'portfolio' },
          { text: 'Contact us', action: 'contact' }
        ]
      }
      // Get a quote
      else if (lowerMessage.includes('quote') || lowerMessage.includes('project') || lowerMessage.includes('estimate')) {
        botResponse = "I'd be happy to help you get a quote! Please provide:<br>• Your name and contact information<br>• Project type and scope<br>• Timeline requirements<br>• Any specific requirements or preferences<br><br>Our team will review your project and provide a detailed estimate within 24 hours."
        quickReplies = [
          { text: 'Fill contact form', action: 'contact' },
          { text: 'Call us directly', action: 'phone' },
          { text: 'View our work', action: 'portfolio' }
        ]
      }
      // Contact support
      else if (lowerMessage.includes('support') || lowerMessage.includes('contact') || lowerMessage.includes('help')) {
        botResponse = "Our support team is here to help! You can reach us through:<br>• Email: <a href='mailto:support@d-tech.com' class='text-primary hover:underline'>support@d-tech.com</a><br>• Phone: <a href='tel:+1234567890' class='text-primary hover:underline'>(123) 456-7890</a><br>• Contact form on our website<br><br>We typically respond within 2-4 hours during business hours."
        quickReplies = [
          { text: 'Send email', action: 'email' },
          { text: 'Call now', action: 'phone' },
          { text: 'Visit contact page', action: 'contact' }
        ]
      }
      // Portfolio/Work examples
      else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('examples')) {
        botResponse = "Check out our impressive portfolio of completed projects! We specialize in:<br>• Highway and road construction<br>• Bridge and infrastructure projects<br>• Commercial building construction<br>• Residential developments<br><br>Visit our portfolio section to see detailed project galleries and case studies."
        quickReplies = [
          { text: 'View portfolio', action: 'portfolio' },
          { text: 'Get similar quote', action: 'quote' },
          { text: 'Learn more', action: 'services' }
        ]
      }
      // Greeting
      else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
        botResponse = "Hi there! Welcome to D-TECH Contracting. I'm here to help you with any questions about our construction services, get quotes, or connect you with our team. How can I assist you today?"
        quickReplies = [
          { text: 'Learn about services', action: 'services' },
          { text: 'Get a quote', action: 'quote' },
          { text: 'Contact support', action: 'support' }
        ]
      }
      // Pricing
      else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
        botResponse = "Our pricing varies based on project scope, materials, and timeline. We offer competitive rates and transparent pricing with no hidden fees. For accurate pricing, we'd need to understand your specific project requirements.<br><br>Would you like to schedule a consultation to discuss your project and get a detailed quote?"
        quickReplies = [
          { text: 'Get detailed quote', action: 'quote' },
          { text: 'Schedule consultation', action: 'contact' },
          { text: 'View pricing guide', action: 'pricing' }
        ]
      }
      // Default fallback
      else {
        botResponse = "Thanks for your message! Our team will review your inquiry and respond shortly. In the meantime, feel free to explore our services or contact us directly for immediate assistance. 😊"
        quickReplies = [
          { text: 'Learn about services', action: 'services' },
          { text: 'Contact us', action: 'contact' },
          { text: 'Get a quote', action: 'quote' }
        ]
      }

      addMessage(botResponse, 'bot', quickReplies)
    }, 1200)
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return
    
    addMessage(inputValue, 'user')
    handleUserMessage(inputValue)
    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const handleAction = (action) => {
    switch (action) {
      case 'contact': {
        // Scroll to contact section
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
        break
      }
      case 'portfolio': {
        // Scroll to portfolio section (if exists) or services
        const portfolioSection = document.querySelector('#portfolio') || document.querySelector('#services')
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' })
        }
        break
      }
      case 'email':
        window.location.href = 'mailto:support@d-tech.com'
        break
      case 'phone':
        window.location.href = 'tel:+1234567890'
        break
      case 'pricing': {
        // Scroll to pricing section
        const pricingSection = document.querySelector('#pricing')
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' })
        }
        break
      }
      default:
        break
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-gentle-float"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw] h-96 bg-card border border-border rounded-2xl shadow-2xl backdrop-blur-xl animate-fade-in-scale">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">D-TECH Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-64 overflow-y-auto p-4 space-y-3 bg-background/50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <div 
                    dangerouslySetInnerHTML={{ __html: message.text }}
                    className="text-sm leading-relaxed"
                  />
                  {message.quickReplies && (
                    <div className="mt-3 space-y-2">
                      {message.quickReplies.map((reply, index) => (
                        <Button
                          key={index}
                          onClick={() => {
                            handleQuickReply(reply.action)
                            handleAction(reply.action)
                          }}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs h-8 bg-background/50 hover:bg-background border-border/50"
                        >
                          {reply.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-4 border-t border-border bg-background/50 rounded-b-2xl">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border-border/50 focus:border-primary"
              disabled={isTyping}
            />
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="h-10 w-10 bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
