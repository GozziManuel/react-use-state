import ButtonList from "./buttons/buttonList";

export default function Main() {
  const buttons = [
    {
      id: "0",
      text: "HTML",
    },
    {
      id: "1",
      text: "CSS",
    },
    {
      id: "2",
      text: "JavaScript",
    },
    {
      id: "3",
      text: "Node.js",
    },
    {
      id: "4",
      text: "Express",
    },
    {
      id: "5",
      text: "ReactJS",
    },
  ];

  return (
    <>
      <ButtonList button={buttons} />
    </>
  );
}
