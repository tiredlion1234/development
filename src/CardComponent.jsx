


const CardComponent = ({ item, addToCart, removeFromCart}) => {

    function change() 
{
    
    var elem = document.getElementById("mybutton");
    if (elem.value=="Add me to cart") {
        elem.value = "Remove me from Cart"; 
        addToCart()}
    else {
        elem.value = "Add me to cart"; 
        removeFromCart()}
}
    return (
        <div>
            
            <h3>{item.name}</h3>
            <p>{item.type}</p>
            <p>{item.price}</p>
            <img src={item.img}></img>
            <button type="button" onClick={() => change()} id="mybutton">Add me to cart</button>
            {/* before it was just {addToCart} */}
        </div>
    )
}

export default CardComponent