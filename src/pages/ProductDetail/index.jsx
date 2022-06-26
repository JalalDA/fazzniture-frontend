import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Helpers
import withHOC from "../../helpers/withHOC";

//assets
import "./ProductDetail.css";
import Path from "../../assets/vector/Path.png";
import Rate from "../../assets/vector/product-rate.png";
import Check from "../../assets/vector/check.png";
import AddInfo from "../../assets/vector/add-info.png";
import Love from "../../assets/vector/love.png";
import Twt from "../../assets/vector/twt.png";
import Fb from "../../assets/vector/fb.png";
import Ytb from "../../assets/vector/ytb.png";
// import Mask from "../../assets/img/Mask.png";
// import Big from "../../assets/img/big.png";
// import Pd from "../../assets/img/pd.png";

// Components
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
// import ImageDetail from "../../components/ImageDetail";
import CardProduct from "../../components/CardProduct";

// Redux action
// import { getProductByIdAction } from "../../redux/actionCreator/products";

//Axios request
// import { getProductRelatedAxios } from "../../services/products";
class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      relatedProduct: [],
    };
  }

  // getProductRelated = () => {
  //   const {
  //     productId: { category_id },
  //   } = this.props;
  //   getProductRelatedAxios(category_id)
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({
  //         relatedProduct: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // componentDidMount() {
  //   const {
  //     params: { id },
  //   } = this.props;
  //   getProductByIdAction(id);
  // this.getProductRelated();
  // }
  render() {
    // const {
    // productId: { file },
    // productId,
    // } = this.props;
    // const { relatedProduct } = this.state;
    return (
      <>
        <Navbar />
        <div className="container product-detail-container">
          <div className="d-flex">
            <div className="col-md-1 col-2">
              <Link to="/shop" className="text-decoration-none text-dark">
                Shop
              </Link>{" "}
              <img src={Path} alt="path" className="ms-md-3" />
            </div>
            <div className="col-md-2 col-4">
              <Link to="/shop" className="text-decoration-none text-dark">
                Shop Right Sidebar
              </Link>
              <img src={Path} alt="path" className="ms-md-4" />
            </div>
            <div className="col-md-1 col-1">
              <Link to="/products" className="text-decoration-none text-dark">
                Product
              </Link>
            </div>
          </div>
          <div className="row justify-content-between mt-md-5 mt-5">
            <div className="col-12 col-md-3">
              <div className="row justify-content-around">
                {/* {file.map((image) => (
                  <ImageDetail
                  image={image}
                  />
                ))} */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8">
                  <img
                    // src={file[0]}
                    alt="img-big"
                    className="mt-md-5 image-zoom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-5 ms-md-5">
            {/* <h3>{productId.name}</h3> */}
            <img src={Rate} alt="rate" className="image-rate my-3" />
            <div className="d-flex justify-content-between">
              {/* <h3>{productId.price}</h3> */}
              <div className="info-stock mt-3 w-50">
                <img src={Check} alt="check" />
                19 Sold / 40 In Stock
              </div>
            </div>
            <div className="desc-product-detail mt-md-4 mt-3">
              {/* <p>{productId.description}</p> */}
            </div>
            <div className="d-flex">
              <div className="counter-box">
                <button className="w-100 button-count">-</button>
                <p className="px-2 mt-md-2">qty</p>
                <button className="w-100 button-count">+</button>
              </div>
              <button className="button-cart">Add to cart</button>
              <div className="square-love">
                <img src={Love} alt="love" className="love-button" />
              </div>
              <button className="button-wishlist">Add to wishlist</button>
            </div>
            <div className="row mt-md-5">
              <ul className="description-list">
                <li>SKU: N/A</li>
                <li>Categories: Furniture, Interior, Chair</li>
                <li>Tag: Furniture, Chair, Scandinavian, Modern</li>
                {/* <li>Product ID : {productId.id}</li> */}
              </ul>
            </div>
            <img src={AddInfo} alt="add-info" className="add-info mt-md-3" />
            <div className="d-flex mt-md-5 my-4 social-media-pd">
              <img src={Fb} alt="fb" />
              <img src={Twt} alt="twt" />
              <img src={Ytb} alt="ytb" />
            </div>
            <div className="d-flex mt-md-5 justify-content-between button-information">
              <button className="btn-unborder">Description</button>
              <button className="btn-unborder">Review</button>
              <button className="btn-unborder">Additional Information</button>
              <button className="btn-unborder">About Brand</button>
              <button className="btn-unborder">Shipping & Delivery</button>
            </div>
            <div className="row align-items-center my-md-3">
              <div className="col-md-6">
                <img
                  // src={productId.file}
                  alt="imagedesc"
                  className="image-desc"
                />
              </div>
              <div className="col-md-6 detail-desc">
                <p>
                  {/* {productId.description} */}
                  Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                  egestas magna molestie a. Proin ac ex maximus, ultrices justo
                  eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                  in vehicula lacus scelerisque. Vestibulum ut sem laoreet,
                  feugiat tellus at, hendrerit arcu..
                  <ul className="my-md-3">
                    <li>
                      Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                      tincidunt semper
                    </li>
                    <li>
                      Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                      tincidunt semper
                    </li>
                  </ul>
                  Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                  Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                  tincidunt semper. Phasellus accum
                </p>
              </div>
            </div>
            <div className="row title-related text-center">
              <h1>Related Products</h1>
            </div>
            <div className="row justify-content-center my-md-4 my-4">
              {/* {relatedProduct.map((product) => (
                <CardProduct
                  title={product.name}
                  price={product.price}
                  image={product.file}
                  key={product.id}
                />
              ))} */}
              {/* <CardProduct
                title="Coaster 506222-CO Loveseat"
                price="$765.99"
                image={Pd}
              />
              <CardProduct
                title="Coaster 506222-CO Loveseat"
                price="$765.99"
                image={Pd}
              /> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    products: { productId },
  } = state;
  return {
    productId,
  };
};

export default connect(mapStateToProps)(withHOC(ProductDetail));
