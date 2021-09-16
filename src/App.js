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
import project9 from "./images/project_9.jpg";
import project10 from "./images/project_10.jpg";
import project11 from "./images/project_11.jpg";
import project12 from "./images/project_12.jpg";
import project13 from "./images/project_13.jpg";
import project14 from "./images/project_14.jpg";
import project15 from "./images/project_15.jpg";
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
    {
      name: "Buttons Styles",
      tags: ["#REACT"],
      description:
        "This project show a list of buttons styles than you can select according to your needs." +
        " It was build in react, using styled-components for the different types of buttons." +
        " Styled-components help me a little more easier to change the style according to the attribute," +
        " using props to validate each case." +
        " For the icon I have use the library React-Icons, to use icons just put the correct name" +
        " according to the documentation.",
      demo: "https://thirsty-rosalind-7092d5.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_My_Buttons_Styles",
      image: project9,
    },
    {
      name: "Inputs Styles",
      tags: ["#REACT"],
      description:
        "This project show a list of inputs styles than you can select according to your needs." +
        " It was build in react, using styled-components for the different types of inputs." +
        " Styled-components help me a little more easier to change the style according to the attribute," +
        " using props to validate each case." +
        " For the icon I have use the library React-Icons, to use icons just put the correct name" +
        " according to the documentation.",
      demo: "https://lucid-darwin-2328b7.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_My_Inputs_Styles",
      image: project10,
    },

    {
      name: "Windbnb",
      tags: ["#REACT"],
      description:
        "This project show a list of properties, with theirs descriptions. You can filters properties" +
        " by location & numbers of guests. In the top there is a search icon that you can click" +
        " in it and it will open a menu, you can select the location and guests, then click in search." +
        " If you want to clean the search only click in the button clean." +
        " To close the menu only click in the cross icon or in the opaque screen that is below.",
      demo: "https://heuristic-kowalevski-cfddf9.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Windbnb",
      image: project11,
    },
    {
      name: "#todo",
      tags: ["#REACT"],
      description:
        "In this project you can create a list of tasks, checked each task when is completed" +
        " and a menu to see the pendings and completed tasks. You have the option to remove the task also." +
        " To save the data I have used the JSON-SERVER (local database). You can test the project" +
        " without run the server too. The project is responsive." +
        " That I have learned was how to configure the JSON-SERVER. First create the file .json and finally" +
        " run the following command ---> npx json-server --watch data/db.json --port 8000, the part 'data/db,json'" +
        " depend where the file is located and the name.",
      demo: "https://suspicious-liskov-efa29b.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Todo",
      image: project12,
    },
    {
      name: "Quotes Generator",
      tags: ["#REACT"],
      description:
        "This project generate a random quote using the api 'QuoteGarden'. When you load the page" +
        " it will show a random quote from any person, there is a buttom on the top of the page to generate" +
        " another random quote. If you want to see more quotes of the same person, only click in the block" +
        " where the name appears. This will show a list of quotes. The page is responsive.",
      demo: "https://adoring-kirch-8f2f82.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Quote_Generator",
      image: project13,
    },
    {
      name: "Country Quiz",
      tags: ["#REACT"],
      description:
        "This project is a simple quiz game, there are only three topics and it is about countries." +
        " If you answer is correct, you can still playing, but if wrong, the game finish and show the result," +
        " then you can try play again.",
      demo: "https://determined-wing-2282d2.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Contry_Quiz",
      image: project14,
    },
    {
      name: "Weathers",
      tags: ["#REACT", "#NEXTJS"],
      description:
        "This project show the weather, today and the forecast. When you load the page will ask you to" +
        " accept activate your location, to show the weather of your city. You can search the weather of" +
        " the cities provided by the API 'https://www.metaweather.com/api/'. You can change the degrees" +
        " between celsius and fahrenheit. The styles was build using SASS and is responsive.",
      demo: "https://nostalgic-goodall-52550e.netlify.app/",
      code: "https://github.com/ProjectXfire/devChallenges_Weathers",
      image: project15,
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
      name: "NextJS",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
