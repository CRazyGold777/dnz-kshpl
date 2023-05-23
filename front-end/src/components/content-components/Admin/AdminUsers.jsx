import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAUsers, deleteAUser } from '../../../redux/admin-reducer'
import { getAUsersSelect, getAUserscount } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const AUsers = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getAUsers(count)
	}, [count])

	const deleteUser = (e) => {
		props.deleteAUser(e.target.value, count)
	}

	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Users</h1>
				<Link to='/admin/user/create'>Create User</Link>
			</div>
			<div className={style.userInTable}>
				<div>Login</div>
				<div>Password</div>
				<div>Status</div>
			</div>

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
	}
}

export const AdminUsers = AuthRedirectAdmin(connect(mapStateToProps, { getAUsers, deleteAUser })(AUsers))