import { useState } from "react";
import Cards from "./Cards";

export default function CardList({ cards }) {
  const [activeIndex, toggler] = useState(null);
  return (
    <>
      <div className=" mt-5 container-sm border border-1">
        {cards.map((element) => {
          return (
            <Cards
              key={element.id}
              title={element.title}
              description={element.description}
              isOpen={activeIndex === element.id}
              toggler={() => toggler()}
            />
          );
        })}
      </div>
    </>
  );
}
