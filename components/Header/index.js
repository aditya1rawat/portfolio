import styles from './index.module.scss';

export default function Header() {
	return (
		<div className={styles['Header']}>
			<h3 className={styles['birthYear']}>2005</h3>
			<h3 className={styles['currentYear']}>
				{new Date().getFullYear()}
			</h3>
		</div>
	);
}
