import { connect } from "react-redux";
import { getSubjectSelect } from "../../../selectors/simple-selector";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getSubjectById, updateSubject, createSubject } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const Block = props => {

	let navigate = useNavigate();
	const onSubmit = (value) => {
		if (props.id) {
			props.updateSubject(props.id, value.name_subject, value.id_teacher);
		} else {
			props.createSubject(value.name_subject, value.id_teacher)
		}
		navigate("/admin/subject")
	}
	let date;
	if (props.id) {
		date = { ...props.object }
	}

	return (
		<div>
			<AdminPanel />
			<h1>Edit Subject</h1>
			<Formik
				initialValues={{ ...date }}
				validate={values => {
					const errors = {};
					if (!values.name_subject) {
						errors.name_subject = 'Required';
					} else
						if (!values.id_teacher) {
							errors.id_teacher = 'Required';
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
						<p>Name of Subject</p>
						<Field name="name_subject" />
						<ErrorMessage name="name_subject" component="div" />
						<p>Year of create</p>
						<Field name="id_teacher" />
						<ErrorMessage name="id_teacher" component="div" />
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
			props.getSubjectById(up.id);
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
		object: getSubjectSelect(state),
	}
}


export const AdminSubject = AuthRedirectAdmin(connect(mapStateToProps, { getSubjectById, updateSubject, createSubject })(Container))