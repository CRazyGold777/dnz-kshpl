import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin"
import { BlueButton } from "../../common-component/Button/BlueButton"
import style from './Admin.module.css'

AuthRedirectAdmin()
const Block = props => {
	return (
		<div>
			<h1>Admin Panel</h1>
			<div className={style.admin}>
				<BlueButton link='users' text="Users" />
				<BlueButton link='news' text="News" />
				<BlueButton link='notions' text="Notion" />
				<BlueButton link='teacher' text="Teacher" />
				<BlueButton link='student' text="Students" />
				<BlueButton link='course' text="Course" />
				<BlueButton link='subject' text="Subject" />
				<BlueButton link='lesson' text="Lessons" />
			</div>
		</div >
	)
}

export const Admin = AuthRedirectAdmin(Block)