import styles from './index.module.scss';

export default function Slide() {
	return (
		<div className={styles['slider']}>
			<div className={styles['slide']}>
				<div>
					<span>UI/UX</span> - <span>Designing</span> -{' '}
					<span>Developing</span> -<span>UI/UX</span> -{' '}
					<span>Designing</span> - <span>Developing</span> -
					<span>UI/UX</span> - <span>Designing</span> -{' '}
					<span>Developing</span> -
				</div>
				<div>
					<span>UI/UX</span> - <span>Designing</span> -{' '}
					<span>Developing</span> -<span>UI/UX</span> -{' '}
					<span>Designing</span> - <span>Developing</span> -
					<span>UI/UX</span> - <span>Designing</span> -{' '}
					<span>Developing</span> -
				</div>
			</div>
		</div>
	);
}
