//helpers: Van funciones especificas



export const getProducts = async() => {
  const url = 'https://tiendita-workshop-2.herokuapp.com/'
  const resp = await fetch(url)
  const {productos} = await resp.json()

  

  //recorridod e la data
  const products = productos.map(art =>{
      return{
        id:art.id,
        name:art.name,
        price:art.price,
        category:art.category,
        discount:art.discount,
        ripeness:art.ripeness,
        popularity:art.popularity,
        image:art.image

      }
  })

  return products
  console.log(products)
}



