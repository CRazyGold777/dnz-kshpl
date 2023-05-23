import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubject, deleteSubject } from '../../../redux/admin-reducer'
import { getSubjectsSelect } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const Table = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getSubject(count)
	}, [count])

	const deleteO = (e) => {
		props.deleteSubject(e.target.value, count)
	}

	const classS = `${style.InTable} ${style.courseInTable}`;
	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Subject</h1>
				<Link to='/admin/subject/create'>Create Course</Link>
			</div>
			<div className={classS}>
				<div>Subject name</div>
				<div>Teacher id</div>
			</div>

			{
				props.array.map(u => {
					let id = u.id_course
					return (
						<div className={classS}>
							<div>{u.name_subject}</div>
							<div>{u.id_teacher}</div>
							<div><Link to={"/admin/subject/" + id}>Edit</Link></div>
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
		array: getSubjectsSelect(state)
	}
}

export const AdminSubjects = AuthRedirectAdmin(connect(mapStateToProps, { getSubject, deleteSubject })(Table))