import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { searchMovieWithID } from '../store/features/searchSlice';

export default function Movie() {
  const dispatch = useDispatch();
  const theMovie = useSelector((state) => state.searchSlice.theMovie);
  const params = useParams();

  useEffect(() => {
    dispatch(searchMovieWithID(params));
  }, [dispatch]);

  const requestdiffSizeimage = (url, size = 700) => {
    if (!url || url === 'N/A') {
    }
    const src = url.replace('SX300', `SX${size}`);
    return src;
  };

  return (
    <>
      {Object.keys(theMovie).length === 0 ? (
        <Loader />
      ) : (
        <div>
          <div
            style={{
              backgroundImage: `url(${requestdiffSizeimage(theMovie.Poster)})`,
              width: 500,
              height: (500 * 3) / 2,
              backgroundSize: 'cover',
            }}
          ></div>
          {theMovie.Actors}
        </div>
      )}
    </>
  );
}
