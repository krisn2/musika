import React from "react";
import { FaPlay, FaPlus } from "react-icons/fa"; // Importing icons for play and add to playlist

const MusicCard = ({ albumCover, title, artist }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-visible hover:scale-105 transition-transform duration-200 relative">
      <img
        className="w-full h-48 object-cover"
        src={albumCover}
        alt={`Album cover for ${title} by ${artist}`} // Enhanced alt text for accessibility
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate" title={title}>
          {title}
        </h3>
        <p className="text-sm text-gray-400 truncate" title={artist}>
          {artist}
        </p>
        <div className="mt-4 flex justify-between relative z-10"> {/* Added relative z-index */}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 flex items-center"
            aria-label="Play Song"
          >
            <FaPlay className="mr-2" />
            Play
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 flex items-center"
            aria-label="Add Song to Playlist"
          >
            <FaPlus className="mr-2" />
            Add to Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
