import { createSelector } from 'reselect';

/**
 * Direct selector to the eventArea state domain
 */
const selectEventAreaDomain = () => state => state.get('eventArea');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EventArea
 */

const selectEventArea = () => createSelector(
  selectEventAreaDomain(),
  (substate) => substate.toJS()
);

const selectEvents = () => createSelector(
  selectEventAreaDomain(),
  (substate) => substate.get('events')
);

const selectLoading = () => createSelector(
  selectEventAreaDomain(),
  (substate) => substate.get('loading')
);

const selectError = () => createSelector(
  selectEventAreaDomain(),
  (substate) => substate.get('error')
);


export default selectEventArea;
export {
  selectEventAreaDomain,
  selectEvents,
  selectLoading,
  selectError,
};
