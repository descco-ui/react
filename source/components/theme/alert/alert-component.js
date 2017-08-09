import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// components
import Button from '../button';
import Icon from '../icon';
//styles
import { styles } from '@descco/ui-core';
const style = styles.alert;

/**
 * Alert component
 * @extends { PureComponent }
 * @class
 */
class Alert extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props){
    super(props);

    this.getIcon = this.getIcon.bind(this);
  }

  /**
   * defaultProps
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {String} headline
   * @property {Node} children
   */
  static defaultProps = {
    type: 'info',
    onDismiss: undefined,
    dismissTitle: 'Notificação',
    showIcon: false,
    dark: false,
    id: undefined,
    headline: undefined,
    children: undefined
  };

  /**
   * propTypes
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {String}  headline
   * @property {Node} children
   */
  static propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
    onDismiss: PropTypes.func,
    dismissTitle: PropTypes.string,
    showIcon: PropTypes.bool,
    dark: PropTypes.bool,
    id: PropTypes.string,
    headline: PropTypes.string,
    children: PropTypes.any.isRequired
  };

  /**
   * getIcon
   * @property {String} type
   */
  getIcon(type) {
    switch (type){
    case 'info':
      return 'info-circle';
    case 'success':
      return 'check';
    case 'warning':
      return 'warning';
    case 'danger':
      return 'shield';
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render(){
    const { onDismiss, children, type, headline, dismissTitle, showIcon, dark } = this.props;
    const fullClassName = classNames({
      [style.dismissable]: onDismiss,
      [style[type]]: type,
      [style['alert--dark']]: dark,
      [style['alert--icon']]: showIcon
    });
    const icon = this.getIcon(type);

    if (!children) {
      return null;
    }

    return (
      <div className={fullClassName}>
        {onDismiss &&
        <Button style="transparent" size="none" className={style.close} title={dismissTitle} onClick={onDismiss}>
          <Icon name="close" />
        </Button>
        }

        {showIcon &&
        <Icon className={style.icon} name={icon} size="30px" />
        }
        <div className={style.msgContainer}>
          {headline ? <h4 className={style.headline}>{headline}</h4> : null}
          <div className={style.body}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * @example <Alert />
 */
export default CSSModules(Alert, style);
