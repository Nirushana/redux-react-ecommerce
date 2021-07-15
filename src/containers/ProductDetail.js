import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      async function fetchProductDetail() {
        const response = await axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(selectedProduct(response.data));
      }
      fetchProductDetail();
    }
  }, [productId, dispatch]);
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
}

export default ProductDetail;
