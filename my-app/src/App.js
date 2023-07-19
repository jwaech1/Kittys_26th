import './App.css';
import "./styles.css";
import { CounterApp } from './counter';
import { ListApp } from './list';
import Layout1 from "./LAYOUT/Layout1";
import Layout2 from "./LAYOUT/Layout2";
import React from "react";



export default function App() {
  return (
    <>

      <Layout1>
        <br></br>
        <h1>Third React Webpage</h1>
        <CounterApp />
      </Layout1>

      <br></br>

      <Layout2>
        <ListApp />
      </Layout2>


    </>

  );
}



