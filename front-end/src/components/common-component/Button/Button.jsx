import { Link } from 'react-router-dom'
import style from './Button.module.css'

export const Button = props => {
	return (
		<div className={style.button}>
			<Link to={props.link}>
				<div className={style.cut}></div>
				<p className={style.p}>{props.text}</p>
			</Link>
		</div>
	)
}