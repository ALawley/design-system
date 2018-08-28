import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import Message from './MenuActionsMessage';
import Buttons from './MenuActionsButtons';

const propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
};

const defaultProps = {
  children: null,
  centered: false,
};

const MenuActions = ({ centered, children }) => {
  const className = classnames('rc-menu-actions', {
    'rc-menu-actions-centered': centered,
  });

  return <div className={className}>{children}</div>;
};

MenuActions.propTypes = propTypes;
MenuActions.defaultProps = defaultProps;

MenuActions.Message = Message;
MenuActions.Buttons = Buttons;

export default MenuActions;
