import style from './News.module.css'
import { connect } from 'react-redux'
import { getCountNews } from '../../../selectors/selectors-news'
import { NewBlock } from '../../common-component/New/NewBlock'
import { useState } from 'react'

export const NewsBlock = props => {

	const [localCountNews, setCountNews] = useState(6)

	const changeCountNews = () => {
		setCountNews(localCountNews + 6)
	}

	return (
		<div className={style.allNews}>
			<div className={style.tabs}></div>
			<div className={style.mainNews}></div>
			<div className={style.otherNews}>
				<NewBlock length={localCountNews} />
				{props.countNews > localCountNews && <div className={style.divButton}><button onClick={changeCountNews}>Показати більше</button></div>}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		countNews: getCountNews(state),
	}
}

export const News = connect(mapStateToProps, {})(NewsBlock); 