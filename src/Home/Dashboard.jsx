import { Link } from "react-router-dom";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaTools,
  FaMobileAlt,
  FaMicrochip,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import SideNav from "./Nav";

const skills = [
  { icon: <FaCode />, label: "Frontend", items: ["React", "Vue", "Angular", "TailwindCSS"] },
  { icon: <FaServer />, label: "Backend", items: ["Node.js", "Express", "Laravel", "PHP", "Springboot"] },
  { icon: <FaDatabase />, label: "Databases", items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"] },
  { icon: <FaRobot />, label: "AI/ML", items: ["Python", "TensorFlow", "NLP"] },
  { icon: <FaTools />, label: "Tools", items: ["Git", "Figma", "WordPress"] },
  { icon: <FaMobileAlt />, label: "App development", items: ["React Native", "Flutter (Dart)"] },
  { icon: <FaMicrochip />, label: "High performance Applications", items: ["Java", "C++"] },
];

const services = [
  "Custom Web Development",
  "AI Integration & Automation",
  "UI/UX Design",
  "Deployment & Hosting",
  "Mobile App Development (CrossPlatform and Android)",
  "Software Design and Architecture",
];

function Dashboard() {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <div className="pg">
          {/* PAGE HEADER */}
          <header className="pg-header">
            <span className="pg-eyebrow">Overview</span>
            <h1 className="pg-title">My Dashboard</h1>
            <p className="pg-sub">
              Welcome to my professional dashboard. Built with <strong>React.js</strong> and <strong>Tailwind CSS</strong>, deployed on <strong>Vercel</strong>.
            </p>
          </header>

          {/* QUICK STATS */}
          <div className="pg-stats">
            <div className="pg-stat">
              <span className="pg-stat-value">3+</span>
              <span className="pg-stat-label">Years of experience</span>
            </div>
            <div className="pg-stat">
              <span className="pg-stat-value">10+</span>
              <span className="pg-stat-label">Projects delivered</span>
            </div>
            <div className="pg-stat">
              <span className="pg-stat-value">Remote</span>
              <span className="pg-stat-label">Full-time</span>
            </div>
          </div>

          <div className="pg-stack">
            {/* SKILLS */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaCode /></span>
                <h2 className="pg-card-title">Skills Overview</h2>
              </div>

              <div className="pg-rows">
                {skills.map((group) => (
                  <div className="pg-row" key={group.label}>
                    <div className="pg-row-label">
                      {group.icon}
                      <span>{group.label}</span>
                    </div>
                    <div className="pg-tags">
                      {group.items.map((item) => (
                        <span className="pg-tag" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICES */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaCheckCircle /></span>
                <h2 className="pg-card-title">Services I Provide</h2>
              </div>

              <div className="pg-grid">
                {services.map((service) => (
                  <div className="pg-item" key={service}>
                    <FaCheckCircle />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <div className="pg-actions">
                <Link to="/contact" className="pg-btn">
                  Contact Me <FaArrowRight />
                </Link>
              </div>
            </section>

            {/* RESUME */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaArrowRight /></span>
                <h2 className="pg-card-title">Resume Snapshot</h2>
              </div>

              <p className="pg-text">
                3+ years of experience in fullstack engineering and AI development. Skilled in building scalable, secure, and user-friendly platforms.
              </p>

              <div className="pg-actions">
                <Link to="/Resume" className="pg-btn pg-btn-outline">
                  View Full Resume <FaArrowRight />
                </Link>
              </div>
            </section>

            {/* CONTACT */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaEnvelope /></span>
                <h2 className="pg-card-title">Contact Information</h2>
              </div>

              <div className="pg-contact">
                <div className="pg-contact-item">
                  <FaEnvelope />
                  <div>
                    <span className="pg-contact-label">Email</span>
                    <a className="pg-link" href="mailto:mwendwamutinda24@gmail.com">
                      mwendwamutinda24@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pg-contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <span className="pg-contact-label">Location</span>
                    <span className="pg-contact-value">Mombasa, Kenya</span>
                  </div>
                </div>

                <div className="pg-contact-item">
                  <FaLinkedin />
                  <div>
                    <span className="pg-contact-label">LinkedIn</span>
                    <a
                      className="pg-link"
                      href="https://www.linkedin.com/in/kelvin-mwendwa-0b92063a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/kelvin-mwendwa-0b92063a
                    </a>
                  </div>
                </div>

                <div className="pg-contact-item">
                  <FaGithub />
                  <div>
                    <span className="pg-contact-label">GitHub</span>
                    <a
                      className="pg-link"
                      href="https://github.com/mwendwamutinda24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/mwendwamutinda24
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
