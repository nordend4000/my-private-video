import React, { FC, useState } from "react"
import { FiYoutube } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"
import { AiOutlineHome } from "react-icons/ai"
import { RiMailAddLine } from "react-icons/ri"
import { BsLightbulb } from "react-icons/bs"
import { BsLightbulbOff } from "react-icons/bs"
import { RiGitRepositoryPrivateLine } from "react-icons/ri"
import { IHeaderProps } from "./interfaces"

const LINKS = [
	{
		url: "https://romaingioux.dev",
		icon: <AiOutlineHome />,
		tooltip: "Portfolio",
	},
	{
		url: "https://romaingioux.dev/contact",
		icon: <RiMailAddLine />,
		tooltip: "Contact",
	},
	{
		url: "https://github.com/nordend4000/",
		icon: <FiGithub />,
		tooltip: "Git Hub",
	},
	{
		url: "https://www.youtube.com/channel/UC5EKahFAhbg0_pbxSPoY9tA",
		icon: <FiYoutube />,
		tooltip: "Channel",
	},
]

const Header: FC<IHeaderProps> = ({ setVideoId, videoId }) => {
	const [isDark, setIsDark] = useState(true)

	const toggleMode = () => {
		if (!isDark) document.documentElement.setAttribute("data-theme", "light")
		if (isDark) document.documentElement.setAttribute("data-theme", "dark")
		setIsDark(!isDark)
	}
	return (
		<header>
			<h1 className={videoId ? "cursor" : ""} onClick={() => setVideoId(null)}>
				<span>
					<RiGitRepositoryPrivateLine />
				</span>
				MY PRIVATE VIDEOS
			</h1>
			<div className='header-icon'>
				{LINKS.map((el, id) => (
					<div key={id} className='tooltip'>
						<a href={el.url} target='_blank' rel='noreferrer'>
							{el.icon}
						</a>
						<span className='tooltiptext'>{el.tooltip}</span>
					</div>
				))}
				<div className='tooltip'>
					<span className='mode-icon' onClick={toggleMode}>
						{isDark ? <BsLightbulb /> : <BsLightbulbOff />}
					</span>
					<span className='tooltiptext extra-w'>
						{isDark ? "Light" : "Dark"}
					</span>
				</div>
			</div>
		</header>
	)
}

export default Header
