import { createStore } from 'redux';
import { NetworkPostProps } from '../components';
import { ActionType, InitialStateProps } from './types';

const initialState: InitialStateProps  = {
  user: null,
  networkPosts: [],
}

const rootReducer = (state = initialState, action: ActionType ): InitialStateProps => {
    switch (action.type) {
        //User
        case 'user/set':
            return { ...state, user: { ...action?.value } };

        //NetworkPosts 
        case 'networkPosts/set':
          var newValue = Array.isArray(action?.value) ? action?.value : [];
          return { ...state, networkPosts: [ ...newValue ] };
        case 'networkPosts/edit':
          const newItem = action.value;
          var newValue: Array<NetworkPostProps> = [];
          
          for (const item of state.networkPosts) {
            if (item.id === action.value.id) {
              newValue.push(newItem);
            } else {
              newValue.push(item);
            }
          }

          return { ...state, networkPosts: [ ...newValue ] };
        case 'networkPosts/delete':
          const { id } = action;
          var newValue: Array<NetworkPostProps> = [];

          for (const item of state.networkPosts) {
            if (!(item.id === id)) {
              newValue.push(item);
            }
          }

          return { ...state, networkPosts: [ ...newValue ] };
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
