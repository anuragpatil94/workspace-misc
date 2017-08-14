import React from 'react';
import VideoListItem from './video_list_item';

//Here props came from videos={this.state.videos} in index.js
const VideoList = (props) => {
    console.log('VideoList');
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;