import React, { useEffect, useState } from "react";
import Search from "./Search";
import MusicCard from "./MusicCard";
import Footer from "./Footer";

const Hero = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for API request

  // Fetch songs from the local API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // Fetching the list of songs from the local server
        const response = await fetch("http://localhost:5000/api/songs");
        const data = await response.json();

        // Assuming the API returns a list of song IDs, fetch their details
        const songDetailsPromises = data.map(async (song) => {
          const songDetailResponse = await fetch(`http://localhost:5000/api/songs/${song.id}`);
          const songDetail = await songDetailResponse.json();

          // Fetching lyrics if needed (optional)
          const lyricsResponse = await fetch(`http://localhost:5000/api/songs/${song.id}/lyrics`);
          const lyrics = await lyricsResponse.json();

          return {
            ...songDetail,
            lyrics: lyrics.lyrics, // Add lyrics to song details
          };
        });

        // Resolve all song details promises
        const songDetails = await Promise.all(songDetailsPromises);
        setSongs(songDetails);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      {/* Sidebar */}
      <div className="flex flex-row">
        <div className="w-1/5 bg-black h-screen text-white p-6 hidden md:block">
          <h1 className="text-3xl font-bold mb-8">Musika</h1>
          <nav>
            <ul className="space-y-4">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Search</li>
              <li className="hover:text-green-400 cursor-pointer">Your Library</li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-4/5 bg-gray-900 text-white p-8">
          {/* Search Bar */}
          <Search />

          {/* Greeting Section */}
          <div className="mt-8">
            <h2 className="text-4xl font-semibold">Good Evening</h2>
          </div>

          {/* Music Cards Section */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <p className="col-span-4 text-center text-gray-400">Loading songs...</p>
            ) : songs.length > 0 ? (
              songs.map((song) => (
                <MusicCard
                  key={song.id}
                  albumCover={song.albumCover} // Assuming `albumCover` is the correct key
                  title={song.title}
                  artist={song.artist}
                  lyrics={song.lyrics} // Passing lyrics if needed
                />
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-400">No songs found</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;
