import React from "react";
import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-scroll";

const features = [
  {
    name: "JustData",
    description: "A simple survey form for collecting client data",
    image: "/images/justdata.png",
    github: "https://github.com/ChrisB007/onboarding",
    website: "https://data-collector.netlify.app/",
    tech: "Tech: Vanilla JS, Bootstrap, CSS",
  },
  {
    name: "TuberDome",
    description: "A place online for sponsors and content creators.",
    image: "/images/riddleme.png",
    github: "https://github.com/ChrisB007/Prod-tuberDome",
    website: "https://www.tuberdome.com/",
    tech: "Tech: ReactJS, ReactStrap",
  },
  {
    name: "RestFUL Riddles",
    description: "A REST API With Node.js, Express, & MongoDB",
    image: "/images/apiroutes.png",
    github: "https://github.com/ChrisB007/api-garage",
    tech: "Tech: MongoDB, Express, NodeJS",
  },
  {
    name: "Project Portfolio",
    description: "My online portfolio showcasing projects.",
    image: "/images/projectport.png",
    github: "https://github.com/ChrisB007/portfolio",
    website: "https://chrisb.app",
    tech: "Tech: HTML 5 Stack, TailwindCSS",
  },
];
const metrics = [
  { id: 1, stat: "NodeJS", emphasis: "Backend", rest: "https://nodejs.org/" },
  {
    id: 2,
    stat: "Python",
    emphasis: "Backend",
    rest: "https://www.python.org/",
  },
  {
    id: 3,
    stat: "NoSQL",
    emphasis: "Backend",
    rest: "https://en.wikipedia.org/wiki/NoSQL",
  },
  {
    id: 4,
    stat: "SQL",
    emphasis: "Backend",
    rest: "https://en.wikipedia.org/wiki/SQL",
  },
];
const footerNavigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chris-bitoye-196b92207",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ChrisBitoy",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/ChrisB007",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Landing = (props) => {
  return (
    <>
      <div id="top" className="bg-white">
        <header>
          <Popover className="relative bg-white">
            {({ open }) => (
              <>
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <p className="logo text-4xl shadow-sm text-gray-800">
                        &lt;chrisBitoye &frasl;&gt;
                      </p>
                    </a>
                  </div>
                </div>
              </>
            )}
          </Popover>
        </header>

        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Hey, I'm Chris.</span>
                    <span className="block text-gray-100 ">
                      A FullStack Engineer.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    I specialize in NERDS (Node.js, Express, React, Databases
                    using SQL. | NoSQL) stack.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <Link
                        id="tofrontend"
                        to="frontendportfolio"
                        smooth={true}
                        duration={3000}
                        className="frontendbg flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:text-black hover:bg-red-100 sm:px-8"
                      >
                        FrontEnd
                      </Link>
                      <Link
                        id="tobackend"
                        to="backendportfolio"
                        smooth={true}
                        duration={3000}
                        className="backendbg flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        BackEnd
                      </Link>
                      <svg
                        class="flex items-center justify-center animate-bounce w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Some of the tools I use proficiently
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/node.png" alt="NodeJS" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/expressjs.svg"
                    alt="ExpressJS"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/react.png" alt="ReactJS" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/python.png" alt="Python" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/next.png" alt="NextJS" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="/images/django.png" alt="Django" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/passport.png"
                    alt="PassportJS"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/postgresql.png"
                    alt="postgresql"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/mongodb.png"
                    alt="MongoDB"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="/images/tensorflow.png"
                    alt="TensorFlow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div id="projectone" className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        PublicTrades
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        I have always wanted to be part of a startup accelerator
                        to some capacity, so I built a simple one to host all my
                        projects. PublicTrades was built on NextJS, ProsgreSQL
                        (Sequelize for ORM), tailwindcss.
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://www.publictrades.com/"
                          target="blank"
                          className="visitsite inline-flex flex mr-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                        >
                          Visit Project site
                        </a>
                        <a
                          href="https://github.com/ChrisB007/publicTrades"
                          target="blank"
                          className="github inline-flex flex space-x-4 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                        >
                          On GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6"></div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/ptradeport.png"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="projecttwo" className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        FluidFlats
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Platform that offers real estate renters the freedom to
                        live anywhere without constraint. The site was developed
                        with NextJS, MongoDB, and tailwindcss.
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://www.fluidflats.com/"
                          target="blank"
                          className="visitsite inline-flex flex mr-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                        >
                          Visit Project site
                        </a>
                        <a
                          href="https://github.com/ChrisB007/ProdFluidFlats"
                          target="blank"
                          className="github inline-flex flex space-x-4 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                        >
                          On GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/moodflics.png"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div className="frontendbg">
            <div
              id="frontendportfolio"
              className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
            >
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Front-End
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-gray-100">
                Below is a list of other projects I developed using various
                front-end technologies.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="items-center m-6 justify-center h-12 rounded-md bg-white bg-opacity-10">
                        <img
                          className="projend my-8 rounded-lg"
                          src={feature.image}
                          alt={feature.name}
                        />
                      </span>
                    </div>
                    <div className="mt-5">
                      <h3 className="text-lg font-medium text-white text-center">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-100 text-center">
                        {feature.description}
                      </p>
                      <p className="mt-2 text-base text-gray-100 frontbutton justify-center items-center text-center">
                        <a href={feature.github} target="blank">
                          On github
                        </a>
                      </p>
                      <p className="mt-2 text-base text-gray-100 frontbutton justify-center items-center text-center">
                        <a href={feature.website} target="blank">
                          Visit Website
                        </a>
                      </p>
                      <p className="mt-2 text-base text-gray-100 text-center">
                        {feature.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="relative bg-gray-900">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-1 xl:grid-flow-col-dense xl:gap-x-8">
              <div
                id="backendportfolio"
                className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
              >
                <p className="mt-3 text-3xl font-extrabold text-white">
                  Back-End
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  As I continue adding more projects, learning and using more
                  technologies; these are some of the technologies powering the
                  above projects.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-white">
                        {item.stat}
                      </span>
                      <span className="mt-1 block text-base text-gray-300">
                        <span className="font-medium text-white">
                          {item.emphasis}
                        </span>{" "}
                        {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-50" aria-labelledby="footerHeading">
          <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
            <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                {/* Something should go here */}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
