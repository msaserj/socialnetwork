import {
  followAC,
  setCurrentPageAC,
  setFilterAC,
  setPageSizeAC,
  setTotalUsersCountAC,
  setUsersAC,
  sortAC,
  toggleIsFetchingAC,
  toggleIsFollowingAC,
  unFollowAC,
  UsersPageType,
  usersReducer
} from './users-reducer';

let initialState: UsersPageType;
beforeEach(() => {
  initialState = {
    users: [
      {
        id: 1,
        photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
        followed: false,
        name: 'Alex',
        status: 'Loking for a job',
        location: { city: 'Tagil', country: 'Russia' }
      },
      {
        id: 2,
        photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
        followed: false,
        name: 'Nikolai',
        status: 'I flying in the clouds',
        location: { city: 'E-burg', country: 'Russia' }
      },
      {
        id: 3,
        photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
        followed: true,
        name: 'Lisa',
        status: 'At home',
        location: { city: 'Tver', country: 'Russia' }
      }
    ],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: {
      term: '',
      friend: null
    }
  };
});

test('new post should be added', () => {
  let action = followAC(1);

  let newState = usersReducer(initialState, action);

  expect(newState.users[0].followed).toBe(true);
});

test('length after delete should be decrement', () => {
  let action = unFollowAC(1);

  let newState = usersReducer(initialState, action);

  expect(newState.users[0].followed).toBe(false);
});

// fdfdf______________________________________________________________________________________________

test('should follow a user', () => {
  const userId = 1;
  const action = followAC(userId);

  const newState = usersReducer(initialState, action);

  expect(newState.users[0].followed).toBe(true);
});

test('should unfollow a user', () => {
  const userId = 2;
  const action = unFollowAC(userId);

  const newState = usersReducer(initialState, action);

  expect(newState.users[1].followed).toBe(false);
});

test('should set users and sort them', () => {
  const users = [
    {
      id: 4,
      photos: { small: '', large: '' },
      followed: false,
      name: 'John',
      status: 'Hello, world!',
      location: { city: 'London', country: 'UK' }
    },
    {
      id: 5,
      photos: { small: 'https://thispersondoesnotexist.com/image', large: '' },
      followed: true,
      name: 'Emma',
      status: 'In the garden',
      location: { city: 'Paris', country: 'France' }
    }
  ];
  const action = setUsersAC(users);

  const newState = usersReducer(initialState, action);

  expect(newState.users.length).toBe(2);
  expect(newState.users[1].id).toBe(4); // Sorted based on photos.small existence
  expect(newState.users[0].id).toBe(5);
});

test('should set the filter', () => {
  const filter = { term: 'search', friend: true };
  const action = setFilterAC(filter);

  const newState = usersReducer(initialState, action);

  expect(newState.filter).toEqual(filter);
});

test('should sort users by photos.small', () => {
  const action = sortAC(undefined);

  const newState = usersReducer(initialState, action);

  expect(newState.users.every(user => user.photos.small === null)).toBe(true);
});

test('should set the current page', () => {
  const currentPage = 3;
  const action = setCurrentPageAC(currentPage);

  const newState = usersReducer(initialState, action);

  expect(newState.currentPage).toBe(currentPage);
});

test('should set the page size', () => {
  const pageSize = 10;
  const action = setPageSizeAC(pageSize);

  const newState = usersReducer(initialState, action);

  expect(newState.pageSize).toBe(pageSize);
});

test('should set the total users count', () => {
  const totalCount = 100;
  const action = setTotalUsersCountAC(totalCount);

  const newState = usersReducer(initialState, action);

  expect(newState.totalUsersCount).toBe(totalCount);
});

test('should toggle isFetching', () => {
  const isFetching = true;
  const action = toggleIsFetchingAC(isFetching);

  const newState = usersReducer(initialState, action);

  expect(newState.isFetching).toBe(isFetching);
});

test('should toggle isFollowing and update followingInProgress', () => {
  const userId = 1;
  const initialFollowingInProgress = [2, 3];
  const initialStateWithFollowingInProgress: any = {
    ...initialState,
    followingInProgress: initialFollowingInProgress
  };

  const actionStart = toggleIsFollowingAC(true, userId);
  const newStateStart = usersReducer(initialStateWithFollowingInProgress, actionStart);

  expect(newStateStart.followingInProgress).toContain(userId);

  const actionStop = toggleIsFollowingAC(false, userId);
  const newStateStop = usersReducer(newStateStart, actionStop);

  expect(newStateStop.followingInProgress).not.toContain(userId);
});
