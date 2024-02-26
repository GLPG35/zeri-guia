import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Second = () => {
	return (
		<motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.second}>
			<div className={styles.background}>
			</div>
			<motion.div className={styles.zeri2}
			initial={{ x: -200 }} animate={{ x: 0 }}>
				<img src="/zeri_2.webp" alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Necesito mucho farm</h1>
				<p>Evita que me meta en peleas en early, cuanto antes tenga mis items, más útil seré para mi team, pero para eso necesito orito de los valiosos minions</p>
				<div className={styles.minions}>
					<motion.div className={styles.minion}
					initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
						<img src="/caster_minion.webp" alt="" />
					</motion.div>
					<motion.div className={styles.minion}
					initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
						<img src="/cannon_minion.webp" alt="" />
					</motion.div>
				</div>
				<span>Dejame el cannon porfa :(</span>
			</div>
		</motion.div>
	)
}

export default Second