import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import { isAuth } from "../selectors/simple-selector";

export const AuthRedirect = (Component) => {
	const mapStateToProps = (state) => {
		return {
			isAuth: isAuth(state)
		}
	}
	function RedirectComponent(props) {
		if (!props.isAuth) return <Navigate replace to="/login" />
		return <Component {...props} />
	}
	return connect(mapStateToProps, {})(RedirectComponent)
}