const companyInfo = {
  title: "The Loft Hawaiian Restaurant",
  phone: '(310) - 217 - 1000',
  location: "Torrance, California",
}

var menu = [
  {
    title:"Korean BBQ Beef",
    description: "Thinly sliced strips of Choice Angus Tri-tip beef marinated in a flavorful, sweet and savory sauce then grilled over an open flame",
    price: "$15.95",
    image:'http://www.thelofthawaii.com/images/menu_staff12.jpg?crc=3849187541'
  },

  {
    title: "Island Fried Chicken",
    description: "Boneless chicken leg marinated in our secret sweet ginger sauce, then fried to a golden brown.",
    price: "$10.95",
    image: 'http://www.thelofthawaii.com/images/menu_entree1.jpg?crc=4199814825'
  },
{
  title: "Bacon Fried Rice",
  description: "Lots of steamed rice flash fried with smoky bacon, eggs, green onions and our housemade sauce. Served with a scoop of macaroni salad.",
  price: "$9.95",
  image: 'http://www.thelofthawaii.com/images/menu_special12.jpg?crc=274338477'
}
];


var reviews = [
  {
    review: `This is my favorite Hawaiian restaurant! Their wait staff are
    always friendly and attentive. I highly recommend their kalua
    pork, island styled fried chicken, and mac salad. 10/10`,
    
    highlight: "'Best Hawaiian Food in the South Bay!",
    author: "Daria.P",
    authorInfo: "Local Yelper"
  },

  {
    review: "The Loft is a South Bay staple. Known them from the ground up. It's always been good-great grinds. Give dem a chance and try. Korean BBQ beef, fried chicken, Asian bbq chicken, lau lau, cha siu chicken, chili fries, bacon fried rice, loco moco, etc. all grinds!",
    
    highlight: "A South Bay staple!!!",
    author: "Doug M.",
    authorInfo: "Local Yelper"
  },

  {
    review: "First time here and I absolutely loved the food! I highly recommend this restaurant not only was their food amazing but the staff was great as well. I will definitely be coming back soon!",
    
    highlight: "Absolutely loved the food!",
    author: "Mari S.",
    authorInfo: "Local Yelper"
  },

  {
    review:"I've been going here for 15 years, and love how consistent they are! The food is always delicious, and any time I order catering for work related events this is my go to spot.",
    
    highlight: "Love this place!!!",
    author: "Cristina R.",
    authorInfo: "Local Yelper"
  }
];


export const globalState = {
  count: 0,
  companyInfo,
  menu,
  reviews,
  reviewStatus: {
    currentReview: 0
  }
}
