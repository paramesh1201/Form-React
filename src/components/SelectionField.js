export default function SelectionFild( {lableName="Name", options=[]}){
    return(
      <div className="selectionFeild">
        <label for="cars">Choose a car:</label>
         <select id="selection">
              {options.map((item)=> <option key={item} value={item}>{item}</option>) }
         </select>
      </div>
    )
  }