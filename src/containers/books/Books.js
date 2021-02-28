import React, {useContext} from "react";
import "./Books.css";
import BookCard from "../../components/bookCard/BookCard";
import {booksSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Book() {
  const {isDark} = useContext(StyleContext);
  if (!booksSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="books">
        <div className="book-main-div">
          <div className="book-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading book-heading"
                  : "heading book-heading"
              }
            >
              {booksSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle book-subtitle"
                  : "subTitle book-subtitle"
              }
            >
              {booksSection.subtitle}
            </p>
          </div>
          <div className="book-cards-div">
            {booksSection.booksCards.map((card, i) => {
              return (
                <BookCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
