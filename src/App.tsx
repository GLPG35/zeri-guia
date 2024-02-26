import { useState } from 'react'
import styles from './styles.module.scss'
import First from './slides/First'
import Second from './slides/Second'
import Third from './slides/Third'
import Fourth from './slides/Fourth'
import Fifth from './slides/Fifth'
import useMousePosition from './hooks/useMousePosition'
import { AnimatePresence, motion } from 'framer-motion'
import { TbArrowRight } from 'react-icons/tb'

const App = () => {
	const [current, setCurrent] = useState(0)
	const slides = [<First />, <Second />, <Third />, <Fourth />, <Fifth />]
	const maxSlides = slides.length - 1
	const { x, y } = useMousePosition()
	const [hover, setHover] = useState<'left'|'right'|undefined>()
	
	const prev = () => {
		setCurrent(prev => prev > 0 ? prev - 1 : prev)
	}

	const next = () => {
		setCurrent(prev => prev < maxSlides ? current + 1 : prev)
	}
	
	return (
		<div className={styles.main}>
			<motion.div className={styles.cursor}
			animate={{
				top: y - 70 / 2,
				left: x - 70 / 2
			}}
			transition={{ type: 'tween', ease: 'backOut' }}>
				<motion.div className={styles.icon}
				animate={{ rotate: hover == 'left' ? 180 : 0 }}>
					<TbArrowRight />
				</motion.div>
			</motion.div>
			<div className={styles.hitbox}>
				<div className={styles.left} onClick={prev}
				onMouseOver={() => setHover('left')}></div>
				<div className={styles.right} onClick={next}
				onMouseOver={() => setHover('right')}></div>
			</div>
			<AnimatePresence mode='popLayout' initial={false}>
				{slides.map((slide, index) => {
					if (index == current) return slide
				})}
			</AnimatePresence>
		</div>
	)
}

export default App
