import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API_BY_ID } from "../Utils/constant";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(
    {
      "snippet": {
          "publishedAt": "2023-07-15T06:58:55Z",
          "channelId": "UCj22tfcQrWG7EMEKS0qLeEg",
          "title": "DAILY VLOGGERS PARODY 😘 | CARRYMINATI",
          "thumbnails": {
              "high": {
                  "url": "https://i.ytimg.com/vi/5XVoRGhrhZk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              }
          },
          "channelTitle": "CarryMinati",
          "categoryId": "23",
          "liveBroadcastContent": "none",
          "localized": {
              "title": "DAILY VLOGGERS PARODY 😘 | CARRYMINATI",
              "description": "Download Probo & Earn Money:- https://probo-in.onelink.me/1kre/CarryMinati \n\nParivaar aisa banao ke content nikaal sako. \n\nCredits: \nProducers: Deepak Char & CarryMinati \nConcept & Written By: Vishal Dayama\nCreated By: CarryMinati  \nProduction House: One Hand Clap\nExecutive Producer: Naveed Manakkodan\nAssociate Producer: Dishant Mehta\nDirected By: Nishant Sharma\nCinematography By: Ashwin Kadamboor\nAssociate Director: Karan Juneja\nLine Producer: Amit Kumar\nEditor: Hitanshu ‘rAge’ Soneji \nAdditional DOP: Prathamesh (One Digital Entertainment) \nCast:\nMain Vloggers: CarryMinati \nPiyush: Arun Kushwaha \nChahi: Kanupriya Sharma \nChacha: Ankur Jain\nNeetu: Raksha Kumawat \nKhushi: Trisha Sharma\nAnju: Apurva Singh\nManju: Solanki Sharma\nSecurity Gaurd : Amarjeet \nProduction Team \nProduction Controller: Rohit Ranjan, Anas Batwale\nProduction Manager: Geet Thapa\nProduction Assistant: Shakti Singh Tomar \nDirection Team \nSecond AD: Shivani Soni\nThird AD: Ankit Tiwari \nDOP Team \n1st Assistant Cameraman: Harish Shrestha\nGaffer: Santanu Sahu\nDIT: Jitender Yadav \nMakeup Team \nProsthetic Designer: Raj Singh, Swapnil, Sawant & Shree\nMake-up Artist and Hair: Yogita Seth, Kavita Seth \nArt Team \nProduction Designer: Vinay Vishwakarma \nArt Director: Vivek Maurya\nArt Assistant: Shayli Borker  \nStyling Team \nStylist: Ayushi Varia & Rajvee Shah \nAssistant Stylist: Rizillia\nDressman: Pavan Yadav\nSound Team \nSound Recordist: Akhilesh P Singh\nBoom Operator: K Satendra P Singh \nPost Team \nDI & Sound: Famous Studios, Andheri\nSr. Colorist: Prashant Sharma\nBusiness Head: Kannan Lakshmanan\nLine Producer: Tanuja Naik\nSound Engineer: Vitthal Gore\nSound Operations: Nikhil Salunkhe \nCamera Attendant: Niraj Maurya, Aryan Kumar, Rajesh Bharti, Ranjeet Bharti, Ajay Panday, Sumit Panday\nSpot Team \nProduction boys Incharge: Randhir Kumar Pasi\nProduction boys: Md.Gauhar Ali, Shahid Sheikh, Iyaan Khan, Dharamraj Dungrial, Sonu Maurya, Ashraf Khan, Shamsher Shah\nPhotographer: Sumeet Gaurav\nJunoir's: Shree Guru Communication\nLights: Proper Lights & Team\nCamera: Nishu Video Tech\nPicture Vehicle: S M Yusuf\nVanity: Shiddhivinayak Vainity\nCar: Shree Vinayak Travels\nCatering: Laxmi Food Supplier (Chirag Patel)\nLocation: MS Location, Aspire Bungalow, Namah Bungalow, Ocean Bungalow, Moonlit Studio\n\nCarryisLive► https://www.youtube.com/channel/UC0IW...\nInstagram► https://www.instagram.com/carryminati/\nCarryminati Productions Official► https://www.youtube.com/channel/UCUF6oiWricAnO0WYEHZWEaQ\nFacebook ► https://www.facebook.com/CarryDeol/\nSnapchat► heyAjey\nTwitter ► https://twitter.com/CarryMinati\n\nFor Business Related queries: workforcarry@gmail.com \n\nAbout CarryMinati : Youthoob certified member\n\nDISCLAIMER: Please don't go out of your way to or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing in general & not the individual themselves, please don't go spreading hate it's all for laughs. For detailed disclaimer please refer to the below link.\nhttps://bit.ly/3iRKHH8"
          },
          "defaultAudioLanguage": "en"
      },
      "statistics": {
          "viewCount": "11574701",
          "likeCount": "2153148",
          "favoriteCount": "0",
          "commentCount": "119692"
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
    <div className="px-8 mt-8">
      <div className="px-2 mx-2 rounded-lg shadow-lg">
        <img
          width={"880px"}
          className="rounded-lg"
          src={thumbnails.high.url}
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
    </div>
  );
};

export default Watchpage;
