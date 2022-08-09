import { Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
	const projects = [
		{
			image: '/assets/images/worklogos/onpointlogo.png',
			title: 'OnPoint v1.0',
			text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public. v1.0',
			tech: [
				'React.js',
				'Chakra-UI',
				'Firebase',
				'Framer-Motion',
				'EditorJS'
			],
			wip: false,
			live: 'https://onpointnews.org/',
			github: 'https://github.com/OnPointOrg/site'
		},
		{
			image: '/assets/images/worklogos/onpointlogo.png',
			title: 'OnPoint v2.0',
			text: 'A platform for teenagers to create quality media about the modern world to educate and inform the public. v2.0',
			tech: ['Next.js', 'Chakra-UI', 'Firebase', 'Framer-Motion'],
			wip: true,
			live: 'https://onpointsitev2.vercel.app/',
			github: 'https://github.com/aditya1rawat/onpointsite2.0'
		},
		{
			image: '/assets/images/worklogos/aviato.png',
			title: 'Aviato',
			text: 'Pitching to funds directly anywhere, anytime. All it takes is two taps and a 1 minute video pitch.(Commissioned Project)',
			tech: ['Next.js', 'Chakra-UI', 'Framer-Motion', 'Emotion-Styled'],
			wip: false,
			live: 'https://aviato-landing.vercel.app/',
			github: ''
		},
		{
			image: '/assets/images/worklogos/sigmoidhackslogo.png',
			title: 'Sigmoid Hacks 1.0',
			text: 'Machine Learning doesn’t have to be just another buzz word, make it real with Sigmoid Hacks!',
			tech: [
				'Next.js',
				'Emotion',
				'Styled Components',
				'Firebase',
				'Framer-Motion'
			],
			wip: false,
			live: 'https://www.sigmoidhacks.org/',
			github: 'https://github.com/SigmoidHacks/site'
		},
		{
			image: '/assets/images/worklogos/nextjs.png',
			title: 'E-Commerce Template',
			text: 'Just a simple template for anyone trying to create an e-commerce site with Next.js and Sanity.',
			tech: ['Next.js', 'Sanity', 'Styled Components', 'Framer-Motion'],
			wip: false,
			live: 'https://adaptive-ecommerce-template.vercel.app/',
			github: 'https://github.com/aditya1rawat/adaptive-ecommerce-template'
		},
		{
			image: '/assets/images/worklogos/bytelogo.png',
			title: 'Byte',
			text: 'Reinventing how hackathons are run forever by making a more inclusive and rewarding experience and interface!',
			tech: [
				'Next.js',
				'balloon-css',
				'Sass',
				'Firebase',
				'CKEditor',
				'Algolia'
			],
			wip: true,
			live: 'https://bytebuild.vercel.app/',
			github: 'https://github.com/byte-build/web'
		},
		{
			image: '/assets/images/worklogos/github.png',
			title: 'Retina OCT',
			text: 'Using machine learning and artificial intelligence to help doctors diagnose and treat patients with retinal diseases.',
			tech: [
				'React Native',
				'Typescript',
				'Node.js',
				'PostgreSQL',
				'GraphQL',
				'Typeform',
				'URQL',
				'Firebase',
				'Tensorflow.js',
				'Expo'
			],
			wip: true,
			live: '',
			github: 'https://github.com/retinaoct'
		},
		{
			image: '/assets/images/worklogos/github.png',
			title: 'Petz Care',
			text: 'Nonprofit aiming to fill the gap within the animal care industry. We aim to create a platform to connect verified professionals with pet owners to provide them with professional online advice.',
			tech: [
				'React.js',
				'AWS',
				'Node.js',
				'Firebase',
				'Styled Components'
			],
			wip: true,
			live: '',
			github: ''
		},

		{
			image: '/assets/images/worklogos/github.png',
			title: 'Carbon (E)missions',
			text: 'Project for Irvine Hacks 2020. A platform for users to track their carbon footprint from their vehicle use.',
			tech: ['HTML', 'SCSS', 'Node.js', 'JQuery', 'Google Maps API'],
			wip: false,
			live: 'https://irvinehak2020.netlify.com/',
			github: 'https://github.com/aditya1rawat/IrvineHacks2020Project'
		},
		{
			image: '/assets/images/worklogos/github.png',
			title: 'COVID Central',
			text: 'Project for Hack Quarantine 2020. A platform for users to learn about the COVID situation, both locally and globally.',
			tech: [
				'HTML',
				'SCSS',
				'MongoDB Atlas',
				'Radar.io',
				'News API',
				'LeafletJS'
			],
			wip: false,
			live: 'https://covidcentral.netlify.com/',
			github: 'https://github.com/aditya1rawat/Hack-Quarantine-2020-Project'
		}
	];

	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, lg: 2 }}
			gap={8}
			w='full'
			mt='10'
		>
			{projects.map(project => {
				return (
					<ProjectCard
						key={project.title}
						image={project.image}
						title={project.title}
						text={project.text}
						techArray={project.tech}
						wip={project.wip}
						live={project.live}
						github={project.github}
					/>
				);
			})}
		</SimpleGrid>
	);
}
