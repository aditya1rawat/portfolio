import styles from './index.module.scss';

export default function Header() {
	return (
		<div className={styles['Header']}>
			<h3 className={styles['text']}>2005</h3>

			<h3 className={styles['text1']}>Current</h3>
		</div>
	);
}
