import Image from 'next/image';
import styles from './index.module.scss';
import Slide from './Slide';

export default function Hero() {
	return (
		<div>
			<div className={styles['hero']}>
				<div className={styles['imageContainer']}>
					<Image
						className={styles['image']}
						src={'/facething.png'}
						width={'500px'}
						height={'500px'}
					/>
				</div>
				<div className={styles['name']}>
					<h1 className={styles['firstName']}>ADITYA</h1>
					<h2 className={styles['description']}>
						High Schooler, Among Other Things
					</h2>
					<h1 className={styles['lastName']}>RAWAT</h1>
				</div>
			</div>
			<Slide />
		</div>
	);
}
