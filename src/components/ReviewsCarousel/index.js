import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  decreasechangereview = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prev => ({
        count: prev.count - 1,
      }))
    }
  }

  increasechangereview = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prev => ({
        count: prev.count + 1,
      }))
    }
  }

  activeitems = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="image-container">
        <img src={imgUrl} className="profile" alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review">{description}</p>
      </div>
    )
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const currentreview = reviewsList[count]
    return (
      <div className="container">
        <h1 className="head">Reviews</h1>
        <div className="arrow-image-container">
          <button
            type="button"
            className="btnval"
            testid="leftArrow"
            onClick={this.decreasechangereview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.activeitems(currentreview)}
          <button
            type="button"
            className="btnval"
            testid="rightArrow"
            onClick={this.increasechangereview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
