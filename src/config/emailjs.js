// EmailJS Configuration
// The contact form works immediately with a mailto fallback
// To enable EmailJS, follow the setup instructions below

export const EMAILJS_CONFIG = {
  serviceId: 'service_contact_form', // Replace with your service ID
  templateId: 'template_contact_form', // Replace with your template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Replace with your public key
  recipientEmail: 'dtechcontracts45@gmail.com'
}

// QUICK SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for free account
// 3. Create a new service (Gmail recommended)
// 4. Create a new template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email  
//    - {{company}} - company name
//    - {{service}} - service interested in
//    - {{message}} - message content
// 5. Copy your Service ID, Template ID, and Public Key
// 6. Replace the values above

// Email template should look like this:
/*
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>
Company: {{company}}
Service Interested In: {{service}}

Message:
{{message}}

---
This message was sent from the D-TECH Contracting website contact form.
*/