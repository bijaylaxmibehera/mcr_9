import { categories } from "../database/Category";
import { videos } from "../database/Videos";

export const getAllCategories=(dispatch)=>{
  dispatch({type:"INITIALIZE_CATEGORY", payload:categories});
}

export const getAllVideos=(dispatch)=>{
    dispatch({type:"INITIALIZE_VIDEOS", payload:videos});
}