import { connect } from "react-redux";
import { getNew } from "../../../selectors/simple-selector";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getNewsById, updateNews, createNews } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const NewBlock = props => {

	const onSubmit = (value) => {
		if (props.id) {
			props.updateNews(props.id, value.title, value.img, value.subtext, value.text, value.dopimg);
		} else {
			props.createNews(value.title, value.img, value.subtext, value.text, value.dopimg)
		}
	}

	return (
		<div>
			<AdminPanel />
			<h1>Edit New</h1>
			<Formik
				initialValues={{
					dopimg: '',
					img: props.new.img,
					subtext: props.new.subtext,
					text: props.new.text,
					title: props.new.title,
				}}
				validate={values => {
					const errors = {};
					if (!values.img) {
						errors.img = 'Required';
					} else if (!values.subtext) {
						errors.subtext = 'Required';
					} else if (!values.text) {
						errors.text = 'Required';
					} else if (!values.title) {
						errors.title = 'Required';
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

						<Field name="title" />
						<ErrorMessage name="title" component="div" />
						<Field name="img" />
						<ErrorMessage name="img" component="div" />
						<Field name="subtext" />
						<ErrorMessage name="subtext" component="div" />
						<Field as="textarea" name="text" />
						<ErrorMessage name="text" component="div" />
						<Field name="dopimg" />
						<ErrorMessage name="dopimg" component="div" />

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const ContainerNew = props => {
	const up = useParams()

	useEffect(() => {
		if (Object.keys(up).length !== 0) {
			props.getNewsById(up.id);
		}
	}, [])

	if (!up.id) {
		return <NewBlock {...props} />
	}
	else if (up.id && Object.keys(props.new).length > 0) {
		return <NewBlock {...props} id={up.id} />
	}
}

const mapStateToProps = state => {
	return {
		new: getNew(state),
	}
}

export const AdminNew = AuthRedirectAdmin(connect(mapStateToProps, { getNewsById, updateNews, createNews })(ContainerNew))