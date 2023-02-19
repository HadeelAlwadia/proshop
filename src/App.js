//import { useState } from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home} from './screens/home';
import {Cart} from './screens/cart';
import { SignUp } from './screens/signup';
import { SignIn } from './screens/signin';
import { Dashbord } from './screens/dashbord';
//console.log(SignIn,'/n',SignUp,'/n',Dashbord)
function App() {
  //const  [valueOfSpeek, setValueOfSpeek] = useState('');
  /*const handleSpeek=text=>{

    const synth = window.speechSynthesis
  if(text===''){
    text='enter your text' 
  }

    const utterThis = new SpeechSynthesisUtterance(text)

    synth.speak(utterThis);
    }


 /*   const handleSpeehToText=()=>{
      let recognition = new window.webkitSpeechRecognition();
      //const speechRecognitionList = new window.SpeechGrammarList();
       // speechRecognitionList.addFromString('hadeel', 1);
       // recognition.grammars = speechRecognitionList;
      
      
     
    }*/
  return (
    <div className="App-header">
      <header >
</header>
      
        <RouterProvider router={createBrowserRouter([{path:'/',element:<Home/>},{path:'/cart',element:<Cart/>}]) }/>
       
    </div>
  );
}

export default App;
console.log('hi',createBrowserRouter([{path:'/',element:<Home/>},{path:'/cart',element:<Cart/>}]))

/* <article>
          <h2>learn english with fruit</h2>
          <section>
          <img src={'http://localhost:3000/banana.jpg'} alt='banana imag' width={'200'} height={'133'}/>
          <p>موزة</p>
          <p>panana</p>
          <button onClick={_=>handleSpeek('a banana')}>speek a banana</button>
          </section>
        </article>*/
//hadell

     // if(nsme['jafeelmjnklf;i. gi come abck to home o feel safe i think whr,m yu beconme mired become ha[ppy i dont noe but i tdur fro trus fro  me if you when t t be ha[ppy you shoud becine confideance in allah to belive anf feel happy finally i con say last word for you live in life eith lard to become haap y becase evry thing may load i arhink convidean ce ato i aure frome thiat but ypoui soud yoiu brlive you to bec amr happy']) 



     HTMLFormControlsCollection.lg('')