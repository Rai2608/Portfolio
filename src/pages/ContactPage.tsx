import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { profileData } from '../data/profile';
import { ContactForm } from '../components/features/ContactForm';
import { Badge } from '../components/ui/Badge';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <Badge variant="emerald" size="sm">
            Get in Touch
          </Badge>
          <h1 className={styles.pageTitle}>Start a Conversation</h1>
          <p className={styles.pageSubtitle}>
            Have an open engineering role, need an architectural consultation, or want to discuss
            a project? Reach out directly using the form below or via any channel.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.contactGrid}`}>
          {/* Left Column: Direct Info Card */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.availabilityBanner}>
                <span className={styles.statusDot}></span>
                <div>
                  <h4 className={styles.availTitle}>Currently Available</h4>
                  <p className={styles.availSubtitle}>
                    Open for Senior Full Stack & Frontend roles, contract work & high-impact projects.
                  </p>
                </div>
              </div>

              <div className={styles.contactDetailsList}>
                <div className={styles.detailItem}>
                  <div className={styles.iconCircle}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className={styles.itemLabel}>Email Address</span>
                    <a href={`mailto:${profileData.email}`} className={styles.itemValue}>
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconCircle}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className={styles.itemLabel}>Phone / WhatsApp</span>
                    <span className={styles.itemValue}>{profileData.phone}</span>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconCircle}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className={styles.itemLabel}>Location</span>
                    <span className={styles.itemValue}>{profileData.location}</span>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconCircle}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className={styles.itemLabel}>Timezone & Response</span>
                    <span className={styles.itemValue}>IST (UTC +5:30) • Response within 24h</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className={styles.socialChannels}>
                <h4 className={styles.socialHeading}>Connect on Social Platforms</h4>
                <div className={styles.socialLinksGrid}>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialCardLink}
                  >
                    <GithubIcon size={20} />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialCardLink}
                  >
                    <LinkedinIcon size={20} />
                    <span>LinkedIn Network</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formCol}>
            <div className={styles.formHeader}>
              <MessageSquare size={22} className={styles.formIcon} />
              <h2 className={styles.formTitle}>Send a Direct Message</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
