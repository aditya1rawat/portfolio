import {
	Box,
	Heading,
	IconButton,
	SimpleGrid,
	Tooltip
} from '@chakra-ui/react';

import {
	SiChakraui,
	SiCplusplus,
	SiCss3,
	SiDart,
	SiFirebase,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostman,
	SiPython,
	SiPytorch,
	SiReact,
	SiSass,
	SiStyledcomponents,
	SiTailwindcss,
	SiTensorflow,
	SiTypescript,
	SiSpringboot,
	SiPostgresql,
	SiAmazonaws
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

import { TbSql } from 'react-icons/tb';

const languages = [
	{ name: 'HTML5', icon: <SiHtml5 /> },
	{ name: 'CSS3', icon: <SiCss3 /> },
	{ name: 'Javascript', icon: <SiJavascript /> },
	{ name: 'TypeScript', icon: <SiTypescript /> },
	{ name: 'Java', icon: <FaJava /> },
	{ name: 'Python', icon: <SiPython /> },
	{ name: 'C++', icon: <SiCplusplus /> },
	{ name: 'Dart', icon: <SiDart /> },
	{ name: 'SQL', icon: <TbSql /> }
];

const servicesTech = [
	{ name: 'React.js', icon: <SiReact /> },
	{ name: 'Next.js', icon: <SiNextdotjs /> },
	{ name: 'Node.js', icon: <SiNodedotjs /> },
	{ name: 'MySQL', icon: <SiMysql /> },
	{ name: 'PostgreSQl', icon: <SiPostgresql /> },
	{ name: 'Springboot', icon: <SiSpringboot /> },
	{ name: 'AWS', icon: <SiAmazonaws /> },
	{ name: 'Firebase', icon: <SiFirebase /> },
	{ name: 'MongoDB', icon: <SiMongodb /> },
	{ name: 'SASS', icon: <SiSass /> },
	{ name: 'Styled Components', icon: <SiStyledcomponents /> },
	{ name: 'Chakra UI', icon: <SiChakraui /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
	{ name: 'Postman', icon: <SiPostman /> },
	{ name: 'TensorFlow', icon: <SiTensorflow /> },
	{ name: 'Pytorch', icon: <SiPytorch /> },
	{ name: 'Git', icon: <SiGit /> }
];

export default function Tech() {
	return (
		<Box>
			<Heading as={'h3'} size='md' mt='10' mb='2'>
				Languages I Know & Use
			</Heading>
			<SimpleGrid columns={6} spacing={5} pt={3} justifyItems='center'>
				{languages.map(language => {
					return (
						<Tooltip label={language.name} key={language.name}>
							<IconButton
								fontSize={25}
								variant={'ghost'}
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
				Services, Frameworks, & Databases I Work With
			</Heading>
			<SimpleGrid columns={9} spacing={3} pt={3} justifyItems='center'>
				{servicesTech.map(service => {
					return (
						<Tooltip label={service.name} key={service.name}>
							<IconButton
								fontSize={25}
								size={'lg'}
								variant={'ghost'}
								borderColor='black'
								_dark={{ borderColor: 'white' }}
								aria-label={service.name}
								icon={service.icon}
							/>
						</Tooltip>
					);
				})}
			</SimpleGrid>
		</Box>
	);
}
