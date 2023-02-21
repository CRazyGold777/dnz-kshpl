import style from './News.module.css'
import { connect } from 'react-redux'
import { getCountNews, getCountNotion } from '../../../selectors/selectors-news'
import { NewBlock } from '../../common-component/New/NewBlock'
import { useState } from 'react'
import { useEffect } from 'react'
import { setNewsTC, setNotionTC } from '../../../redux/newsReducer.js'
import { Title } from '../../common-component/Title/Title.jsx'

export const NewsBlock = props => {

	const [localCountNews, setCountNews] = useState(6)
	const [localCountNotion, setCountNotion] = useState(4)
	const [isNews, setShowNews] = useState(true)

	const changeCountNews = () => {
		setCountNews(localCountNews + 6)
	}

	const changeCountNotion = () => {
		setCountNotion(localCountNotion + 4)
	}

	const showNews = () => {
		setShowNews(true)
	}

	const showNotice = () => {
		setShowNews(false)
	}

	useEffect(() => {
		props.setNewsTC(localCountNews)
	}, [localCountNews])

	useEffect(() => {
		props.setNewsTC(localCountNotion)
	}, [localCountNotion])

	return (
		<div className={style.pageNews}>
			<div className={style.tabs}>
				<div onClick={showNews}><Title active={!isNews} text="Новини" /></div>
				<div onClick={showNotice}><Title active={isNews} text="Оголошення" /></div>
			</div>
			{
				isNews ?
					<div className={style.news}>
						<NewBlock length={localCountNews} />
						{props.countNews > localCountNews && <div className={style.divButton}><button onClick={changeCountNews}>Показати більше</button></div>}
					</div>
					:
					<div className={style.notion}>
						<NewBlock length={localCountNotion} />
						{props.countNotion > localCountNotion && <div className={style.divButton}><button onClick={changeCountNotion}>Показати більше</button></div>}
					</div>
			}


		</div>
	)
}

const mapStateToProps = state => {
	return {
		countNews: getCountNews(state),
		countNotion: getCountNotion(state),
	}
}

export const News = connect(mapStateToProps, {
	setNewsTC,
	setNotionTC
})(NewsBlock); 