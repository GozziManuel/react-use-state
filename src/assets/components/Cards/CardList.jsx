import { useState } from "react";
import Cards from "./Cards";

export default function CardList({ cards }) {
  const [activeIndex, toggler] = useState(1);
  const language = cards[activeIndex];
  return (
    <>
      <div className=" mt-5 container-sm">
        {cards.map((element, index) => {
          return (
            <>
              <button
                key={index}
                onClick={() => toggler(index)}
                className="btn btn-primary mybutton"
              >
                {element.title}
              </button>
            </>
          );
        })}
        <div className="  border border-1 p-4 mt-3">
          <Cards
            key={language.id}
            title={language.title}
            description={language.description}
          />
        </div>
      </div>
    </>
  );
}
