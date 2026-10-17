const projectsItem = [
  {
    id: 1,
    name: "Algorym",
    description: `Algorym is a live collaborative interview platform where a host and a candidate meet in one shared code editor, write and run code together, and replay every moment afterward. Built as a full stack TypeScript monorepo with React, Node, Express, PostgreSQL and WebSockets, it keeps every keystroke in sync through Yjs with live cursors and presence. The editor runs five languages and streams execution verdicts back instantly, while hosts keep private notes, evaluate the candidate, and revisit each session through a persisted event log.`,
    imageUrl: "/Projects/project1.webp",
    color: "rgb(255, 146, 70)",
    link: "https://algorym-dev.netlify.app",
  },
  {
    id: 2,
    name: "SqueezeBook",
    description: `A personal book notes web app to track and organize my reading journey.
                        I built SqueezeBook using Node.js, Express, EJS, Postgres and Passport.js for Authentication. The app allows users to add books by ISBN, automatically fetch book details. It focuses on simplicity, with a clean UI and dynamic rendering using EJS templates. The backend ensures smooth data management while providing a structured way to keep track of books read and insights gained.`,
    imageUrl: "/Projects/project3.webp",
    color: "rgb(107, 216, 120)",
    link: "https://squeezebook.vercel.app/",
  },
  {
    id: 3,
    name: "WorldWise",
    description: `A personal travel tracker web app to log and organize journeys across the globe. 
        WorldWise is built with React, React Router, Context API, and Leaflet for interactive maps. 
        Users can sign in, mark cities on a world map, add notes, and update visit dates. It also provides a 
        dedicated view of all visited countries, with the option to delete any city. A “current position” 
        feature makes it easy to log the present location instantly. The app focuses on an intuitive map-based 
        interface and dynamic rendering for a smooth user experience, offering a structured way to remember 
        and share travel adventures.`,
    imageUrl: "/Projects/project6.webp",
    color: "rgb(107, 216, 120)",
    link: "https://worldwisenet.netlify.app/",
  },
  {
    id: 4,
    name: "Blood Management",
    description: `BloodLink is a desktop blood bank management application I built with C# and Windows Forms. It gives blood banks and hospitals one central place to manage donors, track blood unit inventory with automatic expiry handling, and process patient requests, all behind role-based Admin and Operator logins with BCrypt-hashed passwords. The app ships with a themeable dark/light dashboard showing live statistics, chart-based reports for stock levels and monthly donations, staff management, and configurable settings, designed for smooth day-to-day operations in a clinical environment.`,
    imageUrl: "/Projects/project8.webp",
    color: "rgb(220, 38, 38)",
    link: "https://github.com/Abid-Hussain13/BloodLink",
  },
];

export default projectsItem;
