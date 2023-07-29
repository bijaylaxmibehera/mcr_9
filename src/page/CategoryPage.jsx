import { VideoCard } from "../component/VideoCard";
import { useData } from "../context/DataContext"
import { useParams } from "react-router-dom";



export function CategoryPage(){
  const {videoCategory}=useParams();
  const {videos}=useData();

  const categoryFiltered=videos.filter((video)=>video.category===videoCategory);

    return (
        <>
         <h1 className="font-semibold text-xl">{videoCategory}</h1>
         <div className="responsive-grid">
            {categoryFiltered.map((videoCat)=>(
                <VideoCard video={videoCat} key={videoCat._id}/>
            ))}
         </div>
        </>
    )
}