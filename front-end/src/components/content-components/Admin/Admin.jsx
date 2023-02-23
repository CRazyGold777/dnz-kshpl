import { BlueButton } from "../../common-component/Button/BlueButton"
import style from './Admin.module.css'


export const Admin = props => {
	return (
		<div className={style.admin}>
			<BlueButton link='users' text="Users" />
			<BlueButton link='news' text="News" />
			<BlueButton link='notion' text="Notion" />
		</div>
	)
}