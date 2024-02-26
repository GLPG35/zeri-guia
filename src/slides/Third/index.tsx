import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Third = () => {
	return (
		<motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: -50 }} className={styles.third}>
			<div className={styles.background}></div>
			<motion.div className={styles.zeri3}
			initial={{ x: 100, y: 100 }} animate={{ x: 0, y: 0 }}>
				<img src="/zeri_3.webp" alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Acompañenme en las team fights</h1>
				<p>Una vez que tenga mis primeros dos items voy a tener bastante más daño, pero no esperen que haga todo solo</p>
				<motion.div className={styles.zeriUlt}
				initial={{ y: 200 }} animate={{ y: 0 }}>
					<img src="/zeri_ult.gif" alt="" />
				</motion.div>
			</div>
		</motion.div>
	)
}

export default Third