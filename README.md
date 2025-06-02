# Filip Gargov - Personal Portfolio Website

This repository contains the source code for my personal portfolio website, showcasing my journey, skills, and projects as a DevOps enthusiast and software developer.

**Live Site:** [https://filipgargov.com/home](https://filipgargov.com/home)

---

## Overview

This is the personal portfolio website of Filip Gargov, currently on a DevOps journey, exploring cloud technologies, automation, and scalable infrastructure. This site serves as a central hub to present my professional background, technical skills, and project work.

---

## Website Structure

The portfolio website is organized into the following main sections:

- **Homepage:** A brief introduction and a welcoming statement.
- **About Me:** A summary of my professional journey, skills, and aspirations.
- **Experience:** Details about my work experience and key responsibilities.
- **Projects:** Showcases a selection of my completed projects, detailing the technologies used and linking to relevant resources (like GitHub repositories or live demos).
- **Skills:** Highlights the technologies, tools, and methodologies I am proficient in.
- **Education:** Information about my educational background and certifications.
- **Contact:** A way for visitors to get in touch with me.

---

## Tech Stack & Design

This portfolio website is a single-page application (SPA) built with modern web technologies:

- **Core Framework:** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="20" height="20"/> [React.js](https://reactjs.org/)
- **Styling:** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="20" height="20"/> CSS3 (Potentially with CSS Modules or a specific methodology if you used one)
- **JavaScript:** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="20" height="20"/> ES6+
- **Content Management:** Project details and other dynamic content are managed via JSON files within the `src/shared/` directory. The script in `scripts/get_data_github.mjs` fetches data from the GitHub API to populate these JSON files. `src/portfolio.js` file contains the complete information about the user.
- **Responsiveness:** The site is designed to be responsive and accessible across various devices (desktops, tablets, and mobile phones).

---

## How to Run Locally (Development)

To set up and run this project on your local machine for development or testing:

**1. Prerequisites:**

- Node.js (v16.x or later recommended)
- npm

**2. Clone the Repository:**

    ```
    git clone https://github.com/FGargov/my-portfolio.git
    cd my-portfolio
    ```

**3. Install Dependencies:**

    ```
    npm install
    ```

**4. Update GitHub Data (Optional but Recommended before Build/Deploy):**
To fetch the latest data from your GitHub profile (Pull Requests, Pinned Repositories, etc.), run the data fetching script:
`npm run fetch-github-data`
_(This assumes you have a script named `fetch-github-data` in your `package.json` that executes, for example, `node scripts/get_data_github.mjs`. Adjust the command if necessary.)_
This will update the JSON files in the `src/shared/opensource/` directory.

**5. Start the Development Server:**

    ```
    npm start
    ```
    The application will typically open in your default web browser at `http://localhost:3000`.

**6. Build for Production (if needed before deployment):**
If your project requires a build step to generate static assets:
`npm run build`
This usually places the optimized output in a `build/` or `dist/` folder.

---

## Deployment

This website is currently deployed to [https://filipgargov.com/home](https://filipgargov.com/home).

The typical deployment process involves:

1.  Ensuring all local changes are committed and pushed.
2.  Updating the GitHub data: `npm run fetch-github-data` (if not automated in CI).
3.  Building the production version: `npm run build`.
4.  Deploying the contents of the `build/` (or `dist/`) directory to the hosting platform.

**Using `npm run deploy` (if configured):**
If you have an `npm run deploy` script in your `package.json` (e.g., for deploying to GitHub Pages or another service), you can use it:
npm run deploy

_(Briefly describe what your `npm run deploy` script does, e.g., "This script builds the project and pushes the `build` folder to the `gh-pages` branch.")_

_(If your deployment is fully automated via a CI/CD pipeline, such as GitHub Actions triggering on every push to the `main` branch, you can describe that process here instead.)_

---

## Social Links

- **LinkedIn:** [https://www.linkedin.com/in/filip-gargov-1b35359/](https://www.linkedin.com/in/filip-gargov-1b35359/)
- **GitHub:** [https://github.com/FGargov](https://github.com/FGargov)

---
