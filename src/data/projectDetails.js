const projectsItem = [
    {
        id: 1,
        name: "Algorym",
        description: `Algorym is a live collaborative interview platform where a host and a candidate meet in one shared code editor, write and run code together, and replay every moment afterward. I built it as a full stack TypeScript monorepo with React, Vite, Tailwind, Redux Toolkit and TanStack Query on the client, and Node, Express, PostgreSQL and WebSockets on the server. A single tokenized invite link lets a guest join straight from the browser with no account, and every keystroke stays in sync through Yjs alongside a WebSocket collaboration server that renders live cursors and presence in real time. The editor runs five languages, JavaScript, Python, Java, C++ and Go, and streams execution verdicts back to both screens instantly. Hosts choose a question and can swap it mid session, keep private notes, and score the candidate as weak, average or strong, while a persisted event log makes each session replayable like a video. With authenticated dashboards, scheduling, reporting and careful encrypted flows, Algorym was designed and engineered end to end as a real product rather than a demo.`,
        imageUrl: "/Projects/project1.png",
        color: 'rgb(255, 146, 70)',
        link: "https://algorym-dev.netlify.app"
    },
    {
        id: 2,
        name: "SqueezeBook",
        description: `A personal book notes web app to track and organize my reading journey.
                        I built SqueezeBook using Node.js, Express, EJS, Postgres and Passport.js for Authentication. The app allows users to add books by ISBN, automatically fetch book details. It focuses on simplicity, with a clean UI and dynamic rendering using EJS templates. The backend ensures smooth data management while providing a structured way to keep track of books read and insights gained.`,
        imageUrl: "/Projects/project3.png",
        color: 'rgb(107, 216, 120)',
        link: "https://squeezebook.vercel.app/"
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
        imageUrl: "/Projects/project6.png",
        color: 'rgb(107, 216, 120)',
        link: "https://worldwisenet.netlify.app/"
    }
]

export default projectsItem