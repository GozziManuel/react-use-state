import CardSection from "../CardSection";
import Button from "./buttons";

export default function ButtonList({ button }) {
  return (
    <>
      <div className="d-flex ms-5 mybutton">
        {button.map((element) => {
          return (
            <div>
              <Button key={element.id} text={element.text} />
            </div>
          );
        })}
        <CardSection />
      </div>
    </>
  );
}
