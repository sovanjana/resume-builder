export const skills: string[] = [
	'JavaScript',
	'TypeScript',
	'React',
	'HTML5',
	'CSS3',
	'Bootstrap',
	'Material UI',
	'Styled Components',
	'Sass',
	'Redux',
	'NodeJS',
	'GatsbyJS',
	'Google Cloud Platform',
	'GraphQL',
	'Git',
	'DevOps'
];

export const companies: Array<{
	id: number;
	heading: string;
	subheading: string;
	midsub: string;
	supersub: string;
	list: string[];
}> = [
	{
		id: 0,
		heading: 'Junior Software Developer',
		subheading: 'Honcho Commercial Pvt. Ltd.',
		midsub: 'Kolkata, India',
		supersub: 'May 2015 - September 2015',
		list: [
			'Role: Web Developer',
			'Requirement Gathering and evaluating client feedback.',
			'Working with senior developers, designers and managers to design algorithms and flowcharts and produce clean, efficient code based on specifications.',
			'Developing components as well as debugging, testing and Reviewing codes developed by others'
		]
	},
	{
		id: 1,
		heading: 'Software Development Engineer',
		subheading: 'Wit By Bit',
		midsub: 'Kolkata, India',
		supersub: 'December 2016 - August 2020',
		list: [
			'Role: Frontend Developer',
			'Designed and Developed large scale webapps using JavaScript, TypeScript, React, Redux, HTML, CSS, GraphQl & GCP etc.',
			'Worked on Express.js, Node,js, Electron to develop desktop apps using NoSQL Database and queries. ',
			'Developing components as well as debugging, testing and Reviewing codes.',
			'Responsible for the assigned tasks deliverables.'
		]
	},
	{
		id: 2,
		heading: 'Engineer II',
		subheading: 'DayToDay Health',
		midsub: 'Bangalore, India',
		supersub: 'August 2020 - present',
		list: [
			'Role: Frontend Developer',
			'Designed and Developed large scale webapps using JavaScript, TypeScript, React, Redux, HTML, CSS etc.',
			'Integrating frontend with backend data by calling APIs and CRUD operations.',
			'Developing components as well as debugging, testing and Reviewing codes.',
			'Participate into the design meetings and suggest user friendly design.',
			'Responsible for the assigned tasks deliverables.'
		]
	}
];
export const achievements: string[] = [
	'Have participated and took second place in the intra-school quiz competition.',
	'Have been a member of the departmental football team in inter college football competition.',
	'Have been a member of a departmental Badminton team of my college.',
	'Have participated in phoenix ’12 & ’13 (tech fest).'
];

export const interests: string[] = [
	'Playing Football and Table Tennis in leisure times. A fan of FC Barcelona.',
	'Reading Newspaper',
	'Exploring New Technologies',
	'Solving Mathematics problem'
];

export const languages: Array<{
	name: string;
	cando: string[];
}> = [
	{
		name: 'English',
		cando: ['Reading', 'Writing', 'Speaking']
	},
	{
		name: 'Hindi',
		cando: ['Reading', 'Speaking']
	},
	{
		name: 'Bengali',
		cando: ['Reading', 'Writing', 'Speaking']
	}
];

export const projects: Array<{
	id: number;
	heading: string;
	list: string[];
}> = [
	{
		id: 1,
		heading: 'QuizShow (April, 2017 - August 2020)',
		list: [
			'Type: A Progressive Web Application',
			'QuizShow is a realtime quiz with admin dashboard, statistics and customizable options.',
			'Application made with JavaScript, ReactJS, Gatsby, Redux, Firestore, GraphQL, HTML5, CSS3, Bootstrap and SVG.'
		]
	},
	{
		id: 2,
		heading: 'Kompanero (January, 2018 - May, 2018)',
		list: [
			'Type: Progressive Web Application',
			'A blazing fast eCommerce application for Kompanero, a worldwide leather bag seller. Application made buying experience more smooth',
			'Application made with JavaScript, ReactJS, Gatsby, Firestore, GraphQL, Shopify, HTML5, CSS3, Bootstrap.'
		]
	},
	{
		id: 3,
		heading: 'Decorum (June, 2018 - August 2020)',
		list: [
			'Type: Web Application',
			"Decorum is a cloud-based platform for SMEs and MSMEs to manage and streamline customers/ distributors, sales team and back office. It uses data analysis about customers' history with a company to improve business relationships with customers with big-data analysis. It lets businesses set up their outlets and manage order in a customized flow. Even, restaurants can take up orders in tables on the application and manage the tasks efficiently. Major billing software such as Tally, SAP has also been integrated for seamless experience.",
			'Application made with JavaScript, ReactJS, Firestore, Cloud Function, Material-ui and styled-components.'
		]
	},
	{
		id: 4,
		heading: 'Labour Compliance (July, 2018 - August 2020)',
		list: [
			'Type: Web Application (a World Bank project)',
			'A complete solution of labour management and compliance system.',
			'Application made with JavaScript, ReactJS, Firestore, Cloud Function, HTML5, CSS3 and Bootstrap.'
		]
	},
	{
		id: 5,
		heading: 'DayToDay Web Dashboard (August, 2020 - present)',
		list: [
			'Type: Web Application (a health care project)',
			'End to end patient management solution.',
			'Application made with JavaScript, ReactJS, MongoDB, HTML5, CSS3 and Bootstrap.'
		]
	},
	{
		id: 6,
		heading: 'DayToDay PWA (June, 2021 - present)',
		list: [
			'Type: Mobile Application (a health care project)',
			'End to end patient management solution.',
			'Application made with JavaScript, TypeScript, ReactJS, MongoDB, HTML5, CSS3 and Material UI.'
		]
	}
];

export const educations: Array<{
	id: number;
	heading: string;
	subheading: string;
	midsub: string;
	supersub: string;
	list: string[];
}> = [
	{
		id: 0,
		heading: 'Bachelor Of Technology in Information Technology',
		subheading: 'Future Institute of Engineering and Management (WBUT)',
		midsub: 'Kolkata, India',
		supersub: 'August 2009 - August 2013',
		list: [
			'Secured 7.2 CGPA',
			'Course Included: Compiler Design, Automata, Networking, JAVA, C, Data Structures & Algorithms, DBMS, Operating System etc.'
		]
	}
];
