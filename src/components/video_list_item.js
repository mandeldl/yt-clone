import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//using {video} is equivalent to const video = props.video; ES6 destructuring again!!

	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<li onClick={ () => onVideoSelect(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
					<div className="media-body">
						<div className="media-heading">{title}</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;