import { create } from 'zustand'

type Images = {
	first: HTMLImageElement[],
	second: HTMLImageElement[],
	third: HTMLImageElement[],
	fourth: HTMLImageElement[],
	fifth: HTMLImageElement[]
}

type StringImages = {
	first: string[],
	second: string[],
	third: string[],
	fourth: string[],
	fifth: string[]
}

interface State {
	images: Images,
	render: boolean,
	setImages: (images: StringImages) => void,
	getImages: (slide: 'first'|'second'|'third'|'fourth'|'fifth') => HTMLImageElement[]
}

export const useImagesStore = create<State>()((set, get) => {
	return {
		images: {
			first: [],
			second: [],
			third: [],
			fourth: [],
			fifth: [],
		},
		render: false,
		setImages: (images) => {
			const mapImages = (img: string[]) => {
				return img.map(url => {
					const parsedImage = new Image()
					parsedImage.src = url
					return parsedImage
				})
			}

			const newImages = {
				first: mapImages(images.first),
				second: mapImages(images.second),
				third: mapImages(images.third),
				fourth: mapImages(images.fourth),
				fifth: mapImages(images.fifth)
			}
			
			set({ images: newImages, render: true })
		},
		getImages: (slide) => {
			const { images } = get()

			return images[slide]
		}
	}
})