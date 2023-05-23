import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getLesson, deleteLesson } from '../../../redux/admin-reducer'
import { getLessonsSelect } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'
import { AdminPanel } from '../../common-component/Button/ButtonAdminPanel'

const Table = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getLesson(count)
	}, [count])

	const deleteO = (e) => {
		props.deleteLesson(e.target.value, count)
	}

	const classS = `${style.InTable} ${style.lessonInTable}`;
	return (
		<div>
			<AdminPanel />
			<div className={style.header}>
				<h1>Lessons</h1>
				<Link to='/admin/lesson/create'>Create Lesson</Link>
			</div>
			<div className={classS}>
				<div>Week Day</div>
				<div>Course id</div>
				<div>Subject id</div>
				<div>Time id</div>
			</div>

			{
				props.array.map(u => {
					let id = u.id_course
					return (
						<div className={classS}>
							<div>{u.week_day}</div>
							<div>{u.course_id}</div>
							<div>{u.subject_id}</div>
							<div>{u.time_id}</div>
							<div><Link to={"/admin/lesson/" + id}>Edit</Link></div>
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
		array: getLessonsSelect(state)
	}
}

export const AdminLessons = AuthRedirectAdmin(connect(mapStateToProps, { getLesson, deleteLesson })(Table))