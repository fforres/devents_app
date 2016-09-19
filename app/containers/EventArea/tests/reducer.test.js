import expect from 'expect';
import eventAreaReducer from '../reducer';
import { fromJS } from 'immutable';

describe('eventAreaReducer', () => {
  it('returns the initial state', () => {
    expect(eventAreaReducer(undefined, {})).toEqual(fromJS({
      loading: false,
      error: false,
      events: [],
    }));
  });
});
