import style from './NewBlock.module.css'
import { connect } from 'react-redux'
import { getCountNews, getNews } from '../../../selectors/simple-selector'
import { Link } from 'react-router-dom'
import { howLength } from '../../../function/function'

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

		for (let i = 0; i < howLength(props.length, props.countNews); i++) {
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