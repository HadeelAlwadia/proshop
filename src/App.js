import SliderSizes from "./components/slider";
import './App.css';
import Checkboxes from "./components/select";
import ComboBox from "./components/sarchinput";
import AvaterComponent from "./components/avater";
import { useState } from "react";
function App() {
const [opacityValue, setOpacityValue] = useState(1);


function changeValueOFobacity(value){
  setOpacityValue(value)
}
  return (
    <div className="App">
      stay with me
      <AvaterComponent opacityValue={opacityValue}/>
       <SliderSizes changeValueOFobacity={changeValueOFobacity}/>
       <Checkboxes/>
       <ComboBox/>
    </div>
  );
}

export default App;


