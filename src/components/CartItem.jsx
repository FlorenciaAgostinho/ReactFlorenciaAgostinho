Function CartItem({ name, quantity, price, img }) {
    return (
        <div className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            img src={item.img} alt={item.name} />
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    )
}