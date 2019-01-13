import React, { Component } from 'react';
import './App.css';
import { FirstComponent } from './first';
import {Form} from './form';

//import etmek istediğimiz component kesinlikle export class ile tanımlanmalı

class App extends Component {
  render() {
    const propsabit="İlk prop örneği";
    const liste=[ "Listenin ilk elemanı",
                  "Listenin ikinci elemanı",
                  "Listenin ucuncü elemanı",
                  "Listenin dördüncü elemanı"
                ];

    return (
      <div className="App">
        <header className="App-header">
          <p>
            I'am Mozcan
          </p>
          <FirstComponent myliste={liste} ilkprop={propsabit}> </FirstComponent>

          
        </header>
        <Form> </Form>
      </div>
    );
  }
}

export default App;
