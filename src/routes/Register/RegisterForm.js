import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import FormikInput from '../../components/FormikInput';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import { mapStateToProps, mapDispatchToProps } from './selectors';

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 500,
	},
  title: {
    marginTop: theme.spacing(3)
  },
	textField: {
    marginTop: theme.spacing(2)
	},
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const RegisterSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
    passwordVerify: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords does not match')
      .required('Required'),
  });

const Register = (props) => {
	const classes = useStyles();
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				passwordVerify: '',
			}}
			validationSchema={RegisterSchema}
			onSubmit={props.createUser}
			render={(formProps) => (
				<form className={classes.root} onSubmit={formProps.handleSubmit}>
					<Typography className={classes.title} variant='h2'>
						 Sign up
					</Typography>
					<Typography color='textSecondary' gutterBottom>
						Sign in to get access to all the goodies
					</Typography>
					<FormikInput name='email' type='email' label='Email' fullWidth formProps={formProps} />
					<FormikInput name='password' type='password' label='Password' fullWidth formProps={formProps} />
					<FormikInput name='passwordVerify' type='password' label='Verify password' fullWidth formProps={formProps} />
						<Button
							type='submit'
							fullWidth
							className={classes.signUpButton}
							disabled={props.submitting}
							color='primary'
							size='large'
							variant='contained'>
							Register
						</Button>
				</form>
			)} />
	);
};

Register.propTypes = {

};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Register);