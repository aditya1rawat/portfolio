import { Box, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Tech from '../components/About/tech';

const About: NextPage = () => {
	return (
		<Box w='full'>
			<Head>
				<title>Aditya Rawat.</title>
				<meta
					name='description'
					content='software engineer, quant, ai.'
				/>
				<link rel='icon' href='assets/images/me/home-headshot.jpg' />
			</Head>
			<Heading as={'h2'} my='3'>
				Hi. I&apos;m Aditya Rawat
			</Heading>
			<Text my='5'>
				I started my programming journey way back in elementary school,
				initially diving into the world of software engineering.
				However, I found myself drawn to web development due to its
				visual appeal and practicality.
			</Text>
			<Text my='5'>
				My early projects were small-scale, involving basic websites
				with limited functionality. Over time, I integrated software
				engineering principles to create more complex and interactive
				web applications with clear purposes.
			</Text>
			<Text my='5'>
				As I continued learning and evolving, I connected with
				individuals who shared similar interests. These connections
				provided opportunities for skill expansion. Today, I&apos;ve
				already embarked on projects with nonprofits, startups, and
				small companies, despite still being a student.
			</Text>
			<Text my='5'>
				Despite my progress, the learning journey is ongoing. I&apos;m
				constantly seeking new opportunities to learn and grow. Shifting
				from my web development origins, I&apos;m now focused on
				becoming a skilled software engineer, specializing in designing
				intelligent and scalable software systems.
			</Text>
			<Text my='5'>
				Beyond my core pursuits, I&apos;m deeply intrigued by emerging
				technologies like AI, Web3, and Quantum Computing. I&apos;m
				actively engaged in research and eager to contribute to the
				advancement of these fields. If you&apos;d like to connect, feel
				free to reach out. I&apos;m enthusiastic about networking and
				collaborating as I navigate through this exciting journey!
			</Text>
			<Tech />
		</Box>
	);
};

export default About;
