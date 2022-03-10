import React, { FC } from "react"
import { IVideoPlayerProps } from "./interfaces"
import { AiOutlineClose } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"

const VideoPlayer: FC<IVideoPlayerProps> = ({ videoId, setVideoId, data }) => (
	<>
		<div className='video-responsive'>
			<iframe
				width='853'
				height='480'
				src={`https://www.youtube.com/embed/${videoId}`}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title='Embedded youtube'
			/>
		</div>
		{data && (
			<>
				<h3>
					{data[0].title} - {data[0].date}
				</h3>
				<h4>{data[0].note}</h4>
				<div className='player-buttons'>
					<button className='player-btn' onClick={() => setVideoId(null)}>
						<BiArrowBack className='player-btn-icon' />
						Back
					</button>
					<button className='player-btn' onClick={() => setVideoId(null)}>
						<AiOutlineClose className='player-btn-icon' /> Close Video
					</button>
				</div>
			</>
		)}
	</>
)

export default VideoPlayer
