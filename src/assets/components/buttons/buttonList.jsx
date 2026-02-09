import Button from "./buttons";

export default function ButtonList({ button }) {
  return (
    <>
      <div className="d-flex ms-5 mybutton">
        {button.map((element) => {
          return (
            <>
              <Button key={element.id} text={element.text} />
            </>
          );
        })}
      </div>
    </>
  );
}
