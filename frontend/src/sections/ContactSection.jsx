import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare, Phone, FileText } from 'lucide-react';
import { PERSONAL_INFO, FREELANCE_SERVICES } from '../data/portfolioData';

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'General Inquiry',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    message: '',
    error: false
  });

  // Sync selectedService prop if it updates
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, message: '', error: false });

    // Client-side comprehensive validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    if (trimmedName.length < 2) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Name must be at least 2 characters long.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address (e.g. name@example.com).'
      });
      return;
    }

    if (trimmedMessage.length < 10) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Message must be at least 10 characters long to provide sufficient detail.'
      });
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          service: formData.service || 'General Inquiry',
          subject: formData.subject ? formData.subject.trim() : null,
          message: trimmedMessage
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: data.message || `Thank you, ${trimmedName}! Your inquiry has been sent to Gokul (jgokul823@gmail.com). You will receive a response shortly.`
        });
        setFormData({
          name: '',
          email: '',
          service: 'General Inquiry',
          subject: '',
          message: ''
        });
      } else {
        let errorDetail = 'Failed to send message. Please check the information and try again.';
        if (typeof data.detail === 'string') {
          errorDetail = data.detail;
        } else if (Array.isArray(data.detail)) {
          errorDetail = data.detail
            .map((err) => {
              const field = err.loc ? err.loc[err.loc.length - 1] : '';
              return field ? `${field}: ${err.msg}` : err.msg;
            })
            .join(' | ');
        }
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: errorDetail
        });
      }
    } catch (err) {
      // In case server is offline or proxy error, inform user transparently
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Network error: Unable to reach the FastAPI contact service. You can also email directly at ${PERSONAL_INFO.email}.`
      });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="section__header">
        <div className="section__pretitle">Get In Touch</div>
        <h2 className="section__title">Contact &amp; Freelance Inquiry</h2>
        <p className="section__subtitle">
          Have an upcoming project, looking for freelance web development, or want to discuss full-stack opportunities? Send a message and I'll get back to you promptly.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information & CTAs */}
        <div className="contact-info">
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <Mail size={20} />
            </div>
            <div>
              <div className="contact-info__title">Direct Email</div>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-info__value">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {PERSONAL_INFO.phone && (
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-info__title">Direct Phone</div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="contact-info__value">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          )}

          <div className="contact-info__item">
            <div className="contact-info__icon">
              <MapPin size={20} />
            </div>
            <div>
              <div className="contact-info__title">Location</div>
              <span className="contact-info__value">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          <div className="contact-info__item">
            <div className="contact-info__icon">
              <FileText size={20} />
            </div>
            <div>
              <div className="contact-info__title">Official Resume</div>
              <a
                href={PERSONAL_INFO.resumeUrl || '/assets/Gokul_J_Resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                download="Gokul_J_Resume.pdf"
                className="contact-info__value"
                style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          <div className="contact-info__item">
            <div className="contact-info__icon">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="contact-info__title">Availability</div>
              <span className="contact-info__value">
                Open for Freelance Projects &amp; Full-Stack Engagements
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--color-bg-offset)',
              border: '1px solid var(--color-border)',
              marginTop: '0.5rem'
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Why Work With Me?
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-offset)', lineHeight: 1.6 }}>
              <li>Direct developer communication with zero middlemen</li>
              <li>Production experience in React, Vite, and FastAPI</li>
              <li>Clean, maintainable code &amp; responsive UI design</li>
              <li>Transparent delivery timelines and regular updates</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.success && (
            <div className="contact-form__status contact-form__status--success">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} />
                <span>Message Received!</span>
              </div>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.875rem' }}>{status.message}</p>
            </div>
          )}

          {status.error && (
            <div className="contact-form__status contact-form__status--error">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <AlertCircle size={18} />
                <span>Notice</span>
              </div>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.875rem' }}>{status.message}</p>
            </div>
          )}

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-name">
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="contact-form__input"
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-email">
              Your Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="contact-form__input"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-service">
              Service Interested In
            </label>
            <select
              id="contact-service"
              name="service"
              className="contact-form__select"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="General Inquiry">General Inquiry / Discuss Project</option>
              {FREELANCE_SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-subject">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="contact-form__input"
              placeholder="e.g. Website development for new business"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label" htmlFor="contact-message">
              Project Details or Message *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="contact-form__textarea"
              placeholder="Tell me about your project, timeline, features, or any questions you have..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary"
            disabled={status.submitting}
            style={{ width: '100%', padding: '0.875rem' }}
          >
            {status.submitting ? (
              <>
                <Loader2 size={18} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
                Sending Message...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Inquiry to Gokul
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
