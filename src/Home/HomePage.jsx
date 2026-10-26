import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaArrowRight,
  FaMapMarkerAlt,
  FaGlobe,
  FaPuzzlePiece,
  FaLightbulb,
  FaSitemap,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiLaravel,
  SiTailwindcss,
  SiAngular,
  SiNextdotjs,
  SiVuedotjs,
  SiFigma,
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiWordpress,
} from "react-icons/si";
import SideNav from "./Nav";

const tools = [
  { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
  { name: "ExpressJS", icon: <SiExpress color="#000000" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#68A063" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
  { name: "PHP", icon: <FaPhp color="#777BB4" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Angular", icon: <SiAngular color="#DD0031" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "Vue.js", icon: <SiVuedotjs color="#42B883" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "WordPress", icon: <SiWordpress color="#141413" /> },
];

const values = [
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    points: [
      "Approaching challenges with structured solutions.",
      "Breaking down complex issues into manageable steps.",
      "Delivering practical outcomes that create real impact.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Critical Thinking",
    points: [
      "Evaluating information with clarity and logic.",
      "Questioning assumptions to uncover deeper insights.",
      "Making decisions based on evidence and reasoning.",
    ],
  },
  {
    icon: <FaSitemap />,
    title: "System Analysis",
    points: [
      "Understanding how components interact within a system.",
      "Identifying inefficiencies and opportunities for improvement.",
      "Designing scalable solutions that align with long-term goals.",
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <div className="pg">
          {/* HERO */}
          <header className="hm-hero">
            <span className="hm-avail">
              <span className="hm-dot" /> Open to freelance work
            </span>

            <h1 className="hm-title">Hi, I am Kelvin Mutinda</h1>
            <p className="hm-role">AI | Fullstack Engineer</p>

            <div className="hm-chips">
              <span className="pg-chip hm-chip">
                <FaMapMarkerAlt /> Based in Mombasa, Kenya
              </span>
              <span className="pg-chip hm-chip">
                <FaGlobe /> Working remotely
              </span>
            </div>

            <p className="hm-lead">
              I am an experienced Software and AI engineer with 4 years experience in Web development,
              Application development, Desktop dev and AI engineering. My passion is rooted in
              solving real-world complex problems and collaborating with teams to achieve greater heights
              with scalable, user intuitive and mobile responsive software.
            </p>

            <div className="hm-actions">
              <Link to="/my-Projects" className="pg-btn">
                View My Projects <FaArrowRight />
              </Link>
              <Link to="/contact" className="pg-btn pg-btn-outline">
                Contact Me
              </Link>
            </div>
          </header>

          {/* QUICK STATS */}
          <div className="pg-stats">
            <div className="pg-stat">
              <span className="pg-stat-value">4+</span>
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
            {/* TOOLS */}
            <section className="pg-card">
              <div className="pg-card-head">
                <h2 className="pg-card-title">Tools that I use</h2>
              </div>
              <div className="hm-tools">
                {tools.map((tool) => (
                  <span className="hm-tool" key={tool.name}>
                    {tool.icon}
                    <span>{tool.name}</span>
                  </span>
                ))}
              </div>
            </section>

            {/* WHAT I DO */}
            <section className="pg-card">
              <div className="pg-card-head">
                <h2 className="pg-card-title">What I have been working on</h2>
              </div>
              <p className="pg-text">
                I assist brands, companies, institutions, startups and clients in engineering and managing
                their software and online presence for their businesses through the use of strategic
                critical thinking and problem solving.
              </p>
            </section>
          </div>

          {/* CALL TO ACTION */}
          <div className="pg-cta">
            <div>
              <h2 className="pg-cta-title">Let's work together</h2>
              <p className="pg-cta-text">
                I am open to freelance opportunities. Hit me up and let's work together.
              </p>
            </div>
            <Link to="/contact" className="pg-btn pg-btn-light">
              Contact Me <FaArrowRight />
            </Link>
          </div>

          {/* VALUES */}
          <section className="hm-values-wrap">
            <h2 className="hm-section-title">Values that I believe in</h2>
            <div className="hm-values">
              {values.map((v) => (
                <article className="pg-card hm-value" key={v.title}>
                  <span className="pg-icon">{v.icon}</span>
                  <h3 className="hm-value-title">{v.title}</h3>
                  <ul className="hm-points">
                    {v.points.map((p) => (
                      <li key={p}>
                        <FaCheckCircle />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
