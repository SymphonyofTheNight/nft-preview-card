import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './scss/Styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [api, setApi] = useState();

    useEffect(()=> {
        axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
        .then(val => setApi(val)).catch(err => console.log(err));
    },[])

    console.log(api)

    const card = <div className='Card'>
        <section>
          <div className='overlay'>

          </div>
        </section>
    </div>

    const creator = <div className='TextContainer'>
        <span className='text'>
            Coded by <span className='Name'>
              Gino Dela Vega
            </span>
        </span>
    </div>

  return (
    <div className='App col-lg-12 m-0 p-0'>
        {card}
        {creator}
    </div>
  )
}

export default App;