import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStudent, deleteStudent } from '../../../redux/admin-reducer'
import { getStudentsSelect } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const Table = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getStudent(count)
	}, [count])

	const deleteO = (e) => {
		props.deleteStudente(e.target.value, count)
	}
	const classS = `${style.InTable} ${style.studentInTable}`;
	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Students</h1>
				<Link to='/admin/student/create'>Create Teacher</Link>
			</div>
			<div className={classS}>
				<div>PIB Student</div>
				<div>Course</div>
			</div>

			{
				props.array.map(u => {
					let id = u.student_id
					return (
						<div className={classS}>
							<div>{u.pib}</div>
							<div>{u.course_id}</div>
							<div><Link to={"/admin/student/" + id}>Edit</Link></div>
							<button onClick={deleteO} value={id}>Delete</button>
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		array: getStudentsSelect(state)
	}
}

export const AdminStudents = AuthRedirectAdmin(connect(mapStateToProps, { getStudent, deleteStudent })(Table))