# React-Movie-App

## 05.27 작업내용

---

### fetchAsyncMovies , searchMovieWithID

- fetchAsyncMovies 와 searchMovieWithID를 합쳐서 작업해보려 했으나 실패.
  - ID 값의 유무에 따라 각각 다른 데이터를 받아오는데 state에 어떻게 따로 넣을지 모르겠다 되는거긴 하는건가..

```js
export const fetchAsyncMovies = createAsyncThunk(
  'search/fetchAsyncMovies',
  async ({ title, type, year, page, id }) => {
    if (initialState.loading) return;
    const url = id // id 유무값에 따라 쿼리를 다르게 보낸다
    ? `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
    : `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
    const response = await axios.get(url).then((res) => res.data);

    return response;
  }
);
```

### Movie Component

- `loading` 값에 따라 \<Loader /> 컴포넌트를 출력할건지 영화정보를 출력할건지 작성

```js
return (
  <>
    {loading ? (
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
        >
          {imageLoading && <Loader />}
        </div>
        {theMovie.Actors}
      </div>
    )}
  </>
);
```

- 쿼리로 받아오는 기본 이미지 사이즈는 sm 사이즈라 imgUrl 값에 포함된 사이즈 부분을 변경해주면 큰 사이즈 이미지를 받아 올 수 있다

```js
const requestdiffSizeimage = (url, size = 700) => {
  if (!url || url === 'N/A') {
    setImageLoading(false);
  }
  const src = url.replace('SX300', `SX${size}`);
  return src;
};
```
