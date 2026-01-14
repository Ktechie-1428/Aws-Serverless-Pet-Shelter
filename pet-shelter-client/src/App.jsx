import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles.css";
import {Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pets from "./components/Pets";
import AdoptionForm from "./components/AdoptionForm";
import Footer from "./components/Footer";
import Applications from "./components/Applications";
import ApplicationDetail from "./components/ApplicationDetail"; 

import axios from "axios"

function App() {
  const API_GATEWAY_BASE_URL = import.meta.env.VITE_API_GATEWAY_URL;
  const S3_BUCKET_URL = import.meta.env.VITE_PET_IMAGES_BUCKET_URL;

  // const petsData = [
  //   { id: '1', name: 'Buddy', age: 2, species: 'Dog', date_entered: '2024-07-01', image: 'pet5.jpeg' },
  //   { id: '2', name: 'Mittens', age: 3, species: 'Cat', date_entered: '2024-06-20', image: 'pet1.jpeg' },
  //   { id: '3', name: 'Rex', age: 1, species: 'Dog', date_entered: '2024-07-05', image: 'pet6.jpeg' },
  //   { id: '4', name: 'Whiskers', age: 4, species: 'Cat', date_entered: '2024-06-15', image: 'pet2.jpeg' },
  //   { id: '5', name: 'Junior', age: 2, species: 'Dog', date_entered: '2024-07-01', image: 'pet7.jpeg' },
  //   { id: '6', name: 'Garfield', age: 3, species: 'Cat', date_entered: '2024-06-20', image: 'pet3.jpeg' },
  //   { id: '7', name: 'Clifford', age: 1, species: 'Dog', date_entered: '2024-07-05', image: 'pet8.jpeg' },
  //   { id: '8', name: 'Paws', age: 4, species: 'Cat', date_entered: '2024-06-15', image: 'pet4.jpeg' },
  //   { id: '9', name: 'Muffin', age: 2, species: 'Dog', date_entered: '2024-07-01', image: 'pet9.jpeg' },
  //   { id: '10', name: 'Moose', age: 3, species: 'Dog', date_entered: '2024-06-20', image: 'pet10.jpeg' },
  // ];
  useEffect(()=>{
    // get pets from api
    axios.get(`${API_GATEWAY_BASE_URL}/pets`)
      .then(res => {
        console.log(res.data);
        setPets(res.data.pets);
      })
      .catch(err => console.log(err))
  },[])
  const [pets, setPets] = useState([]);
  return (
    <div className="App">
      <Header />
      {/* at the route /, the home compnent renders */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pets" element={<Pets pets={pets}/>} />
          <Route path="/adopt" element={<AdoptionForm pets={pets}/>} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:id" element={<ApplicationDetail/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
