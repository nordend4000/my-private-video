import { Dispatch, SetStateAction } from "react"

export interface ISingleData {
	id: number
	title: string
	date: string
	url: string
	note: string
	keyword: string[]
	img: string
}

export interface IArrayData {
	data: ISingleData[]
}

export interface IVideosProps {
	video: ISingleData
	setVideoId: Dispatch<SetStateAction<string | null>>
}

export interface IFilterProps {
	data: ISingleData[] | null
	setFiltered: Dispatch<SetStateAction<ISingleData[] | null>>
	activeFilter: string
	setActiveFilter: Dispatch<SetStateAction<string>>
}

export interface IVideoPlayerProps {
	videoId: string | null
	setVideoId: Dispatch<SetStateAction<string | null>>
	data: ISingleData[] | null
}

export interface IHeaderProps {
	videoId: string | null
	setVideoId: Dispatch<SetStateAction<string | null>>
}
