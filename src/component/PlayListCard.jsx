import { useData } from "../context/DataContext";


export function PlaylistCard({ playlist }) {
 const {dataDispatch}=useData();

 const handleDelete=()=>{
    dataDispatch({type:"DELETE_PLAYLIST", payload:playlist.id})
 }

  return (
    <>
      <div className="border border-gray-200 p-4 rounded-md shadow-md relative">
        <img
          src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Playlist"
          className="mt-4"
        />
        <span role="button" onClick={handleDelete}>
          <i
            className="fa fa-times absolute top-1 right-1"
            aria-hidden="true"
          ></i>
        </span>
        <h3 className="font-semibold text-lg mb-2">{playlist.title}</h3>
        <p>{playlist.description}</p>
      </div>
    </>
  );
}
