const skillNames = [
	'Vue',
	'React',
	'Svelte',
	'Sass',
	'TailwindCSS',
	'Java',
	'Kotlin',
	'Python',
	'PHP',
	'Wordpress',
	'Django',
	'Spring',
	'RabbitMQ',
	'Node',
	'Magento2',
	'Sharepoint',
	'Azure Cloud',
	'Git',
	'Jenkins',
	'AWS',
	'ThreeJS',
	'PostgreSQL',
	'MySQL',
	'MongoDB',
	'Supabase',
	'Google Cloud',
	'Docker',
	'Kubernetes',
	'Terraform',
	'Next.js'
] as const;

export type Skill = {
	id: number;
	name: (typeof skillNames)[number];
	logo: string;
	url: string;
	score: number;
	tags: string[];
	description: string;
};

export const skills = [
	{
		id: 1,
		name: 'Vue',
		logo: './assets/vue.svg',
		url: 'https://vuejs.org/',
		score: 5,
		tags: [],
		description: 'Vue.js is a progressive JavaScript framework for building user interfaces.'
	},
	{
		id: 2,
		name: 'React',
		logo: './assets/react.svg',
		url: 'https://reactjs.org/',
		score: 4,
		tags: [],
		description:
			'React is a JavaScript library for building user interfaces, maintained by Facebook.'
	},
	{
		id: 3,
		name: 'Svelte',
		logo: './assets/svelte.svg',
		url: 'https://svelte.dev/',
		score: 5,
		tags: [],
		description:
			'Svelte is a new approach to building user interfaces, shifting the work to compile time.'
	},
	{
		id: 4,
		name: 'Sass',
		logo: './assets/sass.svg',
		url: 'https://sass-lang.com/',
		score: 3,
		tags: [],
		description:
			'Sass is a preprocessor scripting language that is interpreted or compiled into CSS.'
	},
	{
		id: 5,
		name: 'TailwindCSS',
		logo: './assets/tailwindcss.svg',
		url: 'https://tailwindcss.com/',
		score: 5,
		tags: [],
		description:
			'TailwindCSS is a utility-first CSS framework for rapidly building custom user interfaces.'
	},
	{
		id: 6,
		name: 'Java',
		logo: './assets/java.svg',
		url: 'https://dev.java/',
		score: 5,
		tags: [],
		description:
			'Java is a high-level, class-based, object-oriented programming language widely used for building applications.'
	},
	{
		id: 7,
		name: 'Kotlin',
		logo: './assets/kotlin.svg',
		url: 'https://kotlinlang.org/',
		score: 4,
		tags: [],
		description:
			'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.'
	},
	{
		id: 8,
		name: 'Python',
		logo: './assets/python.svg',
		url: 'https://www.python.org/',
		score: 3,
		tags: [],
		description:
			'Python is a high-level, interpreted programming language known for its readability and versatility.'
	},
	{
		id: 9,
		name: 'PHP',
		logo: './assets/php.svg',
		url: 'https://www.php.net/',
		score: 3,
		tags: [],
		description:
			'PHP is a popular general-purpose scripting language that is especially suited to web development.'
	},
	{
		id: 10,
		name: 'Wordpress',
		logo: './assets/wordpress.svg',
		url: 'https://wordpress.org/',
		score: 4,
		tags: [],
		description:
			'WordPress is a content management system (CMS) that allows users to create and manage websites easily.'
	},
	{
		id: 11,
		name: 'Django',
		logo: './assets/django.svg',
		url: 'https://www.djangoproject.com/',
		score: 3,
		tags: [],
		description:
			'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.'
	},
	{
		id: 12,
		name: 'Spring',
		logo: './assets/spring.svg',
		url: 'https://spring.io/',
		score: 5,
		tags: [],
		description: 'Spring is a comprehensive framework for enterprise Java development.'
	},
	{
		id: 13,
		name: 'RabbitMQ',
		logo: './assets/rabbitmq.svg',
		url: 'https://www.rabbitmq.com/',
		score: 3,
		tags: [],
		description:
			'RabbitMQ is an open-source message-broker software that implements the Advanced Message Queuing Protocol (AMQP).'
	},
	{
		id: 14,
		name: 'Node',
		logo: './assets/nodejs.svg',
		url: 'https://nodejs.org/',
		score: 5,
		tags: [],
		description:
			"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting."
	},
	{
		id: 15,
		name: 'Magento2',
		logo: './assets/magento2.svg',
		url: 'https://business.adobe.com/products/magento/magento-commerce.html',
		score: 3,
		tags: [],
		description: 'Magento 2 is an open-source e-commerce platform written in PHP.'
	},
	{
		id: 16,
		name: 'Sharepoint',
		logo: './assets/sharepoint.svg',
		url: 'https://www.microsoft.com/en-ww/microsoft-365/sharepoint/collaboration',
		score: 3,
		tags: [],
		description:
			'SharePoint is a web-based collaborative platform that integrates with Microsoft Office.'
	},
	{
		id: 17,
		name: 'Azure Cloud',
		logo: './assets/azure.svg',
		url: 'https://azure.microsoft.com/',
		score: 4,
		tags: [],
		description:
			'Microsoft Azure is a cloud computing service for building, testing, deploying, and managing applications and services.'
	},
	{
		id: 18,
		name: 'Git',
		logo: './assets/git.svg',
		url: 'https://git-scm.com/',
		score: 5,
		tags: [],
		description:
			'Git is a free and open-source distributed version control system designed to handle everything from small to very large projects.'
	},
	{
		id: 19,
		name: 'Jenkins',
		logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
		url: 'https://www.jenkins.io/',
		score: 2,
		tags: [],
		description:
			'Jenkins is an open-source automation server that enables developers to build, test, and deploy their software.'
	},
	{
		id: 20,
		name: 'AWS',
		logo: './assets/aws.svg',
		url: 'https://aws.amazon.com/',
		score: 3,
		tags: [],
		description:
			'Amazon Web Services (AWS) is a comprehensive and widely adopted cloud platform offering over 200 fully featured services.'
	},
	{
		id: 21,
		name: 'ThreeJS',
		logo: './assets/threejs.svg',
		url: 'https://threejs.org/',
		score: 3,
		tags: [],
		description:
			'Three.js is a JavaScript library that makes creating 3D graphics in the browser easier.'
	},
	{
		id: 22,
		name: 'PostgreSQL',
		logo: './assets/postgresql.svg',
		url: 'https://www.postgresql.org/',
		score: 5,
		tags: [],
		description: 'PostgreSQL is a powerful, open-source object-relational database system.'
	},
	{
		id: 23,
		name: 'MySQL',
		logo: 'https://www.mysql.com/common/logos/mysql-logo.svg',
		url: 'https://www.mysql.com/',
		score: 4,
		tags: [],
		description: 'MySQL is an open-source relational database management system.'
	},
	{
		id: 24,
		name: 'MongoDB',
		logo: './assets/mongodb.svg',
		url: 'https://www.mongodb.com/',
		score: 4,
		tags: [],
		description: 'MongoDB is a source-available cross-platform document-oriented database program.'
	},
	{
		id: 25,
		name: 'Supabase',
		logo: './assets/supabase.svg',
		url: 'https://supabase.com/',
		score: 3,
		tags: [],
		description:
			'Supabase is an open-source Firebase alternative that provides a suite of tools for database management.'
	},
	{
		id: 26,
		name: 'Google Cloud',
		logo: './assets/googlecloud.svg',
		url: 'https://cloud.google.com/',
		score: 2,
		tags: [],
		description:
			'Google Cloud is a suite of cloud computing services that runs on the same infrastructure that Google uses internally.'
	},
	{
		id: 27,
		name: 'Docker',
		logo: './assets/docker.svg',
		url: 'https://www.docker.com/',
		score: 4,
		tags: [],
		description:
			'Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.'
	},
	{
		id: 28,
		name: 'Kubernetes',
		logo: './assets/kubernetes.svg',
		url: 'https://kubernetes.io/',
		score: 3,
		tags: [],
		description:
			'Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.'
	},
	{
		id: 29,
		name: 'Terraform',
		logo: './assets/terraform.svg',
		url: 'https://www.terraform.io/',
		score: 3,
		tags: [],
		description:
			'Terraform is an open-source infrastructure as code software tool created by HashiCorp.'
	},
	{
		id: 30,
		name: 'Next.js',
		logo: './assets/nextjs.svg',
		url: 'https://nextjs.org/',
		score: 4,
		tags: [],
		description:
			'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.'
	}
] satisfies Skill[];

export type ExperienceItem = {
	category: 'work' | 'education' | 'project';
	startDate: Date;
	endDate: Date | undefined;
	place: 'Vienna';
	title: string;
	description: string;
	status: 'done' | 'waiting' | 'progress';
	skills: Skill['name'][];
	bullets: string[];
};

export const experience: ExperienceItem[] = [
	{
		category: 'work',
		place: 'Vienna',
		startDate: new Date('2024-01-01'),
		endDate: undefined,
		title: 'Rendity',
		description: 'Senior Software Engineer',
		status: 'progress',
		skills: ['Node', 'Docker', 'React'],
		bullets: [
			'Customer KYC verification',
			'Asset Tokenization on the Polygon Blockchain',
			'Payment gateway integration with Lemonway'
		]
	},
	{
		category: 'work',
		place: 'Vienna',
		startDate: new Date('2019-06-01'),
		endDate: undefined,
		title: 'Hyke Systems',
		description: 'Software Engineer / Consultant',
		status: 'progress',
		skills: [],
		bullets: ['Website development with Next.js', 'Software Consulting', 'Wordpress Development']
	},

	{
		category: 'work',
		place: 'Vienna',
		startDate: new Date('2015-03-01'),
		endDate: new Date('2024-01-01'),
		title: 'Vienna BioCenter Core Facilities',
		description: 'Software Architect',
		status: 'done',
		skills: ['Java', 'Spring', 'PostgreSQL'],
		bullets: [
			'Building campus wide LIMS systems',
			'eCommerce solutions for labs',
			'User management / data centralization / invoice generation',
			'Automized deployments with Terraform / Jenkins / Kubernetes'
		]
	},
	{
		category: 'education',
		place: 'Vienna',
		startDate: new Date('2012-09-01'),
		endDate: undefined,
		title: 'Univsersity of Vienna',
		description: 'Bachelor of Psychology',
		status: 'waiting',
		skills: [],
		bullets: []
	},

	{
		category: 'education',
		place: 'Vienna',
		startDate: new Date('2006-09-01'),
		endDate: new Date('2011-06-30'),
		title: 'Technologisches Gewerbemuseum',
		description: 'Information Technology',
		status: 'done',
		skills: [],
		bullets: []
	}
];

export const pages = ['home', 'experience', 'skills', 'about'] as const;

export type Page = (typeof pages)[number];

type Store = {
	focusSkill: number | false;
	activeSkill: Skill | undefined;
	currentPage: Page;
};

type UpdateStore = Partial<Store>;

function createStore() {
	const value: Store = $state({
		focusSkill: 0,
		activeSkill: undefined,
		currentPage: 'home'
	});

	return {
		get value() {
			return value;
		},
		update: (data: UpdateStore) => {
			Object.assign(value, data);
		}
	};
}

export const store = createStore();
