import { NavLink } from 'react-router-dom'
import { Title } from '../../common-component/Title/Title'
import style from './Entrants.module.scss'

export const Entrants = props => {

	let date = [
		{ text: "Познайомся з навчальним закладом:" },
		{ text: "Обери професію за покликанням:" },
		{ text: "Познайомся з правилами прийому:" },
		{ text: "Приготуй документи, необхідні до вступу:" },
		{ text: "Звернись до приймальної комісії:" },
	]
	let link = [
		{ link: "/about-us", text: "Про нас" },
		{ link: "/profecion", text: "Професії" },
		{ link: "/rules", text: "Правила прийому" },
		{ link: "/document", text: "Документи" },
		{ link: "/contact", text: "Контакти" }
	]

	return <div>
		<Title text="Вступникам" />
		<div className={style.block1}>
			<h2>ЧОМУ ВАРТО ОБРАТИ НАШ ЗАКЛАД</h2>
			<p>Щороку перед випускниками шкіл постає проблема вибору майбутнього. Саме майбутнього, тому що від правильності обраної дороги зараз залежить багато в чому те, як складеться життя потім. Професія визначить у майбутньому соціальний статус, і затребуваність у житті, і навіть рівень матеріального добробуту. Причому іноді питання стоїть не куди піти вчитися, а яку освіту варто здобувати взагалі.</p>
			<h3>ДНЗ “Корсунь-Шевченківський професійний ліцей” це:</h3>
			<ul>
				<li>Усвідомлений вибір майбутньої професії.</li>
				<li>Грамотно організований навчальний процес.</li>
				<li>Наявність практик за фахом.</li>
				<li>Конкуренція на ринку праці.</li>
			</ul>
			<p>Ваша дитина під опікою класного керівника.</p>
		</div>
		<Title text="Як стати учнем" />
		<div className={style.block2}>
			<div className={style.block2__col1}>
				{
					date.map((el, index) => {
						return (
							<div>
								<div className={style.block2__step}>
									<p>{index + 1}</p>
									<p>крок</p>
								</div>
								<div className={style.block2__text}>
									{el.text}
								</div>
							</div>
						)
					})
				}
			</div>
			<div className={style.block2__col2}>
				{link.map(el => {
					return <div><NavLink to={el.link}>{el.text}</NavLink></div>
				})}

			</div>
		</div>
	</div>
}