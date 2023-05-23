import not_found from '../../../img/webp/404.webp'

export const PageNotFound = props => {
	return (
		<div style={{ width: 100 + '%' }}>
			<img style={{ width: 100 + '%' }} src={not_found} alt="404" />
		</div>
	)
}