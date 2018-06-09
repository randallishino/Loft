
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


function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}

export const actions = {
  reviewRight,
  reviewLeft,
  intro,
  showMenu
}
