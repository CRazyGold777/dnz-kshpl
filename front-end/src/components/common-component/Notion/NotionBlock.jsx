import { connect } from "react-redux"
import { howLength } from "../../../function/function"
import { getCountNotion, getNotion } from "../../../selectors/simple-selector"
import style from './Notion.module.css'

const Notion = props => {
	return (
		<div key={props.id} className={style.wrapper}>
			<div className={style.content}>
				<div className={style.data}>{props.data}</div>
				<div className={style.title}>{props.title}</div>
				<div className={style.text}>{props.text}</div>
			</div>
		</div>
	)
}

const NotionBlockContainer = props => {

	const arrayBlock = () => {
		const mas = []
		for (let i = 0; i < howLength(props.length, props.countNotion); i++) {
			let n = props.notion[i]
			mas.push(<Notion id={n.id} data={n.data} title={n.title} text={n.text} />)
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
		notion: getNotion(state),
		countNotion: getCountNotion(state),
	}
}


export const NotionBlock = connect(mapStateToProps, {})(NotionBlockContainer)