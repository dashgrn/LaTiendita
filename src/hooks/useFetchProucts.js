import React from 'react'
import { getProducts } from "../helpers/getProducts";

const useFetchProucts = () => {
    const [state, setState] = useState({
        data:[]
    })

    useEffect(() => {
        getProducts()
        .then((art) =>{
            setState({
                data:art
            })
        })
    }, [])

  return state
}

export default useFetchProucts
