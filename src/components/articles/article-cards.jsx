import "./article-cards.css";
import { v4 as uuidv4 } from "uuid";

function ArticleCards() {
  const cards = [
    {
      id: uuidv4(),
      img: "./images/article1.png",
      title: "8 best vacuum cleaners to clean any mess for your home in 2022",
      text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
      date: "Jan 28, 2022",
    },
    {
      id: uuidv4(),
      img: "./images/article2.png",
      title: "How to properly disinfect your phone and other electronics",
      text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
      date: "Feb 1, 2022",
    },
  ];
  return (
    <div className="articles__cards flex justify-between">
      {cards.map((card) => (
        <div className="articles__card" key={card.id}>
          <div className="article__card-img">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="article__card-content">
            <h3 className="article__card-title">{card.title}</h3>
            <p className="article__card-text">{card.text}</p>
            <div className="article__card-footer flex justify-between align-center">
              <p className="article__card-date">{card.date}</p>
              <div className="square"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleCards;
