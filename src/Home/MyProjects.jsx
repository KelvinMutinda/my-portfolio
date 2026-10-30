import { useState } from "react";
import aboutImg from "../assets/About.png";
import { FaReact, FaNodeJs, FaCode, FaArrowRight } from "react-icons/fa";
import {
  SiMysql, SiLaravel, SiTailwindcss, SiNextdotjs,
  SiJavascript, SiPython, SiStreamlit,
  SiExpress, SiCloudinary, SiSupabase, SiMongodb,
  SiTensorflow, SiScikitlearn, SiPhp, SiExpo,
} from "react-icons/si";
import SideNav from "./Nav";

// Tech-stack badge metadata: icon + brand color per technology.
// Techs without an official brand icon (AJAX, Pylance) fall back to a generic code icon.
const TECH_META = {
  react: { label: "React", icon: <FaReact />, color: "#61DAFB" },
  reactnative: { label: "React Native", icon: <FaReact />, color: "#149ECA" },
  expo: { label: "Expo", icon: <SiExpo />, color: "#1B1F23" },
  nodejs: { label: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  tailwind: { label: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  javascript: { label: "JavaScript", icon: <SiJavascript />, color: "#CA9A00" },
  mysql: { label: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  laravel: { label: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  nextjs: { label: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  python: { label: "Python", icon: <SiPython />, color: "#3776AB" },
  streamlit: { label: "Streamlit", icon: <SiStreamlit />, color: "#FF4B4B" },
  express: { label: "Express", icon: <SiExpress />, color: "#4B5563" },
  cloudinary: { label: "Cloudinary", icon: <SiCloudinary />, color: "#3448C5" },
  supabase: { label: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  mern: { label: "MERN Stack", icon: <SiMongodb />, color: "#47A248" },
  tensorflow: { label: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  scikitlearn: { label: "scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
  php: { label: "PHP", icon: <SiPhp />, color: "#777BB4" },
  ajax: { label: "AJAX", icon: <FaCode />, color: "#2965F1" },
  pylance: { label: "Pylance", icon: <FaCode />, color: "#306998" },
};

const PresidentialAwardsPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Georgia, serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div>
          <div style={{ color: "#b8962e", fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>THE</div>
          <div style={{ color: "#d4af4a", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>
            Presidential Annual Awards
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <span
            style={{
              background: "transparent",
              border: "1px solid #d4af4a",
              color: "#d4af4a",
              fontSize: "7px",
              padding: "3px 7px",
              borderRadius: "4px",
              letterSpacing: "1px",
            }}
          >
            0 VOTES CAST
          </span>
          <span
            style={{
              background: "transparent",
              border: "1px solid #666",
              color: "#999",
              fontSize: "7px",
              padding: "3px 7px",
              borderRadius: "4px",
            }}
          >
            ADMIN ↗
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", padding: "8px 10px", flex: 1 }}>
        {["Mariga Strong", "Jimmy", "Brayo", "Tonny"].map((name, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #222",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "60px",
                background: i === 0 ? "#1a1a1a" : "linear-gradient(135deg, #1e2a1e 0%, #2a3a2a 100%)",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  background: "#222",
                  color: "#999",
                  fontSize: "7px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                #{i + 1}
              </div>
              <span style={{ color: "#fff", fontSize: "8px", fontWeight: "600", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
                {name}
              </span>
            </div>
            <div style={{ padding: "5px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "#d4af4a", fontSize: "10px", fontWeight: "700" }}>0</div>
                <div style={{ color: "#666", fontSize: "7px" }}>votes</div>
              </div>
              <button
                style={{
                  background: "#d4af4a",
                  color: "#000",
                  fontSize: "6px",
                  fontWeight: "700",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                }}
              >
                VOTE NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 10px 8px", display: "flex", gap: "6px" }}>
        <div
          style={{
            width: "calc(25% - 4.5px)",
            background: "#111",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #222",
          }}
        >
          <div
            style={{
              height: "60px",
              background: "linear-gradient(135deg, #1e2a1e 0%, #2a3a2a 100%)",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: "4px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "#222",
                color: "#999",
                fontSize: "7px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              #5
            </div>
            <span style={{ color: "#fff", fontSize: "8px", fontWeight: "600" }}>Bamalekei</span>
          </div>
          <div style={{ padding: "5px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#d4af4a", fontSize: "10px", fontWeight: "700" }}>0</div>
              <div style={{ color: "#666", fontSize: "7px" }}>votes</div>
            </div>
            <button
              style={{
                background: "#d4af4a",
                color: "#000",
                fontSize: "6px",
                fontWeight: "700",
                padding: "3px 6px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              VOTE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FemScanPreview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0a1f1a 0%, #0d2b22 50%, #081a14 100%)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid rgba(16,185,129,0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontSize: "12px" }}>🔬</span>
          <span style={{ color: "#6ee7b7", fontSize: "11px", fontWeight: "600" }}>FemScan AI</span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["1 · Screen", "2 · Analyse", "3 · Report"].map((label, i) => (
            <span
              key={i}
              style={{
                background: i === 0 ? "#10b981" : "rgba(16,185,129,0.15)",
                color: i === 0 ? "#fff" : "#6ee7b7",
                fontSize: "8px",
                fontWeight: "600",
                padding: "3px 8px",
                borderRadius: "20px",
                border: "1px solid " + (i === 0 ? "#10b981" : "rgba(16,185,129,0.3)"),
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#10b981",
            fontSize: "8px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          AI-POWERED WOMEN'S HEALTH
        </div>
        <div style={{ color: "#fff", fontSize: "16px", fontWeight: "800", lineHeight: "1.2", marginBottom: "4px" }}>
          Cervical Cancer Screening
        </div>
        <div style={{ color: "#10b981", fontSize: "16px", fontWeight: "800", marginBottom: "10px" }}>
          Decision Support
        </div>
        <div style={{ color: "#9ca3af", fontSize: "9px", lineHeight: "1.6", maxWidth: "220px", marginBottom: "14px" }}>
          FemScan AI combines cytology image analysis, HPV risk scoring, and endometriosis symptom
          screening into a single triage workflow.
        </div>
        <button
          style={{
            background: "transparent",
            border: "1.5px solid #10b981",
            color: "#10b981",
            fontSize: "9px",
            fontWeight: "600",
            padding: "7px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            letterSpacing: "0.3px",
          }}
        >
          Start Assessment →
        </button>
      </div>
    </div>
  );
};

// Row of technology pills, shared by the web cards and the mobile app card.
const StackPills = ({ stack }) => {
  return (
    <div className="pj-stack">
      {stack.map((techKey) => {
        const tech = TECH_META[techKey];
        if (!tech) return null;
        return (
          <span
            key={techKey}
            className="pj-pill"
            style={{
              background: tech.color + "16",
              color: tech.color,
              border: "1px solid " + tech.color + "40",
            }}
          >
            {tech.icon}
            {tech.label}
          </span>
        );
      })}
    </div>
  );
};

// A single mobile screenshot inside a phone-shaped frame.
// encodeURI makes file names containing spaces (e.g. "Kanja Mobile App.jpg") safe to use as URLs.
const PhoneFrame = ({ src, alt }) => {
  return (
    <div className="pj-phone">
      <img src={encodeURI(src)} alt={alt} loading="lazy" />
    </div>
  );
};

// One wide card for the whole mobile app: a header, then one section per screenshot.
const MobileAppCard = ({ project }) => {
  return (
    <div className="pj-card pj-app">
      <div className="pj-app-head">
        <div className="pj-head">
          <h2 className="pj-title">{project.title}</h2>
          <span
            className="pj-tag"
            style={{
              background: project.tagColor + "18",
              color: project.tagColor,
              border: "1px solid " + project.tagColor + "33",
            }}
          >
            {project.tag}
          </span>
        </div>
        <p className="pj-desc">{project.description}</p>
        <StackPills stack={project.stack} />
      </div>

      <div className="pj-app-sections">
        {project.sections.map((section, i) => (
          <div className="pj-app-section" key={section.title}>
            <div className="pj-app-stage">
              <PhoneFrame src={section.img} alt={project.title + ": " + section.title} />
            </div>
            <div className="pj-app-text">
              <span className="pj-app-step">{"SECTION 0" + (i + 1)}</span>
              <h3 className="pj-app-title">{section.title}</h3>
              <p className="pj-app-desc">{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pj-foot">
        <span>{project.sections.length} app sections</span>
      </div>
    </div>
  );
};

const FILTERS = ["All", "Web", "Full Stack", "AI", "Education & Finance", "Mobile Apps"];

// One entry per section of the app. Images live in /public. EDIT the title and description of
// each entry so they describe what that specific screenshot shows.
const mobileApp = [
  {
    img: "/Kanja Mobile App.jpg",
    title: "Role-Based Dashboard",
    description:
      "The home screen of the Kanja Portal app. After login, each user lands on a dashboard built for their role (head of institution, teacher, or student) with quick access to the features they use most.",
  },
  {
    img: "/Kanja Mobile App 4.jpg",
    title: "Upload Results",
    description:
      "Teachers select a grade, subject, and exam type, then enter marks for each learner or upload them in bulk from a CSV file. Results are sent securely to the school's backend.",
  },
  {
    img: "/FeePayment.jpg",
    title: "Fee Payment & Tracking",
    description:
      "Record fee payments and track balances per learner. Parents and administrators can see what has been paid, what is outstanding, and the payment history at a glance.",
  },
  {
    img: "/ProgressRecord.jpg",
    title: "Progress Records",
    description:
      "Students and teachers can follow academic progress across terms and exams, with performance shown against the school's grading bands so improvement is easy to spot.",
  },
];

// The mobile app is ONE project; its screenshots are the `sections` inside it.
const mobileAppProject = {
  category: "Mobile Apps",
  sections: mobileApp,
  title: "Kanja Portal Mobile App",
  tag: "Mobile · EdTech",
  tagColor: "#0D9488",
  description:
    "A role-based mobile app for Stephen Kanja Primary & Junior School with separate experiences for the head of institution, teachers, and students. It covers results upload, learner registration, fee payment and tracking, and progress records, all connected to the school's PHP backend.",
  stack: ["reactnative", "expo", "php", "mysql"],
};

const webProjects = [
  {
    href: "https://pinecreative2-mw4b.vercel.app",
    category: "Web",
    renderCustom: null,
    useImported: true,
    img: null,
    alt: "Pine Creative Project",
    title: "Pine Creative",
    tag: "Web Platform",
    tagColor: "#1DA1F2",
    description:
      "A custom static web platform for Pine Creative Company, the backbone of their services like web development, videography, and film production. Features a modern UI, full mobile responsiveness, and fast performance.",
    stack: ["nextjs", "cloudinary", "supabase", "express"],
    isNew: false,
  },
  {
    href: "https://shoevista-orcin.vercel.app/",
    category: "Web",
    renderCustom: null,
    useImported: true,
    img: "/shoeVista.jpg",
    alt: "Shoe Vista Ecomerce website",
    title: "Shoe Vista",
    tag: "Web Platform",
    tagColor: "#1DA1F2",
    description:
      " modern, fully responsive e-commerce frontend built with React and Tailwind CSS. Features a clean product catalog, dynamic routing, and a seamless shopping UI, deployed via Vercel. Designed with a focus on performance and mobile-first user experience.",
    stack: ["Reactjs", "MongoDb", "Nodejs", "express"],
    isNew: false,
  },
  {
  href: "https://idea-hub-web-one.vercel.app/",
  category: "Full Stack",
  renderCustom: null,
  useImported: false,
  img: "/IdeaHub.jpg",
  alt: "IdeaHub Platform",
  title: "IdeaHub",
  tag: "Full Stack · Marketplace",
  tagColor: "#2F45FF",
  description:
    "A full-stack platform where creators turn project ideas into income and skilled people find gigs that fit them. Users register with their skills, bio, profile picture and resume, post projects, and browse a live project feed, protected by token-based login, session expiry and server-side validation.",
  stack: ["react", "nodejs", "express", "mern"],
  isNew: true,
},
  {
    href: "https://propel-company-ai-website-zkh2.vercel.app/",
    category: "Web",
    renderCustom: null,
    useImported: false,
    img: "/Propel.png",
    alt: "Propel Company AI Project",
    title: "Propel Company AI",
    tag: "Enterprise MVP",
    tagColor: "#7C3AED",
    description:
      "An enterprise-grade MVP designed to build trust through clarity, evidence, and minimalism. Features precision-engineered frontend with responsive navigation, hero sections, and forms aligned with enterprise standards.",
    stack: ["react", "tailwind", "nodejs", "nextjs"],
    isNew: false,
  },
  {
    href: "https://exper-brain-4pi6.vercel.app/",
    category: "AI",
    renderCustom: null,
    useImported: false,
    img: "/Experbrain.png",
    alt: "ExperBrain Application",
    title: "ExperBrain",
    tag: "Enterprise App",
    tagColor: "#0F6E56",
    description:
      "A trust-driven enterprise application designed to streamline workflows with clarity, evidence, and user trust. Integrates authentication, structured data handling, and intuitive navigation for a professional-grade experience.",
    stack: ["mern", "python", "scikitlearn"],
    isNew: false,
  },
  {
    href: "https://predictionsite-gr8r.vercel.app/",
    category: "Full Stack",
    renderCustom: null,
    useImported: false,
    img: "/Ziggy Martoh.png",
    alt: "Prediction Platform",
    title: "Ziggy Match Predictions",
    tag: "MERN Stack",
    tagColor: "#D85A30",
    description:
      "A full-stack MERN prediction platform for seamless match insights and user engagement. Combines robust backend logic with a sleek responsive interface, secure data handling, and real-time updates for admins and users.",
    stack: ["mern", "react", "tailwind", "express", "nodejs"],
    isNew: false,
  },
  {
    href: "https://trialbal-two.vercel.app/",
    category: "Education & Finance",
    renderCustom: null,
    useImported: false,
    img: "/Ipsas Reporting.jpg",
    alt: "Trialbal School Financial Management",
    title: "Trialbal",
    tag: "EdTech · FinTech",
    tagColor: "#0EA5E9",
    description:
      "A school financial management system for building trial balances, financial statements, and IPSAS-compliant reports. Supports Excel upload and manual row entry, auto-computes financial statements from trial balance data, and generates polished Word document reports.",
    stack: ["react", "nodejs", "express", "mern"],
    isNew: true,
  },
  {
    href: "https://femscan.streamlit.app/",
    category: "AI",
    renderCustom: "femscan",
    useImported: false,
    img: null,
    alt: "FemScan AI Application",
    title: "FemScan AI",
    tag: "AI · Healthcare",
    tagColor: "#D4537E",
    description:
      "An AI-powered health screening tool built with Python and Streamlit that assists in early detection of cervical and breast cancer. Leverages machine learning models to provide instant risk assessments, empowering women with accessible, data-driven health insights.",
    stack: ["python", "tensorflow", "pylance"],
    isNew: true,
  },
  {
    href: "https://presidential-awards.vercel.app/",
    category: "Full Stack",
    renderCustom: "presidential",
    useImported: false,
    img: null,
    alt: "Presidential Awards Portal",
    title: "Presidential Awards Portal",
    tag: "Full Stack",
    tagColor: "#185FA5",
    description:
      "A prestigious digital platform for managing and showcasing Presidential Award nominations, recipients, and ceremonies. Features secure admin controls, nominee tracking, real-time status updates, and a public-facing gallery of award laureates.",
    stack: ["mern", "react", "tailwind", "express", "nodejs"],
    isNew: true,
  },
  {
    href: "https://stephenkanjaportal.infinityfreeapp.com/",
    category: "Education & Finance",
    renderCustom: null,
    useImported: false,
    img: "/StephenKanja.jpg",
    alt: "School Portal",
    title: "Stephen Kanja School Portal",
    tag: "EdTech",
    tagColor: "#639922",
    description:
      "A PHP-based school portal with interactive UI and authentication for managing school activities including fee payment, academic records, storing and retrieving results for learners, and tracking their progress.",
    stack: ["php", "mysql", "javascript", "ajax"],
    isNew: false,
  },
  {
    href: "https://www.usfederalaid.com/",
    category: "Education & Finance",
    renderCustom: null,
    useImported: false,
    img: "/federal.png",
    alt: "Federal Aid Portal",
    title: "US Federal Aid Portal",
    tag: "MERN · FinTech",
    tagColor: "#533AB7",
    description:
      "A secure platform for managing student financial aid applications, tracking eligibility, processing awards, and offering real-time updates. Integrates authentication, responsive UI, and a robust backend for smooth aid record handling.",
    stack: ["react", "nodejs", "tailwind", "javascript"],
    isNew: false,
  },
];

// The mobile app first, then the web projects.
const projects = [mobileAppProject, ...webProjects];

const cardStyles = `
  .pj-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 20px;
  }
  .pj-filters { display: flex; flex-wrap: wrap; gap: 8px; }
  .pj-filter {
    padding: 7px 14px;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    color: #444;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .pj-filter:hover { background: #f4f4f5; color: #171717; }
  .pj-filter.active { background: #171717; border-color: #171717; color: #fff; }
  .pj-count { font-size: 13px; color: #8f8f8f; }

  .pj-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }

  .pj-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: left;
    text-decoration: none;
    color: inherit;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 14px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .pj-card:hover {
    transform: translateY(-3px);
    border-color: #d4d4d8;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }

  .pj-media {
    position: relative;
    width: 100%;
    height: 190px;
    flex-shrink: 0;
    overflow: hidden;
    background: linear-gradient(135deg, #f4f4f5 0%, #e9eaf0 100%);
    border-bottom: 1px solid #eaeaea;
  }
  .pj-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }
  .pj-card:hover .pj-media img { transform: scale(1.03); }

  .pj-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 48px;
    opacity: 0.25;
  }
  .pj-new {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fff;
    background: #22c55e;
    border-radius: 999px;
  }

  .pj-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    padding: 20px;
  }
  .pj-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .pj-title { margin: 0; font-size: 16px; font-weight: 600; line-height: 1.35; color: #171717; }
  .pj-tag {
    flex-shrink: 0;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    border-radius: 999px;
  }
  .pj-desc { flex: 1; margin: 0; font-size: 14px; line-height: 1.65; color: #555; }

  .pj-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
  }
  .pj-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px 4px 7px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    border-radius: 999px;
  }
  .pj-pill svg { font-size: 13px; flex-shrink: 0; }

  .pj-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    font-size: 13px;
    font-weight: 600;
    color: #171717;
    background: #fafafa;
    border-top: 1px solid #eaeaea;
  }
  .pj-foot svg { font-size: 12px; transition: transform 0.2s ease; }
  .pj-card:hover .pj-foot svg { transform: translateX(4px); }

  /* ---- Mobile app card: one wide card, one section per screenshot ---- */
  .pj-app {
    grid-column: 1 / -1;
    cursor: default;
  }
  .pj-app:hover { transform: none; }

  .pj-app-head {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
  }

  .pj-app-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 16px;
    padding: 20px;
    background: #fafafa;
    border-top: 1px solid #eaeaea;
  }
  .pj-app-section {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
  }
  .pj-app-stage {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 0;
    background: linear-gradient(160deg, #ecfdf5 0%, #e0f2fe 100%);
    border-bottom: 1px solid #eaeaea;
  }
  .pj-app-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
  }
  .pj-app-step {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #0D9488;
  }
  .pj-app-title { margin: 0; font-size: 15px; font-weight: 600; line-height: 1.35; color: #171717; }
  .pj-app-desc { margin: 0; font-size: 13px; line-height: 1.6; color: #555; }

  /* Phone frame */
  .pj-phone {
    position: relative;
    box-sizing: border-box;
    height: 310px;
    aspect-ratio: 9 / 19;
    overflow: hidden;
    background: #111;
    border: 6px solid #111;
    border-radius: 28px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
    transition: transform 0.25s ease;
  }
  .pj-phone::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 42%;
    height: 14px;
    transform: translateX(-50%);
    background: #111;
    border-radius: 0 0 10px 10px;
  }
  .pj-phone img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
  }
  .pj-app-section:hover .pj-phone { transform: translateY(-5px); }

  @media (max-width: 768px) {
    .pj-grid { grid-template-columns: 1fr; }
    .pj-app-sections { grid-template-columns: 1fr; }
  }
`;

const MyProjects = () => {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const renderImage = (project) => {
    if (project.renderCustom === "presidential") {
      return <PresidentialAwardsPreview />;
    }
    if (project.renderCustom === "femscan") {
      return <FemScanPreview />;
    }
    if (project.useImported) {
      return <img src={aboutImg} alt={project.alt} />;
    }
    if (project.img) {
      return <img src={project.img} alt={project.alt} />;
    }
    return <div className="pj-placeholder">💻</div>;
  };

  return (
    <>
      <style>{cardStyles}</style>

      <SideNav />

      <main className="page-with-sidenav">
        <section className="pg pg-wide">
          {/* PAGE HEADER */}
          <header className="pg-header">
            <span className="pg-eyebrow">Portfolio</span>
            <h1 className="pg-title">My Projects</h1>
            <p className="pg-sub">
              Projects I have worked on across Fullstack, AI, Design, and Featured work.
            </p>
          </header>

          {/* FILTERS */}
          <div className="pj-toolbar">
            <div className="pj-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={"pj-filter" + (filter === f ? " active" : "")}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="pj-count">
              {visible.length} {visible.length === 1 ? "project" : "projects"}
            </span>
          </div>

          {/* CARDS */}
          <div className="pj-grid">
            {visible.map((project) => {
              // The mobile app has `sections`, so it gets its own wide, sectioned card.
              if (project.sections) {
                return <MobileAppCard key={project.title} project={project} />;
              }

              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-card"
                >
                  <div className="pj-media">
                    {renderImage(project)}
                    {project.isNew && <span className="pj-new">New</span>}
                  </div>

                  <div className="pj-body">
                    <div className="pj-head">
                      <h2 className="pj-title">{project.title}</h2>
                      <span
                        className="pj-tag"
                        style={{
                          background: project.tagColor + "18",
                          color: project.tagColor,
                          border: "1px solid " + project.tagColor + "33",
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <p className="pj-desc">{project.description}</p>

                    <StackPills stack={project.stack} />
                  </div>

                  <div className="pj-foot">
                    <span>View project</span>
                    <FaArrowRight />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default MyProjects;
