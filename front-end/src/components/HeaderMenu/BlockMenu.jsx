import { useState } from "react"
import { NavLink } from "react-router-dom"
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

	const onTouched = () => {
		setOpen(true)
		setTimeout(function () {
			setFalse()
		}, 10);
	}

	const getNavLink = () => {
		const array = props.array
		const nav = []
		let i = 0
		if (array) {
			Object.keys(array).forEach(key => {
				nav.push(<CreateNavLink key={i} link={key} text={array[key]} />)
				i++;
			});
		}
		return nav
	}


	return (
		<div className={style.blockMenu}>
			<div className={style.button} onPointerOver={setTrue} onPointerOut={setFalse}>
				<NavLink to={props.linkBlock}>{props.name}</NavLink>
			</div>
			{isOpen && (
				<div className={style.downBlockMenu} onPointerOver={setTrue} onPointerOut={setFalse} onTouchEnd={onTouched}>
					{
						getNavLink().map(u => u)
					}
				</div>
			)}

		</div>
	)
}