import './style.css';


const CardComponent = ({ item, addtototal, removefromtotal}) => {

    function change(name) 
{
    
    var elem = document.getElementById(name);
    if (elem.innerHTML ==="Add me to cart") {
        elem.innerHTML = "Remove me from Cart"; 
        addtototal(item.price, item.name);
        elem.style.backgroundColor = 'rgb(225, 15, 15)';}
    else {
        elem.innerHTML = "Add me to cart"; 
        removefromtotal(item.price, item.name);
        elem.style.backgroundColor = '#000';}
}
    return (
        <div className="card">
            
            <h2>{item.name}</h2>
            <p className="sub">Type: {item.type}</p>
            <p className="sub">Price: ${item.price}</p>
            <img src={item.img}></img>
            <button type="button" onClick={() => change(item.name)} id={item.name}>Add me to cart</button>
  
        </div>
    )
}

export default CardComponent