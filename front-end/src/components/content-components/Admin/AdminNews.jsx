import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSubNews, deleteNews } from '../../../redux/admin-reducer'
import { getSSubNew } from '../../../selectors/simple-selector'
import style from './Admin.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ANews = props => {
	const [count, changeCount] = useState(10)

	useEffect(() => {
		props.getSubNews(count)
	}, [count])
	const deleteNews = (e) => {
		props.deleteNews(e.target.value, count)
	}

	return (
		<div>
			<div className={style.header}>
				<h1>News</h1>
				<Link to='/admin/new/create'>Create News</Link>
			</div>
			<div className={style.userInTable}>
				<div>Title</div>
				<div>SubText</div>
				<div>Img</div>
			</div>

			{
				props.subNews.map(u => {
					return (
						<div className={style.userInTable}>
							<div>{u.title}</div>
							<div>{u.subtext}</div>
							<div>{u.title}</div>
							<div><Link to={"/admin/new/" + u.id}>Edit</Link></div>
							<button onClick={deleteNews} value={u.id}>Delete</button>
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		subNews: getSSubNew(state),
	}
}

export const AdminNews = connect(mapStateToProps, { getSubNews, deleteNews })(ANews)