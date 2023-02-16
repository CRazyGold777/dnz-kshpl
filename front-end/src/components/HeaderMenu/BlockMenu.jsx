import { useState } from "react"
import { CreateNavLink } from "./CreateNavLink"
import style from "./HeaderMenu.module.css"

export const BlockMenu = props => {
	const [isOpen, setOpen] = useState(false)

	const setTrue = () => {
		setOpen(true)
	}

	const setFalse = () => {
		setOpen(false)
	}

	const getNavLink = () => {
		const array = props.array
		const nav = []
		if (array) {
			Object.keys(array).forEach(key => {
				nav.push(<CreateNavLink link={key} text={array[key]} />)
			});
		}
		return nav
	}

	return (
		<div className={style.BlockMenu}>
			<div className={style.button} onClick={setTrue} onPointerOver={setTrue} onPointerOut={setFalse}>{props.name}</div>
			{isOpen && (
				<div className={style.downBlockMenu} onPointerOver={setTrue} onPointerOut={setFalse} onFocus={setTrue}>
					{
						getNavLink().map(u => u)
					}
				</div>
			)}

		</div>
	)
}