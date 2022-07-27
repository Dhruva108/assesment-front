import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer-conatiner">

    <div className="footer__mobil-version">
      <a href="https://github.com/Dhruva108/assesment-front" target="_blanck">
        GitHub
      </a>
    </div>

    <div className="footer__item">
      © Juan Diaz, 2022
    </div>

    <div className="footer__item">
      Para ver el código fuente de este mini-proyecto:
      {' '}
      <Link to="https://github.com/Dhruva108/assesment-front">GitHub</Link>
    </div>

    <div className="footer__item">
      Esto es un poco acerca de mi:
      {' '}
      <Link to="/About">Juan Diaz</Link>
    </div>

  </footer>
);

export default Footer;
