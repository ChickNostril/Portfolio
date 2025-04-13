import {
	css,
	ncsoft,
	kakaotech,
	git,
	html,
	javascript,
	nodejs,
	reactjs,
	redux,
	tailwind,
	threejs,
	typescript,
	cafesang,
	covidtracker,
	inutdesign,
	kingstonedanang,
	noorcafe,
	noorkombucha,
	taptaponme,
	portfolio2021,
	zustand,
	fastapi,
	express,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
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

const services = [
	{
		title: "Javascript",
		icon: javascript,
	},
	{
		title: "Typescript",
		icon: typescript,
	},
	{
		title: "React",
		icon: reactjs,
	},
	{
		title: "Zustand",
		icon: zustand,
	},
	{
		title: "Three",
		icon: threejs,
	},
	{
		title: "Express",
		icon: express,
	},
	{
		title: "fastAPI",
		icon: fastapi,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "Full-stack & Cloud Engineering",
		company_name: "KakaoTech Bootcamp Cloud Native Jeju",
		icon: kakaotech,
		iconBg: "#ffce03",
		date: "Apr 2024 - Oct 2024",
		points: [
			"INUT Design (www.inutdesign.com) - An E-commerce website for customizing laptops, mobile, camera skin.",
			"TapTapOn.me - My small start-up project, which provides the Smart Business Card by NFC technology",
			"KingstoneDanang.com - A website for displaying Granite & Marble stone, Furniture - Exterior products.",
			"NOOR Coffee Website - NOOR Kombucha Website - A website for the coffee shop includes: Blog, View Products, View Review",
		],
	},
	{
		title: "Front-end Engineering",
		company_name: "NCSOFT",
		icon: ncsoft,
		iconBg: "#103464",
		date: "Nov 2024 - Feb 2025",
		points: [
			"I participated as a Software Engineer Intern. After 1 year, I was promoted to Middle Software Engineer at DHA",
			"Consult & design Front-end architecture and solutions.",
			"Working on multiple projects simultaneously in both Web and Mobile apps.",
			"Research and apply new technologies to the Front-end repository.",
			"Manage tasks & efforts for the Front-end team.",
			"Review code & support team members.",
			"Interview, Technical training for interns & new junior F.E (React) developers.",
			"Technologies: React, React Native, Redux, Restful API, AWS services, Firebase, SEO,...",
			"Domain: US public sectors",
		],
	},
];

const projects = [
	{
		name: "INUT Design",
		description:
			"An E-commerce website for customizing laptops, mobile, camera skin",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "Firebase",
				color: "pink-text-gradient",
			},
			{
				name: "Framer motion",
				color: "blue-text-gradient",
			},
			{
				name: "Material UI",
				color: "green-text-gradient",
			},
			{
				name: "ThreeJS",
				color: "pink-text-gradient",
			},
		],
		image: inutdesign,
		source_code_link: "https://inutdesign.com/",
	},
	{
		name: "TapTapOn.Me",
		description:
			"My small start-up project, which provides the Smart Business Card by NFC technology",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Firebase",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "blue-text-gradient",
			},
		],
		image: taptaponme,
		source_code_link: "https://taptapon.me/",
	},
	{
		name: "Portfolio",
		description:
			"My pervious portfolio website to show my information and practice 3D web animation",
		tags: [
			{
				name: "Next",
				color: "blue-text-gradient",
			},
			{
				name: "ThreeJS",
				color: "green-text-gradient",
			},
			{
				name: "Framer motion",
				color: "pink-text-gradient",
			},
			{
				name: "React Three Fiber",
				color: "blue-text-gradient",
			},
			{
				name: "Spline",
				color: "green-text-gradient",
			},
		],
		image: portfolio2021,
		source_code_link: "https://tinspham.dev/",
	},
	{
		name: "Kingstone Danang",
		description:
			"A website for displaying Granite & Marble stone, Furniture - Exterior products",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
		],
		image: kingstonedanang,
		source_code_link: "https://kingstonedanang.com/",
	},
	{
		name: "NOOR Coffee Website",
		description:
			"A website for the coffee shop includes: Blog, View Products, View Review",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
		],
		image: noorcafe,
		source_code_link: "https://noor-cf.web.app/",
	},
	{
		name: "NOOR Kombucha Website",
		description:
			"A website for the coffee shop includes: Blog, View Products, View Review",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
		],
		image: noorkombucha,
		source_code_link: "https://noor-kombucha.web.app/",
	},
	{
		name: "Cafesang",
		description:
			"A community of like-minded individuals passionate about information technology, coming together to exchange ideas, insights, and expertise",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Youtube API",
				color: "green-text-gradient",
			},
		],
		image: cafesang,
		source_code_link: "https://cafe-sang.web.app/",
	},
	{
		name: "Covid Tracker",
		description:
			"A website for Visualization infected, recovered, deaths in card, table, chart, maps on worldwide of COVID-19",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "React-ChartJS",
				color: "blue-text-gradient",
			},
			{
				name: "Leaflet",
				color: "green-text-gradient",
			},
		],
		image: covidtracker,
		source_code_link: "https://covid-tracker-dksgsd.surge.sh/",
	},
];

export { services, technologies, experiences, projects };
