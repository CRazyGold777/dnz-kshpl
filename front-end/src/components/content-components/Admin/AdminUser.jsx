import { connect } from "react-redux";
import { getAUser } from "../../../selectors/simple-selector";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getAUserById, updateAUser, createAUser } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";

const UserBlock = props => {
	const onSubmit = (value) => {

		console.log(value);
		if (props.id) {
			props.updateAUser(props.id, value.login, value.password, value.status);
		} else {
			props.createAUser(value.login, value.password, value.status)
		}
	}

	return (
		<div>
			<h1>Edit User</h1>
			<Formik
				initialValues={{ login: props.user.login, password: props.user.password, status: props.user.status }}
				validate={values => {
					const errors = {};
					if (!values.login) {
						errors.login = 'Required';
					} else if (!values.password) {
						errors.password = 'Required';
					} else if (!values.status) {
						errors.status = 'Required';
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
						<Field name="login" />
						<ErrorMessage name="login" component="div" />
						<Field type="password" name="password" />
						<ErrorMessage name="password" component="div" />
						<Field as="select" name="status">
							<option value="student">student</option>
							<option value="teacher">teacher</option>
							<option value="admin">admin</option>
						</Field>
						<ErrorMessage name="status" component="div" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>

		</div>
	)
}

const ContainerUser = props => {
	const up = useParams()

	useEffect(() => {
		if (Object.keys(up).length !== 0) {
			props.getAUserById(up.id);
		}
	}, [])
	if (!up.id) {
		return <UserBlock {...props} />
	}
	else if (up.id && Object.keys(props.user).length > 0) {
		return <UserBlock {...props} id={up.id} />
	}

}

const mapStateToProps = state => {
	return {
		user: getAUser(state),
	}
}

export const AdminUser = AuthRedirectAdmin(connect(mapStateToProps, { getAUserById, updateAUser, createAUser })(ContainerUser))