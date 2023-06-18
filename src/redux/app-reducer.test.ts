import { appReducer, AppType, fetchingAC, initialAC } from './app-reducer';

const initialState: AppType = {
  initialized: false,
  fetching: false
};

test('should set initialized state', () => {
  const initialized = true;
  const action = initialAC(initialized);

  const newState = appReducer(initialState, action);

  expect(newState.initialized).toBe(initialized);
});

test('should set fetching state', () => {
  const fetching = true;
  const action = fetchingAC(fetching);

  const newState = appReducer(initialState, action);

  expect(newState.initialized).toBe(fetching);
});
