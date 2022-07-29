import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-container">
    <div className="about__image-conatiner">
      <img
        className="about__image"
        src="img/Dhruva_retrato.JPG"
        alt="my-self"
      />
    </div>
    <section className="about__section">
      <h2 className="about__name">Juan Pablo Díaz Arcila</h2>
      <p className="about__description">I am life lover, a developer in formation; During the last 10 years I was fully dedicated to teach Yoga and one day I make a very big desition and it was to become a developer and thank to my wonderful wife I came in touch with Make it Real and now here I am trying to becoming this amazing thing of developing some stuffs. </p>

      <div className="about__category-container">
        <h4 className="about__learned__title">What I have learned:</h4>
        <p className="about__category">Basiclly everything I know about development. 3 months before when I said to my self -I will learn about this- I had no idea at all about what a developer was or does, even thou I started by studying on<a target="_blanck" className="about__media__links" href="https://www.youtube.com/c/MakeitrealCamp1">  <i>Make It Real YouTube Channel</i></a> all the basics. I learn from <a target="_blanck" className="about__media__links" href="https://github.com/khriztianmoreno"><i> Khriztian Moreno</i></a> JavaScript. Now, in the program itself I have learnd about the DOM and how to modify it, also React and its libraries; I hace learnd about how to have a good job interview in spanish as well as in english. As sumary, everything I know about development is because of Make It Real</p>
      </div>

      <ul className="about__media__list">
        <li><strong>email:</strong> judiazarc@gmail.com</li>
        <Link className="about__media__links" to="https://github.com/ Dhruva108/"><li>GitHub</li></Link>
        <Link className="about__media__links" to="https://www.linkedin.com/in/juan-d%C3%ADaz-a91200243"><li>Linkedin</li></Link>
      </ul>
    </section>
  </div>
);

export default About;
