import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {

  const displayReviews = function() {
    return (
      <div>
      <h5 class="title">REVIEWS</h5>
      <h2>What people are saying</h2>
      <h4>'{state.globalState.reviews[state.globalState.reviewStatus.currentReview].highlight}'</h4>
      <p class="review">
      {state.globalState.reviews[state.globalState.reviewStatus.currentReview].review}
      </p>
      <div class="author">
        <strong>{state.globalState.reviews[state.globalState.reviewStatus.currentReview].author}</strong> - <em>Local Yelper</em>
      </div>
      </div>
    )
  }

  return (
    <section class="reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
          <div class="side-img">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_large_assets/19f90cad684f/assets/img/brand_guidelines/Yelp_RGB_fullcolor_outline.png" />
            </div>
            </div>
          <div class="col-md-4">
          {displayReviews()}
            <div class="arrows">
              <i class={`fa fa-arrow-left  ${(state.globalState.reviewStatus.currentReview > 0) ? 'ready' : ''} `} aria-hidden="true" />
              <i onClick={(actions.reviewRight())}  class={`fa fa-arrow-right ${(state.globalState.reviewStatus.currentReview == (state.globalState.reviews.length - 1)) ? '' : 'ready ' } `} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
