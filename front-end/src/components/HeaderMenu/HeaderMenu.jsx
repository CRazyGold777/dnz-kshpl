import { BlockMenu } from './BlockMenu'
import style from './HeaderMenu.module.css'
import { NavLink } from "react-router-dom";
import { useState } from "react"

export const HeaderMenu = () => {

	const [menu] = useState({
		about: {
			"/news/": "Новини",
			// "/administration/": "Адміністрація та викладачі",
			// "/history/": "Історія ліцею",
			// "/gallery/": "Галерея",
		},
		forTeacher: {
			// "/pupils-teachers/rights-and-obligations/": "Права та обов’язки учня",
			// "/pupils-teachers/distance-learning/": "Дистанційне навчання",
			"/pupils-teachers/timetable/": "Розклад занять"
		},
		entrant: {
		},
		NPC: {
		},
		forPartner: {
		}
	})

	// console.log(window.navigator.userAgentData.platform)

	return (
		<div className={style.headerMenu + " container"}>
			<div className={style.info}>
				<div className={style.icon}>
					<NavLink to="/">
						<img src="https://k-shpl.ck.ua/wp-content/uploads/2022/01/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1.png" alt="icon" />
					</NavLink>
				</div>
				<div>
					<div className={style.name}>
						ДНЗ “Корсунь-Шевченківський професійний ліцей”
					</div>
					<div className={style.menu}>
						<BlockMenu linkBlock="/about-us" name='Про нас' array={menu.about} />
						<BlockMenu linkBlock="/pupils-teachers" name='Учням і педагогам' array={menu.forTeacher} />
						<BlockMenu linkBlock="/entrant" name='Вступникам' />
						<BlockMenu linkBlock="/npc" name='НПЦ' />
					</div>
				</div>

			</div>

		</div>
	)
}