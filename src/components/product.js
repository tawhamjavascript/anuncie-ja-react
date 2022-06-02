
const getPrice = (string) => {
    const priceArray = String(string).split(".");
    return priceArray;
}

const PRODUCTS = (props) => {
    const { id, name, memory, color, memoryRam, price, image } = props;
    const priceString = getPrice(price);
    return (
            <div className="product">
                <div className="product-img">
                    <img src= { image }  alt = { name }/>
                </div>
                <div className="line"> </div>
                    <div className="product-info">
                        <div className="product-price">
                            <p> { priceString[0] } <sup> { priceString[1] } </sup> </p>
                        </div>
                        <h3 className="product-name"> { name } { memory } GB { color } { memoryRam } GB RAM </h3>
                    </div>
            </div>
                
    );
    

}

export default PRODUCTS;