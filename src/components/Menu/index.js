import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './selectors';
import { Wrapper, Content, Wordmark, LeftSection, RightSection, Link, ButtonLink } from './styles';

const ControlledLink = ({ check, ...rest }) => check
	? (<Link {...rest} />)
	: (null);

const ControlledButtonLink = ({ check, ...rest }) => check
	? (<ButtonLink {...rest} />)
	: (null);

const Menu = ({ accessToken }) => (
	<Wrapper>
		<Content>
			<Wordmark to='/'>Training</Wordmark>
			<LeftSection>
				<ControlledLink check={accessToken} to='/dashboard'>Dashboard</ControlledLink>
			</LeftSection>
			<RightSection>
				{/* <ControlledLink check={!accessToken} to='/register'>Register</ControlledLink> */}
				<ControlledButtonLink check={!accessToken} to='/login'>Login</ControlledButtonLink>
			</RightSection>
		</Content>
	</Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);