import React from "react";
import Card from "./Card";

function Index(props) {
  return (
    <div className="width__100 min__height__70vh flex row items__center">
      <div className="explore__cards__box flex column">
        <p className="explore__cards__title">{props.data?.title}</p>
        {props.data?.subtitle}
        <div className="card flex row justify__between flex__wrap">
          {props.data?.exploreCards.map((card, index) => (
            <Card key={index} list={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
