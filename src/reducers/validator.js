import { GET_TRUSTINDEX_API, UPDATE_TRUSTINDEX_API, GET_VALIDATIONDATA } from '../actions/validator';
import _ from 'lodash';
// import Constants from '../lib/constants';

// const { App, Status, Preferences } = Constants;
const initialState = { validationdata: 'None', error: false };

export default function customerService (state = initialState, action) {
    switch (action.type) {
        case GET_VALIDATIONDATA: {
            return _.extend({}, state, { validationdata: action.data });
        }
        case GET_TRUSTINDEX_API: {
            return _.extend({}, state, { error: action.error }, { validationdata: action.data });
        }

        case UPDATE_TRUSTINDEX_API: {
            return _.extend({}, state, { validationdata: action.data });
        }
        default:
            return state;
    }
}
