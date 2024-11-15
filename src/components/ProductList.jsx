import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import truncateString from '../utils/truncateString'
import { Box } from "@mui/material"
const ProductList = () => {
    const { products } = useContext(ProductContext)
    const navigate = useNavigate()
    return (
        <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "100%" }}>
            {products.map((item) => {
                return <div style={{ display: "flex", flexDirection: "column", width: 150, padding: 20, height: 350, justifyContent: "space-between", cursor: "pointer" }} key={item.id} onClick={() => {
                    navigate("/product-details/" + item.id)
                }}>
                    <img src={item.image} />
                    <h3>{truncateString(item.title, 20)}</h3>
                    <p>{item.rating.rate}</p>
                    <p>${item.price}</p>
                </div>
            })}
        </Box>
    )
}
export default ProductList