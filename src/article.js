import { useParams } from "react-router";
import "./articleStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderBar from "./headerBar";

function Article() {
  let { slag } = useParams();

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

  let correntObj = {};
  let imageSrc = "";
  let userName = "";
  let desriptionText = "";

  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].slug === slag) {
      correntObj = dataBase[i];
      imageSrc = dataBase[i].author.image;
      userName = dataBase[i].author.username;
    }
  }

  const titleHead = String(correntObj.slug);

  return (
    <div className="container">
      <HeaderBar />
      <div className="headMAin">
        <h1>
          {titleHead.replaceAll("-", " ").substring(0, titleHead.length - 7)}
        </h1>
        <div className="details">
          <img src={imageSrc} alt="pic" />
          <div className="name-Date">
            <p>{userName}</p>
            <span>{correntObj.createdAt}</span>
          </div>
        </div>
      </div>
      <div className="mainText">
        <span>{correntObj.body}</span>
      </div>
    </div>
  );
}
export default Article;
