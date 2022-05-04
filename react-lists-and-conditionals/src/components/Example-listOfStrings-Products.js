function Products(){

    const products = ["phone", "display glass", "charger", "case"];

    return (
        <div>
            <h2> Products List </h2>
            <i><u> (Example using a list of strings) </u></i>

            { products.map((oneProduct, index) => {
                return (
                    <p key={index}> { oneProduct } </p>
                )
            })}
        </div>
    )
}

export default Products;