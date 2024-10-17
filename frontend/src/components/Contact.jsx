const Contact = () => {
  return (
    <>
      <h4>Contact</h4>
      <div id="contact" className="icons">
        <a href="mailto:tuomas.kohvakka@gmail.com" title="E-mail" target="_top">
          <i className="fa-solid fa-envelope fa-2xl" aria-hidden="true"></i>
          <span className="visually-hidden">send e-mail to author</span>
        </a>

        <a
          href="https://github.com/tauoms"
          target="_blank"
          title="Github Profile"
        >
          <i className="fa-brands fa-github fa-2xl" aria-hidden="true"></i>
          <span className="visually-hidden">author&apos;s github page</span>
        </a>
        <a
          href="https://www.linkedin.com/in/tuomaskohvakka"
          target="_blank"
          title="LinkedIn Profile"
        >
          <i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i>
          <span className="visually-hidden">
            author&apos;s linkedin profile
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1hK4-EshCc0cWhf_00iqu9C4g868n89iB/view?usp=sharing"
          target="_blank"
          title="CV"
        >
          <i className="fa-solid fa-file-pdf fa-2xl" aria-hidden="true"></i>
          <span className="visually-hidden">author&apos;s CV</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
