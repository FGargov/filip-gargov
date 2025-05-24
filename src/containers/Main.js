import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"; // ⭐ ИМПОРТИРАЙТЕ Redirect
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    // ⭐ НАСТРОЙКА НА BASENAME ⭐
    // Вземете PUBLIC_URL от променливите на средата, ако е дефиниран,
    // в противен случай използвайте "/" (за персонализиран домейн в корена) или специфичен път.
    // Това е по-добре от хардкоднат basename="/", особено за GitHub Pages.
    const basename = process.env.PUBLIC_URL || "/";

    return (
      <BrowserRouter basename={basename}>
        {" "}
        {/* ⭐ ИЗПОЛЗВАЙТЕ ДИНАМИЧЕН BASENAME */}
        <Switch>
          {/* Първо дефинираме специфичните маршрути */}
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact // exact е добре тук
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          {settings.isSplash && ( // Този маршрут е достъпен само ако isSplash е true
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />

          {/* Маршрут за коренната пътека ("/") */}
          <Route
            path="/"
            exact // Важно е да е exact, за да не "улавя" други маршрути
            render={(props) => {
              if (settings.isSplash) {
                // Ако isSplash е true, показваме Splash екрана на "/"
                return <Splash {...props} theme={this.props.theme} />;
              } else {
                // Ако isSplash е false, пренасочваме от "/" към "/home"
                return <Redirect to="/home" />;
              }
            }}
          />

          {/* Catch-all за 404 грешки трябва да е последен */}
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
