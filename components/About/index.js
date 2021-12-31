import styles from './index.module.scss';

export default function About() {
	return (
		<div className={styles['container']}>
			<h1>Hello 👋🏽</h1>
			<h1>I Am A</h1>
			<h2 className={styles['gradient']}>Web Developer & Designer</h2>
			<h1>But I Am Also A</h1>
			<h2 className={styles['gradient']}>List Other Stuff</h2>
			<button className={styles['more']}>
				More About Me{' '}
				<svg
					stroke='currentColor'
					fill='currentColor'
					stroke-width='0'
					viewBox='0 0 448 512'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
					style={{ marginLeft: '10px' }}
				>
					<path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'></path>
				</svg>
			</button>
		</div>
	);
}
