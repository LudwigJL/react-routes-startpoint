import { useParams} from "react-router-dom";
import PropTypes from "prop-types";

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);
  const { products } = props;
  const { id } = useParams();

  useEffect(() => {
    if (products && id) {
      const matchingProduct = products.find((product) => Number(product.id) === Number(id));
     setProduct(matchingProduct);
   }
 }, [products, id]);

}

export default ViewProductPage

ViewProductPage.prototypes = {
    products: PropTypes.array
}
