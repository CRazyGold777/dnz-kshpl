import loading from "../../../img/loading-gif.gif";

export let Preloader = () => {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '50%'
		}}>
			<img src={loading} alt="preloader"
				style={{ width: '300px', height: '300px', borderRadius: '50%' }} />
		</div>
	)
}