import { combineReducers } from 'redux';
import Page from './Page/reducer';
import MenuState from './MenuState/reducer';

export default combineReducers({ Page, MenuState });
