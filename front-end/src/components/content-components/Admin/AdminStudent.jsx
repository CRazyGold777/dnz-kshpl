import { connect } from "react-redux";
import { getStudentSelect } from "../../../selectors/simple-selector";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getStudentById, updateStudent, createStudent } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const Block = props => {

	let navigate = useNavigate();
	const onSubmit = (value) => {
		if (props.id) {
			props.updateStudent(props.id, value.pib, value.course);
		} else {
			props.createStudent(value.pib, value.course)
		}
		navigate("/admin/student")
	}
	let date;
	if (props.id) {
		date = { ...props.object }
	}

	return (
		<div>
			<AdminPanel />
			<h1>Edit Student</h1>
			<Formik
				initialValues={{ ...date }}
				validate={values => {
					const errors = {};
					if (!values.pib) {
						errors.pib = 'Required';
					} else
						if (!values.course_id) {
							errors.course_id = 'Required';
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
						<p>PIB</p>
						<Field name="pib" />
						<ErrorMessage name="pib" component="div" />
						<p>Course</p>
						<Field name="course_id" />
						<ErrorMessage name="course_id" component="div" />
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
			props.getStudentById(up.id);
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
		object: getStudentSelect(state),
	}
}


export const AdminStudent = AuthRedirectAdmin(connect(mapStateToProps, { getStudentById, updateStudent, createStudent })(Container))