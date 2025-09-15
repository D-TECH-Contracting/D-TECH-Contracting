# EmailJS Setup Instructions

The contact form is now configured to send emails to `dtechcontracts45@gmail.com` using EmailJS. Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
```
From: {{from_name}} <{{from_email}}>
Company: {{company}}
Service Interested In: {{service}}

Message:
{{message}}

---
This message was sent from the D-TECH Contracting website contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in the dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   - `service_dtech_contact` → Your actual Service ID
   - `template_dtech_contact` → Your actual Template ID  
   - `YOUR_EMAILJS_PUBLIC_KEY` → Your actual Public Key

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check `dtechcontracts45@gmail.com` for the email

## Features Included
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success confirmation
- ✅ Email sent to dtechcontracts45@gmail.com
- ✅ All form data included in email

## Troubleshooting
- Make sure all EmailJS credentials are correct
- Check that the email service is properly configured
- Verify the template variables match exactly
- Check browser console for any error messages

