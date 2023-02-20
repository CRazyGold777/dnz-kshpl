import style from './NewBlock.module.css'
import { connect } from 'react-redux'
import { getCountNews, getNews } from '../../../selectors/selectors-news'
import { Link } from 'react-router-dom'

const Block = props => {
	return (
		<Link key={props.id} to={"/news-page?" + props.link} className={style.new}>
			<div className={style.title}>
				{props.title}
			</div>
			<div className={style.img}>
				<img src={props.img} alt="" />
			</div>
			<div className={style.text}>
				{props.subText}
			</div>
		</Link>
	)
}

const NewBlockContainer = props => {
	const arrayBlock = () => {
		const mas = []
		let length = 0
		if (props.length) {
			if (props.countNews < props.length) {
				length = props.countNews;
			}
			else {
				length = props.length;
			}
		}
		else {
			length = props.countNews;
		}
		for (let i = 0; i < length; i++) {
			let n = props.news[i]
			mas.push(<Block id={n.id} link={n.link} title={n.title} img={n.img} subText={n.subText} />)
		}
		return mas;
	}

	return (
		<div>
			{
				arrayBlock()
			}
		</div>

	)
}

const mapStateToProps = state => {
	return {
		news: getNews(state),
		countNews: getCountNews(state),
	}
}

export const NewBlock = connect(mapStateToProps, {})(NewBlockContainer)