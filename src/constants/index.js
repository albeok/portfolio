import {
    github, linkedin, react, html, css, js, tailwind, bootstrap, python, django, mongodb, solidity, linux, cryptoReport, veganStyle, btcExchange, healthChainSC, healthChainUI, portfolio
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const skills = [
    {
        id: "html",
        icon: html
    },
    {
        id: "css",
        icon: css
    },
    {
        id: "javascript",
        icon: js
    },
    {
        id: "react",
        icon: react
    },
    {
        id: "tailwind",
        icon: tailwind
    },
    {
        id: "bootstrap",
        icon: bootstrap
    },
    {
        id: "python",
        icon: python
    },
    {
        id: "django",
        icon: django
    },
    {
        id: "solidity",
        icon: solidity
    },
    {
        id: "mongodb",
        icon: mongodb
    },
    {
        id: "linux",
        icon: linux
    }
]

export const projects = [
    {
        id: 0,
        image: cryptoReport,
        title: "Python Project",
        description: "Everyday this program pick some informations from CoinMarketCap to generate some information you care about and save them in a JSON file.",
        skills: ["Python", "JSON"],
        links: {
            "github": "https://github.com/albeok/Python-Project",
            liveDemo: ""
        }
    },
    {
        id: 1,
        image: veganStyle,
        title: "Vegan Style",
        description: "Data board for a synthetic meat startup where the products are registered in the Ethereum Blockchain.",
        skills: ["Python", "Django", "SQLite", "Redis", "Bootstrap"],
        links: {
            "github": "https://github.com/albeok/Django-Redis",
            liveDemo: "http://albertot.pythonanywhere.com/"
        }

    },
    {
        id: 2,
        image: btcExchange,
        title: "Bitcoin Exchange",
        description: "Cryptocurrency exchange platform. USD/BTC exchange with no fees.",
        skills: ["Python", "Django", "MongoDB", "JSON", "Bootstrap"],
        links: {
            "github": "https://github.com/albeok/DJango-MongoDB",
            liveDemo: ""
        }

    },
    {
        id: 3,
        image: healthChainSC,
        title: "HealthChain Back-End",
        description: "Decentralized health records management system built on the Ethereum blockchain.",
        skills: ["Solidity", "HardHat"],
        links: {
            "github": "https://github.com/albeok/HealthChain",
            liveDemo: ""
        }

    },
    {
        id: 4,
        image: healthChainUI,
        title: "HealtChain UI",
        description: "UI of the HealtChain Smart Contract built with React.",
        skills: ["JavaScript", "React", "Tailwind"],
        links: {
            "github": "https://github.com/albeok/HealthChain_UI",
            liveDemo: "https://healthchainui.netlify.app/"
        }

    },
    {
        id: 5,
        image: portfolio,
        title: "Portfolio",
        description: "Wanna Know how I managed to build this? Here's the link!",
        skills: ["JavaScript", "React", "Tailwind"],
        links: {
            "github": "https://github.com/albeok/portfolio",
            liveDemo: ""
        }

    },
]

export const footerLinks = [
    {
        copyright: `Copyright © ${new Date().getFullYear()}. All rights are reserved`,
        socialMedia: [
            {
                id: "social-media-1",
                name: "github",
                icon: github,
                link: "https://www.github.com/albeok",
            },
            {
                id: "social-media-2",
                name: "linkedin",
                icon: linkedin,
                link: "https://www.linkedin.com/in/alberto-t-876425203/",
            },
        ]
    }
];
