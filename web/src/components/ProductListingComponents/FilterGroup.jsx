import "../../styles/filterGroup.css"
export default function FilterGroup({ title, options }) {
  return (
  <div className="filter-group">
    <h6 className="h6">{title}</h6>
    <ul>
        {options.map((option,index) => (
            <li key={index} className="option-item">
                <input type="checkbox" value={option.value}/>
                <label htmlFor="">{option.text}</label>
            </li>
        ))}
    </ul>
  </div>
  )
}
