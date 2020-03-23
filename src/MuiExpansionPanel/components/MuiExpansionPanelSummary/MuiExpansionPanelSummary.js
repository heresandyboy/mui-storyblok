import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Storyblok from '../../../utils/Storyblok';

const MuiTypography = lazy(() => import('../../../MuiTypography/MuiTypography'));
const MuiIcon = lazy(() => import('../../../MuiIcon/MuiIcon'));

const MuiExpansionPanelSummary = ({
  rootClass,
  content,
  expandIcon,
}) => {
  const components = {
    MuiTypography,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <Suspense fallback={<div />}>
      <ExpansionPanelSummary
        className={styles.root}
        expandIcon={createElement(components[expandIcon[0].component], expandIcon[0])}
      >
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </ExpansionPanelSummary>
    </Suspense>
  );
};

export default MuiExpansionPanelSummary;

MuiExpansionPanelSummary.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiIcon limit 1 */
  expandIcon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiTypography */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiExpansionPanelSummary.defaultProps = {
  rootClass: [],
};
