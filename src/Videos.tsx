import React, { FC } from "react"
import { IVideosProps } from "./interfaces"
import { motion } from "framer-motion"

const Videos: FC<IVideosProps> = ({ video, setVideoId }) => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			layout>
			<h2>{video.title}</h2>
			<div onClick={() => setVideoId(video.url)}>
				<img
					className='screenshot'
					src={process.env.PUBLIC_URL + `/images/${video.img}.png`}
					alt={video.title}
				/>
			</div>
			<div className='date'>{video.date}</div>
		</motion.div>
	)
}

export default Videos
