import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAUsers, deleteAUser } from '../../../redux/admin-users-reducer'
import { getAUsersSelect, getAUserscount } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'

const AUsers = props => {

	useEffect(() => {
		// debugger
		props.getAUsers(10)
	}, [props.count])

	const deleteUser = (e) => {
		props.deleteAUser(e.target.value)
	}

	return (
		<div>
			<h1>Users</h1>
			{
				props.users.map(u => {
					return (
						<div className={style.userInTable}>
							<div>{u.login}</div>
							<div>{u.password}</div>
							<div>{u.status}</div>
							<div><Link to={"/admin/user/" + u.id}>Edit</Link></div>
							<button onClick={deleteUser} value={u.id}>Delete</button>
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		users: getAUsersSelect(state),
		count: getAUserscount(state)
	}
}

export const AdminUsers = connect(mapStateToProps, { getAUsers, deleteAUser })(AUsers)