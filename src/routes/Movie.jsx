import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';

import { searchMovieWithID } from '../store/features/searchSlice';
export default function Movie() {
  // const dispatch = useDispatch();
  // const theMovie = useSelector((state) => state.searchSlice.theMovie);
  // const loading = useSelector((state) => state.searchSlice.loading);
  // const params = useParams();
  // const [imageLoading, setImageLoading] = useState(true);
  // console.log(loading);
  // console.log(theMovie);

  // useEffect(() => {
  //   dispatch(searchMovieWithID(params));
  // }, []);
  // const requestdiffSizeimage = (url, size = 700) => {
  //   if (!url || url === 'N/A') {
  //     setImageLoading(false);
  //   }
  //   const src = url.replace('SX300', `SX${size}`);
  //   return src;
  // };

  return;
  // <>
  //   <Loader />
  //   {loading ? (
  //     <Loader />
  //   ) : (
  //     <div>
  //       <div
  //         style={{
  //           // backgroundImage: `url(${requestdiffSizeimage(theMovie.Poster)})`,
  //           width: 500,
  //           height: (500 * 3) / 2,
  //           backgroundSize: 'cover',
  //         }}
  //       >
  //         {/* {imageLoading && <Loader />} */}
  //       </div>
  //       {theMovie.Actors}
  //     </div>
  //   )}
  // </>
}
