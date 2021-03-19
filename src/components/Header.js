export default function Header(props) {
  return (
    <div className="cart">
      <h1>Cart : {props.data.cartItems.length}</h1>
    </div>
  );
}
