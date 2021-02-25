import { combineReducers } from 'redux';

//This is like the 'state'. This will be an example with a static list of songs, so you dont need any params. However, if there was
//data being added or pushed to songs reducer, you would probably want the params.

const songsReducer = () => {
	return [
		{ title: 'Take A Chance On Me', duration: '4:05' },
		{ title: 'Kokomo', duration: '2:45' },
		{ title: 'Smells Like Teen Spirit', duration: '3:15' },
		{ title: 'Kalinka', duration: '2:00' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	//the type has to match the action.
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

//The name keys of this object are going to be the names that show up inside of our state object.
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
