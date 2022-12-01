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



  const bakeryData = [
    { name: 'Biscuits', type: 'bread', price: 3, img: bis },
    { name: 'Croissant', type: 'pastry', price: 7, img: cro },
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





  const [type, setType] = useState([]);

  const [disData, setdisData] = useState(bakeryData);

  let originaldisData = disData;

  const [cartstate, setCart] = useState([<h2>Currently in you cart:</h2>]);

  const [coststate, setcost] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);



  const [totalPrice, settotalPrice] = useState(0);

  //   const [buttonText, setButtonText] = useState('Click');





  const handleFilter = (newtype) => {
    let newtypes = type;
    if (type.includes(newtype)) {
      const index = type.indexOf(newtype)
      newtypes.splice(index, 1)
    } else {
      newtypes = [...type, newtype]
    }
    setType(newtypes);
    filterData(newtypes)
  }





  const filterData = (mytypefilters) => {
    let myfilteredData = bakeryData;
    if (mytypefilters.length != 0) {
      myfilteredData = myfilteredData.filter((item) => mytypefilters.includes(item.type))
    }

    setdisData(myfilteredData)
  }



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


  const [sortedData, setSortedData] = useState([])

  const handleSort = () => {


    const newSortedData = disData.sort((a, b) => {
      return a.price - b.price;

    })
    setdisData(newSortedData);


  }

  const originalsort = () => {
    setdisData(originaldisData);
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







  const addtototal = (price, name) => {
    settotalPrice(totalPrice + price);

    setCart([...cartstate, name]);
  }

  const removefromtotal = (price, name) => {
    settotalPrice(totalPrice - price);
    const newCart = cartstate.filter((item) => item.name !== name);

    setCart(newCart);
  }






  return (
    <div className='container'>

      <div className='controls'>
        <h2>Filter By:</h2>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilter('bread')}
          >
          </input>
          Bread
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => handleFilter('cake')}
          >
          </input>
          Cake
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => handleFilter('pastry')}
          >
          </input>
          Pastry
        </label>
        <h2>Sort By:</h2>




        <div>

          <input type="radio" onChange={() => handleSort} name="sorting" /> Price--cheapest first
          <input type="radio" onChange={() => originalsort} name="sorting" /> Original Order



        </div>


      </div>

      <div>
        {/* {bakeryData.map((item) => <p>{item.name}</p>)} */}
        {cartstate}
        {console.log(typeof (totalPrice))}
        {/* .map((quantity, index) => <p>Quantity: {quantity} Cost: </p>)} */}
        {/* multiply({quantity},{bakeryData[index].price}))} */}
        <h2>Total Cost:</h2> {totalPrice}
      </div>
      <div className='items'>
        {disData.map((item, index) => <CardComponent item={item} addtototal={addtototal} removefromtotal={removefromtotal} key={item.name} onClick={() => {
          addtototal(item.price, item.name)
          removefromtotal(item.price, item.name)


        }} />)}
      </div>


    </div>

  )
}


export default App;
