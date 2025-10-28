import React, { type FC } from 'react'
import { Link } from 'react-router-dom'
import"./SignUp.css"

const SignUp: FC = () => {
	return (
		<div >
			<h2>Sign Up</h2>
			<p>Sign up form placeholder.</p>
			<p>
				Already have an account? <Link to="/auth/sign-in">Sign in</Link>
			</p>
		</div>
	)
}

export default SignUp

