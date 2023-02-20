import { NewBlock } from "../../common-component/New/NewBlock"
import { Title } from "../../common-component/Title/Title"


export const Main = props => {
	return (
		<div>
			<Title text="Про нас" />
			<NewBlock length={2} />
		</div>
	)
}