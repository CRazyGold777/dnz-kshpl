import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTeacher, deleteTeacher } from '../../../redux/admin-reducer'
import { getTeachersSelect } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const ATeachers = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getTeacher(count)
	}, [count])

	const deleteTeacher = (e) => {
		props.deleteTeacher(e.target.value, count)
	}

	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Teachers</h1>
				<Link to='/admin/teacher/create'>Create Teacher</Link>
			</div>
			<div className={`${style.InTable} ${style.teacherInTable}`}>
				<div>PIB Teacher</div>
			</div>

			{
				props.array.map(u => {
					return (
						<div className={`${style.InTable} ${style.teacherInTable}`}>
							<div>{u.pib_teacher}</div>
							<div><Link to={"/admin/teacher/" + u.teacher_id}>Edit</Link></div>
							<button onClick={deleteTeacher} value={u.teacher_id}>Delete</button>
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		array: getTeachersSelect(state)
	}
}

export const AdminTeachers = AuthRedirectAdmin(connect(mapStateToProps, { getTeacher, deleteTeacher })(ATeachers))