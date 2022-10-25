import {followAC, followTC, toggleIsFollowingAC, unFollowAC, unFollowTC} from "./users-reducer";
import {ResultCodeEnum, UserAPIResponseType, usersAPI} from "../api/api";

jest.mock("../api/api")
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unFollow.mockClear()
})


const result: UserAPIResponseType = {
    resultCode: ResultCodeEnum.Success,
    data: {},
    messages: []
}

test('follow thunk should be success', async () => {
    userAPIMock.follow.mockReturnValue(Promise.resolve(result))
    const thunk = followTC(1)


    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingAC(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, followAC(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingAC(false, 1))

});

test('UNfollow thunk should be success', async () => {
    userAPIMock.unFollow.mockReturnValue(Promise.resolve(result))
    const thunk = unFollowTC(2)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleIsFollowingAC(true, 2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, unFollowAC(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleIsFollowingAC(false, 2))

});