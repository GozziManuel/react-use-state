export default function Button({ text, toggler }) {
  return (
    <>
      <button onClick={toggler} className="btn btn-primary">
        {text}
      </button>
    </>
  );
}
