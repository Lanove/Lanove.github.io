// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-chikaku",
          title: 'Chikaku',
          description: "A custom carrier board for Jetson SoMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_chikaku/";
            },},{id: "projects-hotberry",
          title: 'Hotberry',
          description: "BGA Rework Station Temperature Controller",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_hotberry/";
            },},{id: "projects-life4line",
          title: 'LiFe4Line',
          description: "A LiFePO4 Battery Tester for Laboratory.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_life4line/";
            },},{id: "projects-lokapin",
          title: 'Lokapin',
          description: "A low power pet tracking device",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_lokapin/";
            },},{id: "projects-mynd",
          title: 'Mynd',
          description: "A programmable school bell system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_mynd/";
            },},{id: "projects-stromvy",
          title: 'Stromvy',
          description: "An STM32-based Laboratory Power Supply",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_stromvy/";
            },},{id: "projects-tulibot",
          title: 'Tulibot',
          description: "A wireless transcription device.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/es_tulibot/";
            },},{id: "projects-fiammetta",
          title: 'Fiammetta',
          description: "A dynamic quadruped robot dog.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robots_fia/";
            },},{id: "projects-garaga",
          title: 'Garaga',
          description: "A 4-DoF robotic arm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robots_garaga/";
            },},{id: "projects-phynix-1",
          title: 'Phynix-1',
          description: "A hexapod robot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robots_phynix/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%69%67%6F%61%72%7A%61%6B%69%31%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/figoarzaki", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
