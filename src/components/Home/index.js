import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import { CarouselItem } from "./components/Carousel";
import "./home.css";

const Home = ({ history }) => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState("");

  const fetchCategories = async () => {
    await fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => setError(err));
  };
  const fetchBanners = async () => {
    await fetch("http://localhost:5000/banners")
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((err) => setError(err));
  };
  console.log(banners);
  useEffect(() => {
    fetchBanners();
    fetchCategories();
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    history.push("/products");
  };
  console.log("Cate",categories)
  return (
    <section className="home-container">
      <div className="carousel-container">
        <Carousel>
          {banners &&
            banners.length > 0 &&
            banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <img
                  src={process.env.PUBLIC_URL + banner.bannerImageUrl}
                  alt="Banner"
                />
              </CarouselItem>
            ))}
        </Carousel>
      </div>
      {categories &&
        categories.length > 0 &&
        categories.map((category) => (
          <div className="categories-container" key={category.id}>
            <img
              src={process.env.PUBLIC_URL + category.imageUrl}
              width="250"
              height="200"
            />
            <div className="category-description">
              <h3>{category.name}</h3>
              <span>{category.description}</span>
              <button
                className="category-button"
                onClick={handleButtonClick}
              >{`Explore ${category.key}`}</button>
            </div>
          </div>
        ))}
    </section>
  );
};
export default Home;

// const { Component } = React;
// const { render } = ReactDOM;

// const carouselContainer = document.querySelector(".carousel-container");

// // Data for carousel
// const carouselSlidesData = [
//   {
//     content:
//       "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
//     author: "Bane",
//     source: "facebook"
//   }, {
//     content:
//       "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
//     author: "Ra's Al Ghul",
//     source: "Snapchat"
//   }, {
//     content:
//       "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
//     author: "Joker",
//     source: "facebook"
//   }, {
//     content:
//       "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
//     author: "Bruce Wayne",
//     source: "facebook"
//   }, {
//     content:
//       "But it's not who you are underneath... it's what you do that defines you.",
//     author: "Rachel Dawes",
//     source: "twitter"
//   }, {
//     content:
//       "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
//     author: "John Blake",
//     source: "Google+"
//   }, {
//     content:
//       "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
//     author: "Alfred Pennyworth",
//     source: "twitter"
//   }
// ];

// class CarouselLeftArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--left"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-left" />
//       </a>
//     );
//   }
// }

// class CarouselRightArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--right"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-right" />
//       </a>
//     );
//   }
// }

// class CarouselIndicator extends Component {
//   render() {
//     return (
//       <li>
//         <a
//           className={
//             this.props.index == this.props.activeIndex
//               ? "carousel__indicator carousel__indicator--active"
//               : "carousel__indicator"
//           }
//           onClick={this.props.onClick}
//         />
//       </li>
//     );
//   }
// }

// class CarouselSlide extends Component {
//   render() {
//     return (
//       <li
//         className={
//           this.props.index == this.props.activeIndex
//             ? "carousel__slide carousel__slide--active"
//             : "carousel__slide"
//         }
//       >
//         <p className="carousel-slide__content">{this.props.slide.content}</p>

//         <p>
//           <strong className="carousel-slide__author">
//             {this.props.slide.author}
//           </strong>,
//           {" "}
//           <small className="carousel-slide__source">
//             {this.props.slide.source}
//           </small>
//         </p>
//       </li>
//     );
//   }
// }

// // Carousel wrapper component
// class Carousel extends Component {
//   constructor(props) {
//     super(props);

//     this.goToSlide = this.goToSlide.bind(this);
//     this.goToPrevSlide = this.goToPrevSlide.bind(this);
//     this.goToNextSlide = this.goToNextSlide.bind(this);

//     this.state = {
//       activeIndex: 0
//     };
//   }

//   goToSlide(index) {
//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToPrevSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length;

//     if (index < 1) {
//       index = slidesLength;
//     }

//     --index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToNextSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length - 1;

//     if (index === slidesLength) {
//       index = -1;
//     }

//     ++index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

//         <ul className="carousel__slides">
//           {this.props.slides.map((slide, index) =>
//             <CarouselSlide
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               slide={slide}
//             />
//           )}
//         </ul>

//         <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

//         <ul className="carousel__indicators">
//           {this.props.slides.map((slide, index) =>
//             <CarouselIndicator
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               isActive={this.state.activeIndex==index}
//               onClick={e => this.goToSlide(index)}
//             />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// render(<Carousel slides={carouselSlidesData} />, carouselContainer);
// SASS variable for media query breakpoint
// $breakpoint-desktop: 992px;

// // Resetting default styles
// ul {
//   padding: 0;
//   margin: 0;
//   list-style-type: none;
// }

// // Fix for jumping arrows
// .carousel-container {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   min-height: 210px;
// }

// .carousel {
//   position: relative;
// }

// // Carousel slides
// .carousel__slide {
//   margin-right: auto;
//   margin-left: auto;
//   display: none;
//   max-width: 900px;
//   list-style-type: none;
//   text-align: center;

//   @media (max-width: 991px) {
//     padding-right: 60px;
//     padding-left: 60px;
//   }

//   &--active {
//     display: block;
//   }
// }

// // Content of slides
// .carousel-slide__content {
//   margin-bottom: 19px;
//   font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
//   font-size: 16px;

//   @media (max-width: $breakpoint-desktop - 1px) {
//     font-size: 18px;
//   }
// }

// .carousel-slide__author,
// .carousel-slide__source {
//   font-family: 'Roboto', arial, sans-serif;
//   font-size: 14px;

//   @media (min-width: $breakpoint-desktop) {
//     font-size: 16px;
//   }
// }

// .carousel-slide__source {
//   font-style: italic;
//   color: #888;
// }

// // Carousel arrows
// .carousel__arrow {
//   position: absolute;
//   top: 50%;
//   display: block;
//   color: #111;
//   cursor: pointer;
//   opacity: .75;
//   transform: translateY(-50%);
//   transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

//   &:focus {
//     outline: 0;
//   }

//   &:hover {
//     opacity: .5;
//   }

//   &--left {
//     left: 32px;
//   }

//   &--right {
//     right: 32px;
//   }
// }

// // Carousel indicators
// .carousel__indicators {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 20px;

//   li {
//     &:nth-of-type(n + 2) {
//       margin-left: 9px;
//     }
//   }
// }

// .carousel__indicator {
//   display: block;
//   width: 24px;
//   height: 3px;
//   background-color: #111;
//   cursor: pointer;
//   opacity: .15;
//   transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

//   &:hover {
//     opacity: .5;
//   }

//   &--active {
//     &,
//     &:hover {
//       opacity: .75;
//     }
//   }
//}
