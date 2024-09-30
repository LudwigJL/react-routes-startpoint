import { useParams} from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";



function ViewProductPage(props) {
  const [product, setProduct] = useState(null);
  const { products } = props;
  const { id } = useParams();

  useEffect(() => {
    if (products && id) {
    console.log(product.id)
      const matchingProduct = products.find((product) => Number(product.id) === Number(id));
     setProduct(matchingProduct);
     console.log(product)
   }
 }, [products, id]);

 return(
    <section>

    </section>
    
 )

}

export default ViewProductPage

ViewProductPage.prototypes = {
    products: PropTypes.array
}
