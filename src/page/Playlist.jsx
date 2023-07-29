import { useState } from "react";
import { useData } from "../context/DataContext";
import { PlaylistCard } from "../component/PlayListCard";

export function Playlist() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { dataDispatch, playlist } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    dataDispatch({
      type: "ADD_PLAYLIST",
      payload: { id, title, description },
    });
    setShowModal(false);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h1 className="font-semibold text-xl relative">Playlist</h1>
      <div>
        <div className="responsive-grid">
          {playlist.map((playlistItem) => (
            <PlaylistCard key={playlistItem.id} playlist={playlistItem} />
          ))}
        </div>
        <div className="flex">
          <button onClick={() => setShowModal(true)}>
            <i
              className="fa fa-plus border-2 rounded-full p-2"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>

      {showModal && (
        <form
          className="absolute top-[15vh] left-[45vw] z-10 bg-slate-50"
          onSubmit={handleSubmit}
        >
          <div className="border-2  w-[300px] flex justify-center p-4 flex-col relative">
            <h2 className="font-semibold">Add to playlist</h2>
            <span role="button" onClick={() => setShowModal(false)}>
              <i
                className="fa fa-times absolute top-1 right-1"
                aria-hidden="true"
              ></i>
            </span>

            <input
              type="text"
              placeholder="Add title"
              class="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 "
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Add description"
              class="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 "
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md mt-3 pt-2 pb-2"
            >
              Create New Playlist
            </button>
          </div>
        </form>
      )}
    </>
  );
}
