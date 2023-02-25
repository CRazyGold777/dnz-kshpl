import { connect } from "react-redux"
import { getNotionFromNR } from "../../../selectors/simple-selector"
import { setNotionTC } from '../../../redux/notionReducer'
import style from './Notion.module.css'
import { useEffect } from "react"
import { howLength } from '../../../function/function.js'
import { Preloader } from "../Preloader/Preloader"

const Notion = props => {
	return (
		<div key={props.id} className={style.wrapper}>
			<div className={style.content}>
				<div className={style.data}>{props.date.split('T', 1)}</div>
				<div className={style.title}>{props.title}</div>
				<div className={style.text}>{props.text}</div>
			</div>
		</div>
	)
}

const NotionBlockContainer = props => {

	useEffect(() => {
		props.setNotionTC(props.length)
	}, [])

	const arrayBlock = () => {
		if (props.notion.length === 0) return (<div><Preloader /></div>)
		const mas = []
		for (let i = 0; i < howLength(props.length, props.notion.length); i++) {
			let n = props.notion[i]
			mas.push(<Notion id={n.id} date={n.date} title={n.title} text={n.text} />)
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
		notion: getNotionFromNR(state),
	}
}


export const NotionBlock = connect(mapStateToProps, {
	setNotionTC
})(NotionBlockContainer)