import { useImagesStore } from '../../store/images'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

interface Props {
	key: string
}

const Third = forwardRef(({ key }: Props, ref: Ref<HTMLDivElement>) => {
	const getImages = useImagesStore().getImages

	const images = getImages('third')
	
	return (
		<motion.div key={key} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: -50 }} className={styles.third} ref={ref}>
			<div className={styles.background}></div>
			<motion.div className={styles.zeri3}
			initial={{ x: 100, y: 100 }} animate={{ x: 0, y: 0 }}>
				<img src={images[0].src} alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Acompañenme en las team fights</h1>
				<p>Una vez que tenga mis primeros tres items voy a tener bastante más daño y wave clear, pero no esperen que haga todo solo</p>
				<motion.div className={styles.items}
				initial={{ y: 200 }} animate={{ y: 0 }}>
					<div className={styles.item}>
						<img src={images[1].src} alt="" />
					</div>
					<div className={styles.item}>
						<img src={images[2].src} alt="" />
					</div>
					<div className={styles.item}>
						<img src={images[3].src} alt="" />
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
})

export default Third