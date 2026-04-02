'use client'
import React, { useState, useEffect } from 'react';
import './resume.css';

interface SkillGroup {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  link: string;
}

type themeProps = {
  is_light: boolean,
  setIsLight: () => void,
};

const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Español', 'English'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
  },
  {
    category: 'Programming Languages',
    items: ['C#', 'JavaScript', 'Python', 'TypeScript', 'SQL'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
  },
  {
    category: 'Technologies / Tools',
    items: ['.NET', 'React', 'Next.js', 'GitHub', 'GitHub Actions', 'WebSockets', 'MQTT', 'gRPC', 'AWS', 'Kubernetes', 'Docker', 'MongoDB', 'NoSQL', 'SQL Server', 'PostgreSQL', 'Some ORMs', 'FastAPI', 'Flask', 'HTML', 'CSS'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  },
  {
    category: 'WIP',
    items: ['OpenCV', /*'日本語',*/ 'Golang'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  },
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Intel',
    period: '2021 - 2024',
    description: '',
    link: 'http://www.intel.com/'
  },
  {
    id: 2,
    role: 'Technical Lead -> Principal Engineer',
    company: 'Foodin',
    period: '2021 - 2024',
    description: '',
    link: 'https://www.linkedin.com/company/foodinmx/'
  },
  {
    id: 3,
    role: 'Senior Full Stack Developer',
    company: 'Finerio Connect',
    period: '2018 - 2021',
    description: '',
    link: 'https://finerioconnect.com/en'
  },
  {
    id: 4,
    role: 'Full Stack Developer',
    company: 'Atlantia Search',
    period: '2017 - 2018',
    description: '',
    link: 'https://www.atlantia.ai/en'
  }
];

const about: string = `Programming is one of my hobbies, so I enjoy it.
I have been developing systems for over 10 years, as well as being part of and leading engineering teams.`;

const Portfolio: React.FC = () => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    let savedTheme = (localStorage.getItem('isLight'));
    if (savedTheme == "true") {
      setIsLight(true);
    }
    else {
      setIsLight(false);
    }
  }, []);

  const toogleClass = () => {
    localStorage.setItem('isLight', String(!isLight));
    setIsLight(!isLight);
  };

  return (
    <div id="root" className={isLight ? 'antialiased' : 'dark'}>
      <main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
        <ThemeSwitch is_light={isLight} setIsLight={toogleClass} ></ThemeSwitch>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
          <div className="bg-white md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 md:flex md:items-center">

            {/* Sidebar: Profile Section */}
            <div className="w-full py-8 md:py-0 bg-white dark:bg-gray-900 px-6 pt-16 sm:pt-0">
              <div className="space-y-8 text-center">
                <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
                  {!isLight ? (
                    <div className="rounded-full">
                      <div className="moon">
                        <div className="hole_1"></div>
                        <div className="hole_2"></div>
                      </div>
                    </div>) : (
                    <img
                      src="photo1.jpg"
                      alt=""
                      className={isLight ? 'relative lg:h-44 sm:h-29 rounded-full object-cover border-2 border-white shadow-xl' : 'relative lg:h-44 sm:h-29 rounded-full object-cover border-2 border-white shadow-xl img1'}
                    />)
                  }
                </div>

                <div className='space-y3'>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Abraham Lopez</h1>
                  <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Computer Engineer</h2>
                  <div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4"></div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Programming is one of my hobbies, I have been building systems for over 10 years
                  </p>
                </div>

                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:john.doe@example.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">ablopego@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Remote, MX</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pt-2">
                    <a href="https://github.com/ablogo" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ablogo" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Main Content: Skills & Experience */}
          <div className="md:col-span-3 flex flex-col md:justify-center">
            <div>
              <div className="py-6 bg-white dark:bg-gray-900 px-6">
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Core Skills</h3>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2">
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILLS && SKILLS.map(item => (
                      <SkillCard
                        category={item.category}
                        items={item.items}
                        icon={item.icon}
                      ></SkillCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-6 bg-white dark:bg-gray-900 px-6">
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                  </div>
                  <div className="space-y-5">
                    {EXPERIENCES && EXPERIENCES.map(item => (
                      <ExperienceCard
                        id={item.id}
                        role={item.role}
                        description={item.description}
                        period={item.period}
                        company={item.company}
                        link={item.link}></ExperienceCard>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 flex justify-center">
                <a href='https://www.linkedin.com/in/ablogo/' target='_blank' className="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
                  <svg className="size-6 text-gray-500 dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="py-6 bg-white dark:bg-gray-900 px-6">
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">About</h3>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2">
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className='space-y3'>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-auto mx-auto leading-relaxed">
                        {about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main >
    </div >
  );
};

// Sub-Components

const SkillCard: React.FC<SkillGroup> = ({ category, items, icon }) => (
  <div>
    <div className="flex items-center space-x-2 mb-2">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
        {icon}
      </svg>
      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">{category}</h4>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items && items.map(x => (
        <span className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700">{x}</span>
      ))}
    </div>
  </div>
);

const ExperienceCard: React.FC<Experience> = ({ role, company, period, description, link }) => (
  <div className="relative group">
    <div className="relative pl-4">
      {/* Dot indicator */}
      <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600">
        <div className="w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full z-10 group-hover:border-blue-500 transition-colors" />
      </div>

      <div className="space-y-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h4 className="text-md font-medium text-gray-900 dark:text-white">{role}</h4>
          <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href={link} target='_blank'>{company}</a>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ThemeSwitch: React.FC<themeProps> = (props) => (
  <div className='root ' >
    <button
      className={props.is_light ? 'theme-switcher-grid' : 'theme-switcher-grid night-theme'}
      id="theme-switcher-grid"
      aria-label="Switch theme"
      onClick={props.setIsLight}>
      <div className="sun" id="sun" aria-hidden="true"></div>
      <div className="moon-overlay" id="moon-overlay" aria-hidden="true"></div>
      <div
        className="cloud-ball cloud-ball-left"
        id="ball1"
        aria-hidden="true">
      </div>
      <div
        className="cloud-ball cloud-ball-middle"
        id="ball2"
        aria-hidden="true">
      </div>
      <div
        className="cloud-ball cloud-ball-right"
        id="ball3"
        aria-hidden="true">
      </div>
      <div
        className="cloud-ball cloud-ball-top"
        id="ball4"
        aria-hidden="true">
      </div>
      <div className="star" id="star1" aria-hidden="true"></div>
      <div className="star" id="star2" aria-hidden="true"></div>
      <div className="star" id="star3" aria-hidden="true"></div>
      <div className="star" id="star4" aria-hidden="true"></div>
    </button>
  </div>
);

export default Portfolio;
