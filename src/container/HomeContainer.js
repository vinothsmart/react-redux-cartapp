import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../services/Actions/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
