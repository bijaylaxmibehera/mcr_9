import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const getStyle = ({ isActive }) => ({
  color: isActive ? "#3B82F6" : "",
  fontWeight: isActive ? "600":"",
});

export function Header() {
  return (
    <>
      <nav className="flex flex-col pt-10 gap-6">
        <NavLink to="/" style={getStyle}>
          <button className="flex justify-center">
            <HomeIcon className="mr-2 " /> Home
          </button>
        </NavLink>
        <NavLink to="/explore" style={getStyle}>
          <button className="flex justify-center">
            <ExploreIcon className="mr-2" />
            Explore
          </button>
        </NavLink>
        <NavLink to="/playlist" style={getStyle}>
          <button className="flex justify-center">
            <PlaylistAddIcon className="mr-2" />
            Playlist
          </button>
        </NavLink>
        <NavLink to="/watchlater" style={getStyle}>
          <button className="flex justify-center">
            <WatchLaterIcon className="mr-2" />
            Watch Later
          </button>
        </NavLink>
      </nav>
    </>
  );
}
