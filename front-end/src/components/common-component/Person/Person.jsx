import { connect } from "react-redux"
import { getStatus, isAuth } from "../../../selectors/simple-selector"
import { logOut } from '../../../redux/auth-reducer'
import { Link } from "react-router-dom"
import style from './Person.module.css'


const PersonDiv = props => {

	const whatShow = () => {
		if (props.status === "student") {
			return "S"
		} else if (props.status === "teacher") {
			return "T"
		} else if (props.status === "admin") {
			return "A"
		}
	}

	return (
		<div>
			<div className={style.person}>
				{props.isAuth ?
					<Link to="/log_out" >{whatShow()}</Link>
					:
					<Link to="/login" >Login</Link>
				}
			</div>

			<div>
				{props.status === "admin" && <Link to={"admin"}>adminPage</Link>}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isAuth: isAuth(state),
		status: getStatus(state)
	}
}

export const Person = connect(mapStateToProps, { logOut })(PersonDiv)