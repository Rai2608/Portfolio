import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 5) {
      errs.message = 'Please write a message (at least 5 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const generateEmailContent = () => {
    const emailSubject = `Portfolio Message: ${formData.subject || 'New Inquiry'}`;
    const emailBody = `Hi Paramita,

Name: ${formData.name}
From Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent directly via Portfolio Website`;

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.email}&su=${encodedSubject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodedSubject}&body=${encodedBody}`;

    return { emailSubject, emailBody, gmailUrl, mailtoUrl };
  };

  const handleSendDirectMail = (preferredMethod: 'auto' | 'gmail' | 'defaultApp' = 'auto') => {
    if (!validate()) return;

    const { gmailUrl, mailtoUrl, emailBody } = generateEmailContent();

    // Copy formatted text to clipboard for safety
    navigator.clipboard.writeText(
      `To: ${profileData.email}\nSubject: Portfolio Message: ${formData.subject}\n\n${emailBody}`
    ).catch(() => {});

    if (preferredMethod === 'gmail') {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } else if (preferredMethod === 'defaultApp') {
      window.location.href = mailtoUrl;
    } else {
      // Auto: Try Gmail web in new tab, with mailto fallback
      const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = mailtoUrl;
      }
    }

    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendDirectMail('auto');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMessage = () => {
    const { emailBody } = generateEmailContent();
    navigator.clipboard.writeText(emailBody);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2000);
  };

  const { gmailUrl, mailtoUrl } = generateEmailContent();

  return (
    <div className={styles.wrapper}>
      {/* Quick Direct Email Banner */}
      <div className={styles.quickContactBanner}>
        <div className={styles.bannerInfo}>
          <span className={styles.bannerLabel}>Direct Recipient Email:</span>
          <span className={styles.bannerEmail}>{profileData.email}</span>
        </div>
        <button
          onClick={handleCopyEmail}
          className={styles.copyBtn}
          aria-label="Copy email address"
          type="button"
        >
          {copied ? <Check size={16} className={styles.copiedIcon} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy Email'}</span>
        </button>
      </div>

      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.successIconWrapper}>
            <CheckCircle size={40} className={styles.successIcon} />
          </div>
          <h3 className={styles.successTitle}>Email Composer Prepared!</h3>
          <p className={styles.successText}>
            Your email has been generated to send to <strong>{profileData.email}</strong>.
            Click below to send it via your preferred mail client:
          </p>

          <div className={styles.mailActionsGrid}>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gmailActionBtn}
            >
              <ExternalLink size={17} />
              <span>Send via Gmail (Web)</span>
            </a>

            <a
              href={mailtoUrl}
              className={styles.defaultMailActionBtn}
            >
              <Mail size={17} />
              <span>Send via Default Mail App</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className={styles.copyMessageActionBtn}
            >
              {messageCopied ? <Check size={16} /> : <Copy size={16} />}
              <span>{messageCopied ? 'Message Copied!' : 'Copy Full Text'}</span>
            </button>
          </div>

          <div className={styles.resetContainer}>
            <Button
              variant="ghost"
              size="md"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
            >
              Write Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Row 1: Name & Email */}
          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              />
              {errors.name && (
                <span className={styles.errorText}>
                  <AlertCircle size={13} /> {errors.name}
                </span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email Address <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. your-email@example.com"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && (
                <span className={styles.errorText}>
                  <AlertCircle size={13} /> {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject / Purpose <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Opportunity / Collaboration / General Inquiry"
              className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
            />
            {errors.subject && (
              <span className={styles.errorText}>
                <AlertCircle size={13} /> {errors.subject}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            />
            {errors.message && (
              <span className={styles.errorText}>
                <AlertCircle size={13} /> {errors.message}
              </span>
            )}
          </div>

          {/* Direct Send Buttons */}
          <div className={styles.submitActionsGroup}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<Send size={18} />}
            >
              Send Direct Email
            </Button>

            <div className={styles.alternativeButtons}>
              <button
                type="button"
                onClick={() => handleSendDirectMail('gmail')}
                className={styles.quickMethodBtn}
                title="Send directly using Gmail in a new tab"
              >
                <ExternalLink size={14} /> Open in Gmail Web
              </button>

              <button
                type="button"
                onClick={() => handleSendDirectMail('defaultApp')}
                className={styles.quickMethodBtn}
                title="Send using default desktop or mobile mail app"
              >
                <Mail size={14} /> Open in Mail App
              </button>
            </div>
          </div>

          <p className={styles.directSendHint}>
            Direct dispatch: Opens your email composer pre-filled to <strong>{profileData.email}</strong> with your message text.
          </p>
        </form>
      )}
    </div>
  );
};
