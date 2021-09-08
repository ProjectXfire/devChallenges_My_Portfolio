// React
import { useEffect } from "react";
// Utils
import { indexPage } from "./utils/paginationIndex";
// Components
import { ContainerComponent } from "./components/container";
import { Profile } from "./components/profile";
import { Projects } from "./components/projects";
import { Hobbies } from "./components/hobbies";
import { Certificates } from "./components/certificates";
// Images
/*Projects*/
import project1 from "./images/project_1.jpg";
import project2 from "./images/project_2.jpg";
import project3 from "./images/project_3.jpg";
import project4 from "./images/project_4.jpg";
import project5 from "./images/project_5.jpg";
import project6 from "./images/project_6.jpg";
import project7 from "./images/project_7.jpg";
import project8 from "./images/project_8.jpg";
/*Hobbies*/
import hobbie1 from "./images/hobbie_1.jpg";
import hobbie2 from "./images/hobbie_2.jpg";
/*Certificates*/
import htmlcss1 from "./images/html_css.jpg";
import htmlcss2 from "./images/desarrollo_web_online.jpg";
import cssGrid from "./images/css_grid_layout.jpg";
import cssResponsive from "./images/responsive_design.jpg";
import javascript from "./images/fundamentos_javascript.jpg";
import javascriptProfessional from "./images/profesional_javascript.jpg";
import react from "./images/reactjs.jpg";
import reactHook from "./images/react_hook.jpg";
import reactAdvance from "./images/reactjs_avanzado.jpg";
import reactNative from "./images/introduccion_react_native.jpg";
import redux from "./images/redux_bedu.jpg";
import vue from "./images/basico_vue.jpg";
import nextjs from "./images/nextjs.jpg";
import angular from "./images/angular.jpg";
import angularForms from "./images/angular_forms.jpg";
import angularAdvance from "./images/angular_profesional.jpg";
import expressJS from "./images/expressjs.jpg";
import nestJS from "./images/nestjs.jpg";
import nestJSPassportJWT from "./images/nestjs_passport_jwt.jpg";
import nestJSModules from "./images/nestjs_module.jpg";
import { useState } from "react";

function App() {
  const projects = [
    {
      name: "Find the pair",
      tags: ["#REACT"],
      description:
        "In this project, I was practice my knowledge after been completed the course of react. " +
        "It is a simple game that you need to find its pair of multiple cards, using the api" +
        " Rick & Morty to decorate each card with theirs characters.",
      demo: "https://zen-shockley-02f050.netlify.app/",
      code: "https://github.com/ProjectXfire/find_the_pair",
      image: project1,
    },
    {
      name: "404 Not found",
      tags: ["#HTML", "#CSS", "#RESPONSIVE"],
      description:
        "In this project, I was practice my HTML and CSS, making it responsive in differents screens" +
        " sizes. The design was provided by devChallenges.io.",
      demo: "https://zen-borg-67a721.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_404_not_found",
      image: project2,
    },
    {
      name: "Recipes",
      tags: ["#HTML", "#CSS", "#RESPONSIVE"],
      description:
        "In this project, I was practice my HTML and CSS, making it responsive in differents screens" +
        " sizes. This is a page that show a recipe with their instructions to prepare it." +
        " The design was provided by devChallenges.io.",
      demo: "https://admiring-fermat-5cdbf0.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Recipe_page",
      image: project3,
    },
    {
      name: "Team Works",
      tags: ["#HTML", "#CSS", "#RESPONSIVE"],
      description:
        "In this project, I have created a page that provide the services of the team work, showing" +
        " their designs and the team. This is responsive page." +
        " The design was provided by devChallenges.io.",
      demo: "https://happy-torvalds-838f92.netlify.app/#our-works",
      code: "https://github.com/ProjectXfire/devChallenges_Edie_homepage",
      image: project4,
    },
    {
      name: "Check out Form",
      tags: ["#REACT", "#RESPONSIVE"],
      description:
        "In this project, I have created a form where you can fill your data and add the quantity" +
        " of the two products, you will see the total amount according to the price and quantity." +
        " All the fields are validated, thats mean, if you do not fill one, this will turn red." +
        " The design was provided by devChallenges.io.",
      demo: "https://vigorous-jang-34d0bc.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Checkout",
      image: project5,
    },
    {
      name: "Petgram",
      tags: ["#REACT", "#WEBPACK", "#RESPONSIVE"],
      description:
        "In this project, I have create a petgram page following of Advanced React course in PLatzi." +
        " This show a list of animal's photos, a like button and a category filter." +
        " If you want to 'like' a photo, you need to register first. The Api was provide by the instructor." +
        " The design was provided by Platzi.",
      demo: "https://petgram-client-six.vercel.app/",
      code: "https://github.com/ProjectXfire/Petgram-client",
      image: project6,
    },
    {
      name: "E-Commerce",
      tags: ["#REACT"],
      description:
        "In this project,  I have create a e-commerce page following of React course in Platzi." +
        " This show a list of products provided by Platzi, you can select one to add in the card and" +
        " then to procced with the buy, the purchase is not implemented in this project." +
        " The design was provided by Platzi.",
      demo: "https://store-merch-e1e4b.web.app/",
      code: "https://github.com/ProjectXfire/Petgram-client",
      image: project7,
    },
    {
      name: "E-Commerce",
      tags: ["#ANGULAR"],
      description:
        "In this project,  I have create a e-commerce page following of Angular course in Platzi." +
        " This show a list of products provided by Platzi, you can select one to add in the card and" +
        " you can see the list of products in the cart, the purchase is not implemented in this project." +
        " The design was provided by Platzi.",
      demo: "https://proyect-store-angular.web.app/ ",
      code: "https://github.com/ProjectXfire/platzi_project_angular",
      image: project8,
    },
  ];

  const tags = [
    {
      name: "All",
      active: true,
    },
    {
      name: "HTML",
      active: false,
    },
    {
      name: "CSS",
      active: false,
    },
    {
      name: "Responsive",
      active: false,
    },
    {
      name: "Webpack",
      active: false,
    },
    {
      name: "React",
      active: false,
    },
    {
      name: "Angular",
      active: false,
    },
  ];

  const skillsFrontEnd = [
    { name: "Javascript", percent: 70 },
    { name: "CSS", percent: 75 },
    { name: "Redux", percent: 50 },
    { name: "React Native", percent: 40 },
    { name: "NextJS", percent: 50 },
    { name: "React", percent: 70 },
    { name: "Vue", percent: 10 },
    { name: "Angular", percent: 40 },
  ];

  const skillsBackEnd = [
    { name: "Express JS", percent: 30 },
    { name: "Nest JS", percent: 60 },
  ];

  const hobbies = [
    {
      name: "Gaming",
      image: hobbie1,
      description: "I like to play video games in my free time.",
    },
    {
      name: "Playing the guitar",
      image: hobbie2,
      description:
        "I like learn new songs and playing it, is difficult sometimes, but really exciting when you learn it.",
    },
  ];

  const certificates = [
    {
      name: "HTML and CSS Course Certificated",
      image: htmlcss1,
      school: "By Platzi",
    },
    {
      name: "Web Development Course Certificated",
      image: htmlcss2,
      school: "By Platzi",
    },
    {
      name: "CSS Grid Layout Course Certificated",
      image: cssGrid,
      school: "By Platzi",
    },
    {
      name: "CSS Responsive Course Certificated",
      image: cssResponsive,
      school: "By Platzi",
    },
    {
      name: "Javascript Fundamentals Course Certificated",
      image: javascript,
      school: "By Platzi",
    },
    {
      name: "Javascript Advance Course Certificated",
      image: javascriptProfessional,
      school: "By Platzi",
    },
    {
      name: "ReactJS Course Certificated",
      image: react,
      school: "By Platzi",
    },
    {
      name: "React Hook Course Certificated",
      image: reactHook,
      school: "By Platzi",
    },
    {
      name: "React Advance Course Certificated",
      image: reactAdvance,
      school: "By Platzi",
    },
    {
      name: "React Native Fundamentals Course Certificated",
      image: reactNative,
      school: "By Platzi",
    },
    {
      name: "Redux by Bedu Course Certificated",
      image: redux,
      school: "By Platzi",
    },
    {
      name: "Vue Fundamentals Course Certificated",
      image: vue,
      school: "By Platzi",
    },
    {
      name: "Next JS Course Certificated",
      image: nextjs,
      school: "By Platzi",
    },
    {
      name: "Angular Course Certificated",
      image: angular,
      school: "By Platzi",
    },
    {
      name: "Angular Forms Course Certificated",
      image: angularForms,
      school: "By Platzi",
    },
    {
      name: "Angular Advance Course Certificated",
      image: angularAdvance,
      school: "By Platzi",
    },
    {
      name: "ExpressJS Course Certificated",
      image: expressJS,
      school: "By Platzi",
    },
    {
      name: "NestJS Course Certificated",
      image: nestJS,
      school: "By Platzi",
    },
    {
      name: "NestJS Passport and JWT Course Certificated",
      image: nestJSPassportJWT,
      school: "By Platzi",
    },
    {
      name: "NestJS Modules Course Certificated",
      image: nestJSModules,
      school: "By Platzi",
    },
  ];

  const [projectsList, setProjectsList] = useState(projects);

  // Filter by tag
  const [activeButton, setActiveButton] = useState(0);
  const filterByTag = (tag, index) => {
    if (tag === "All") {
      setProjectsList(projects);
      setActiveButton(index);
    } else {
      const upperCaseTag = "#" + tag.toUpperCase();
      const filtered = projects.filter((project) =>
        project.tags.some((projectTag) => projectTag === upperCaseTag)
      );
      setActiveButton(index);
      setProjectsList(filtered);
    }
  };

  // Handle Change Page
  const dataPerPage = 3;
  const totalPages = Math.ceil(certificates.length / dataPerPage);
  const [pageData, setPageData] = useState([]);
  const handlePage = (e, { activePage }) => {
    const page = indexPage(activePage);
    const data = certificates.slice(page.start, page.end);
    setPageData(data);
  };

  useEffect(() => {
    const page = indexPage(1);
    const data = certificates.slice(page.start, page.end);
    setPageData(data);
  }, []);

  return (
    <ContainerComponent>
      <Profile skillsFrontEnd={skillsFrontEnd} skillsBackEnd={skillsBackEnd} />
      <Projects
        projects={projectsList}
        tags={tags}
        filterByTag={filterByTag}
        activeButton={activeButton}
      />
      <Hobbies hobbies={hobbies} />
      <Certificates
        certificates={pageData}
        handlePage={handlePage}
        totalPages={totalPages}
      />
    </ContainerComponent>
  );
}

export default App;
