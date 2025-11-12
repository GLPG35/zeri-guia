import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import First from './slides/First'
import Second from './slides/Second'
import Third from './slides/Third'
import Fourth from './slides/Fourth'
import Fifth from './slides/Fifth'
import useMousePosition from './hooks/useMousePosition'
import { AnimatePresence, motion } from 'framer-motion'
import { TbArrowRight } from 'react-icons/tb'
import { useImagesStore } from './store/images'

const App = () => {
	const [current, setCurrent] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const slides = [<First key='first' ref={ref} />, <Second key='second' ref={ref} />, <Third key='third' ref={ref} />, <Fourth key='fourth' ref={ref} />, <Fifth key='fifth' ref={ref} />]
	const maxSlides = slides.length - 1
	const { x, y } = useMousePosition()
	const [hover, setHover] = useState<'left'|'right'|undefined>()
	const setImages = useImagesStore().setImages
	const render = useImagesStore().render
	const imageList = {
		first: [
			'/zeri_1.webp'
		],
		second: [
			'/zeri_2.webp',
			'/caster_minion.webp',
			'/cannon_minion.webp'
		],
		third: [
			'/zeri_3.webp',
			'/3032.webp',
			'/3031.webp',
			'/3036.webp'
		],
		fourth: [
			'/nami.webp',
			'/karma.webp',
			'/lulu.webp',
			'/rell.webp',
			'/leona.webp',
			'/zyra.webp'
		],
		fifth: [
			'/emote.webp'
		]
	}

	useEffect(() => {
		setImages(imageList)
	}, [])
	
	const prev = () => {
		setCurrent(prev => prev > 0 ? prev - 1 : prev)
	}

	const next = () => {
		setCurrent(prev => prev < maxSlides ? current + 1 : prev)
	}
	
	return (
		<div className={styles.main} ref={ref}>
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
			{render &&
				<AnimatePresence mode='popLayout' initial={false}>
					{slides.map((slide, index) => {
						if (index == current) return slide
					})}
				</AnimatePresence>
			}
		</div>
	)
}

export default App
