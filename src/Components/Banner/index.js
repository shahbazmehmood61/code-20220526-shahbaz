import React from "react";
import Header from "./Navbar/index";
import BottomBaner from "../../assets/images/bottom_banner.png";

function Index() {
  return (
    <div className="banner__container width__100 flex column justify__between">
      <div className="width__100 banner">
        <Header />
        <div className="banner__box">
          <p className="banner__box__header align__center">Rethink your living & renting</p>
          <p className="banner__box__subtitle align__center">Make your stay painless with us</p>
        </div>
        <div className="banner__box banner__filter__box flex justify__between items__end">
          <div className="flex column filter__form__input">
            <label className="filter__label">City</label>
            <input className="filter__input width__100" />
          </div>
          <div className="flex column filter__form__input">
            <label className="filter__label">Dates</label>
            <input className="filter__input width__100" />
          </div>
          <div className="flex column filter__form__input">
            <label className="filter__label">Guests</label>
            <input className="filter__input width__100" />
          </div>
          <button className="filter__search__btn">
            <i class="fa fa-search" aria-hidden="true"></i>
            &nbsp;&nbsp;Search
          </button>
        </div>
      </div>
      <img src={BottomBaner} alt="Banner" style={{ width: "100%" }} />
    </div>
  );
}

export default Index;
