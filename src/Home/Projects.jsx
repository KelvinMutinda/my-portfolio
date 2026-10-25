import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";
import SideNav from "./Nav";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: (
      <>
        I specialize in building dynamic, scalable, and user-friendly web applications using modern frameworks and technologies. My expertise spans across <strong>Django</strong> for robust backend solutions, the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) for full-stack JavaScript development, <strong>Wordpress</strong> and <strong>PHP (Laravel)</strong> for elegant, secure, and efficient web platforms.
      </>
    ),
    meta: [
      { label: "Experience", value: "3 years" },
      { label: "Projects", value: "10+" },
      { label: "Occupation", value: "Remotely, Fulltime" },
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    description: (
      <>
        My app development expertise covers a wide spectrum of platforms and technologies, enabling us to deliver high-performance, intuitive, and scalable mobile and desktop applications. We build cross-platform solutions with <strong>React Native</strong> and <strong>Flutter</strong>, craft native Android apps with <strong>Java (Springboot)</strong> and <strong>C++</strong>, while <strong>Python</strong> helps integrate advanced features such as AI and automation.
      </>
    ),
    meta: [
      { label: "Experience", value: "1 year, 3 months" },
      { label: "Projects", value: "3" },
      { label: "Occupation", value: "Remotely, Fulltime" },
    ],
  },
  {
    icon: <FaPalette />,
    title: "Design",
    description: (
      <>
        My design approach blends creativity with precision, using industry-leading tools to craft visuals that inspire and engage. We create collaborative, modern interfaces with <strong>Figma</strong>, deliver stunning graphics and edits through <strong>Adobe Photoshop</strong>.
      </>
    ),
    meta: [],
  },
  {
    icon: <FaRobot />,
    title: "AI & Software Engineering",
    description: (
      <>
        My AI and software engineering solutions harness the power of <strong>Python</strong> alongside leading frameworks to build intelligent, scalable, and efficient systems. I use <strong>TensorFlow</strong> and <strong>PyTorch</strong> to develop advanced machine learning and deep learning models.
      </>
    ),
    meta: [],
  },
];

const Services = () => {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <section id="services" className="pg">
          {/* PAGE HEADER */}
          <header className="pg-header">
            <span className="pg-eyebrow">Services</span>
            <h1 className="pg-title">Explore My Services</h1>
            <p className="pg-sub">These are the services I professionally offer.</p>
          </header>

          {/* SERVICE CARDS (each one full width) */}
          <div className="pg-stack">
            {services.map((service) => (
              <article className="pg-card" key={service.title}>
                <div className="pg-card-head">
                  <span className="pg-icon">{service.icon}</span>
                  <h2 className="pg-card-title">{service.title}</h2>
                </div>

                <p className="pg-text">{service.description}</p>

                {service.meta.length > 0 && (
                  <div className="pg-meta">
                    {service.meta.map((m) => (
                      <span className="pg-chip" key={m.label}>
                        <b>{m.label}</b> {m.value}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="pg-cta">
            <div>
              <h2 className="pg-cta-title">Let's work together</h2>
              <p className="pg-cta-text">I am open to freelance opportunities.</p>
            </div>
            <Link to="/contact" className="pg-btn pg-btn-light">
              Contact Me <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
