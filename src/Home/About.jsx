import SideNav from "./Nav";

const About = () => {
  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <section id="About">
          <h1>ABOUT ME</h1>

          <div className="Abouts">
            <p className="pp">An insightful glimpse on who I am and what i do </p>
            <hr />
            <p>
              I am a self‑employed <strong>Full‑Stack Engineer</strong> with over 3 years of hands‑on experience
              in the tech industry. My journey has allowed me to collaborate with various companies and
              organizations, where I honed my skills and contributed to impactful projects across multiple domains.

              My expertise spans <strong>Software Engineering</strong>, <strong>App Development</strong>,
              <strong> Web Design &amp; Development</strong>, and <strong>AI Engineering</strong>. I specialize in
              building scalable applications, crafting intuitive user interfaces, and leveraging modern frameworks
              to deliver solutions that balance creativity with technical precision.
              Beyond technical execution, I am deeply passionate about solving complex problems in society through
              technology. I thrive on designing systems that are not only functional but also sustainable, ensuring
              they can adapt to future needs. My experience working with diverse teams has strengthened my ability
              to merge innovation with collaboration, driving projects from concept to completion.
            </p>
            <p>
              Currently, as a self‑employed engineer, I continue to push boundaries by exploring emerging
              technologies, refining my craft, and delivering solutions that empower businesses and communities.
              My dedication lies in creating meaningful digital experiences that leave a lasting impact.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
