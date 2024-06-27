const skillNames = [
	'Vue',
	'React',
	'Svelte',
	'CSS3',
	'Sass',
	'postCSS',
	'Java',
	'Python',
	'PHP',
	'Wordpress',
	'Spring',
	'Node',
	'Magento2',
	'Sharepoint',
	'Azure Cloud',
	'Azure DevOps',
	'Git',
	'Jenkins',
	'AWS',
	'WebGL',
	'PostgreSQL',
	'MySQL',
	'Google Cloud',
	'Docker',
	'Kubernetes',
	'Terraform'
] as const;

export type Skill = {
	id: number;
	name: (typeof skillNames)[number];
	logo: string;
	url: string;
	experience: string;
	score: number;
};

export const skills: Skill[] = [
	{
		id: 1,
		name: 'Vue',
		logo: './assets/vue.svg',
		url: 'https://vuejs.org/',
		experience: 'Used multiple years at work as main frontend framework',
		score: 5
	},
	{
		id: 2,
		name: 'React',
		logo: './assets/react.svg',
		url: 'https://reactjs.org/',
		experience: 'Used for a bit in private projects, espacally with the combination of next.js',
		score: 2.5
	},
	{
		id: 3,
		name: 'Svelte',
		logo: './assets/svelte.svg',
		url: 'https://svelte.dev/',
		experience: 'Since svelte 3 used whenever possible. SvelteKit is also great! :)',
		score: 4
	},
	{
		id: 4,
		name: 'CSS3',
		logo: './assets/css3.svg',
		url: 'https://www.w3.org/Style/CSS/',
		experience: 'Used for a long time, but recently replaced by tailwindcss',
		score: 5
	},
	{
		id: 5,
		name: 'Sass',
		logo: './assets/sass.svg',
		url: 'https://sass-lang.com/',
		experience: 'Step up from plain css, but recently also replaced by tailwindcss',
		score: 3
	},
	{
		id: 6,
		name: 'postCSS',
		logo: './assets/postcss.svg',
		url: 'https://postcss.org/',
		experience: 'Currently used in combination with tailwindcss, autoprefixer and nesting',
		score: 3
	},
	{
		id: 7,
		name: 'Java',
		logo: './assets/java.svg',
		url: 'https://dev.java/',
		experience: 'Main backend language at work, used for a long time',
		score: 5
	},
	{
		id: 8,
		name: 'Python',
		logo: './assets/python.svg',
		url: 'https://www.python.org/',
		experience: 'Small projects mostly for data analysis',
		score: 2.5
	},
	{
		id: 9,
		name: 'PHP',
		logo: './assets/php.svg',
		url: 'https://www.php.net/',
		experience: 'Mostly in combination with Frameworks like Laravel or Symfony',
		score: 3
	},
	{
		id: 10,
		name: 'Wordpress',
		logo: './assets/wordpress.svg',
		url: 'https://wordpress.org/',
		experience: 'Used as company intranet and devloped custom theme and plugins',
		score: 4
	},
	{
		id: 11,
		name: 'Spring',
		logo: './assets/spring.svg',
		url: 'https://spring.io/',
		experience: 'Main backend framework in recent years. Happy to try Quarkus at some point',
		score: 4
	},
	{
		id: 12,
		name: 'Node',
		logo: 'https://nodejs.org/static/images/logo.svg',
		url: 'https://nodejs.org/',
		experience: 'Usally for smaller projects or as backend for frontend frameworks',
		score: 3.5
	},
	{
		id: 13,
		name: 'Magento2',
		logo: './assets/magento2.svg',
		url: 'https://business.adobe.com/products/magento/magento-commerce.html',
		experience:
			"Setup as main store for campus, developped custom theme and plugins. Don't like the architecture but api is great",
		score: 3.5
	},
	{
		id: 14,
		name: 'Sharepoint',
		logo: './assets/sharepoint.svg',
		url: 'https://www.microsoft.com/en-ww/microsoft-365/sharepoint/collaboration',
		experience:
			'Setup a company intranet with sharepoint. Played around with SPFx but only scratched the surface',
		score: 2
	},
	{
		id: 15,
		name: 'Azure Cloud',
		logo: './assets/azure.svg',
		url: 'https://azure.microsoft.com/',
		experience: 'Used as the main cloud provider for work',
		score: 4
	},
	{
		id: 16,
		name: 'Azure DevOps',
		logo: './assets/azure-devops.svg',
		url: 'https://azure.microsoft.com/en-us/services/devops/',
		experience:
			'Currently the main CI/CD tool for work. Used Repos, Pipelines, Boards, Tests and Artifacts',
		score: 4
	},
	{
		id: 17,
		name: 'Git',
		logo: './assets/git.svg',
		url: 'https://git-scm.com/',
		experience: 'Git is great!',
		score: 5
	},
	{
		id: 18,
		name: 'Jenkins',
		logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
		url: 'https://www.jenkins.io/',
		experience: 'Used a bit for recent projects, but not as deep as Azure DevOps or Github Actions',
		score: 1.5
	},
	{
		id: 19,
		name: 'AWS',
		logo: './assets/aws.svg',
		url: 'https://aws.amazon.com/',
		experience: 'Some private projects running currently on AWS',
		score: 2.5
	},
	{
		id: 20,
		name: 'WebGL',
		logo: './assets/webgl.svg',
		url: 'https://www.khronos.org/webgl/',
		experience:
			'Collected some experience with three.js while setting up a 3D viewer for a client. Also used a bit for this website ;)',
		score: 2.5
	},
	{
		id: 21,
		name: 'PostgreSQL',
		logo: './assets/postgresql.svg',
		url: 'https://www.postgresql.org/',
		experience: 'Main database for main projects at work and private projects',
		score: 4
	},
	{
		id: 22,
		name: 'MySQL',
		logo: 'https://www.mysql.com/common/logos/mysql-logo.svg',
		url: 'https://www.mysql.com/',
		experience: 'Used mostly if required by a client but would prefer to use PostgreSQL',
		score: 3
	},
	{
		id: 23,
		name: 'Google Cloud',
		logo: './assets/googlecloud.svg',
		url: 'https://cloud.google.com/',
		experience: 'Mainly used with Google APIs like Maps, Vision, Translate, etc.',
		score: 2.5
	},
	{
		id: 24,
		name: 'Docker',
		logo: './assets/docker.svg',
		url: 'https://www.docker.com/',
		experience: 'Used for local development and CI/CD',
		score: 4
	},
	{
		id: 25,
		name: 'Kubernetes',
		logo: './assets/kubernetes.svg',
		url: 'https://kubernetes.io/',
		experience:
			'Very complicated, very powerful. Used for big projects at work. Also setup a bare metal kubernetes cluster for fun',
		score: 3
	},
	{
		id: 26,
		name: 'Terraform',
		logo: './assets/terraform.svg',
		url: 'https://www.terraform.io/',
		experience: 'Main tool to deploy infrastructure at work. Like the flexibility',
		score: 3
	}
];

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
		skills: [],
		bullets: []
	},
	{
		category: 'work',
		place: 'Vienna',
		startDate: new Date('2019-06-01'),
		endDate: undefined,
		title: 'Hyke Systems',
		description: 'Software Engineer / Consultant',
		status: 'progress',
		bullets: [],
		skills: []
	},

	{
		category: 'work',
		place: 'Vienna',
		startDate: new Date('2015-03-01'),
		endDate: new Date('2024-01-01'),
		title: 'Vienna BioCenter Core Facilities',
		description: 'Software Architect',
		status: 'done',
		bullets: [],
		skills: ['Java', 'Spring', 'PostgreSQL']
	},
	{
		category: 'education',
		place: 'Vienna',
		startDate: new Date('2012-09-01'),
		endDate: undefined,
		title: 'Univsersity of Vienna',
		description: 'Bachelor of Psychology',
		status: 'waiting',
		bullets: [],
		skills: []
	},

	{
		category: 'education',
		place: 'Vienna',
		startDate: new Date('2006-09-01'),
		endDate: new Date('2011-06-30'),
		title: 'Technologisches Gewerbemuseum',
		description: 'Information Technology',
		status: 'done',
		bullets: [],
		skills: []
	}
];

export const pages = ['home', 'timeline', 'skills', 'me'] as const;

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
