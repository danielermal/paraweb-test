import React from "react";
import cards from "./cards.module.scss";
import user from "../../images/user.svg";
import chevron from "../../images/chevron-down.svg";
import minus from "../../images/minus.svg";
import { Card } from "../card/card";
import { useSelector } from "react-redux/es/exports";

export const Cards = () => {
  const { articles } = useSelector((store) => store.data);

  const [cardList, setCards] = React.useState(articles)

  const ref = React.useRef();

  const sortCards = React.useCallback(() => {
    if (ref.current.value === 'all') {
      setCards(articles)
    }
    else {
      const newList = articles.filter((item) => item.author === ref.current.value)
    setCards(newList)
    } 
  });

  return (
    <section className={cards.cards}>
      <div className={cards.cards_container}>
        <form className={cards.form}>
          <div className={cards.select_wrapper}>
            <select className={cards.select} defaultValue="" ref={ref} onChange={sortCards}>
              <option value="" disabled>
                Выбор автора
              </option>
              {articles.map((item, index) => (
                <option value={item.author} key={index}>
                  {item.author}
                </option>
              ))}
              <option value='all'>Сбросить выбор</option>
            </select>
            <img src={user} alt="user" className={cards.user} />
            <img src={chevron} alt="down" className={cards.chevron} />
          </div>
          <fieldset className={cards.cards_dateform}>
            <label htmlFor="start" className={cards.start}>
              {" "}
              От
              <input
                type="text"
                name="start"
                id="start"
                maxLength={11}
                className={cards.start_input}
              />
            </label>
            <img src={minus} alt="minus" />
            <label htmlFor="end" className={cards.start}>
              {" "}
              До
              <input
                type="text"
                name="end"
                id="end"
                maxLength={11}
                className={cards.start_input}
              />
            </label>
          </fieldset>
        </form>
        <div className={cards.cards_list}>
          {cardList.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
