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
          link
          group {
            name
            hires_photo
            photo
            assistants_nickname
          }
          venue {
            city
            address
            lat
            lon
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
      const sorted = events.data.events.sort((a, b) => {
        if (a.last_nom < b.last_nom) {
          return -1;
        }
        if (a.last_nom > b.last_nom) {
          return 1;
        }
        return 0;
      });

      yield put(fetchEventsSucceded(sorted));
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
