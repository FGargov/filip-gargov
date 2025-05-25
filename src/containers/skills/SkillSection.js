import React, { Component } from "react";
import "./Skills.css"; // Уверете се, че импортвате CSS файла, ако се казва Skills.css, а не SkillSection.css
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio"; // Импорт на данните
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg"; // Импорт на SVG компонентите
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
// Не е нужно да импортирате DisplayLottie, освен ако не планирате да го ползвате

// Тази функция може да остане, ако искате да я ползвате като резервен вариант
function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />; // Това е default-ната картинка, ако fileName не съвпада
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          // Обхождаме данните от portfolio.js
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* 👇 КЛЮЧОВА ПРОМЯНА ТУК 👇 */}
                  {skill.staticImagePath ? (
                    <img
                      // Пътят трябва да е правилен от SkillSection.js до src/assets/images/
                      // Ако SkillSection.js е в src/containers/skills/, тогава '../../assets/images/' е вероятно правилен.
                      src={require(`../../assets/images/${skill.staticImagePath}`)}
                      alt={skill.title || "Skill illustration"}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }} // Примерни стилове
                    />
                  ) : skill.lottieAnimationFile ? ( // Ако искате да поддържате и Lottie в бъдеще
                    // <DisplayLottie animationPath={skill.lottieAnimationFile} />
                    <p>Lottie ще бъде тук: {skill.lottieAnimationFile}</p> // Заместете с реален Lottie компонент
                  ) : skill.fileName ? ( // Ако няма staticImagePath или lottie, тогава ползвай fileName
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  ) : (
                    <DesignImg theme={theme} /> // Краен резервен вариант, ако нищо друго не е дефинирано
                  )}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, j) => {
                      // Променен ключ на j
                      return (
                        <p
                          key={j} // Променен ключ на j
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
