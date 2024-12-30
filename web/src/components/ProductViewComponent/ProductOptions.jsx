import "../../styles/productOptions.css"
export default function ProductOptions({ shape, radius, options }) {
  return (
    <div className="d-flex gap-4 mt-4">
      {options.map((option, index) => (
        <div key={index} className="option-wrapper">
        <div
          className={shape == "square" ? "square" : "circle"}
          style={
            shape == "circle"
              ? { backgroundColor: option }
              : { borderRadius: radius }
          }
        >
            {shape =="square" && (option)}
        </div>
        </div>
      ))}
    </div>
  );
}
