/*
 *
 * EventArea reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_FAILED,
  FETCH_EVENTS_SUCCEDED,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  events: [],
});

function eventAreaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_EVENTS_REQUESTED:
      return state
      .set('loading', true)
      .set('error', false);
    case FETCH_EVENTS_FAILED:
      return state
      .set('loading', false)
      .set('error', true);
    case FETCH_EVENTS_SUCCEDED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.data);
    default:
      return state;
  }
}

export default eventAreaReducer;
