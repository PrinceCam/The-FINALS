import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetailsById } from "../utils/products";
import { Box, Button } from "@mui/material";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductDetailsById(id).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }, []);

  return (
    <Box display="flex" justifyContent="space-around" sx={{ height: "100vh" }}>
      <Box sx={{ height: "100vh", width: "50%" }}>
        <img src={productDetails.image} />
      </Box>
      <Box sx={{ p: 5 }}>
        <p>{productDetails.title}</p>
        <p>{productDetails.price}</p>
        <p>{productDetails.description}</p>
        <Button>Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
