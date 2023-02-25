import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNotion, deleteNotion } from '../../../redux/admin-reducer'
import { getNotions } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthRedirectAdmin } from '../../../hook/AuthRedirectAdmin'

const ANotion = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getNotion(count)
	}, [count])
	// debugger
	const deleteNotions = (e) => {
		props.deleteNotion(e.target.value, count)
	}

	return (
		<div>
			<div className={style.header}>
				<h1>Notions</h1>
				<Link to='/admin/notion/create'>Create Notion</Link>
			</div>
			<div className={style.userInTable}>
				<div>Date</div>
				<div>Title</div>
				<div>Text</div>
			</div>

			{
				props.notions.map(u => {
					return (
						<div className={style.userInTable}>
							<div>{u.date.split('T', 1)}</div>
							<div>{u.title}</div>
							<div>{u.text}</div>
							<div><Link to={"/admin/notion/" + u.id}>Edit</Link></div>
							<button onClick={deleteNotions} value={u.id}>Delete</button>
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		notions: getNotions(state),
	}
}

export const AdminNotions = AuthRedirectAdmin(connect(mapStateToProps, { getNotion, deleteNotion })(ANotion))