import styles from './index.module.scss';

export default function BigList() {
	return (
		<div>
			<div className={styles['container']}>
				<div className={styles['list']}>
					<p>NextJS</p>
					<p>ReactJS</p>
					<p>Typescript</p>
					<p>Firebase</p>
					<p>ChakraUI</p>
					<p>TailwindCSS</p>
					<p>Framer Motion</p>
					<p>ThreeJS</p>
				</div>

				<div className={styles['list']}>
					<p>Tooling</p>
					<p>Redux</p>
					<p>VueJS</p>
					<p>Vercel</p>
					<p>Git</p>
					<p>NodeJS</p>
					<p>Databases</p>
					<p>GraphQL</p>
					<p>Prisma</p>
					<p>CMS</p>
				</div>

				<div className={styles['list']}>
					<p>PostgreSQL</p>
					<p>Performance</p>
					<p>SEO</p>
					<p>JWT</p>
					<p>Docker</p>
					<p>Redis</p>
					<p>SASS</p>
					<p>Styled Components</p>
				</div>
				<div className={styles['list']}>
					<p>Stripe</p>
					<p>MongoDB</p>
					<p>NPM</p>
					<p>PWA</p>
					<p>MobX</p>
					<p>Responsiveness</p>
					<p>Stitches</p>
				</div>
			</div>
		</div>
	);
}
