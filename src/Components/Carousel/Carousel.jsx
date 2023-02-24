import React, { Component } from "react";
import "./Carousel.css";

class Carousel extends Component {
  state = {
    activeIndex: 0,
  };

  handlePrev = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;
    const lastIndex = React.Children.count(children) - 1;
    const index = activeIndex === 0 ? lastIndex : activeIndex - 1;

    this.setState({
      activeIndex: index,
    });
  };

  handleNext = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;
    const lastIndex = React.Children.count(children) - 1;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;

    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="carousel">
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              {child}
            </div>
          ))}
        </div>
        <button className="carousel-prev" onClick={this.handlePrev}>
          &#8249;
        </button>

        <div className="carousel-dots">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => this.setState({ activeIndex: index })}
            ></div>
          ))}
        </div>
        <button className="carousel-next" onClick={this.handleNext}>
          &#8250;
        </button>
      </div>
    );
  }
}

export default Carousel;
