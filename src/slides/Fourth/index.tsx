import { useImagesStore } from '../../store/images'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { Ref, forwardRef } from 'react'

interface Props {
	key: string
}

const Fourth = forwardRef(({ key }: Props, ref: Ref<HTMLDivElement>) => {
	const getImages = useImagesStore().getImages

	const images = getImages('fourth')
	
	const champs = [
		{ name: 'Nami', url: images[0].src },
		{ name: 'Karma', url: images[1].src },
		{ name: 'Lulu', url: images[2].src },
		{ name: 'Rell', url: images[3].src },
		{ name: 'Leona', url: images[4].src },
		{ name: 'Zyra', url: images[5].src }
	]
	
	return (
		<motion.div key={key} initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: 50 }} className={styles.fourth} ref={ref}>
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
})

export default Fourth