export default function Cards({ title, description, isOpen }) {
  return (
    <>
      {isOpen && (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
