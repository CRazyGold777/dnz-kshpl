import style from './Main.module.css'
import { Link } from "react-router-dom"
import { NewBlock } from "../../common-component/New/NewBlock"
import { NotionBlock } from "../../common-component/Notion/NotionBlock"
import { Title } from "../../common-component/Title/Title"
import { Button } from '../../common-component/Button/Button'
import { BlueButton } from '../../common-component/Button/BlueButton'

import joinToUs from '../../../img/svg/join-to-us.svg'
import learnWithUs from '../../../img/svg/learn-with-us.svg'
import firstimg from '../../../img/jpg/main/first.jpg'
import aboutUsjpg from '../../../img/jpg/main/aboutUs.jpg'
import line from '../../../img/jpg/main/line.png'
import video from '../../../video/main.mp4'
import bulling from '../../../img/jpg/main/bulling.jpg'



export const Main = props => {
	return (
		<div className={style.mainPage}>
			<div className={style.h1}>
				<h1>Запрошуємо на навчання</h1>
			</div>
			<div className={style.mainNotion}>
				<div className={style.img}><img src={firstimg} alt="img" /></div>
				<div className={style.notion}>
					<NotionBlock length={1} />
				</div>
			</div>
			<div className={style.vidget}>
				<Link className={style.vidget1} to="/entrant"><div>
					<img src={joinToUs} alt="join" />
					<p>Вступай до нас</p>
				</div>
				</Link>
				<Link className={style.vidget2} to="/pupils-teachers"><div>
					<img src={learnWithUs} alt="learn" />
					<p>Вчись з нами</p>
				</div>
				</Link>
			</div>
			<div className={style.aboutUs}>
				<div className={style.aboutUs__text}>
					<Title text="Про нас" />
					<div className={style.aboutUs__p}>ДНЗ "Корсунь-Шевченківський професійний ліцей" здійснює підготовку робітників високого рівня кваліфікації з числа випускників загальноосвітніх навчальних закладів на основі базової та повної загальної середньої освіти, перепідготовк у та підвищення кваліфікації працюючих робітників і незайнятого населення за направленнями центру зайнятості.
					</div>
					<div className={style.aboutUs__buttons}>
						<Button link="administration" text="Колектив" />
						<Button link="npc" text="НПЦ" />
					</div>
				</div>
				<div className={style.aboutUs__img}>
					<img src={aboutUsjpg} alt="about" />
				</div>

			</div>
			<div className={style.newsAndNotion}>
				<div>
					<Title text="новини" />
				</div>
				<div className={style.newsBlock}>
					<NewBlock length={3} />
				</div>
				<Button text="Всі новини" link="news" />
			</div>
			<div className={style.dnzThis}>
				<div className={style.dnzThis__header}>
					<div className={style.dnzThis__title}>ДНЗ “Корсунь-Шевченківський професійний ліцей” - це</div>
					<img src={line} alt="" />
				</div>
				<div className={style.dnzThis__info}>
					<div>
						<div>484</div>
						<div>учнів</div>
					</div>
					<div>
						<div>68</div>
						<div>викладачів</div>
					</div>
					<div>
						<div>87</div>
						<div>років праці</div>
					</div>
					<div>
						<div>8</div>
						<div>професій</div>
					</div>
				</div>
			</div>
			<div className={style.joinToUs}>
				<div className={style.joinToUs__info}>
					<Title text="Приєднуйся до нас" />
					<div className={style.joinToUs__text}>
						<div>
							<span>У нас ви отримаєте: </span>
							безцінний досвід спілкування, пристойний багаж знань, розширите свій кругозір.
							Можна навчитися долати перешкоди, розставляти пріоритети, бути терплячим, домагатися свого.
						</div>
						<div>
							<span>Але головна наша задача</span> – підготовка компетентних і грамотних фахівців-практиків, які мають попит на сучасному ринку праці. Вступайте до нас!
						</div>
					</div>
					<div className={style.joinToUs__Buttons}>
						<BlueButton text="Правила прийому" link="entrants/admission-rules/" />
						<BlueButton text="Документи до вступу" link="entrants/doc/" />
					</div>
				</div>
				<div className={style.joinToUs__video}>
					<video controls src={video}></video>
				</div>

			</div>
			<div className={style.someNotion}>
				<img src={bulling} alt="" />
			</div>
		</div>
	)
}