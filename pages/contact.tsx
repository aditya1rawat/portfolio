import {
	Box,
	Button,
	Heading,
	Icon,
	IconButton,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
	useColorModeValue,
	useToast
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FiExternalLink, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';
import Head from 'next/head';

const Contact: NextPage = () => {
	const toast = useToast();
	return (
		<Box width={'full'}>
			<Head>
				<title>Aditya Rawat.</title>
				<meta
					name='description'
					content='Web Developer. Software Engineer. High Schooler. Among Other Things.'
				/>
				<link rel='icon' href='assets/images/me/nyucenter.jpg' />
			</Head>
			<Heading as={'h2'} mt='3' mb='10'>
				Contact & Reach Out!
			</Heading>
			<SimpleGrid columns={{ base: 1, lg: 2 }} spacing='24'>
				<Box
					background={'#fff'}
					_dark={{ background: '#000' }}
					padding='10'
					borderRadius={10}
				>
					<Heading size={'md'}>
						<strong>Currently open for new clients.</strong>
					</Heading>
					<Text mt={10}>
						Always available for oppurtunities with startups,
						companies, and agencies.
					</Text>
					<Text mt={24}>
						Timezone:{' '}
						<a
							href='https://www.timeanddate.com/time/zones/pdt'
							target='_blank'
							rel='noreferrer'
						>
							<strong>PDT (UTC - 7)</strong>
						</a>
					</Text>
				</Box>
				<Box>
					<Heading fontSize={'25px'} mb={5}>
						Contact Via:
					</Heading>
					<SimpleGrid columns={2} gap={12} justifyItems='center'>
						<Tooltip label='Email' placement='top'>
							<Box>
								<a href={'mailto:aditya1rawat@gmail.com'}>
									<IconButton
										variant={'outline'}
										borderWidth={'3px'}
										borderColor={useColorModeValue(
											'black',
											'white'
										)}
										icon={<FiMail />}
										fontSize={50}
										padding='10'
										py='16'
										aria-label={'email'}
									/>
								</a>
							</Box>
						</Tooltip>
						<Tooltip label='Discord' placement='top'>
							<Box>
								<IconButton
									variant={'outline'}
									borderWidth={'3px'}
									borderColor={useColorModeValue(
										'black',
										'white'
									)}
									icon={<SiDiscord />}
									fontSize={50}
									padding='10'
									py='16'
									onClick={() => {
										navigator.clipboard.writeText(
											'rupert#5332'
										);
										toast({
											render: () => (
												<Box
													p={3}
													color='black'
													background='#04ce41'
													borderRadius={5}
												>
													Discord Username Copied
												</Box>
											),
											position: 'bottom',
											isClosable: true,
											duration: 2000
										});
									}}
									aria-label={'discord'}
								/>
							</Box>
						</Tooltip>
						<Tooltip label='Instagram' placement='bottom'>
							<Box>
								<a
									href={
										'https://www.instagram.com/aditya_rawhaaat/'
									}
									target='_blank'
									rel='noreferrer'
								>
									<IconButton
										variant={'outline'}
										borderWidth={'3px'}
										borderColor={useColorModeValue(
											'black',
											'white'
										)}
										icon={<FiInstagram />}
										fontSize={50}
										padding='10'
										py='16'
										aria-label={'Instagram'}
									/>
								</a>
							</Box>
						</Tooltip>

						<Tooltip label='LinkedIn' placement='bottom'>
							<Box>
								<a
									href={'https://www.linkedin.com/in/aditya1rawat/'}
									target='_blank'
									rel='noreferrer'
								>
									<IconButton
										variant={'outline'}
										borderWidth={'3px'}
										borderColor={useColorModeValue(
											'black',
											'white'
										)}
										icon={<FiLinkedin />}
										fontSize={50}
										padding='10'
										py='16'
										aria-label={'LinkedIn'}
									/>
								</a>
							</Box>
						</Tooltip>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Contact;
