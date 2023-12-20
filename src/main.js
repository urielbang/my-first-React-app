import "./mainStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [dataBase, setData] = useState({});

  const GetDataRealWorld = async () => {
    const response = await axios.get(
      "https://api.realworld.io/api/articles?limit=20"
    );

    setData(response.data.articles);
  };

  useEffect(() => {
    GetDataRealWorld();
  }, []);

  let dataKeys = Object.values(dataBase);
  console.log(dataKeys);

  const allDataMain = dataKeys.map((data) => {
    return (
      <div className="card">
        <div className="cardData">
          <img src={data.author.image} alt="pic" />
          <p>
            {data.author.username}
            <span>{data.createdAt}</span>
          </p>
          <h1>{data.slug.replaceAll("-", " ")}</h1>
          <span>{data.description}</span>
          <Link to={`/article/${data.slug}`}>Read more</Link>
        </div>
        <hr className="nav-pills"></hr>;
      </div>
    );
  });

  return (
    <main>
      <div className="nav-AllPils">
        <a className="global-data" href="./">
          Global Feed
        </a>

        <hr className="nav-pills"></hr>
      </div>
      <div className="main-all-cards">{allDataMain}</div>
    </main>
  );
}

export default Main;
