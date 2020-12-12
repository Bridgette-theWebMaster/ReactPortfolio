import Moshimoshi from "./Assets/Moshimoshi.png";
import Bobsburgers from "./Assets/Bobburgers.png";
import Moviesearch from "./Assets/Moviesearch.png";

const STORE = {
  projects: [
    {
      id: 1,
      name: "Moshi Moshi",
      description:
        "Easy to use phonebook. Store and update contacts. Directly send emails to contacts. Schedule reminders with contacts using Google Calendar",
      tech:
        "React, Node, Express, Postgres, EmailJS, AWS S3, Multer, Google Calendar",
      liveSite: "https://moshi-moshi.vercel.app",
      clientRepo: "https://github.com/Bridgette-theWebMaster/phonebook",
      serverRepo: "https://github.com/Bridgette-theWebMaster/phonebook-server",
      photo: Moshimoshi,
    },
    {
      id: 2,
      name: "Bob's Burgers",
      description:
        "Create an account and order burgers with the humbly owned family restaurant, Bob's Burgers",
      tech: "React, Node, Express, Postgres",
      liveSite: "https://bobs-burgers.vercel.app",
      clientRepo:
        "https://github.com/Bridgette-theWebMaster/bobs-burgers-burger-orderer",
      serverRepo:
        "https://github.com/Bridgette-theWebMaster/bobs-burgers-server",
      photo: Bobsburgers,
    },
    {
      id: 3,
      name: "React Movie Search",
      description: "Find details about your favorite movies.",
      tech: "React, themoviedb API",
      liveSite: null,
      clientRepo: "https://github.com/Bridgette-theWebMaster/Movie-Search",
      serverRepo: null,
      photo: Moviesearch,
    },
  ],
};

export default STORE;
