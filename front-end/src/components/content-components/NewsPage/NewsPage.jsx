import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { getNewsPage } from "../../../selectors/simple-selector";
import { setNewsPageTC } from '../../../redux/newsPageReducer'
import { NewBlock } from '../../common-component/New/NewBlock'
import style from './NewsPage.module.css'
import { Preloader } from "../../common-component/Preloader/Preloader";

export const NewsPageBlock = props => {
	const { id } = useParams();
	useEffect(() => {
		props.setNewsPageTC(id)
	}, [id])
	return (< div >
		{Object.keys(props.news).length === 0 ? <Preloader /> :
			< div className={style.newsPage} >
				<div className={style.mainNews}>
					<div className={style.data}>{props.news.date.split('T', 1)}</div>
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
			</div >
		}
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