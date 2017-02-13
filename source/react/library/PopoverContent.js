import React from 'react';
import portal from './portal';
import togglable from './togglable';

function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

const propTypes = {
  onOutsideClick: React.PropTypes.func,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.any,
  hint: React.PropTypes.string,
  allowBubble: React.PropTypes.bool,
};

class PopoverContent extends React.Component {

  constructor(props) {
    super(props);

    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.onOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick, true);
  }

  onOutsideClick(e) {
    if (!isNodeInRoot(e.target, this.elem) && this.props.onOutsideClick) {
      this.props.onOutsideClick(e);

      if (!this.props.allowBubble) {
        e.stopPropagation();
      }
    }
  }

  render() {
    const { className, style, hint } = this.props;
    let hintArea;

    if (hint) {
      hintArea = <small className="rc-popover-hint">{ hint }</small>;
    }

    return (
      <div ref={ (c) => { this.elem = c; } } className={ className } style={ style }>
        { hintArea }
        { this.props.children }
      </div>
    );
  }
}

PopoverContent.propTypes = propTypes;

const PopoverContentWithoutPortal = togglable(PopoverContent);
export { PopoverContentWithoutPortal };
export default portal(PopoverContent);
