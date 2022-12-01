


const CardComponent = ({ item, addtototal, removefromtotal}) => {

    function change() 
{
    
    var elem = document.getElementById("mybutton");
    if (elem.innerHTML ==="Add me to cart") {
        elem.innerHTML = "Remove me from Cart"; 
        addtototal(item.price, item.name)}
    else {
        elem.innerHTML = "Add me to cart"; 
        removefromtotal(item.price, item.name)}
}
    return (
        <div>
            
            <h3>{item.name}</h3>
            <p>{item.type}</p>
            <p>{item.price}</p>
            <img src={item.img}></img>
            <button type="button" onClick={() => change()} id="mybutton">Add me to cart</button>
  
        </div>
    )
}

export default CardComponent