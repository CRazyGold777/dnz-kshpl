import { connect } from "react-redux";
import { getNotion } from "../../../selectors/simple-selector";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getNotionById, updateNotion, createNotion } from '../../../redux/admin-reducer.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Admin.module.css'
import { AuthRedirectAdmin } from "../../../hook/AuthRedirectAdmin";
import { AdminPanel } from "../../common-component/Button/ButtonAdminPanel";

const NotionBlock = props => {

	const onSubmit = (value) => {
		if (props.id) {
			props.updateNotion(props.id, value.title, value.text);
		} else {
			props.createNotion(value.title, value.text,);
		}
	}

	return (
		<div>
			<AdminPanel />
			<h1>Edit Notion</h1>
			<Formik
				initialValues={{
					text: props.notion.text,
					title: props.notion.title,
				}}
				validate={values => {
					const errors = {};
					if (!values.text) {
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

						<Field as="textarea" name="text" />
						<ErrorMessage name="text" component="div" />

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const ContainerNotion = props => {
	const up = useParams()

	useEffect(() => {
		if (Object.keys(up).length !== 0) {
			props.getNotionById(up.id);
		}
	}, [])

	if (!up.id) {
		return <NotionBlock {...props} />
	}
	else if (up.id && Object.keys(props.notion).length > 0) {
		return <NotionBlock {...props} id={up.id} />
	}
}

const mapStateToProps = state => {
	return {
		notion: getNotion(state),
	}
}

export const AdminNotion = AuthRedirectAdmin(connect(mapStateToProps, { getNotionById, updateNotion, createNotion })(ContainerNotion))