import React, { FC, useState, useEffect } from "react"
import Videos from "./Videos"
import Filter from "./Filter"
import { DATA } from "./data"
import { IArrayData } from "./interfaces"
import "./App.css"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./Header"
import VideoPlayer from "./VideoPlayer"

const App: FC = () => {
	const [data, setData] = useState<IArrayData["data"] | null>(null)
	const [filtered, setFiltered] = useState<IArrayData["data"] | null>(null)
	const [activeFilter, setActiveFilter] = useState<string>("All")
	const [videoId, setVideoId] = useState<string | null>(null)

	useEffect(() => {
		setData(DATA)
		setFiltered(DATA)
	}, [])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [videoId, activeFilter])

	return (
		<div className='App'>
			<Header setVideoId={setVideoId} videoId={videoId} />
			{videoId ? (
				<VideoPlayer
					videoId={videoId}
					setVideoId={setVideoId}
					data={data && data.filter(el => el.url === videoId)}
				/>
			) : (
				<>
					{data && filtered && (
						<Filter
							data={data}
							setFiltered={setFiltered}
							activeFilter={activeFilter}
							setActiveFilter={setActiveFilter}
						/>
					)}
					<AnimatePresence>
						<motion.div layout className='grid-video'>
							{data && filtered && filtered.length === 0 && (
								<h2>There is no video available on this categorie</h2>
							)}
							{data &&
								filtered &&
								filtered.map(video => {
									return (
										<Videos
											key={video.id}
											video={video}
											setVideoId={setVideoId}
										/>
									)
								})}
						</motion.div>
					</AnimatePresence>
				</>
			)}
			<footer>
				2022 &copy; All right reserved -{" "}
				<a href='https://romaingioux.dev'>RG Web Developer</a>
			</footer>
		</div>
	)
}

export default App
