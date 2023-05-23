import { connect } from "react-redux";
import { getCourseSelect } from "../../../selectors/simple-selector";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getCourseById, updateCourse, createCourse } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const Block = props => {

	let navigate = useNavigate();
	const onSubmit = (value) => {
		if (props.id) {
			props.updateCourse(props.id, value.name_group, value.year_of_create);
		} else {
			props.createCourse(value.name_group, value.year_of_create)
		}
		navigate("/admin/course")
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
					if (!values.name_group) {
						errors.name_group = 'Required';
					} else
						if (!values.year_of_create) {
							errors.year_of_create = 'Required';
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
						<p>Name of group</p>
						<Field name="name_group" />
						<ErrorMessage name="name_group" component="div" />
						<p>Year of create</p>
						<Field name="year_of_create" />
						<ErrorMessage name="year_of_create" component="div" />
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
			props.getCourseById(up.id);
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
		object: getCourseSelect(state),
	}
}


export const AdminCourse = AuthRedirectAdmin(connect(mapStateToProps, { getCourseById, updateCourse, createCourse })(Container))