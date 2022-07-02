import React, { useState } from 'react';
import { FaEthereum, FaClock } from 'react-icons/fa';
import './scss/Styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [value, setValue] = useState('0.041');

    const card = <div className='Card'>
        <section>
          <div className='overlay'>
              <div className='img-container'/>
          </div>
          <div className='nft-name-container'>
              <button className='text'>
                Crystal Diamond #9875
              </button>
          </div>
          <div className='nft-preview-card-description'>
            <span className='text'>
                Our Crystal Diamond collection promotes balance and calm.
            </span>
          </div>
          <div className='price-nft'>
              <FaEthereum className='eth'/>
              <span className='eth-price-text'>
                {value} ETH
              </span>
              <span className='time-nft-text'>
                <FaClock className='clock'/> &nbsp; 3 days left
              </span>
          </div>
          <div className='nft-creator-container'>
              <div className='inner-creator-container'>
                <div className='creator-profile-img'/>
                <span className='text'>
                  &nbsp; Creation of <span className='name'>Fannix</span>
                </span>
              </div>
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