import {
	Box,
	Heading,
	IconButton,
	SimpleGrid,
	Tooltip,
	useColorModeValue
} from '@chakra-ui/react';
import { NextPage } from 'next';

import { TbBrandNextjs } from 'react-icons/tb';
import {
	SiAirtable,
	SiChakraui,
	SiCplusplus,
	SiCss3,
	SiDart,
	SiExpress,
	SiFirebase,
	SiFlutter,
	SiGit,
	SiGithub,
	SiGraphql,
	SiHtml5,
	SiJava,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPostman,
	SiPython,
	SiPytorch,
	SiReact,
	SiRust,
	SiSass,
	SiStyledcomponents,
	SiSwift,
	SiTailwindcss,
	SiTensorflow,
	SiTypescript,
	SiVercel
} from 'react-icons/si';

const languages = [
	{ name: 'HTML5', icon: <SiHtml5 /> },
	{ name: 'CSS3', icon: <SiCss3 /> },
	{ name: 'Javascript', icon: <SiJavascript /> },
	{ name: 'TypeScript', icon: <SiTypescript /> },
	{ name: 'Java', icon: <SiJava /> },
	{ name: 'Python', icon: <SiPython /> },
	{ name: 'C++', icon: <SiCplusplus /> },
	{ name: 'Dart', icon: <SiDart /> },
	{ name: 'SQL', icon: <SiMysql /> }
];

const servicesTech = [
	{ name: 'React', icon: <SiReact /> },
	{ name: 'Next.js', icon: <SiNextdotjs /> },
	{ name: 'Node.js', icon: <SiNodedotjs /> },
	{ name: 'Express', icon: <SiExpress /> },
	{ name: 'SASS', icon: <SiSass /> },
	{ name: 'Styled Components', icon: <SiStyledcomponents /> },
	{ name: 'Chakra UI', icon: <SiChakraui /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
	{ name: 'Firebase', icon: <SiFirebase /> },
	{ name: 'MongoDB', icon: <SiMongodb /> },
	{ name: 'Postman', icon: <SiPostman /> },
	{ name: 'TensorFlow', icon: <SiTensorflow /> },
	{ name: 'Pytorch', icon: <SiPytorch /> },
	{ name: 'Vercel', icon: <SiVercel /> },
	{ name: 'Netlify', icon: <SiNetlify /> },
	{ name: 'GitHub', icon: <SiGithub /> },
	{ name: 'Git', icon: <SiGit /> },
	{ name: 'MySQL', icon: <SiMysql /> }
];

const currentlyLearning = [
	{ name: 'Swift', icon: <SiSwift /> },
	{ name: 'GraphQL', icon: <SiGraphql /> },
	{ name: 'Rust', icon: <SiRust /> }
];

export default function Tech() {
	return (
		<Box>
			<Heading as={'h3'} size='md' mt='10' mb='2'>
				Languages I Know & Use
			</Heading>
			<SimpleGrid minChildWidth='120px' spacing='40px' pt={3}>
				{languages.map(language => {
					return (
						<Tooltip label={language.name} key={language.name}>
							<IconButton
								variant={'outline'}
								borderColor='black'
								_dark={{ borderColor: 'white' }}
								aria-label={language.name}
								icon={language.icon}
							/>
						</Tooltip>
					);
				})}
			</SimpleGrid>

			<Heading as={'h3'} size='md' mt='10' mb='2'>
				Services & Frameworks I Know & Use
			</Heading>
			<SimpleGrid minChildWidth='120px' spacing='40px' pt={3}>
				{servicesTech.map(service => {
					return (
						<Tooltip label={service.name} key={service.name}>
							<IconButton
								variant={'outline'}
								borderColor='black'
								_dark={{ borderColor: 'white' }}
								aria-label={service.name}
								icon={service.icon}
							/>
						</Tooltip>
					);
				})}
			</SimpleGrid>

			<Heading as={'h3'} size='md' mt='10' mb='2'>
				Currently Learning
			</Heading>
			<SimpleGrid minChildWidth='120px' spacing='40px' pt={3}>
				{currentlyLearning.map(learning => {
					return (
						<Tooltip label={learning.name} key={learning.name}>
							<IconButton
								variant={'outline'}
								borderColor='black'
								_dark={{ borderColor: 'white' }}
								aria-label={learning.name}
								icon={learning.icon}
							/>
						</Tooltip>
					);
				})}
			</SimpleGrid>
		</Box>
	);
}
