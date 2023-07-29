import { VideoCard } from "../component/VideoCard";
import { useData } from "../context/DataContext";
export function Watchlater() {
 const {watchlater}=useData();

  return (
    <>
      <h1 className="font-semibold text-xl">Watch Later</h1>
      <div className="responsive-grid">
        {watchlater.map((video)=>(
          <VideoCard video={video} key={video._id}/>
        ))}
      </div>
    </>
  );
}
