/*
 *
 * EventArea actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_EVENTS_REQUESTED,
  FETCH_EVENTS_FAILED,
  FETCH_EVENTS_SUCCEDED,
} from './constants';

export const defaultAction = () => ({ type: DEFAULT_ACTION });
export const fetchEventsRequested = () => ({ type: FETCH_EVENTS_REQUESTED });
export const fetchEventsFailed = () => ({ type: FETCH_EVENTS_FAILED });
export const fetchEventsSucceded = (data) => ({ type: FETCH_EVENTS_SUCCEDED, data });
