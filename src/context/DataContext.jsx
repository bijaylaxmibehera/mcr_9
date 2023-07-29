import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { categories } from "../database/Category";
import { videos } from "../database/Videos";
import { initialState, dataReducer } from "../reducer/DataReducer";
import { getAllCategories, getAllVideos } from "../services/dataService";

export const DataContext = createContext({
  categories: [],
  videos:[],
  playlist: [],
  watchlater: [],
  notes: [],
  search: "",
  dataDispatch: () => {},
});

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllCategories(dispatch);
    getAllVideos(dispatch);
  }, []);

  return (
    <>
      <DataContext.Provider
        value={{
          categories: state.categories,
          videos:state.videos,
          playlist: state.playlist,
          watchlater: state.watchlater,
          notes: state.notes,
          dataDispatch: dispatch,
          loader,
          setLoader,
          search:state.search,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}

export const useData = () => useContext(DataContext);
