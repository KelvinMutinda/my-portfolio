import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMicrochip,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaExternalLinkAlt,
  FaPuzzlePiece,
  FaLightbulb,
  FaSitemap,
} from "react-icons/fa";
import SideNav from "./Nav";
import photo from "../assets/image3.JPG";

const RESUME_URL = "/Kelvin%20Mutinda%20(2).pdf"; // keep this file inside /public
const EMAIL = "mwendwamutinda24@gmail.com";

const expertise = [
  {
    icon: <FaLaptopCode />,
    title: "Software Engineering",
    text: "Designing and building scalable, maintainable systems, from architecture and databases to deployment and hosting.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Cross-platform apps with React Native and Flutter, native Android with Java (Springboot) and C++, with Python for AI and automation features.",
  },
  {
    icon: <FaPalette />,
    title: "Web Design & Development",
    text: "Responsive, user-friendly web platforms with the MERN stack, Django, WordPress and PHP (Laravel), with interfaces designed in Figma.",
  },
  {
    icon: <FaRobot />,
    title: "AI Engineering",
    text: "Intelligent systems and machine learning models built with Python, TensorFlow and PyTorch, plus AI integration and automation.",
  },
];

const skills = [
  { icon: <FaCode />, label: "Frontend", items: ["React", "Vue", "Angular", "TailwindCSS", "Next.js"] },
  { icon: <FaServer />, label: "Backend", items: ["Node.js", "Express", "Django", "Laravel", "PHP", "Springboot"] },
  { icon: <FaDatabase />, label: "Databases", items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"] },
  { icon: <FaRobot />, label: "AI/ML", items: ["Python", "TensorFlow", "PyTorch", "NLP"] },
  { icon: <FaMobileAlt />, label: "App development", items: ["React Native", "Flutter (Dart)"] },
  { icon: <FaMicrochip />, label: "High performance", items: ["Java", "C++"] },
  { icon: <FaTools />, label: "Tools & design", items: ["Git", "Figma", "Adobe Photoshop", "WordPress", "Vercel"] },
];

const work = [
  {
    title: "Trialbal",
    tag: "EdTech · FinTech",
    href: "https://trialbal-two.vercel.app/",
    text: "School financial management system that builds trial balances and IPSAS-compliant statements, with Excel upload and Word report generation.",
  },
  {
    title: "FemScan AI",
    tag: "AI · Healthcare",
    href: "https://femscan.streamlit.app/",
    text: "AI-powered screening tool that supports early detection of cervical and breast cancer with instant risk assessments.",
  },
  {
    title: "Presidential Awards Portal",
    tag: "Full Stack",
    href: "https://presidential-awards.vercel.app/",
    text: "Platform for managing and showcasing award nominations, with secure admin controls and real-time status updates.",
  },
  {
    title: "Stephen Kanja School Portal",
    tag: "EdTech",
    href: "https://stephenkanjaportal.infinityfreeapp.com/",
    text: "PHP school portal for fee payment, academic records and learner results, with authentication and progress tracking.",
  },
  {
    title: "US Federal Aid Portal",
    tag: "MERN · FinTech",
    href: "https://www.usfederalaid.com/",
    text: "Secure platform for student financial aid applications, eligibility tracking and award processing.",
  },
  {
    title: "Ziggy Match Predictions",
    tag: "MERN Stack",
    href: "https://predictionsite-gr8r.vercel.app/",
    text: "Full-stack prediction platform with secure data handling and real-time updates for admins and users.",
  },
];

const principles = [
  {
    icon: <FaPuzzlePiece />,
    title: "Problem solving",
    text: "Structured solutions that break complex issues into manageable steps and deliver practical outcomes.",
  },
  {
    icon: <FaLightbulb />,
    title: "Critical thinking",
    text: "Clear, logical evaluation of information, questioning assumptions and deciding on evidence.",
  },
  {
    icon: <FaSitemap />,
    title: "System analysis",
    text: "Understanding how components interact and designing scalable solutions that fit long-term goals.",
  },
];

const About = () => {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <div className="pg">
          {/* HERO */}
          <header className="ab-hero">
            <img className="ab-photo" src={photo} alt="Kelvin Mutinda" />
            <div className="ab-hero-text">
              <span className="pg-eyebrow">About me</span>
              <h1 className="pg-title">Kelvin Mutinda</h1>
              <p className="ab-role">AI | Full-Stack Engineer</p>
              <p className="pg-sub">An insightful glimpse on who I am and what I do.</p>

              <div className="ab-chips">
                <span className="pg-chip ab-chip"><FaMapMarkerAlt /> Mombasa, Kenya</span>
                <span className="pg-chip ab-chip"><FaBriefcase /> Self-employed · Remote</span>
                <span className="pg-chip ab-chip"><FaGraduationCap /> Computer Science student</span>
              </div>

              <div className="ab-actions">
                <a className="pg-btn" href={RESUME_URL} target="_blank" rel="noreferrer">
                  <FaDownload /> Resume
                </a>
                <Link to="/contact" className="pg-btn pg-btn-outline">
                  Contact Me <FaArrowRight />
                </Link>
              </div>
            </div>
          </header>

          {/* STATS */}
          <div className="pg-stats ab-stats">
            <div className="pg-stat">
              <span className="pg-stat-value">3+</span>
              <span className="pg-stat-label">Years of experience</span>
            </div>
            <div className="pg-stat">
              <span className="pg-stat-value">10+</span>
              <span className="pg-stat-label">Projects delivered</span>
            </div>
            <div className="pg-stat">
              <span className="pg-stat-value">4</span>
              <span className="pg-stat-label">Core disciplines</span>
            </div>
          </div>

          <div className="pg-stack">
            {/* SUMMARY */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaBriefcase /></span>
                <h2 className="pg-card-title">Professional summary</h2>
              </div>
              <p className="pg-text">
                I am a self-employed <strong>Full-Stack Engineer</strong> with over 3 years of hands-on experience
                in the tech industry. My journey has allowed me to collaborate with various companies and
                organizations, where I honed my skills and contributed to impactful projects across multiple domains.
              </p>
              <p className="pg-text ab-gap">
                My expertise spans <strong>Software Engineering</strong>, <strong>App Development</strong>,{" "}
                <strong>Web Design &amp; Development</strong>, and <strong>AI Engineering</strong>. I specialize in
                building scalable applications, crafting intuitive user interfaces, and leveraging modern frameworks
                to deliver solutions that balance creativity with technical precision.
              </p>
              <p className="pg-text ab-gap">
                Beyond technical execution, I am deeply passionate about solving complex problems in society through
                technology. I thrive on designing systems that are not only functional but also sustainable, ensuring
                they can adapt to future needs. My experience working with diverse teams has strengthened my ability
                to merge innovation with collaboration, driving projects from concept to completion.
              </p>
              <p className="pg-text ab-gap">
                Currently, as a self-employed engineer, I continue to push boundaries by exploring emerging
                technologies, refining my craft, and delivering solutions that empower businesses and communities.
                My dedication lies in creating meaningful digital experiences that leave a lasting impact.
              </p>
            </section>

            {/* EXPERTISE */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaLaptopCode /></span>
                <h2 className="pg-card-title">Areas of expertise</h2>
              </div>
              <div className="ab-grid">
                {expertise.map((e) => (
                  <div className="ab-tile" key={e.title}>
                    <span className="ab-tile-icon">{e.icon}</span>
                    <h3 className="ab-tile-title">{e.title}</h3>
                    <p className="ab-tile-text">{e.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaCode /></span>
                <h2 className="pg-card-title">Technical skills</h2>
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

            {/* SELECTED WORK */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaBriefcase /></span>
                <h2 className="pg-card-title">Selected work</h2>
              </div>
              <div className="ab-work">
                {work.map((w) => (
                  <a
                    className="ab-work-item"
                    key={w.title}
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="ab-work-main">
                      <div className="ab-work-top">
                        <h3 className="ab-work-title">{w.title}</h3>
                        <span className="pg-chip ab-work-tag">{w.tag}</span>
                      </div>
                      <p className="ab-work-text">{w.text}</p>
                    </div>
                    <FaExternalLinkAlt className="ab-work-arrow" />
                  </a>
                ))}
              </div>
              <div className="pg-actions">
                <Link to="/my-Projects" className="pg-btn pg-btn-outline">
                  View all projects <FaArrowRight />
                </Link>
              </div>
            </section>

            {/* BACKGROUND */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaGraduationCap /></span>
                <h2 className="pg-card-title">Background &amp; details</h2>
              </div>
              <dl className="ab-facts">
                <div className="ab-fact">
                  <dt>Role</dt>
                  <dd>Self-employed Full-Stack &amp; AI Engineer</dd>
                </div>
                <div className="ab-fact">
                  <dt>Experience</dt>
                  <dd>3+ years in the tech industry</dd>
                </div>
                <div className="ab-fact">
                  <dt>Education</dt>
                  <dd>Computer Science, fourth-year student</dd>
                </div>
                <div className="ab-fact">
                  <dt>Location</dt>
                  <dd>Mombasa, Kenya</dd>
                </div>
                <div className="ab-fact">
                  <dt>Work mode</dt>
                  <dd>Remote, full-time</dd>
                </div>
                <div className="ab-fact">
                  <dt>Availability</dt>
                  <dd>Open to freelance opportunities</dd>
                </div>
                <div className="ab-fact">
                  <dt>Email</dt>
                  <dd><a className="pg-link" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                </div>
              </dl>
            </section>

            {/* PRINCIPLES */}
            <section className="pg-card">
              <div className="pg-card-head">
                <span className="pg-icon"><FaLightbulb /></span>
                <h2 className="pg-card-title">How I work</h2>
              </div>
              <div className="ab-grid ab-grid-3">
                {principles.map((p) => (
                  <div className="ab-tile" key={p.title}>
                    <span className="ab-tile-icon">{p.icon}</span>
                    <h3 className="ab-tile-title">{p.title}</h3>
                    <p className="ab-tile-text">{p.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="pg-cta">
            <div>
              <h2 className="pg-cta-title">Have a project in mind?</h2>
              <p className="pg-cta-text">I am open to freelance opportunities. Let's talk.</p>
            </div>
            <Link to="/contact" className="pg-btn pg-btn-light">
              <FaEnvelope /> Contact Me
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
