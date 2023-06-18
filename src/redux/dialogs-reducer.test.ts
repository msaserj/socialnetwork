import {
  DialogPageType,
  dialogsReducer,
  newTextMessageOnChange,
  putDialogAC,
  sendMessageAC,
  setDialogsAC,
  setMessagesListAC,
  setTotalCountAC,
  toggleIsFetchingAC
} from './dialogs-reducer';

const initialState: DialogPageType = {
  dialogs: [],
  messages: [],
  newMessageState: '',
  userId: 0,
  error: null,
  totalCount: 0,
  isFetching: false,
  count: 10
};

test.skip('should send a message', () => {
  const action = sendMessageAC('message');

  const newState = dialogsReducer(initialState, action);

  expect(newState.messages[0]).toEqual('message');
});

test('should update new message text', () => {
  const newMessage = 'Hello, World!';
  const action = newTextMessageOnChange(newMessage);

  const newState = dialogsReducer(initialState, action);

  expect(newState.newMessageState).toBe(newMessage);
});

test('should set dialogs', () => {
  const dialogs = [
    {
      id: 1,
      userName: 'John',
      hasNewMessages: false,
      lastDialogActivityDate: new Date(),
      lastUserActivityDate: new Date(),
      newMessagesCount: 0,
      photos: { small: '', large: '' }
    }
  ];
  const action = setDialogsAC(dialogs);

  const newState = dialogsReducer(initialState, action);

  expect(newState.dialogs).toEqual(dialogs);
});

test('should set messages list', () => {
  const messages = [
    {
      id: '1',
      body: 'Hello',
      addedAt: new Date(),
      senderId: 1,
      senderName: 'John',
      recipientId: 2,
      viewed: false
    }
  ];
  const action = setMessagesListAC(messages);

  const newState = dialogsReducer(initialState, action);

  expect(newState.messages).toEqual(messages);
});

test('should put dialog', () => {
  const userId = 1;
  const action = putDialogAC(userId);

  const newState = dialogsReducer(initialState, action);

  expect(newState.userId).toBe(userId);
});

test('should set fetching state', () => {
  const isFetching = true;
  const action = toggleIsFetchingAC(isFetching);

  const newState = dialogsReducer(initialState, action);

  expect(newState.isFetching).toBe(isFetching);
});

test('should set total count', () => {
  const totalCount = 5;
  const action = setTotalCountAC(totalCount);

  const newState = dialogsReducer(initialState, action);

  expect(newState.totalCount).toBe(totalCount);
});
