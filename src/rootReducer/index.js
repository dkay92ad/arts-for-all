import {combineReducers} from 'redux';
import chooseArt from '../components/Steps/ChooseArt/reducer';
import personalDetails from '../components/Steps/PersonalDetails/reducer';
export default combineReducers({
    chooseArt,    
    personalDetails,    
})