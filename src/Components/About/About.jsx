import "./About.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import newsArticle from "../../Images/Darren-KentLive-front-page.png";
import InJapan from "../../Images/InJapan.jpg";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0,
  });
  const [isHidden, setIsHidden] = useState(false);
  const toggleParagraphs = () => {
    setIsHidden(!isHidden);
  };

  return (
    <section id="about" ref={ref} className={inView ? "show" : "hidden"}>
      <div id="aboutMe">
        <h2 onClick={toggleParagraphs}>
          About me <span className={isHidden ? "rotate" : "unrotate"}>▼</span>
        </h2>
        <div className={`fade-out ${isHidden ? "hidden" : "show"}`}>
          <div id="In-Japan">
            <img src={InJapan} alt="Me in Japan" loading="lazy" />
          </div>
          <p className="showContent">
            After spending two years in Japan, where I immersed myself
            in the language and culture while working as an English teacher, I
            have discovered a new passion that unites people across borders: the
            universal language of code. Now, I am channeling my enthusiasm for
            language into mastering the art of full-stack development, equipping
            myself with a diverse set of skills.
          </p>

          <p className="showContent">
            My current tech-stack revolves around the React environment, which I
            find particularly engaging due to its component-based approach.
            Alongside this, I possess extensive knowledge of HTML, CSS, and
            JavaScript. I take immense pleasure in crafting visually stunning
            and impactful websites and projects, with a keen eye for creating
            clean and elegant designs.
          </p>
          <p className="showContent">
            While I thrive on individual freelance work, I also relish the
            opportunity to collaborate within a team environment. I firmly
            believe that combining diverse perspectives and expertise leads to
            exceptional outcomes. In the realm of web development, the phrase
            "two heads are better than one" truly resonates with me.
          </p>
          <p className="showContent">
            Constantly seeking new and exciting projects to embark upon, I
            embrace any opportunity to contribute my skills. So why wait? I
            eagerly anticipate the chance to collaborate with you and bring your
            vision to life through my expertise. Let's create something
            remarkable together!
          </p>
          <div>
            <p>
              Here is a parting gift created by my former colleagues at Reach
              plc:
            </p>

            <a
              href={newsArticle}
              target="_blank"
              id="newsArticleHolder"
              rel="noreferrer noopener"
            >
              <img
                id="newsArticle"
                src={newsArticle}
                alt="A fake news article created by my former colleagues at Reach."
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
