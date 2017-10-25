import createStore from "redux-zero";

let SONGS = [
	{
        title: "Here Comes the Sun",
        artist: "The Beatles",
        duration: "2:54",
        isPlaying: false,
		id: 1,
	},
	{
		title: "Walking on Sunshine",
        artist: "Katrina and the Waves",
        duration: "3:43",
        isPlaying: false,
		id: 2,
	},
	{
		title: "Sunshine",
        artist: "Katrina",
        duration: "3:43",
        isPlaying: false,
		id: 3,
	},
];
const initialState = {
	songs: SONGS,
	nowPlayingIndex: 0
};

const store = createStore(initialState);

export default store;