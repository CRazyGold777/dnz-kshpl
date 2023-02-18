import style from './Footer.module.css'
import { NavLink } from "react-router-dom";

export const Footer = (props) => {
	return (
		<div className={"container " + style.footer_container}>
			<div className={style.info}>
				<div className={style.logo}>
					<div className={style.icon}>
						<NavLink to="/">
							<img src="https://k-shpl.ck.ua/wp-content/uploads/2022/01/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1.png" alt="icon" />
						</NavLink>
					</div>
					<div className={style.name}>
						ДНЗ “Корсунь-Шевченківський професійний ліцей”
					</div>
				</div>
				<div className={style.contact}>
					<div>
						<div className={style.name}>адреса:</div>
						<div className={style.text}>Україна, 19402, Черкаська область, Черкаський район, м.Корсунь-Шевченківський вул. Перемоги, 226.</div>
					</div>
					<div>
						<div className={style.name}>телефон:</div>
						<div className={style.text}>0(4735) 3-09-73</div>
					</div>
					<div>
						<div className={style.name}>e-mail:</div>
						<div className={style.text}>agroliceum@ukr.net</div>
					</div>
				</div>
				<div className={style.social}>
					<a href="https://www.facebook.com">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="fb" />
					</a>
					<a href="https://www.instagram.com">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="inst" />
					</a>
					<a href="https://www.youtube.com">
						<img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="yt" />
					</a>
				</div>
			</div>
		</div>
	)
}