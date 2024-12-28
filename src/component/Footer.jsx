import React, { useState, useCallback } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from "react-icons/fa";

const Footer = ({ songTitle = "Song Title", artistName = "Artist Name", onSkipForward, onSkipBackward, onPlayPause, isPlaying, volume, onVolumeChange }) => {
  // Use memoized event handlers to prevent unnecessary re-renders
  const handlePlayPause = useCallback(() => {
    onPlayPause();
  }, [onPlayPause]);

  const handleSkipForward = useCallback(() => {
    onSkipForward();
  }, [onSkipForward]);

  const handleSkipBackward = useCallback(() => {
    onSkipBackward();
  }, [onSkipBackward]);

  const handleVolumeChange = useCallback(
    (e) => {
      onVolumeChange(e.target.value);
    },
    [onVolumeChange]
  );

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex flex-col sm:flex-row items-center justify-between sm:px-6">
      {/* Song Info */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/50" // Placeholder for song thumbnail
          alt="Playing"
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <h3 className="text-sm font-semibold">{songTitle}</h3>
          <p className="text-xs text-gray-400">{artistName}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-6 py-2 sm:py-0">
        <FaStepBackward
          className="cursor-pointer text-xl hover:text-green-500"
          onClick={handleSkipBackward}
          aria-label="Previous song"
        />
        {isPlaying ? (
          <FaPause
            className="cursor-pointer text-2xl hover:text-green-500"
            onClick={handlePlayPause}
            aria-label="Pause"
          />
        ) : (
          <FaPlay
            className="cursor-pointer text-2xl hover:text-green-500"
            onClick={handlePlayPause}
            aria-label="Play"
          />
        )}
        <FaStepForward
          className="cursor-pointer text-xl hover:text-green-500"
          onClick={handleSkipForward}
          aria-label="Next song"
        />
      </div>

      {/* Volume */}
      <div className="flex items-center space-x-2">
        <FaVolumeUp className="text-lg" />
        <input
          type="range"
          className="w-24 bg-gray-700"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
};

export default Footer;
