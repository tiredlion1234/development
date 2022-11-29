import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CardComponent from './CardComponent';


function App() {









  //   const [type, setType] = useState("All");

  

  //   const [buttonText, setButtonText] = useState('Click');

  //   function handleClick() {
  //     if (buttonText === "Add to Cart") {
  //       setButtonText('Remove from Cart');
  //     } else {
  //       setButtonText("Add to Cart")
  //     }
  //   }

  //   // lets users select a filter type
  //   <Nav onSelect={selectFilterType}>
  //     <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
  //   </Nav>


  //   const matchesFilterType = item => {
  //     // all items should be shown when no filter is selected
  //     if (type === "All") {
  //       return true
  //     } else if (type === item.type) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  //   // const myFilterFunction = bakeryData.filter((item) =>{
  //   //   return item.type == ''
  //   // })
  //   const filteredData = bakeryData.filter(matchesFilterType)

    const bakeryData = [
      { name: 'Biscuits', type: 'bread', price: 3, img: './bis.jpg' },
      { name: 'Croissant', type: 'bread', price: 7, img: './cro.jpg' },
      { name: 'Cake', type: 'cake', price: 20, img: './cake.jpg' },

      { name: 'Turnover', type: 'pastry', price: 6, img: './turn.jpg' },
      { name: 'Muffin', type: 'bread', price: 4 , img: './muff.jpg'},
      { name: 'Cupcake', type: 'cake', price: 5, img: './cup.jpg' },

      { name: 'Bearclaws', type: 'pastry', price: 8, img:'./bear.jpg' },
      { name: 'Pie', type: 'pastry', price: 14, img: './pie.jpg' },
      { name: 'Brownie', type: 'pastry', price: 6, img: './bro.jpg' },

      { name: 'Bauggette', type: 'bread', price: 6, img: './bau.jpg' },
      { name: 'Sourdough', type: 'bread', price: 7 , img: './sour.jpg'},
      { name: 'Cheesecake', type: 'cake', price: 15, img: './cheese.jpeg' },
    ]



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







  return (
    <div className='container'>
      
      <div className='controls'>
        <h2>Filter By:</h2>
        <label>
          <input
            type="checkbox"
          // onChange={matchesFilterType}
          >
          </input>
          Bread
        </label>

        <label>
          <input
            type="checkbox"
          // onChange={matchesFilterType}
          >
          </input>
          Cake
        </label>

        <label>
          <input
            type="checkbox"
          // onChange={matchesFilterType}
          >
          </input>
          Pastry
        </label>
        <h2>Sort By:</h2>
        <label>
          <input
            type="checkbox"
          // onChange={matchesFilterType}
          >
          </input>
          Price--cheapest first
        </label>

        <h2>Total Cart Cost: total</h2>

      </div>
      <div className='items'>
        {bakeryData.map((item) => <CardComponent item={item}/>)}
      </div>
    </div>

  )
}


export default App;
