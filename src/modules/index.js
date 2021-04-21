import {combineReducers} from 'redux';

import base from './base';
import modal from './modal';
import contacts from './contacts';

export default combineReducers({
    base,
    modal,
    contacts
});