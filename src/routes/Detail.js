import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h2>Loading...</h2> : <div></div>}</div>;
}

export default Detail;
