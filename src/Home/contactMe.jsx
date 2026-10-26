import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import SideNav from "./Nav";

const EMAIL = "mwendwamutinda24@gmail.com";

const socials = [
  { icon: <FaGithub />, name: "GitHub", handle: "mwendwamutinda24", href: "https://github.com/KelvinMutinda" },
  { icon: <FaLinkedin />, name: "LinkedIn", handle: "kelvin-mwendwa", href: "https://www.linkedin.com/in/kelvin-mutinda-0b92063ab/" },
  { icon: <FaInstagram />, name: "Instagram", handle: "@kelvinsoftwareengineer", href: "https://www.instagram.com/kelvinsoftwareengineer/" },
  { icon: <FaFacebook />, name: "Facebook", handle: "Kelvin Mutinda", href: "https://www.facebook.com/kingcorbin.junior.9" },
];

const ContactMe = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = `Portfolio message from ${name || email}`;
    const body = `${message}\n\n— ${name} (${email})`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <div className="pg">
          {/* PAGE HEADER */}
          <header className="pg-header">
            <span className="pg-eyebrow">Contact</span>
            <h1 className="pg-title">Get in touch</h1>
            <p className="pg-sub">
              Need answers to your questions on my work, or have a project in mind? Send a message and I'll get back to you.
            </p>
          </header>

          <div className="ct-grid">
            {/* LEFT: details + socials */}
            <div className="ct-side">
              <section className="pg-card">
                <div className="ct-avail">
                  <span className="ct-dot" /> Open to freelance work
                </div>

                <div className="ct-info">
                  <div className="ct-info-item">
                    <span className="pg-icon"><FaEnvelope /></span>
                    <div>
                      <span className="ct-label">Email</span>
                      <a className="ct-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                  </div>

                  <div className="ct-info-item">
                    <span className="pg-icon"><FaMapMarkerAlt /></span>
                    <div>
                      <span className="ct-label">Location</span>
                      <span className="ct-value">Mombasa, Kenya · Working remotely</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pg-card">
                <h2 className="pg-card-title ct-social-title">Find me on social media</h2>
                <div className="ct-social">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      className="ct-social-link"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ct-social-icon">{s.icon}</span>
                      <span className="ct-social-text">
                        <b>{s.name}</b>
                        <small>{s.handle}</small>
                      </span>
                      <FaArrowRight className="ct-social-arrow" />
                    </a>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT: form */}
            <section className="pg-card ct-form-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaPaperPlane /></span>
                <h2 className="pg-card-title">Send me a message</h2>
              </div>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Name</label>
                    <input id="ct-name" className="ct-input" type="text" name="name" placeholder="Your name" required />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-email">Email</label>
                    <input id="ct-email" className="ct-input" type="email" name="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-message">Message</label>
                  <textarea
                    id="ct-message"
                    className="ct-input ct-textarea"
                    name="message"
                    placeholder="Tell me about your project or question..."
                    required
                  />
                </div>

                <button className="ct-submit" type="submit">
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>

                <p className="ct-note" role="status">
                  {status || "This opens your email app with the message filled in."}
                </p>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactMe;
