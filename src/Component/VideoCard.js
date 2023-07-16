import React from 'react'
import Proptypes from 'prop-types';

const VideoCard = (props) => {

    const { snippet, statistics } = props.data;
    
    const { channelTitle, title, description, thumbnails } = snippet;
    const { likeCount, viewCount } = statistics;

  return (
    <div className='p-2 m-2 w-72 rounded-lg shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={description} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            {/* <li>{description}</li> */}
            <li>
                {likeCount}<span className='font-bold'> Likes</span>
                &emsp;{viewCount}<span className='font-bold'> views</span>
            </li>
        </ul>
    </div>
  )
}

VideoCard.propTypes = {
    props : Proptypes.array.isRequired
}

export default VideoCard