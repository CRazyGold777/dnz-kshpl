import { connect } from "react-redux";
import { getLessonSelect } from "../../../selectors/simple-selector";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getLessonById, updateLesson, createLesson } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const Block = props => {

	let navigate = useNavigate();
	const onSubmit = (value) => {
		if (props.id) {
			props.updateLesson(props.id, value.week_day, value.course_id, value.subject_id, value.time_id);
		} else {
			props.createLesson(value.week_day, value.course_id, value.subject_id, value.time_id)
		}
		navigate("/admin/lesson")
	}
	let date;
	if (props.id) {
		date = { ...props.object }
	}

	return (
		<div>
			{/* week_day, course_id, subject_id, time_id */}
			<AdminPanel />
			<h1>Edit Lesson</h1>
			<Formik
				initialValues={{ ...date }}
				validate={values => {
					const errors = {};
					if (!values.week_day) {
						errors.week_day = 'Required';
					} else if (!values.course_id) {
						errors.course_id = 'Required';
					} else if (!values.subject_id) {
						errors.subject_id = 'Required';
					} else if (!values.time_id) {
						errors.time_id = 'Required';
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
						<p>Week Day</p>
						<Field name="week_day" />
						<ErrorMessage name="week_day" component="div" />
						<p>Course ID</p>
						<Field name="course_id" />
						<ErrorMessage name="course_id" component="div" />
						<p>Subject ID</p>
						<Field name="subject_id" />
						<ErrorMessage name="subject_id" component="div" />
						<p>Time ID</p>
						<Field name="time_id" />
						<ErrorMessage name="time_id" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>

		</div>
	)
}

const Container = props => {
	const up = useParams()

	useEffect(() => {
		if (Object.keys(up).length !== 0) {
			props.getLessonById(up.id);
		}
	}, [])
	if (!up.id) {
		return <Block {...props} />
	}
	else if (up.id && Object.keys(props.object).length > 0) {
		return <Block {...props} id={up.id} />
	}

}

const mapStateToProps = state => {
	return {
		object: getLessonSelect(state),
	}
}


export const AdminLesson = AuthRedirectAdmin(connect(mapStateToProps, { getLessonById, updateLesson, createLesson })(Container))