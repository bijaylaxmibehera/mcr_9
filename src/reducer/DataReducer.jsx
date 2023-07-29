import { videos } from "../database/Videos";

export const initialState = {
  categories: [],
  playlist: [],
  watchlater: [],
  notes: [],
  search: "",
  videos: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORY":
      return { ...state, categories: [...action.payload] };
    case "INITIALIZE_VIDEOS":
      return { ...state, videos: [...action.payload] };
    case "FILTER_VIDEOS":
      return {
        ...state,
        videos: [
          ...state.videos.filter((video) => video.category === action.payload),
        ],
      };
    case "ADD_SEARCH":
      return { ...state, search: action.payload.toLowerCase() };
    case "SET_WATCHLATER":
      return {
        ...state,
        watchlater: [...action.payload],
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: [...state.watchlater, action.payload],
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: state.watchlater.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(
          (playlist) => playlist.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
