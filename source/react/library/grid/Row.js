import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  collapse: PropTypes.oneOfType(['top', 'bottom', 'all']),
};

const defaultProps = {
  collapse: false,
  height: null,
};

const Row = props => {
  const { height, collapse, children } = props;
  const style = {};

  if (height) {
    style.height = `${height}px`;
  }

  const classNames = classnames('rc-grid-row', {
    [`rc-grid-row-collapse-${collapse}`]: collapse,
  });

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
