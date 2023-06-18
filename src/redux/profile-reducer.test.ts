import {
  addPostOnClickAC,
  deletePostAC,
  editProfileAC,
  newPostTextOnChangeAC,
  ProfilePageType,
  profileReducer,
  savePhotoAC,
  setResultCodeAC,
  setStatusAC,
  UserProfileType
} from './profile-reducer';

const initialState: ProfilePageType = {
  posts: [
    { id: '1', message: 'Hi', likesCount: 5 },
    { id: '2', message: 'How is your it-kamasutra', likesCount: 6 },
    { id: '3', message: 'Yo', likesCount: 10 }
  ],
  newTextState: '',
  userProfile: {} as UserProfileType,
  status: '',
  resultCode: 0,
  edit: false
};

test('new post should be added', () => {
  let action = addPostOnClickAC();

  let newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(initialState.posts.length + 1);
  expect(newState.posts[0].message).toBe('');
  expect(newState.posts[0].likesCount).toBe(5);
});

test('length after delete should be decrement', () => {
  let action = deletePostAC('1');

  let newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(2);
});

test('should update new post text', () => {
  const newPostText = 'New post text';
  const action = newPostTextOnChangeAC(newPostText);

  const newState = profileReducer(initialState, action);

  expect(newState.newTextState).toBe(newPostText);
});

test('should set status', () => {
  const status = 'New status';
  const action = setStatusAC(status);

  const newState = profileReducer(initialState, action);

  expect(newState.status).toBe(status);
});

test('should set photo', () => {
  const photoFile = 'new-photo.jpg';
  const action = savePhotoAC(photoFile);

  const newState = profileReducer(initialState, action);

  expect(newState.userProfile.photos).toBe(photoFile);
});

test('should set result code', () => {
  const code = 200;
  const action = setResultCodeAC(code);

  const newState = profileReducer(initialState, action);

  expect(newState.resultCode).toBe(code);
});

test('should delete a post', () => {
  const postId = '2';
  const action = deletePostAC(postId);

  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(2);
});

test('should edit profile', () => {
  const edit = true;
  const action = editProfileAC(edit);

  const newState = profileReducer(initialState, action);

  expect(newState.edit).toBe(edit);
});
