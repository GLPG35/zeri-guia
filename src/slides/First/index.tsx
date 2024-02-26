import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const First = () => {
	return (
		<motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: -50 }} className={styles.first}>
			<div className={styles.background}>
			</div>
			<div className={styles.zeri1}>
				<img src="/zeri_1.webp" alt="" />
			</div>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<span>Como jugar con una</span>
					<h1>Zeri ADC</h1>
					<span>sin morir en el intento :D</span>
				</div>
			</div>
		</motion.div>
	)
}

export default First