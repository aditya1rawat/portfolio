import styles from './index.module.scss';
import { motion } from 'framer-motion';

export default function Slide() {
	const sliderVars = {
		animate: {
			x: [0, -5365],
			transition: {
				x: {
					ease: 'linear',
					duration: 25,
					repeat: Infinity
				}
			}
		}
	};
	return (
		<div className={styles['slider']}>
			<motion.div
				className={styles['slide']}
				variants={sliderVars}
				animate='animate'
			>
				<h1 className={styles['words']}>
					<span>NextJS</span>
					<Dot />
					<span>ReactJS</span>
					<Dot />
					<span>Typescript</span>
					<Dot />
					<span>Firebase</span>
					<Dot />
					<span>ChakraUI</span>
					<Dot />
					<span>TailwindCSS</span>
					<Dot />
					<span>Framer Motion</span>
					<Dot />
					<span>ThreeJS</span>
					<Dot />
					<span>Redux</span>
					<Dot />
					<span>Vercel</span>
					<Dot />
					<span>Git</span>
					<Dot />
					<span>NodeJS</span>
					<Dot />
					<span>Performance</span>
					<Dot />
					<span>SEO</span>
					<Dot />
					<span>SASS</span>
					<Dot />
					<span>Styled Components</span>
					<Dot />
				</h1>
			</motion.div>
		</div>
	);
}

export const Dot = () => {
	return (
		<div className={styles.dot}>
			<svg
				width='17'
				height='17'
				viewBox='0 0 17 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<ellipse cx='8' cy='8' rx='8' ry='8' fill='#9BC53D' />
			</svg>
		</div>
	);
};
