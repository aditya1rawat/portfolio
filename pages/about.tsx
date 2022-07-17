import {
	Box,
	Heading,
	IconButton,
	Image,
	SimpleGrid,
	Text
} from '@chakra-ui/react';
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
					content='Web Developer. Software Engineer. High Schooler. Among Other Things.'
				/>
				<link rel='icon' href='assets/images/me/nyucenter.jpg' />
			</Head>
			<Image
				src={'/assets/images/me/nyucenter.jpg'}
				alt={'Picture of Aditya Rawat'}
				width={'full'}
				height={'auto'}
				rounded={'lg'}
			/>
			<Heading as={'h2'} my='3'>
				Hi. I&apos;m Aditya Rawat
			</Heading>
			<Text my='5'>
				I began my journey as a programmer early in elementary school
				originally diving straight into software engineering. Over time,
				I began to learn web devleopment which, because of it&apos;s
				visual product and appeal, became my passion.
			</Text>
			<Text my='5'>
				I began by making small websites which were all mostly static,
				but over time I implemented various aspects of software
				engineering to build larger, more dynamic web applications that
				had a purpose other than being pretty.
			</Text>
			<Text my='5'>
				As I continued to grow and learn, I began connecting with a
				people around me with similar interests and through that I was
				able to expand my knowledge and skillset. By today, I have
				started and worked for several nonprofits, startups, and small
				companies.
			</Text>
			<Text my='5'>
				Still a student, there is still so much to learn, and I am
				always looking for more oppurtunities to learn and grow.
			</Text>
			<Tech />
		</Box>
	);
};

export default About;
