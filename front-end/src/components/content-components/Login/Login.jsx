import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setUser } from '../../../redux/auth-reducer'
import style from './Login.module.css'

const LoginForm = (props) => (
	<div className={style.formContainer}>
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
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
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="div" />
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div" />
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export const Login = connect(null, {
	setUser
})(LoginForm)