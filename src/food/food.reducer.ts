export interface Action {
  type: string;
  payload?: any;
}

export const ACTIONS = {
  ADD_FOOD: 'ADD_FOOD',
  REMOVE_FOOD: 'REMOVE_FOOD',
  GET_FOOD: 'GET_FOOD',
  GET_FOOD_SUCCESS: 'GET_FOOD_SUCCESS',
  GET_FOOD_FAILURE: 'GET_FOOD_FAILURE',
};

export interface IFOOD {
  id: number;
  name?: string;
  description?: string;
  color?: string;
  group?: string;
}

export interface AppState {
  foods: Array<IFOOD>;
}

export function food_reducer(state: Array<IFOOD> = [], action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_FOOD:
      return [...state, action.payload];
    case ACTIONS.REMOVE_FOOD:
      return state.filter((f) => f.name != action.payload.name);
    case ACTIONS.GET_FOOD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
