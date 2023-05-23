import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import { isAuth, getStatus } from "../selectors/simple-selector";

export const AuthRedirectAdmin = (Component) => {
	const mapStateToProps = (state) => {
		return {
			isAuth: isAuth(state),
			status: getStatus(state)
		}
	}
	function RedirectComponent(props) {
		// return <Component {...props} />
		if (props.status === "admin" && props.isAuth)
			return <Navigate replace to="/login" />

	}
	return connect(mapStateToProps, {})(RedirectComponent)
}