import {
	Box,
	Heading,
	IconButton,
	Image,
	SimpleGrid,
	Text
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Tech from '../components/About/tech';

const About: NextPage = () => {
	return (
		<Box>
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
			<Text>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
				iure totam nam est ab eos, officiis laudantium magni
				necessitatibus consequuntur dolorem quidem dolor at.
				Reprehenderit optio repudiandae laudantium natus tempora nisi
				quis, inventore provident odio atque pariatur, adipisci animi
				obcaecati reiciendis ratione nobis. Dolorum similique commodi
				sint deserunt eaque consequuntur, quos vero ut, fugiat ad
				praesentium animi iusto laudantium, asperiores debitis quaerat
				nesciunt ex cum? Quisquam facilis eum commodi soluta enim nemo
				eveniet ratione laudantium nobis modi impedit nam, unde in saepe
				fuga! At magnam, vel amet dolorem architecto rem, esse provident
				quas sint qui praesentium dicta voluptatum. Ad, voluptatibus.
			</Text>
			<Tech />
		</Box>
	);
};

export default About;
