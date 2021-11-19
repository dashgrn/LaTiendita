import React from 'react'

const ProductGrid = () => {

    const {data:products} = useFetchProucts()

  return (
    <>
              <div className="card-grid">
                
           
                {
                    products.map( (img) =>(
                        
                        <ProductGridItem 
                        key={img.id}
                        {...img} 
                        />
                     ))
                }
          

        </div>
    </>
  )
}

export default ProductGrid
