import { useImagesStore } from '../../store/images'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

interface Props {
	key: string
}

const First = forwardRef(({ key }: Props, ref: Ref<HTMLDivElement>) => {
	const getImages = useImagesStore().getImages

	const images = getImages('first')
	
	return (
		<motion.div key={key} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: -50 }} className={styles.first} ref={ref}>
			<div className={styles.background}>
			</div>
			<div className={styles.zeri1}>
				<img src={images[0].src} alt="" />
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
})

export default First