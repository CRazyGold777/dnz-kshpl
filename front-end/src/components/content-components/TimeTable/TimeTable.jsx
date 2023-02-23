import { AuthRedirect } from "../../../hook/AuthRedirect"


const Table = props => {
	return (
		<div>Розклад занять ще не добавлено</div>
	)
}

export const TimeTable = AuthRedirect(Table)