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

      <div className="formcontainer">
        <form
          action="mailto:your-email@example.com"
          method="POST"
          autoComplete="on"
        >
          <label htmlFor="firstname" className="label">
            First Name:{" "}
          </label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            autoComplete="on"
          />
          <br />

          <label htmlFor="lastname" className="label">
            Last Name:{" "}
          </label>
          <br />
          <input type="text" name="lastname" id="lastname" autoComplete="on" />
          <br />

          <label htmlFor="email" className="label">
            E-Mail:{" "}
          </label>
          <br />
          <input type="email" name="email" id="email" autoComplete="on" />
          <br />

          <label htmlFor="message" className="label">
            Message:{" "}
          </label>
          <br />
          <textarea
            name="textinput"
            id="message"
            cols="30"
            rows="10"
            placeholder="Input message here."
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Contact;
