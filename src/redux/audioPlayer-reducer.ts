import {ActionsType} from "./redux-store";

// typeof ActionCreators
export type PlayerActionsType =
    | ReturnType<typeof mutedAC>
    | ReturnType<typeof playingAC>
    | ReturnType<typeof volumeAC>
    | ReturnType<typeof currentTimeAC>
    | ReturnType<typeof durationAC>
    | ReturnType<typeof currentTrackAC>
    | ReturnType<typeof selectTrackAC>




// Actions
const SET_MUTED = 'sn/audioPlayer/SET-MUTED'
const SET_PLAYING = 'sn/audioPlayer/SET-PLAYING'
const SET_VOLUME = 'sn/audioPlayer/SET-VOLUME'
const SET_CURRENT_TIME = 'sn/audioPlayer/SET-CURRENT-TIME'
const SET_DURATION = 'sn/audioPlayer/SET-DURATION'
const SET_CURRENT_TRACK = 'sn/audioPlayer/SET-CURRENT-TRACK'
const SET_SELECT_TRACK = 'sn/audioPlayer/SET-SELECT-TRACK'

// ActionCreators
export const mutedAC = (muted: boolean) => ({type: SET_MUTED, muted} as const)
export const playingAC = (isPlaying: boolean) => ({type: SET_PLAYING, isPlaying} as const)
export const volumeAC = (volume: number) => ({type: SET_VOLUME, volume} as const)
export const currentTimeAC = (currentTime: number) => ({type: SET_CURRENT_TIME, currentTime} as const)
export const durationAC = (duration: number) => ({type: SET_DURATION, duration} as const)
export const currentTrackAC = (currentTrack: number) => ({type: SET_CURRENT_TRACK, currentTrack} as const)
export const selectTrackAC = (selectTrack: boolean) => ({type: SET_SELECT_TRACK, selectTrack} as const)


// types for InitialState
export type AudioPlayerType = {
    muted: boolean
    isPlaying: boolean
    volume: number
    currentTime: number
    duration: number
    currentTrack: number
    selectTrack: boolean
}

const initialState: AudioPlayerType = {
    muted: false,
    isPlaying: false,
    volume: 30,
    currentTime: 0,
    duration: 0,
    currentTrack: 0,
    selectTrack: false
}


// reducer
export const audioPlayerReducer = (state: AudioPlayerType = initialState, action: ActionsType): AudioPlayerType => {
    switch (action.type) {
        case SET_MUTED:
            return {...state, muted: action.muted}
        case SET_PLAYING:
            return {...state, isPlaying: action.isPlaying}
        case SET_VOLUME:
            return {...state, volume: action.volume}
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.currentTime}
        case SET_DURATION:
            return {...state, duration: action.duration}
        case SET_CURRENT_TRACK:
            return {...state, currentTrack: action.currentTrack}
        case SET_SELECT_TRACK:
            return {...state, selectTrack: action.selectTrack}
        default:
            return state
    }
}
//thunks
