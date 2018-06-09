webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var reviewRight = function reviewRight(state, actions) {

  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview + 1
    } };
};

var reviewLeft = function reviewLeft(state, actions) {
  return { reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  };
};

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

var actions = exports.actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft,
  intro: intro,
  showMenu: showMenu
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _Story = __webpack_require__(19);

var _Story2 = _interopRequireDefault(_Story);

var _Menu = __webpack_require__(16);

var _Menu2 = _interopRequireDefault(_Menu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Contact = __webpack_require__(13);

var _Contact2 = _interopRequireDefault(_Contact);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Story2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Menu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Contact2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: "The Loft Hawaiian Restaurant",
  phone: '(310) - 217 - 1000',
  location: "Torrance, California"
};

var menu = [{
  title: "Korean BBQ Beef",
  description: "Thinly sliced strips of Choice Angus Tri-tip beef marinated in a flavorful, sweet and savory sauce then grilled over an open flame",
  price: "$15.95",
  image: 'http://www.thelofthawaii.com/images/menu_staff12.jpg?crc=3849187541'
}, {
  title: "Island Fried Chicken",
  description: "Boneless chicken leg marinated in our secret sweet ginger sauce, then fried to a golden brown.",
  price: "$10.95",
  image: 'http://www.thelofthawaii.com/images/menu_entree1.jpg?crc=4199814825'
}, {
  title: "Bacon Fried Rice",
  description: "Lots of steamed rice flash fried with smoky bacon, eggs, green onions and our housemade sauce. Served with a scoop of macaroni salad.",
  price: "$9.95",
  image: 'http://www.thelofthawaii.com/images/menu_special12.jpg?crc=274338477'
}];

var reviews = [{
  review: "This is my favorite Hawaiian restaurant! Their wait staff are\n    always friendly and attentive. I highly recommend their kalua\n    pork, island styled fried chicken, and mac salad. 10/10",

  highlight: "'Best Hawaiian Food in the South Bay!",
  author: "Daria.P",
  authorInfo: "Local Yelper"
}, {
  review: "The Loft is a South Bay staple. Known them from the ground up. It's always been good-great grinds. Give dem a chance and try. Korean BBQ beef, fried chicken, Asian bbq chicken, lau lau, cha siu chicken, chili fries, bacon fried rice, loco moco, etc. all grinds!",

  highlight: "A South Bay staple!!!",
  author: "Doug M.",
  authorInfo: "Local Yelper"
}, {
  review: "First time here and I absolutely loved the food! I highly recommend this restaurant not only was their food amazing but the staff was great as well. I will definitely be coming back soon!",

  highlight: "Absolutely loved the food!",
  author: "Mari S.",
  authorInfo: "Local Yelper"
}, {
  review: "I've been going here for 15 years, and love how consistent they are! The food is always delicious, and any time I order catering for work related events this is my go to spot.",

  highlight: "Love this place!!!",
  author: "Cristina R.",
  authorInfo: "Local Yelper"
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  menu: menu,
  reviews: reviews,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contact;

var _hyperapp = __webpack_require__(0);

function Contact(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "contact" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)("h2", null),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "city" },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "2210 W. Artesia Blvd.",
              (0, _hyperapp.h)("br", null),
              "Torrance, CA 90504"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "map" },
              (0, _hyperapp.h)("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10576.559788904038!2d-118.31682577699296!3d33.874024744189555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58c9874c7bacbe06!2sThe+Loft!5e0!3m2!1sen!2sus!4v1527918947706", width: "450", height: "350", frameborder: "0", style: "border:0", allowfullscreen: true })
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              " ",
              (0, _hyperapp.h)(
                "strong",
                null,
                "Phone"
              ),
              ":"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "310-217-1000",
              (0, _hyperapp.h)("br", null)
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "hours" },
              (0, _hyperapp.h)(
                "h6",
                null,
                " ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Opening Hours"
                ),
                ":"
              ),
              (0, _hyperapp.h)(
                "p",
                { "class": "times" },
                " ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Monday"
                ),
                ": Closed",
                (0, _hyperapp.h)("br", null),
                " ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Tues-Sat"
                ),
                ": 11am - 9pm",
                (0, _hyperapp.h)("br", null),
                " ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Sundays"
                ),
                ": 11am - 8pm"
              )
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _hyperapp = __webpack_require__(0);

function Menu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    { id: "footer" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Specialties"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social" },
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.facebook.com/loft.hawaiian", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://twitter.com/TheLoftHawaii", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          {
            href: "https://foursquare.com/v/the-loft-hawaiian-restaurant/4af5dcd8f964a520f7fd21e3",
            target: "new"
          },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-foursquare" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          {
            href: "https://www.yelp.com/biz/loft-hawaiian-restaurant-torrance?start=40",
            target: "new"
          },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-yelp" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 LTK Hawaii, Inc./TAB Enterprises, LLC All Rights Reserved."
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "header",
        null,
        (0, _hyperapp.h)(
            "div",
            { "class": "container" },
            (0, _hyperapp.h)(
                "div",
                { "class": "logo" },
                (0, _hyperapp.h)("img", { src: "http://static1.squarespace.com/static/548ddba9e4b0d3ebe89358a3/t/548de8e0e4b0b33049318a25/1504913975173/" })
            ),
            (0, _hyperapp.h)(
                "nav",
                null,
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Menu"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Catering"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Contact Us"
                )
            )
        )
    );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _hyperapp = __webpack_require__(0);

function Menu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  return (0, _hyperapp.h)(
    "section",
    { id: "menu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "menu-title" },
        "Specialities"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Our Signature Items"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "box-circle" },
                state.globalState.menu[0].price
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              state.globalState.menu[0].title
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              state.globalState.menu[0].description
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img2" },
              (0, _hyperapp.h)(
                "div",
                { "class": "box-circle" },
                state.globalState.menu[1].price
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              state.globalState.menu[1].title
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              state.globalState.menu[1].description
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img3" },
              (0, _hyperapp.h)(
                "div",
                { "class": "box-circle" },
                state.globalState.menu[2].price
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              state.globalState.menu[2].title
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              state.globalState.menu[2].description
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#" },
        " View Full Menu"
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "random-quote", style: { backgroundImage: "linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), \n        url(\"http://renatures.com/wp-content/uploads/2016/11/beaches-sea-rainbow-sand-beautiful-mountains-cliffs-islands-beach-hawaii-wallpaper-for-desktop-background-1920x1000.jpg\")" } },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"Aloha - ",
        (0, _hyperapp.h)("br", null),
        " Aloha is a value, one of unconditional love. Aloha is the outpouring and receiving of the spirit.\""
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var displayReviews = function displayReviews() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "title" },
        "REVIEWS"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "What people are saying"
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "'",
        state.globalState.reviews[state.globalState.reviewStatus.currentReview].highlight,
        "'"
      ),
      (0, _hyperapp.h)(
        "p",
        { "class": "review" },
        state.globalState.reviews[state.globalState.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.globalState.reviews[state.globalState.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          "Local Yelper"
        )
      )
    );
  };

  return (0, _hyperapp.h)(
    "section",
    { "class": "reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_large_assets/19f90cad684f/assets/img/brand_guidelines/Yelp_RGB_fullcolor_outline.png" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          displayReviews(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-left  " + (state.globalState.reviewStatus.currentReview > 0 ? 'ready' : '') + " ", "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onClick: actions.reviewRight(), "class": "fa fa-arrow-right " + (state.globalState.reviewStatus.currentReview == state.globalState.reviews.length - 1 ? '' : 'ready ') + " ", "aria-hidden": "true" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Story;

var _hyperapp = __webpack_require__(0);

function Story(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "story" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "story-title" },
            " Our Story "
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "The Loft's Island Roots"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "It was tough being a kid from the mainland spending summers on the island of Oahu. My aunties, uncles and cousins were always teasing me, my brothers and sister about how funny we talked. Being a \u201Cko-tonk\u201D in Hawaii wasn\u2019t easy but I got to eat delicious local Hawaiian foods. My fondest memories are of chasing the manapua truck through Waipahu, eating crackseed from GEM, and of course, shaved ice. The best of times were spent with my cousins at our beach house in Punaluu \u2013 eating saimin at midnight, gambling with the aunties, picking ogo with Mom and Dad at Ewa beach and watching Kikaida on TV. I\u2019ve always dreamt of running a restaurant and when the time came, I thought back to those summers in Punaluu. My hope is to bring the flavors and memories (minus the mosquitoes) of those Hawaiian summers to the mainland. I hope you enjoy our food \u2013 a little Hawaii and a little California \u2013 blending the best of both great places. Mahalo and enjoy . . ."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            " ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Tad Kawasaki"
            ),
            " "
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "btn" },
            "Reserve",
            " "
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "image" })
        )
      )
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { "class": "topimg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "call" },
            " Call to place your to-go/catering orders!"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            state.globalState.companyInfo.phone
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Monday:"
            ),
            " CLOSED ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Tues-Sat: "
            ),
            " 11am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Sundays:"
            ),
            " 11am - 8pm"
          )
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);