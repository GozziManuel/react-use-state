import Cards from "./Cards";

export default function CardList({ cards }) {
  return (
    <>
      <div className=" mt-5 container-sm border border-1">
        {cards.map((element) => {
          return (
            <Cards
              key={element.id}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </div>
    </>
  );
}
