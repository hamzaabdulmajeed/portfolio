import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad Hamza",
  lastName: "Abdul Majeed",
  name: `Muhammad Hamza`,
  role: "Mern Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "hamzaabdulmajeed863@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: <>My weekly newsletter about creativity and engineering</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hamzaabdulmajeed",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hamzaabdulmajeed74/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
     I am Muhammad Hamza , a MERN stack developer specializing in building dynamic, scalable, and user-friendly web applications. I focus on crafting clean code, intuitive interfaces, and seamless end-to-end solutions using MongoDB, Express.js, React, and Node.js.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate Full Stack Developer with hands-on experience in building scalable web applications using React,
Next.js, and Node.js. Adept at creating responsive UIs, integrating APIs, and managing backend services. Currently
in the third year of B.Com with a focus on combining business and technology to build impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zeroverticallabs",
        timeframe: "Feb 2025 - Apr 2025",
        role: "React Developer Intern",
        achievements: [
          <>
            Developed frontend features using React and Material UI.
          </>,
          <>
            Built reusable components and implemented Redux for state management
          </>,
          <>
            Contributed to the client project QRGen.com in an agile development environment
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Expertizo University",
        timeframe: "Mar 2024 - Sep 2024",
        role: "Web Developer Trainee",
        achievements: [
          <>
            Learned and applied frontend/backend technologies: React, Firebase, Node.js
          </>,
          <>
            Built real-time applications and integrated third-party APIs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Karachi",
        description: <>Bachelor of Commerce.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Courses",
    skills: [
      {
        title: "Web Development — Expertizo University ",
        description: (
          <>Learned HTML, CSS, JavaScript, React.js, Redux, Firebase, Node.js, MongoDB.</>
        ),
        // tags: [
        //   {
        //     name: "Figma",
        //     icon: "figma",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        ],
      },
      {
        title: "Full Stack Development — Saylani Mass IT Training ",
        description: (
          <>Covered HTML, CSS, JavaScript, Bootstrap, React.js, Firebase, MongoDB, Node.js.</>
        ),
        // tags: [
        //   {
        //     name: "JavaScript",
        //     icon: "javascript",
        //   },
        //   {
        //     name: "Next.js",
        //     icon: "nextjs",
        //   },
        //   {
        //     name: "Supabase",
        //     icon: "supabase",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },  
    ],
  },
};

// const blog: Blog = {
//   path: "/blog",
//   label: "Blog",
//   title: "Writing about design and tech...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery: Gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: `Photo gallery – ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   // Images by https://lorant.one
//   // These are placeholder images, replace with your own
//   images: [
//     {
//       src: "/images/gallery/horizontal-1.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-4.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-3.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-1.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-2.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-2.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-4.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-3.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//   ],
// };

export { person, social, home, about, work };
