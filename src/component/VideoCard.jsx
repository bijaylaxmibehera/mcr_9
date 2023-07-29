import { useState } from "react";
import { useData } from "../context/DataContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function VideoCard({ video }) {
  const { _id, title, views, category, creator, thumbnail } = video;
  const { watchlater, dataDispatch } = useData();

  const isVideoInWatchLater = watchlater.find((video) => video._id === _id);

  const [isWatchListActive, setIsWatchListActive] = useState(
    isVideoInWatchLater !== undefined
  );

  const handleWatchLater = () => {
    if (isWatchListActive) {
      dataDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: _id });
      toast.info("Removed from watch later");
    } else {
      dataDispatch({ type: "ADD_TO_WATCHLATER", payload: video });
      toast.success("Added to watch later");
    }
    setIsWatchListActive(!isWatchListActive);
  };

  return (
    <>
      <div className="flex flex-col gap-2 cursor-pointer relative hover:shadow-2xl m-4">
        <div>
          <img src={thumbnail} alt={title} />
        </div>
        <div className="flex w-full p-1">
          <div className="w-1/4">
            <img
              src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="avatar"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div className="text-xs w-3/4">
            <h3 className="font-semibold">{title}</h3>
            <h3 className="font-semibold">{category}</h3>
            <p className="mt-1">
              {views} | {creator}
            </p>
          </div>
          <span
            role="button"
            onClick={handleWatchLater}
          >
            <i
             className={`fa fa-clock-o absolute top-0 right-0 p-1 rounded-bl-lg ${
              isWatchListActive ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            } hover:bg-blue-500 hover:text-white`}
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>
    </>
  );
}
