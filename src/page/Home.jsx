import { CategoryCard } from "../component/CategoryCard";
import { useData } from "../context/DataContext";

export function Home() {
  const {categories} = useData();
  
  
  return (
    <>
      <div>
        <h1 className="font-semibold text-xl">Categories</h1>
      </div>
      <div className="responsive-grid mt-6">
        {categories.map((videoCat)=>(
           <CategoryCard videoCat={videoCat} key={videoCat._id}/>
        ))}
      </div>
    </>
  );
}
