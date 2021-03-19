function Home(props) {
  console.log("props", props);
  return (
    <>
      <div className="cart">
        <h1>Cart : 0</h1>
      </div>

      <div className="item">
        <img
          alt="mobile"
          width="100px"
          height="80px"
          src="https://img.global.news.samsung.com/global/wp-content/uploads/2020/09/Galaxy-Fold_main1.jpg"
        />
        <span> Samsung </span>
        <span> Price : $1000.00 </span>
        <button
          onClick={() => {
            props.addToCartHandler({
              price: 1000,
              name: "Samsung",
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Home;
