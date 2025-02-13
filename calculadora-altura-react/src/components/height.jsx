import "./height.css";

function Height({ value, onChange }) {
  return (
    <input
      type="number"
      name=""
      id=""
      className="h-12 bg-blue-300 text-blue-950 text-bold text-center border-2 border-blue-500 rounded-lg no-arrows"
      placeholder="Digite a altura em cm"
      value={value}
      onChange={onChange}
    />
  );
}

export default Height;
