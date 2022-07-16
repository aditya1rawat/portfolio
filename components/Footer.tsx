import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '4rem',
				marginBottom: '25px'
			}}
		>
			<Flex
				justifyContent={'space-between'}
				alignItems={'start'}
				flexWrap={'wrap'}
			>
				<Flex
					direction={'column'}
					alignItems={'flex-start'}
					gap={'1.8rem'}
				>
					<Link href='/'>Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/projects'>Projects</Link>
				</Flex>
				<Flex direction={'column'} alignItems={'center'} gap={'1.8rem'}>
					<a
						href='https://github.com/aditya1rawat'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
					<a
						href='mailto:aditya1rawat@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						Email
					</a>
					<a
						href='https://www.instagram.com/ad1tya_rawhaaat/'
						target='_blank'
						rel='noreferrer'
					>
						Instagram
					</a>
				</Flex>
				<Flex
					direction={'column'}
					alignItems={'flex-end'}
					gap={'1.8rem'}
				>
					<Link href='/talks'>Discord</Link>
					<Link href='/tech'>Technologies</Link>
					<Link href='https://medium.com/@aditya1rawat'>Writing</Link>
				</Flex>
			</Flex>
			<Flex justifyContent={'space-between'} alignItems={'center'}>
				<span>&copy; Aditya Rawat {new Date().getFullYear()}</span>
				<Button
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
					style={{ cursor: 'pointer' }}
				>
					Back To Top &uarr;
				</Button>
			</Flex>
		</footer>
	);
}
