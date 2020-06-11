import React from 'react';
import PropTypes from 'prop-types';
import MuiTooltip from '../MuiTooltip/MuiTooltip';
import Button from './components/Button/Button';

/**
   * MuiButton controls Dialog open state from true to false.
   * More docs and demos at https://material-ui.com/api/button/
   */

export const MuiButton = (props) => {
  if (props.tooltip.length > 0) {
    return (
      <MuiTooltip {...props.tooltip[0]}>
        <Button {...props} />
      </MuiTooltip>
    );
  }

  return <Button {...props} />;
};

export default MuiButton;

MuiButton.propTypes = {
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * expecting array of string ex: ['color: black', 'font-Size: 20px' ]
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'default'| 'inherit'| 'primary'| 'secondary'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, no elevation is used.
   */
  disableElevation: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the ripple effect will be disabled.
   * Without a ripple there is no styling for :focus-visible by default.
   * Be sure to highlight the element by applying separate styles with the focusVisibleClassName.
   */
  disableRipple: PropTypes.bool,
  /**
   * name of Icon uses MuiIcon
   * Element placed after the children. renders icon
   * any icon from https://material.io/resources/icons/?style=baseline
   * */
  endIcon: PropTypes.arrayOf(PropTypes.shape()),
  /**
   * mui prop: true | false
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * mui prop: 'small'| 'medium'| 'large'
   * The size of the button. small is equivalent to the dense button styling.
   * */
  size: PropTypes.string,
  /**
   * name of Icon uses MuiIcon
   * Element placed before the children. renders icon
   * any icon from https://material.io/resources/icons/?style=baseline
   * */
  startIcon: PropTypes.arrayOf(PropTypes.shape()),
  /**
   * mui prop: 'text' |'outlined'| 'contained
   * The variant to use.
   * */
  variant: PropTypes.string,
  /** not in storyblok passed down from parent component */
  onClick: PropTypes.func.isRequired,


  /** Tooltip to wrap button in to display help text */
  tooltip: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string,
  })),
};

MuiButton.defaultProps = {
  rootClass: [],
  color: 'secondary',
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  endIcon: [],
  fullWidth: true,
  size: 'medium',
  startIcon: [],
  variant: 'text',
  tooltip: [],
};
