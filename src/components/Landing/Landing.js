import './Landing.css'

export default function Landing(props) {
    // console.log("isloading:",props.isloading)
    // props.products.forEach(e => {
    //     console.log(e.category)
    //   })


    return (
        <div className='products-container'>

            {props.isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}

            {!props.isLoading && props?.products?.map(item => {
                return (
                    <div className='product-container' key={item.id}>
                        <h3 className='product-category'>{item.category}</h3>
                        <div className="product-image-container">
                            <img src={item.image} alt="" className='product-image' />
                        </div>
                        <p className='product-price' >${item.price}</p>
                        <h1 className='product-title'> {item.title} </h1>
                        <div className="product-rating-container">
                            <p className="product-rating-text">{item.rating.rate}/5 Stars</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}