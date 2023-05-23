import style from './NewBlock.module.css'
import { connect } from 'react-redux'
import { getNews } from '../../../selectors/simple-selector'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { setNewsTC } from '../../../redux/newsReducer'
import { howLength } from '../../../function/function.js'
import { Preloader } from '../Preloader/Preloader'

const Block = props => {
	return (
		<Link key={props.id} to={"/news-page/" + props.id} className={style.new}>
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

	useEffect(() => {
		props.setNewsTC(props.length)
	}, [])

	const arrayBlock = () => {
		if (props.news.length === 0) return (<div><Preloader /></div>)
		const mas = []
		for (let i = 0; i < howLength(props.length, props.news.length); i++) {
			let n = props.news[i]
			mas.push(<Block id={n.id} title={n.title} img={n.img} subText={n.subtext} />)
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
	}
}

export const NewBlock = connect(mapStateToProps, { setNewsTC })(NewBlockContainer)