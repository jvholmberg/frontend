import React from 'react';
import PropTypes from 'prop-types';

import MinimalLayout from '../../layouts/Minimal';
import RegisterForm from './RegisterForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import BackButton from '../../components/Button/BackButton';

const useStyles = makeStyles(theme => ({
	root: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
	},
	leftContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundImage: 'url(/tushar.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
	},
	leftTitle: {
    color: theme.palette.white,
    fontWeight: 300
  },
	rightContainer: {
		padding: theme.spacing(2),
	},
  contentHeader: {
		position: 'absolute',
    padding: theme.spacing(2),
		boxSizing: 'border-box',
  },
	content: {
		display: 'flex',
    padding: theme.spacing(2),
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
}));

const Register = (props) => {
	const classes = useStyles();
	return (
		<MinimalLayout noFooter>
			<Grid
				className={classes.root}
				container
				direction='row'
				justify='space-evenly'
				alignItems='stretch'
				alignContent='stretch'>
				<Grid
					item
					lg={5}
					className={classes.leftContainer}>
					<Typography className={classes.leftTitle} variant="h1">
						Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
						they sold out High Life.
					</Typography>
				</Grid>
				<Grid
					item
					lg={7}
					xs={12}
					className={classes.rightContainer}>
					<div className={classes.contentHeader}>
						<BackButton />
					</div>
					<div className={classes.content}>
						<RegisterForm />
					</div>
				</Grid>
			</Grid>
		</MinimalLayout>
	);
};

Register.propTypes = {
	
};

export default Register;