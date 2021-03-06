<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alexgeis/todo-list">
    <img src="./src/assets/checkbox-marked-circle.png" alt="Logo" width="40" height="40">
  </a>

<h3 align="center">Todo List</h3>

  <p align="center">
    Todo list application with project organization.
    <br />
    <a href="https://github.com/alexgeis/todo-list"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a class="deployed_link" href="https://alexgeis.github.io/todo-list/">View Demo</a>
    ·
    <a href="https://github.com/alexgeis/todo-list/issues">Report Bug</a>
    ·
    <a href="https://github.com/alexgeis/todo-list/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<a class="deployed_link" href="https://alexgeis.github.io/todo-list/">
<p align="center">
<img id="product-screenshot" src="./src/assets/screenshot.png" alt="Product Name Screen Shot"
style="display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;"/></p></a>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Webpack](https://webpack.js.org/)
- [SCSS](https://sass-lang.com/)
- Vanilla JS and HTML
<!-- - [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MySQL](https://www.mysql.com/)
- [JQuery](https://jquery.com) -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

```sh
"dependencies": {
    "css-loader": "^6.7.1",
    "gh-pages": "^4.0.0",
    "html-loader": "^3.1.2",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.6.1",
    "node-sass": "^7.0.1",
    "path": "^0.12.7",
    "sass-loader": "^13.0.1",
    "style-loader": "^3.3.1",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.2"
  }
```

<!-- PREREQ EXAMPLE
Packages used in this project: -->
<!-- - npm
- css-loader
- html-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
  ```sh
  npm install npm@latest css-loader html-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server -g
  ``` -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexgeis/todo-list.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. DEVELOPMENT - run "npm start" to spin up the development server
   ```sh
   npm start
   ```
4. PRODUCTION - run "npm build" to bundle the page per the Webpack settings
   ```sh
   npm run build
   ```

<!-- API EXAMPLE
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/alexgeis/todo-list.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ``` -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The user can add a new task or project by using the "+" icon in the header navigation.

![add task/project icon help](./src/assets/add-task-project-icon-help.png)

These tasks/projects can be viewed in the following pages:

- _Dashboard_: displays all tasks across all projects
- _All Projects_: displays all projects created
- _Projects_ dropdown: displays your current projects and allows you to view tasks for each one

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Higher Priority:

- [ ] Improve card display/style
  - [ ] Completed status for tasks
  - [x] clickable associated project display (related to first roadmap point)
- [ ] ability to edit cards/projects by clicking on them (or an edit icon)
- [x] mobile responsiveness
- [x] All Projects page cards - allow user to go directly to that project by clicking on it
- [x] empty dashboard/projects/task display
  - [x] show "no results" or similar text
  - [x] show button to direct user to create a new project/task
- [x] Project association with task in Dashboard page
  - [x] ability to delete task from dashboard and it deletes from the correct project (currently deletes from an array copy containing a consolidation of all tasks)

Lower Priority:

- [ ] login/signup pages/functionality
- [ ] settings page/functionality
- [ ] Counters for total completed tasks and uncompleted tasks
- [ ] Color theme toggle/choice

See the [open issues](https://github.com/alexgeis/todo-list/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible_. Include steps to reproduce the problem.
- _Specific_. Include as much detail as possible: which version, what environment, etc.
- _Unique_. Do not duplicate existing opened issues.
- _Scoped_ to a Single Bug. One bug per report.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alex Geis - siegxela@gmail.com

Project Link: [https://github.com/alexgeis/todo-list](https://github.com/alexgeis/todo-list)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Helpful resources and kudos.

- [Choose an Open Source License](https://choosealicense.com)
<!-- - [Img Shields](https://shields.io) -->
- [GitHub Pages](https://pages.github.com)
<!-- - [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Markdown Studio](https://readme.so/editor)
- []()
- []()
- []() -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [contributors-shield]: https://img.shields.io/github/contributors/alexgeis/todo-list.svg?style=for-the-badge
[contributors-url]: https://github.com/alexgeis/todo-list/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexgeis/todo-list.svg?style=for-the-badge
[forks-url]: https://github.com/alexgeis/todo-list/network/members
[stars-shield]: https://img.shields.io/github/stars/alexgeis/todo-list.svg?style=for-the-badge
[stars-url]: https://github.com/alexgeis/todo-list/stargazers -->

[issues-shield]: https://img.shields.io/github/issues/alexgeis/todo-list.svg?style=for-the-badge
[issues-url]: https://github.com/alexgeis/todo-list/issues
[license-shield]: https://img.shields.io/github/license/alexgeis/todo-list.svg?style=for-the-badge
[license-url]: https://github.com/alexgeis/todo-list/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alexngeis
[product-screenshot]: images/screenshot.png
