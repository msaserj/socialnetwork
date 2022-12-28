import {addPostOnClickAC, deletePostAC, ProfilePageType, profileReducer, UserProfileType} from "./profile-reducer";

const initialState: ProfilePageType = {
    posts: [
        {id: "1", message: "Hi", likesCount: 5},
        {id: "2", message: "How is your it-kamasutra", likesCount: 6},
        {id: "3", message: "Yo", likesCount: 10},
    ],
    newTextState: "",
    userProfile: {} as UserProfileType,
    status: "",
    resultCode: 0,
    edit: false,
    message: []
}

test('new post should be added', () => {

    let action = addPostOnClickAC()

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
});

test('length after delete should be decrement', () => {

    let action = deletePostAC("1")

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
});