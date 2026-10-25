import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt } from "react-icons/fa";
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
import SideNav from "./SideNav";

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
  { name: "Firebase", icon: <SiFirebase color="#F7DF1E" /> },
  { name: "WordPress", icon: <SiWordpress color="#141413" /> },
];

const ToolRow = ({ items, rowClass }) => (
  <div className={`tool-list ${rowClass}`}>
    {items.map((tool) => (
      <div key={tool.name} className="tool">
        {tool.icon}
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
);

const HomePage = () => {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <div className="intro">
          <h1>Hi, I am Kelvin Mutinda</h1>
          <ul className="li">
            <li>Based in Mombasa</li>
            <li>Kenya</li>
            <li>Working remotely</li>
          </ul>
          <p>
            I am an experienced Software and AI engineer with 4 years experience in Web development,
            Application development, Desktop dev and AI engineering. My passion is rooted in
            solving real-world complex problems and collaborating with teams to achieve greater heights
            with scalable, user intuitive and mobile responsive software.
          </p>
          <hr />

          <div className="tools">
            <h2>Tools that I use</h2>
            <hr />
            <ToolRow items={tools.slice(0, 7)} rowClass="row-1" />
            <ToolRow items={tools.slice(7, 14)} rowClass="row-2" />
            <ToolRow items={tools.slice(14)} rowClass="row-3" />
          </div>

          <div className="contact-me">
            <div className="working">
              <h2>What I have been working on</h2>
              <p>
                I assists brands,companies ,Institutions ,startups and clients in Engineering and managing
                their Softwares and Online presence for their Businesses through use of strategic Critical
                Thinking and Problem solving
              </p>
            </div>
            <div className="open-to">
              <h2>Let's work together</h2>
              <p>I am Open to Freelance opportunities,Hit me and let's work together </p>
              <button className="freelance">
                <Link to="/contact">Contact Me</Link>
              </button>
            </div>
          </div>

          <hr />
          <div className="believe">
            <h2>Values that I believe in</h2>
          </div>
          <div className="values">
            <div className="values1">
              <h2>Problem Solving</h2>
              <p>Approaching challenges with structured solutions.</p>
              <p>Breaking down complex issues into manageable steps.</p>
              <p>Delivering practical outcomes that create real impact.</p>
            </div>
            <div className="values2">
              <h2>Critical Thinking</h2>
              <p>Evaluating information with clarity and logic.</p>
              <p>Questioning assumptions to uncover deeper insights.</p>
              <p>Making decisions based on evidence and reasoning.</p>
            </div>
            <div className="values3">
              <h2>System Analysis</h2>
              <p>Understanding how components interact within a system.</p>
              <p>Identifying inefficiencies and opportunities for improvement.</p>
              <p>Designing scalable solutions that align with long-term goals.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
