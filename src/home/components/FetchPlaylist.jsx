// youtubeApi.js
import axios from 'axios';

const API_KEY = 'AIzaSyBC_KdLlgvg8CXl5D6mbwpo8KtXWvTBPrM';
const PLAYLIST_ID = 'PLillGF-RfqbbJYRaNqeUzAb7QY-IqBKRx';

const fetchPlaylistItems = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: 'snippet',
          key: API_KEY,
          playlistId: PLAYLIST_ID,
          maxResults: 100, // Adjust the number of results as needed
        },
      }
    );
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlist items:', error);
    return [];
  }
};

export { fetchPlaylistItems };
