import style from './Title.module.css'

export const Title = props => {
	return (
		<div className={style.title} >
			{
				!props.active ?
					<span className={style.br}></span>
					: <div></div>

			}
			<span className={style.cir}></span>
			<span className={style.text}>{props.text}</span>
		</div >
	)
}