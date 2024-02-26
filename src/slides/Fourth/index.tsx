import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Fourth = () => {
	const champs = [
		{ name: 'Alistar', url: '/alistar.webp' },
		{ name: 'Brand', url: '/brand.webp' },
		{ name: 'Maokai', url: '/maokai.webp' },
		{ name: 'Yuumi', url: '/yuumi.webp' },
		{ name: 'Rell', url: '/rell.webp' },
		{ name: 'Zyra', url: '/zyra.webp' }
	]
	
	return (
		<motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.fourth}>
			<div className={styles.background}></div>
			<div className={styles.title}>
				<h1>Campeones para supportearme</h1>
				<div className={styles.champs}>
					{champs.map(({ name, url }, index) => {
						const delay = index / 10 * 1.5
						
						return (
							<motion.div className={styles.champ} key={name}
							initial={{ y: '120%' }} animate={{ y: 0 }} transition={{ delay }}>
								<img src={url} alt="" />
								<span>{name}</span>
							</motion.div>
						)
					})}
				</div>
			</div>
		</motion.div>
	)
}

export default Fourth