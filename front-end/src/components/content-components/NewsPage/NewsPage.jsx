import { useEffect } from "react"
import { connect } from "react-redux"
import { useLocation } from "react-router-dom";
import { getNewsPage } from "../../../selectors/simple-selector";
import { setNewsPageTC } from '../../../redux/newsPageReducer'
import { NewBlock } from '../../common-component/New/NewBlock'
import style from './NewsPage.module.css'

export const NewsPageBlock = props => {
	const url = useLocation().search;
	useEffect(() => {
		props.setNewsPageTC(url)
	}, [])

	return (
		<div className={style.newsPage}>
			<div className={style.mainNews}>
				<div className={style.data}>{props.news.data}</div>
				<div className={style.title}>{props.news.title}</div>
				<div className={style.img}><img src={props.news.img} alt="img" /></div>
				<div className={style.text}>{props.news.text}</div>
				{props.news.dopImg && <div className={style.dopImg}> {props.news.dopImg.map(u => {
					return (
						<div><img src={u} alt="img" /></div>

					)
				})}</div>}
			</div>
			<div className={style.otherNews}>
				<NewBlock length={3} />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		news: getNewsPage(state)
	}
}

export const NewsPage = connect(mapStateToProps, {
	setNewsPageTC
})(NewsPageBlock)