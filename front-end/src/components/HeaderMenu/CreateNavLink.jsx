import { NavLink } from "react-router-dom"
import style from "./HeaderMenu.module.css"

export const CreateNavLink = (props) => {
	return <div className={style.link}><NavLink key={props.key} to={props.link}>{props.text}</NavLink></div>
}