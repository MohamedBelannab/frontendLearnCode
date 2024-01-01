// PlaylistComponent.js
import React, { useEffect, useState } from 'react';
import { fetchPlaylistItems } from './FetchPlaylist';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import { VideoModal } from './modals/VideoModal';
// Import these styles in your main styles file or component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillPlayCircleFill } from "react-icons/bs";



const Playlist = ({playList}) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [open, setOpen] = useState(false);
 

  useEffect(() => {
    const fetchPlaylist = async () => {
      const items = await fetchPlaylistItems(playList);
      setPlaylistItems(items);
      if (items.length > 0) {
        setSelectedVideo(items[0]);
      }
    };

    fetchPlaylist();
  }, []);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setOpen(!open)
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const calculateSlidesToShow = (numberOfItems) => {
    if (numberOfItems >= 3) {
      return 3;
    } else if (numberOfItems === 2) {
      return 2;
    } else {
      return 1;
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(playlistItems.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
      <Slider {...sliderSettings}>
        {playlistItems.map((item) => (
           <div
           key={item.id}
           variant="gradient"
           onClick={() => onVideoSelect(item)}
           className="video-item p-2 mt-3 transition-transform duration-200 relative group"
         >
            <div className='relative'>
                <img
             src={item.snippet.thumbnails.high.url}
             alt={item.snippet.title}
             className="video-thumbnail rounded-md"
           />
            <div className=" opacity-0 absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:opacity-100">
              <BsFillPlayCircleFill className='h-12 w-12 text-[#ffffffc7]'/>
            </div>
            </div>
           
           <p className="video-title mt-2">{item.snippet.title}</p>
         </div>
        ))}
      </Slider>
      <VideoModal opts={opts}  setOpen={setOpen} open={open} selectedVideo={selectedVideo}/>
    </div>
  );
};

export default Playlist;
