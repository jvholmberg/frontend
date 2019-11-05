import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { Root, SignInButton, SignOutButton, MenuButton, FlexGrow } from './styles';
import NotificationsButton from '../../../components/Buttons/Notifications';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const Header = props => (
	<Root>
		<FlexGrow />
		{props.accessToken ? (
			<Hidden mdDown>
				<NotificationsButton length={1} />
				<SignOutButton onClick={props.destroyJwt} />
			</Hidden>
		) : (
			<Hidden mdDown>
				<SignInButton />
			</Hidden>
		)}
		{!props.noSidebar && (
			<Hidden lgUp>
				<MenuButton onClick={() => !props.isDesktop && props.setSidebarOpen(!props.sidebarOpen)} />
			</Hidden>
		)}
	</Root>
);

Header.propTypes = {
	accessToken: PropTypes.string
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
