import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	//console.log(props);
	if (!song) {
		return <div>Pick a song!</div>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

//const mapStateToProps = (state) => { return {count: state.count}}
