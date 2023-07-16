import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

   useEffect(() => {
    getVideos();
   },[]);

   const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
   }

  return (
    <div className='flex justify-center flex-row flex-wrap'>
      {
        videos.map(video => 
          <Link to = { "/watch?v=" + video.id}>
            <VideoCard key={video.id} data = {video} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer