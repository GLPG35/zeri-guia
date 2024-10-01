import { useImagesStore } from '../../store/images'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

interface Props {
	key: string
}

const Fifth = forwardRef(({ key }: Props, ref: Ref<HTMLDivElement>) => {
	const getImages = useImagesStore().getImages

	const images = getImages('fifth')
	
	return (
		<motion.div key={key} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.fifth} ref={ref}>
			<div className={styles.background}></div>
			<motion.div className={styles.emote}
			initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
				<img src={images[0].src} alt="" />
			</motion.div>
			<div className={styles.title}>
				<h1>Muchas gracias por ver!</h1>
				<p>Buena partida para todos :)</p>
			</div>
		</motion.div>
	)
})

export default Fifth