import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API_BY_ID } from "../Utils/constant";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(
    {
      "snippet": {
          "title": "",
          "thumbnails": {
              "maxres": {}
          },
          "channelTitle": "",
          "defaultAudioLanguage": "en"
      },
      "statistics": {
          "viewCount": "",
          "likeCount": "",
          "favoriteCount": "",
          "commentCount": ""
      }
  }
  );

  const { snippet, statistics } = data;
  const { channelTitle, title, description, thumbnails } = snippet;
  const { likeCount, viewCount } = statistics;

  useEffect(() => {
    dispatch(closeMenu());
    getVideoById();
  }, []);

  const getVideoById = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_BY_ID + searchParams.get("v"));
    const json = await data.json();
    setData(json.items[0]);
  };

  return (
    <div className="w-full px-8 mt-8">
      <div className="flex">
        <div className="px-2 mx-2 rounded-lg shadow-lg">
          <img
            width={"1280px"}
            className="rounded-lg"
            src={thumbnails.maxres.url}
            alt={description}
          />
          <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>
              {likeCount}
              <span className="font-bold"> Likes</span>
              &emsp;{viewCount}
              <span className="font-bold"> views</span>
            </li>
          </ul>
        </div>
        <div className="flex-auto">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
