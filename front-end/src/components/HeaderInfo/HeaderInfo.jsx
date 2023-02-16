import style from './HeaderInfo.module.css'

export const HeaderInfo = (props) => {
	return (
		<div className={style.headerInfo + " container"}>
			<div className={style.main}>
				<div className={style.mainContent}>
					Україна, 19402, Черкаська область, Черкаський район, м.Корсунь-Шевченківський вул. Перемоги, 226.
				</div>
				<div className={style.phone}>
					<a href="tel:0(4735) 3-09-73">0(4735) 3-09-73</a>
				</div>
			</div>
			<div className={style.tools}>
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