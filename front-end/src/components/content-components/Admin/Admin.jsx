import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin"
import { BlueButton } from "../../common-component/Button/BlueButton"
import style from './Admin.module.css'

AuthRedirectAdmin()
const Block = props => {
	return (
		<div className={style.admin}>
			<BlueButton link='users' text="Users" />
			<BlueButton link='news' text="News" />
			<BlueButton link='notions' text="Notion" />
		</div>
	)
}

export const Admin = AuthRedirectAdmin(Block)