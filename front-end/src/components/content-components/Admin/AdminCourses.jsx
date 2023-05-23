import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCourse, deleteCourse } from '../../../redux/admin-reducer'
import { getCoursesSelect } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const Table = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getCourse(count)
	}, [count])

	const deleteO = (e) => {
		props.deleteCourse(e.target.value, count)
	}

	const classS = `${style.InTable} ${style.courseInTable}`;
	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Courses</h1>
				<Link to='/admin/course/create'>Create Course</Link>
			</div>
			<div className={classS}>
				<div>Name group</div>
				<div>Year of create</div>
			</div>

			{
				props.array.map(u => {
					let id = u.id_course
					return (
						<div className={classS}>
							<div>{u.name_group}</div>
							<div>{u.year_of_create}</div>
							<div><Link to={"/admin/course/" + id}>Edit</Link></div>
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
		array: getCoursesSelect(state)
	}
}

export const AdminCourses = AuthRedirectAdmin(connect(mapStateToProps, { getCourse, deleteCourse })(Table))