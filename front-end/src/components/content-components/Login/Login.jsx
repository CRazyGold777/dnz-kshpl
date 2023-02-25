import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setUser } from '../../../redux/auth-reducer'
import style from './Login.module.css'
import { getMessage, isAuth } from '../../../selectors/simple-selector';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
	const navigate = useNavigate()
	useEffect(() => {
		if (props.isAuth) {
			navigate("/")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.isAuth])

	return (
		<div className={style.formContainer}>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (!values.password) {
						errors.password = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					props.setUser(values)
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form className={style.form}>
						<h1>Login</h1>
						<Field type="text" name="email" />
						<ErrorMessage name="email" component="div" />
						<Field type="password" name="password" />
						<ErrorMessage name="password" component="div" />
						{props.message && <div>{props.message}</div>}
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		message: getMessage(state),
		isAuth: isAuth(state)
	}
}

export const Login = connect(mapStateToProps, {
	setUser
})(LoginForm)