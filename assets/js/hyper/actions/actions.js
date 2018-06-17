
var reviewRight = function(state,actions) {
  
  return(
    {
      reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview + 1
    }}
  )
}

var reviewLeft = function (state,actions) {
  return (
    {reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  }
  )
}

export const actions = {
  reviewRight,
  reviewLeft
}
