import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";


export function CategoryCard({ videoCat }) {
  const { _id, thumbnail, category, src } = videoCat;
  const {dataDispatch}=useData();
  const navigate=useNavigate();
  

  const handleCategory=()=>{
   navigate(`/${category}`);
  }

  return (
    <>
      <div className="cursor-pointer" onClick={handleCategory}>
        <img src={thumbnail} alt={category} />
        <h2 className="font-[600]">{category}</h2>
      </div>
    </>
  );
}
