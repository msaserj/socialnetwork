import { followAC, unFollowAC, UsersPageType, usersReducer } from './users-reducer';

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
