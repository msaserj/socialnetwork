import { authReducer, AuthType, getCaptchaAC, resetAuthDataAC, setAuthData, setIsAuth } from './auth-reducer';

const initialState: AuthType = {
  data: { id: 0, login: '', email: '' },
  messages: [],
  fieldsErrors: [],
  resultCode: 0,
  isAuth: false,
  captcha: null
};

it('should set user data', () => {
  const payload: AuthType = {
    data: { id: 1, login: 'example', email: 'example@example.com' },
    messages: ['User data updated successfully.'],
    fieldsErrors: [],
    resultCode: 0
  };
  const action = setAuthData(payload);

  const newState = authReducer(initialState, action);

  expect(newState.data).toEqual(payload.data);
  expect(newState.messages).toEqual(payload.messages);
  expect(newState.fieldsErrors).toEqual(payload.fieldsErrors);
  expect(newState.resultCode).toEqual(payload.resultCode);
});

it('should set isAuth', () => {
  const isAuth = true;
  const action = setIsAuth(isAuth);

  const newState = authReducer(initialState, action);

  expect(newState.isAuth).toBe(isAuth);
});

it('should get captcha', () => {
  const captcha = 'abc123';
  const action = getCaptchaAC(captcha);

  const newState = authReducer(initialState, action);

  expect(newState.captcha).toBe(captcha);
});

it('should reset user authentication data', () => {
  const action = resetAuthDataAC();

  const newState = authReducer(initialState, action);

  expect(newState).toEqual(initialState);
});
