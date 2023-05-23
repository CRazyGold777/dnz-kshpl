import { connect } from "react-redux"
import { AuthRedirect } from "../../../hook/AuthRedirect"
import { getCoursesSelect, getDayLessonsSelect } from "../../../selectors/simple-selector"
import style from './TimeTable.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getCourse, getDayLesson } from "../../../redux/admin-reducer";
import { useEffect } from "react";


const Table = props => {
	useEffect(() => {
		props.getCourse(10)
	}, [])

	const onSubmit = (value) => {
		props.getDayLesson(value.weekDay, value.course)
	}

	let day = []
	for (let index = 1; index <= 7; index++) {
		day.push(index)
	}

	return (
		<div className={style.formContainer}>
			<h1>Розклад</h1>
			<div>
				<div>
					<Formik
						initialValues={{ weekDay: '', course: '' }}
						validate={values => {
							const errors = {};
							if (!values.weekDay) {
								errors.weekDay = 'Required';
							} else if (!values.course) {
								errors.course = 'Required';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							onSubmit(values)
							setSubmitting(false);
						}}
					>
						{({ isSubmitting }) => (
							<Form className={style.form}>
								<h2>День тижня</h2>
								<Field as="select" name="weekDay" >
									<option value=""></option>
									{
										day.map(el => {
											return <option value={el}>{el}</option>
										})
									}
								</Field>
								<ErrorMessage name="weekDay" component="div" />
								<h2>Курс</h2>
								<Field as="select" name="course">
									<option value=""></option>
									{
										props.course.map(el => {
											return <option value={el.id_course}>{el.name_group}</option>
										})
									}
								</Field>
								<ErrorMessage name="course" component="div" />
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</Form>
						)}
					</Formik>
				</div>
				<div>
					<div className={style.table}>
						<div>Час початку</div>
						<div>Предмет</div>
						<div>Викладач</div>
					</div>
					{
						props.dayLesson.map(el => {
							return <div className={style.table}>
								<div>{el.time}</div>
								<div>{el.name_subject}</div>
								<div>{el.pib_teacher}</div>
							</div>
						})
					}
				</div>
			</div>

		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		dayLesson: getDayLessonsSelect(state),
		course: getCoursesSelect(state),
	}
}

export const TimeTable = AuthRedirect(connect(mapStateToProps, {
	getCourse, getDayLesson
})(Table));