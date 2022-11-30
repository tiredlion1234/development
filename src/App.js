import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CardComponent from './CardComponent';
import bau from './bau.jpg';
import bear from './bear.jpg'
import bis from './bis.jpg'
import bro from './bro.jpg'
import cake from './cake.jpg'
import cheese from './cheese.jpeg'
import cro from './cro.jpg'
import cup from './cup.jpg'
import muff from './muff.jpg'
import pie from './pie.jpg'
import sour from './sour.jpg'
import turn from './turn.jpg'


function App() {









  const [type, setType] = useState("All");

  const [cartstate, setCart] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [coststate, setcost] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  //   const [buttonText, setButtonText] = useState('Click');





  const addToCart = index => {
    return () => {
      const newCart = [...cartstate]
      newCart[index]++
      setCart(newCart)
    }
  }

  const removeFromCart = index => {
    return () => {
      const newCart = [...cartstate]
      newCart[index]--
      setCart(newCart)
    }
  }




  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }




  const bakeryData = [
    { name: 'Biscuits', type: 'bread', price: 3, img: bis },
    { name: 'Croissant', type: 'bread', price: 7, img: cro },
    { name: 'Cake', type: 'cake', price: 20, img: cake },

    { name: 'Turnover', type: 'pastry', price: 6, img: turn },
    { name: 'Muffin', type: 'bread', price: 4, img: muff },
    { name: 'Cupcake', type: 'cake', price: 5, img: cup },

    { name: 'Bearclaws', type: 'pastry', price: 8, img: bear },
    { name: 'Pie', type: 'pastry', price: 14, img: pie },
    { name: 'Brownie', type: 'pastry', price: 6, img: bro },

    { name: 'Bauggette', type: 'bread', price: 6, img: bau },
    { name: 'Sourdough', type: 'bread', price: 7, img: sour },
    { name: 'Cheesecake', type: 'cake', price: 15, img: cheese },
  ]

  const filteredData = bakeryData.filter(matchesFilterType)

  const [sortedData, setSortedData] = useState(bakeryData)

  const handleSort = () => {
    const newSortedData = filteredData.sort((a, b) => {
      return a.price - b.price;
    })
    setSortedData(newSortedData);
  }

  const handlefilter = (input) => {
    setType(input); 
  }

  //   return (


  //     <div className="App">
  //       <div>
  //         <h1>My Bakery</h1>
  //       </div>
  //       <div className="item-cards">
  //         <h1>My Bakery</h1>
  //         <div className="item">
  //           {
  //             filteredData
  //               .sort(mysortfunctions[sortfunction].function)
  //               .map((item, index) => (<CardComponent key={"item" + index} info={item}
  //                 added={favorites[item.name]} setStateofParent={updateList} />
  //               ))
  //           }
  //         </div>
  //       </div>
  //       <div>
  //         <button onClick={handleClick}>{buttonText}</button>
  //       </div>




  const multiply = (num1, num2) => {
    return num1 * num2;
  };

  const costarray = () => {
    var i;
    for (i = 0; i < cartstate.length; i++) {
      coststate[i] = cartstate[i] * bakeryData[i].price
    }
    return coststate
  }




  return (
    <div className='container'>

      <div className='controls'>
        <h2>Filter By:</h2>
        <label>
          <input
            type="checkbox"
            onChange={handlefilter('bread')}
          >
          </input>
          Bread
        </label>

        <label>
          <input
            type="checkbox"
            onChange={handlefilter('cake')}
          >
          </input>
          Cake
        </label>

        <label>
          <input
            type="checkbox"
            onChange={handlefilter('pastry')}
          >
          </input>
          Pastry
        </label>
        <h2>Sort By:</h2>
        <label>
          <input
            type="radio"
            onChange={handleSort}
          >
          </input>
          Price--cheapest first
        </label>

        <h2>Total Cart Cost: total</h2>

      </div>

      <div>
        {bakeryData.map((item) => <p>{item.name}</p>)}
        {cartstate.map((quantity, index) => <p>Quantity: {quantity} Cost: </p>, costarray())}
        {/* multiply({quantity},{bakeryData[index].price}))} */}
        <p>Total Cost: </p>
      </div>
      <div className='items'>
        {sortedData.map((item, index) => <CardComponent item={item} addToCart={addToCart(index)} removeFromCart={removeFromCart(index)} key={item.name} />)}
      </div>


    </div>

  )
}


export default App;
