import { Link } from 'react-router-dom'
import style from './BlueButton.module.css'

export const BlueButton = props => {
	return (
		<div className={style.button}>
			<Link to={props.link}>
				<p className={style.p}>{props.text}</p>
			</Link>
		</div>
	)
}