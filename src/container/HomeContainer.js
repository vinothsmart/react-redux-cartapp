import { connect } from "react-redux";
import addToCart from "../services/Actions/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  cartData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
