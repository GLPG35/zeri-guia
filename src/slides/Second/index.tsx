import { useImagesStore } from '../../store/images'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

interface Props {
	key: string
}

const Second = forwardRef(({ key }: Props, ref: Ref<HTMLDivElement>) => {
	const getImages = useImagesStore().getImages

	const images = getImages('second')
	
	return (
		<motion.div key={key} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.second} ref={ref}>
			<div className={styles.background}>
			</div>
			<motion.div className={styles.zeri2}
			initial={{ x: -200 }} animate={{ x: 0 }}>
				<img src={images[0].src} alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Necesito mucho farm</h1>
				<p>Evita que me meta en peleas en early, cuanto antes tenga mis items, más útil seré para mi team, pero para eso necesito orito de los valiosos minions</p>
				<div className={styles.minions}>
					<motion.div className={styles.minion}
					initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
						<img src={images[1].src} alt="" />
					</motion.div>
					<motion.div className={styles.minion}
					initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
						<img src={images[2].src} alt="" />
					</motion.div>
				</div>
				<span>Dejame el cannon porfa :(</span>
			</div>
		</motion.div>
	)
})

export default Second