import "./services-cards.css";

function ServicesCards() {
  const cards = [
    {
      id: 1,
      img: "./images/house-cleaning.png",
      title: "House cleaning",
      text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      id: 2,
      img: "./images/office-cleaning.png",
      title: "Office cleaning",
      text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      id: 3,
      img: "./images/industrial-cleaning.png",
      title: "Industrial cleaning",
      text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
  ];

  return (
    <div className="services__cards flex justify-between">
      {cards.map((card) => (
        <div className="services__card" key={card.id}>
          <div className="services__card-img">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="services__card-content">
            <h3 className="services__card-title">{card.title}</h3>
            <p className="services__card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCards;
