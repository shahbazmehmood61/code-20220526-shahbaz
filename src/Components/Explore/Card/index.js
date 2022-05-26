import React from "react";

function Index(props) {
  return (
    <div className="explore__card">
      <img src={props.list?.source} alt="Card Pic" />
      <div
        className={`explore__card__bottom__box flex row justify__between items__end ${
          props.index === 3 && "forth__card"
        }`}
      >
        {props.list?.price ? (
          <>
            <div className="flex column card__left__title__box">
              <p className="card__subtitle">{props.list?.title}</p>
              <div className="flex row justify__between">
                <div className="explore_card_chips_sm">{props.list?.price}</div>
                <div className="explore_card_chips_sm">{props.list?.area}</div>
              </div>
            </div>
            <div className="explore_card_chip_lg">Book!</div>
          </>
        ) : (
          <div className="flex column width__100">
            <p className="card__title">{props.list?.title}</p>
            <p className="card__subtitle">{props.list?.subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
