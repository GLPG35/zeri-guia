import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Fifth = () => {
	return (
		<motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.fifth}>
			<div className={styles.background}></div>
			<motion.div className={styles.emote}
			initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
				<img src="emote.webp" alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Muchas gracias por ver!</h1>
				<p>Buena partida para todos :)</p>
			</div>
		</motion.div>
	)
}

export default Fifth