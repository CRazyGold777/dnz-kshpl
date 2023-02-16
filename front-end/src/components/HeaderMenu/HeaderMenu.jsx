import { BlockMenu } from './BlockMenu'
import style from './HeaderMenu.module.css'
import { NavLink } from "react-router-dom";
import { useState } from "react"

export const HeaderMenu = () => {

	const [menu, setMenu] = useState({
		about: {
			"news/": "Новини",
			"administration/": "Адміністрація та викладачі",
			"history/": "Історія ліцею",
			"gallery/": "Галерея",
			"regulations/": "Прозорість та інформаційна відкритість навчального закладу",
			"reports/": "Звіти",
			"life-stories/": "Історії з життя учнів та педагогічних працівників",
			"international/": "Експериментальна діяльність регіонального рівня",
			"contacts/": "Контакти",
			"material-support/": "Матеріально-технічне забезпечення",
		},
		forTeacher: {

		},
		entrant: {

		},
		NPC: {

		},
		forPartner: {

		}
	})

	return (
		<div className={style.headerMenu + " container"}>
			<div className={style.info}>
				<div className={style.icon}>
					<NavLink to="/">
						<img src="https://k-shpl.ck.ua/wp-content/uploads/2022/01/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1.png" alt="icon" />
					</NavLink>
				</div>
				<div className={style.name}>
					ДНЗ “Корсунь-Шевченківський професійний ліцей”
				</div>
			</div>
			<div className={style.menu}>
				<BlockMenu name='Про нас' array={menu.about} />
				<BlockMenu name='Учням і педагогам' />
				<BlockMenu name='Вступникам' />
				<BlockMenu name='НПЦ' />
				<BlockMenu name='Партнерам' />
			</div>
		</div>
	)
}