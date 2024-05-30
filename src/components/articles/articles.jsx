import Button from "../button/button";
import ArticleCards from "./article-cards";
import "./articles.css";

function Articles() {
  return (
    <section id="articles">
      <div className="container">
        <div className="articles__intro flex align-center justify-between">
          <h2 className="articles__title">Articles & resources</h2>
          <div className="articles__into-links flex">
            <Button text={"Get a free quote"} bgColor={"btn-primary"} />
            <Button text={"Browse articles"} bgColor={"btn-light"} />
          </div>
        </div>

        <ArticleCards />
      </div>
    </section>
  );
}

export default Articles;
