import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import SideNav from "./Nav";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:mwendwamutinda24@gmail.com?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <SideNav />

      <main className="page-with-sidenav">
        <section id="contact">
          <div className="conect">
            <div className="con1">
              <h1>Contact Me</h1>
              <p>
                In need of answers to your questions on my work?
                <br />
                Get in touch.
              </p>
              <p>Find me on social media</p>
              <div className="con-buttons">
                <button className="git1">
                  <a href="https://github.com/mwendwamutinda24" target="_blank" rel="noreferrer">
                    <FaGithub /> Github
                  </a>
                </button>
                <button className="git2">
                  <a href="https://www.instagram.com/kelvinsoftwareengineer/" target="_blank" rel="noreferrer">
                    <FaInstagram /> Instagram
                  </a>
                </button>
                <button className="git3">
                  <a href="https://www.facebook.com/kingcorbin.junior.9" target="_blank" rel="noreferrer">
                    <FaFacebook /> Facebook
                  </a>
                </button>
                <button className="git4">
                  <a href="#" target="_blank" rel="noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </button>
              </div>

              <h1>Send Me a Message</h1>
            </div>
            <div className="contact">
              <form onSubmit={handleSubmit}>
                <input
                  className="input1"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
                <br />
                <textarea
                  className="input2"
                  name="message"
                  placeholder="Enter your Message"
                  required
                />
                <br />
                <button className="btn5" type="submit">
                  Send Message <span className="arrow">↑</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactMe;
