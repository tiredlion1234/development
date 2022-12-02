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
    { name: 'Biscuit', type: 'bread', price: 3, img: bis },
    { name: 'Croissant', type: 'pastry', price: 7, img: cro },
    { name: 'Cake', type: 'cake', price: 20, img: cake },

    { name: 'Turnover', type: 'pastry', price: 6, img: turn },
    { name: 'Muffin', type: 'bread', price: 4, img: muff },
    { name: 'Cupcake', type: 'cake', price: 5, img: cup },

    { name: 'Bearclaw', type: 'pastry', price: 8, img: bear },
    { name: 'Pie', type: 'pastry', price: 14, img: pie },
    { name: 'Brownie', type: 'pastry', price: 6, img: bro },

    { name: 'Bauggette', type: 'bread', price: 6, img: bau },
    { name: 'Sourdough', type: 'bread', price: 7, img: sour },
    { name: 'Cheesecake', type: 'cake', price: 15, img: cheese },
  ]





  const [type, setType] = useState([]);
  const [calories, setCalories] = useState("");
  const [sorted, setSorted] = useState(false)

  const [disData, setdisData] = useState(bakeryData);



  const [cart, setCartState] = useState([])





  const [totalPrice, settotalPrice] = useState(0);







  const handleFilter = (newtype) => {
    let newtypes = [...type];
    if (newtypes.includes(newtype)) {
      const index = type.indexOf(newtype)
      newtypes.splice(index, 1)
    } else {
      newtypes = [...newtypes, newtype]
    }
    setType(newtypes);
    filterData(newtypes, calories, sorted)
  }

  const handleFilter2 = (name) => {
    setCalories(name)
    filterData(type, name, sorted)
  }





  const filterData = (mytypefilters, calorieFilter, sort) => {
    let myfilteredData = [...bakeryData];
    if (mytypefilters.length != 0) {
      myfilteredData = myfilteredData.filter((item) => mytypefilters.includes(item.type))
    }
    console.log(calorieFilter)
    switch (calorieFilter) {
      case "<5":
        myfilteredData = myfilteredData.filter((item) => item.price < 5)
        break;
      case "5-15":
        myfilteredData = myfilteredData.filter((item) => item.price >= 5 && item.price <= 15)
        break;
      case ">15":
        myfilteredData = myfilteredData.filter((item) => item.price > 15)
        break;
      default:
        break;
    }
    if (sort) {
      myfilteredData.sort((a, b) => {
        return a.price - b.price;
      })
    }
    setdisData(myfilteredData);
  }

  const addtototal = (price, name) => {
    settotalPrice(totalPrice + price);


    setCartState([...cart, name])
  }

  const removefromtotal = (price, name) => {
    settotalPrice(totalPrice - price);
    const newCart = cart.filter((item) => item !== name);
    setCartState([...newCart]);
  }


  let displayData = [...bakeryData]
  if (type.length != 0) {
    displayData = displayData.filter((item) => type.includes(item.type))
  }
  if (sorted) {
    displayData.sort((a, b) => {
      return a.price - b.price;
    })
  }



  return (

    <div className='container'>
      <div className='title'><h1>My Bakery aka ur Fav Pâtisserie</h1></div>
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
        <h2>Price range filters:</h2>
        <label>
          <input
            type="radio"
            name="pricefilter"
            onClick={() => handleFilter2("")}
            >
          </input>
          None
        </label>
        <label>
          <input
            type="radio"
            name="pricefilter"
            onClick={() => handleFilter2("<5")}
            >
          </input>
          Under $5
        </label>

        <label>
          <input
            type="radio"
            name="pricefilter"
            onClick={() => handleFilter2('5-15')}
          >
          </input>
          $5 to $15
        </label>

        <label>
          <input
            type="radio"
            name="pricefilter"
            onClick={() => handleFilter2('>15')}
          >
          </input>
          Over $15
        </label>
        <h2>Sort By:</h2>




        <div>

          <input type="radio" onChange={() => filterData(type, calories, true)} name="sorting" /> Price--cheapest first
          <input type="radio" onChange={() => filterData(type, calories, false)} name="sorting" /> Original Order



        </div>


      </div>

      <div>

        <h2>Currently in your cart:</h2>


        {cart.map((name) => (
          <div>
            {name}
            <br />
          </div>
        ))}


        <h2>Total Cost:</h2> ${totalPrice}
      </div>
      <div className='items'>

        {disData.map((item) => <CardComponent item={item} addtototal={addtototal} removefromtotal={removefromtotal} key={item.name} onClick={() => {
          addtototal(item.price, item.name)
          removefromtotal(item.price, item.name)


        }} />)}
      </div>


    </div>

  )
}


export default App;
