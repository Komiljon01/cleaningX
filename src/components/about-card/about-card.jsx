import "./about-card.css";

function AboutCards() {
  const cards = [
    {
      id: 1,
      img: "./images/calendar.png",
      title: "1. Schedule online",
      text: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
    },
    {
      id: 2,
      img: "./images/plastic-cards.png",
      title: "2. Pay online easily",
      text: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
    },
    {
      id: 3,
      img: "./images/cleaning-machine.png",
      title: "3. Get your house cleaned",
      text: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
    },
  ];

  return (
    <div className="about__cards">
      {cards.map((card) => (
        <div className="about__card" key={card.id}>
          <div className="about__card-img">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="about__card-content">
            <h3 className="about__card-title">{card.title}</h3>
            <p className="about__card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutCards;
