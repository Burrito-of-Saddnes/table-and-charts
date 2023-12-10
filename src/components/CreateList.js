/*eslint jsx-a11y/anchor-is-valid: 0*/
import React from "react";
function CreateList(props) {
    return (
      <>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={props.singleData.name}
            onChange={(props.handleChange)}/>
          <span className="focus-bg"/>
        </div>
        <label>
          <input type="radio" name="gender" value="male" onChange={props.handleChange}/>
          male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={props.handleChange}/>
          female
        </label>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Age" 
            name="age" 
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            value={props.singleData.age}
            onChange={(props.handleChange)}/>
          <span className="focus-bg"/>
        </div>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Address" 
            name="address"
            value={props.singleData.address}
            onChange={(props.handleChange)}/>
          <span className="focus-bg"/>
        </div>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Family Name" 
            name="name"
            value={props.family.name}
            onChange={(props.handleChangeFamily)}/>
          <span className="focus-bg"/>
        </div>
        <label>
          <input type="radio" name="gender" value="male" onChange={props.handleChangeFamily}/>
          male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={props.handleChangeFamily}/>
          female
        </label>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Family Age" 
            name="age"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            value={props.family.age}
            onChange={(props.handleChangeFamily)}/>
          <span className="focus-bg"/>
        </div>
        <div className="inputBg">
          <input 
            className="inputBg__input" 
            type="text" 
            placeholder="Family Address" 
            name="address"
            value={props.family.address}
            onChange={(props.handleChangeFamily)}/>
          <span className="focus-bg"/>
        </div> 
        <button className='App__pageButtonsContainer_button' id="button" onClick={props.createList} disabled={!props.isValid}>
          <div id="App__pageButtonsContainer_buttonCircle"></div>
          <a>Add user</a>
        </button>  
      </>
    );
}

export default CreateList;