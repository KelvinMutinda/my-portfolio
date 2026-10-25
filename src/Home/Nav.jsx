import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import avatar from "../assets/image3.JPG";

const links = [
  { to: "/", label: "Home", icon: <FaHome />, end: true },
  { to: "/Dashboard", label: "Dashboard", icon: <MdDashboard /> },
  { to: "/about", label: "About", icon: <FaUser /> },
  { to: "/services", label: "Services", icon: <FaCog /> },
  { to: "/my-Projects", label: "Projects", icon: <FaProjectDiagram /> },
  { to: "/contact", label: "Contact Me", icon: <FaEnvelope /> },
];

const RESUME_URL = "/Kelvin%20Mutinda%20(2).pdf"; // file must be inside /public

const NavLinks = ({ onNavigate }) => (
  <>
    {links.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.end}
        onClick={onNavigate}
        className={({ isActive }) =>
          "sidenav-link" + (isActive ? " active" : "")
        }
      >
        {item.icon}
        <span>{item.label}</span>
      </NavLink>
    ))}
    <a
      className="sidenav-link"
      href={RESUME_URL}
      target="_blank"
      rel="noreferrer"
      onClick={onNavigate}
    >
      <FaFileAlt />
      <span>My Resume</span>
    </a>
  </>
);

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // lets the CSS remove the default top padding on pages that use SideNav
  useEffect(() => {
    document.body.classList.add("has-sidenav");
    return () => document.body.classList.remove("has-sidenav");
  }, []);

  // close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="sidenav">
        <Link to="/" className="sidenav-profile">
          <img className="sidenav-avatar" src={avatar} alt="Kelvin Mutinda" />
          <div>
            <p className="sidenav-name">
              Kelvin Mutinda
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#1DA1F2"
                aria-label="Verified"
              >
                <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z" />
              </svg>
            </p>
            <p className="sidenav-role">AI | Fullstack Engineer</p>
          </div>
        </Link>

        <p className="sidenav-label">Menu</p>
        <nav className="sidenav-links">
          <NavLinks />
        </nav>

        <div className="sidenav-footer">
          <p className="sidenav-status">
            <span className="status-dot" /> Open to freelance work
          </p>
          <Link to="/contact" className="sidenav-cta">
            Contact Me
          </Link>
        </div>
      </aside>

      {/* ---------- Mobile top bar (hamburger on the left) ---------- */}
      <header className="topbar">
        <button
          type="button"
          className="topbar-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="topbar-brand" onClick={close}>
          Kelvin Mutinda
        </Link>
      </header>

      {open && <div className="topbar-backdrop" onClick={close} />}

      <nav className={"topbar-menu" + (open ? " open" : "")}>
        <NavLinks onNavigate={close} />
      </nav>
    </>
  );
};

export default SideNav;
