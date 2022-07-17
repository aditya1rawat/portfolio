import {
	Box,
	Button,
	Heading,
	Icon,
	IconButton,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
	useToast
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FiExternalLink, FiInstagram, FiMail } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';

const Contact: NextPage = () => {
	const toast = useToast();
	return (
		<Box width={'full'}>
			<Heading as={'h2'} mt='3' mb='10'>
				Contact & Reach Out!
			</Heading>
			<SimpleGrid columns={2} spacing='24'>
				<Box
					background={'#fff'}
					_dark={{ background: '#000' }}
					padding='10'
					borderRadius={10}
				>
					<Text mt={20}>Currently open for new clients.</Text>
					<Text mt={10}>
						Always available for oppurtunities with startups,
						companies, and agencies.
					</Text>
				</Box>
				<Box>
					<Heading fontSize={'25px'} mb={5}>
						Contact Via:
					</Heading>
					<SimpleGrid columns={2} gap={10}>
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
								/>
							</a>
						</Box>
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
												color='white'
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
							/>
						</Box>
						<Box>
							<a
								href={
									'https://www.instagram.com/aditya_rawhaaat/'
								}
								target='_blank'
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

						<Box>
							<a href={'#'}>
								<IconButton
									variant={'outline'}
									borderWidth={'3px'}
									borderColor={useColorModeValue(
										'black',
										'white'
									)}
									icon={<IoIosPaper />}
									fontSize={50}
									padding='10'
									py='16'
									aria-label={'Instagram'}
								/>
							</a>
						</Box>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Contact;
