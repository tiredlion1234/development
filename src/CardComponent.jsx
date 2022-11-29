
//pseudocode

//this can be reused
const CardComponent = ({ item, isAdded }) => {
    return (
        <div>
            <img src={item.img}></img>
            <h3>{item.name}</h3>
            <p>{item.type}</p>
            <p>{item.price}</p>
            <button type="button">Add me to cart</button>

        </div>
    )
}

export default CardComponent