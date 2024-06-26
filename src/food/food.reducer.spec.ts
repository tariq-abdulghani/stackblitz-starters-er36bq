import { IFOOD, Action, ACTIONS, food_reducer } from './food.reducer';

describe('Food Reducer', () => {
  it('Should add new food', () => {
    let initialState: Array<IFOOD> = [];

    let apple: IFOOD = {
      id: 0,
      name: 'apple',
      color: 'green',
      description: 'apples',
      group: 'fruits',
    };

    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: apple,
    };

    let new_state = food_reducer(initialState, addAction);
    expect(initialState.length).toBe(0);
    expect(new_state.length).toBe(1);
    expect(new_state[0].name).toContain('apple');
  });
});
