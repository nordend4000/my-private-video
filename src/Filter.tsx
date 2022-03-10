import React, { FC, useEffect } from "react"
import { IFilterProps } from "./interfaces"
import { FILTERS } from "./data"

const Filter: FC<IFilterProps> = ({
	data,
	setFiltered,
	activeFilter,
	setActiveFilter,
}) => {
	useEffect(() => {
		if (!data) return
		if (activeFilter === "All") {
			setFiltered(data)
			return
		}
		const filter = data.filter(el => el.keyword.includes(activeFilter))
		setFiltered(filter)
	}, [activeFilter, data, setFiltered])

	return (
		<div className='filter-container'>
			{FILTERS.map(cat => (
				<button
					key={cat}
					onClick={() => setActiveFilter(cat)}
					className={activeFilter === `${cat}` ? "active" : ""}>
					{cat}
				</button>
			))}
		</div>
	)
}

export default Filter
