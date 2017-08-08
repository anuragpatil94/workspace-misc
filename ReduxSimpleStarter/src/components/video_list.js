import React from 'react';

//Here props came from videos={this.state.videos} in index.js
const VideoList = (props) => {

    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;