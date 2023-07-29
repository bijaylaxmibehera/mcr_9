import { VideoCard } from "../component/VideoCard";
import { useData } from "../context/DataContext";

export function Explore() {
  const { videos ,dataDispatch,search} = useData();

  const handleSearch=(e)=>{
    const userInput=e.target.value;
    dataDispatch({type:"ADD_SEARCH", payload:userInput});
  }

 const filterVideos=videos.filter((video)=>(search.length === 0 ||
    video.title.toLowerCase().includes(search)))



  return (
    <>
      <h1 className="font-semibold text-xl">Explore</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="search video by title"
          class="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-1/2"
          onChange={handleSearch}
        />
      </div>
      <div className="responsive-grid mt-12">
       {filterVideos.map((video)=>(
        <VideoCard video={video} key={video._id}/>
       ))}
      </div>
    </>
  );
}
