import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { get } from 'utils/graphql';

import { fetchEventsFailed, fetchEventsSucceded } from './actions';
import { FETCH_EVENTS_REQUESTED } from './constants';

// Individual exports for testing

function* fetchEvents() {
  try {
    const events = yield call(() => get(`
      {
        events {
          id
          time
          assistants_limit
          assistants_current
          name
          plain_text_description
          group {
            name
            hires_photo
            photo
          }
          venue {
            city
            address
            name
          }
        }
      }
      `)
      .then((body) => body)
      .catch((ex) => ex)
    );
    if (events.errors) {
      throw new Error(events.errors);
    } else {
      yield put(fetchEventsSucceded(events.data.events));
    }
  } catch (e) {
    yield put(fetchEventsFailed());
  }
}

export function* defaultSaga() {
  yield* takeLatest(FETCH_EVENTS_REQUESTED, fetchEvents);
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
];
