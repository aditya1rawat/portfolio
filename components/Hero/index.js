import { useState } from 'react';

import Image from 'next/image';
import BigList from './BigList';
import styles from './index.module.scss';
import Slide from './Slide';

export default function Hero() {
	const [type, setType] = useState(true);
	return (
		<div style={{ height: 'auto' }}>
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
					<h1 className={styles['bigName']}>ADITYA</h1>
					<h2 className={styles['description']}>
						High Schooler, Full Stack Developer, Design, Etc.
					</h2>
					<h1 className={styles['bigName']}>RAWAT</h1>
				</div>
			</div>
			{/* <div className={styles['quickTech']}>
				<div className={styles['qtheader']}>
					<h5 className={styles['overview']}>Overview</h5>
					<button
						className={styles['switch']}
						onClick={() => {
							setType(true);
						}}
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							width='2em'
							height='2em'
							viewBox='0 0 50 22'
							xmlns='http://www.w3.org/2000/svg'
							style={{ margin: '0 auto' }}
						>
							<path d='M36.9084 2.34848V6.84643H13.0918V2.34848C13.0918 0.260394 10.5673 -0.785309 9.0907 0.691156L0.686499 9.09536C-0.228833 10.0107 -0.228833 11.4946 0.686499 12.4099L9.0907 20.8141C10.5672 22.2906 13.0918 21.2449 13.0918 19.1568V14.6589H36.9084V19.1569C36.9084 21.245 39.4329 22.2907 40.9094 20.8142L49.3136 12.41C50.229 11.4947 50.229 10.0108 49.3136 9.09545L40.9094 0.691253C39.433 -0.78531 36.9084 0.260394 36.9084 2.34848V2.34848Z' />
						</svg>
					</button>
					<button
						className={styles['switch']}
						onClick={() => {
							setType(false);
						}}
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 448 512'
							height='2em'
							width='2em'
							xmlns='http://www.w3.org/2000/svg'
							style={{ margin: '0 auto' }}
						>
							<path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
						</svg>
					</button>
				</div>
				{type ? <Slide /> : <BigList />}
			</div> */}
			<Slide />
		</div>
	);
}
