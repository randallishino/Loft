webpackJsonp([0],[,,,,,,,,,function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.actions={reviewRight:function(e,a){return{reviewStatus:{currentReview:e.globalState.reviewStatus.currentReview+1}}},reviewLeft:function(e,a){return{reviewStatus:{currentReview:e.globalState.reviewStatus.currentReview-1}}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.state,t=e.actions;return(0,i.h)("div",{class:"app"},(0,i.h)(s.default,{state:a,actions:t}),(0,i.h)(n.default,{state:a,actions:t}),(0,i.h)(o.default,{state:a,actions:t}),(0,i.h)(l.default,{state:a,actions:t}),(0,i.h)(r.default,{state:a,actions:t}),(0,i.h)(h.default,{state:a,actions:t}),(0,i.h)(c.default,{state:a,actions:t}),(0,i.h)(u.default,{state:a,actions:t}))};var i=t(0),s=d(t(22)),n=d(t(27)),o=d(t(26)),l=d(t(23)),r=d(t(24)),c=d(t(20)),h=d(t(25)),u=d(t(21));t(17);function d(e){return e&&e.__esModule?e:{default:e}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.globalState={count:0,companyInfo:{title:"The Loft Hawaiian Restaurant",phone:"(310) - 217 - 1000",location:"Torrance, California"},menu:[{title:"Korean BBQ Beef",description:"Thinly sliced strips of Choice Angus Tri-tip beef marinated in a flavorful, sweet and savory sauce then grilled over an open flame",price:"$15.95",image:"http://www.thelofthawaii.com/images/menu_staff12.jpg?crc=3849187541"},{title:"Island Fried Chicken",description:"Boneless chicken leg marinated in our secret sweet ginger sauce, then fried to a golden brown.",price:"$10.95",image:"http://www.thelofthawaii.com/images/menu_entree1.jpg?crc=4199814825"},{title:"Bacon Fried Rice",description:"Lots of steamed rice flash fried with smoky bacon, eggs, green onions and our housemade sauce. Served with a scoop of macaroni salad.",price:"$9.95",image:"http://www.thelofthawaii.com/images/menu_special12.jpg?crc=274338477"}],reviews:[{review:"This is my favorite Hawaiian restaurant! Their wait staff are\n    always friendly and attentive. I highly recommend their kalua\n    pork, island styled fried chicken, and mac salad. 10/10",highlight:"'Best Hawaiian Food in the South Bay!",author:"Daria.P",authorInfo:"Local Yelper"},{review:"The Loft is a South Bay staple. Known them from the ground up. It's always been good-great grinds. Give dem a chance and try. Korean BBQ beef, fried chicken, Asian bbq chicken, lau lau, cha siu chicken, chili fries, bacon fried rice, loco moco, etc. all grinds!",highlight:"A South Bay staple!!!",author:"Doug M.",authorInfo:"Local Yelper"},{review:"First time here and I absolutely loved the food! I highly recommend this restaurant not only was their food amazing but the staff was great as well. I will definitely be coming back soon!",highlight:"Absolutely loved the food!",author:"Mari S.",authorInfo:"Local Yelper"},{review:"I've been going here for 15 years, and love how consistent they are! The food is always delicious, and any time I order catering for work related events this is my go to spot.",highlight:"Love this place!!!",author:"Cristina R.",authorInfo:"Local Yelper"}],reviewStatus:{currentReview:0}}},,,,,,,,,function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.state;e.actions;return(0,i.h)("section",{id:"contact"},(0,i.h)("div",{class:"container"},(0,i.h)("h5",{class:"title"},"Contact Us"),(0,i.h)("h2",null),(0,i.h)("div",{class:"box"},(0,i.h)("div",{class:"row"},(0,i.h)("div",{class:"col-md-6"},(0,i.h)("div",{class:"city"},a.globalState.companyInfo.location),(0,i.h)("h6",{class:"address"},"2210 W. Artesia Blvd.",(0,i.h)("br",null),"Torrance, CA 90504"),(0,i.h)("div",{class:"map"},(0,i.h)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10576.559788904038!2d-118.31682577699296!3d33.874024744189555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58c9874c7bacbe06!2sThe+Loft!5e0!3m2!1sen!2sus!4v1527918947706",width:"450",height:"350",frameborder:"0",style:"border:0",allowfullscreen:!0}))),(0,i.h)("div",{class:"col-md-6"},(0,i.h)("h6",null," ",(0,i.h)("strong",null,"Phone"),":"),(0,i.h)("div",{class:"title"},"310-217-1000",(0,i.h)("br",null)),(0,i.h)("div",{class:"hours"},(0,i.h)("h6",null," ",(0,i.h)("strong",null,"Opening Hours"),":"),(0,i.h)("p",{class:"times"}," ",(0,i.h)("strong",null,"Monday"),": Closed",(0,i.h)("br",null)," ",(0,i.h)("strong",null,"Tues-Sat"),": 11am - 9pm",(0,i.h)("br",null)," ",(0,i.h)("strong",null,"Sundays"),": 11am - 8pm")))))))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){e.state,e.actions;return(0,i.h)("footer",{id:"footer"},(0,i.h)("div",{class:"container"},(0,i.h)("nav",{class:"menu"},(0,i.h)("a",{href:"#"},"Our Story"),(0,i.h)("a",{href:"#"},"Reviews"),(0,i.h)("a",{href:"#"},"Specialties"),(0,i.h)("a",{href:"#"},"Contact Us")),(0,i.h)("ul",{class:"social"},(0,i.h)("a",{href:"https://www.facebook.com/loft.hawaiian",target:"new"},(0,i.h)("li",null,(0,i.h)("i",{class:"fab fa-facebook-f","aria-hidden":"true"}))),(0,i.h)("a",{href:"https://twitter.com/TheLoftHawaii",target:"new"},(0,i.h)("li",null,(0,i.h)("i",{class:"fab fa-twitter","aria-hidden":"true"}))),(0,i.h)("a",{href:"https://foursquare.com/v/the-loft-hawaiian-restaurant/4af5dcd8f964a520f7fd21e3",target:"new"},(0,i.h)("li",null,(0,i.h)("i",{class:"fab fa-foursquare"}))),(0,i.h)("a",{href:"https://www.yelp.com/biz/loft-hawaiian-restaurant-torrance?start=40",target:"new"},(0,i.h)("li",null,(0,i.h)("i",{class:"fab fa-yelp"})))),(0,i.h)("div",{class:"copyright"},"© 2018 LTK Hawaii, Inc./TAB Enterprises, LLC All Rights Reserved.")))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){e.state,e.actions;return(0,i.h)("header",null,(0,i.h)("div",{class:"container"},(0,i.h)("div",{class:"logo"},(0,i.h)("img",{src:"http://static1.squarespace.com/static/548ddba9e4b0d3ebe89358a3/t/548de8e0e4b0b33049318a25/1504913975173/"}))))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.state;e.actions;return(0,i.h)("section",{id:"menu"},(0,i.h)("div",{class:"container"},(0,i.h)("h5",{class:"menu-title"},"Specialities"),(0,i.h)("h2",null,"Our Signature Items"),(0,i.h)("div",{class:"row"},(0,i.h)("div",{class:"col-md-4"},(0,i.h)("div",{class:"box"},(0,i.h)("div",{class:"box-img"},(0,i.h)("div",{class:"box-circle"},a.globalState.menu[0].price)),(0,i.h)("span",{class:"title"},a.globalState.menu[0].title),(0,i.h)("p",{class:"details"},a.globalState.menu[0].description))),(0,i.h)("div",{class:"col-md-4"},(0,i.h)("div",{class:"box"},(0,i.h)("div",{class:"box-img2"},(0,i.h)("div",{class:"box-circle"},a.globalState.menu[1].price)),(0,i.h)("span",{class:"title"},a.globalState.menu[1].title),(0,i.h)("p",{class:"details"},a.globalState.menu[1].description))),(0,i.h)("div",{class:"col-md-4"},(0,i.h)("div",{class:"box"},(0,i.h)("div",{class:"box-img3"},(0,i.h)("div",{class:"box-circle"},a.globalState.menu[2].price)),(0,i.h)("span",{class:"title"},a.globalState.menu[2].title),(0,i.h)("p",{class:"details"},a.globalState.menu[2].description)))),(0,i.h)("a",{href:"#"}," View Full Menu")))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){e.state,e.actions;return(0,i.h)("section",{id:"random-quote",style:{backgroundImage:'linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), \n        url("http://renatures.com/wp-content/uploads/2016/11/beaches-sea-rainbow-sand-beautiful-mountains-cliffs-islands-beach-hawaii-wallpaper-for-desktop-background-1920x1000.jpg")'}},(0,i.h)("div",{class:"container"},(0,i.h)("h1",null,'"Aloha - ',(0,i.h)("br",null),' Aloha is a value, one of unconditional love. Aloha is the outpouring and receiving of the spirit."')))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.state,t=e.actions;return(0,i.h)("section",{class:"reviews"},(0,i.h)("div",{class:"container"},(0,i.h)("div",{class:"row"},(0,i.h)("div",{class:"col-md-8"},(0,i.h)("div",{class:"side-img"},(0,i.h)("img",{src:"https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_large_assets/19f90cad684f/assets/img/brand_guidelines/Yelp_RGB_fullcolor_outline.png"}))),(0,i.h)("div",{class:"col-md-4"},(0,i.h)("div",null,(0,i.h)("h5",{class:"title"},"REVIEWS"),(0,i.h)("h2",null,"What people are saying"),(0,i.h)("h4",null,"'",a.globalState.reviews[a.globalState.reviewStatus.currentReview].highlight,"'"),(0,i.h)("p",{class:"review"},a.globalState.reviews[a.globalState.reviewStatus.currentReview].review),(0,i.h)("div",{class:"author"},(0,i.h)("strong",null,a.globalState.reviews[a.globalState.reviewStatus.currentReview].author)," - ",(0,i.h)("em",null,"Local Yelper"))),(0,i.h)("div",{class:"arrows"},(0,i.h)("i",{class:"fa fa-arrow-left  "+(a.globalState.reviewStatus.currentReview>0?"ready":"")+" ","aria-hidden":"true"}),(0,i.h)("i",{onClick:t.reviewRight(),class:"fa fa-arrow-right "+(a.globalState.reviewStatus.currentReview==a.globalState.reviews.length-1?"":"ready ")+" ","aria-hidden":"true"}))))))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){e.state,e.actions;return(0,i.h)("section",{id:"story"},(0,i.h)("div",{class:"container"},(0,i.h)("div",{class:"row"},(0,i.h)("div",{class:"col-md-6"},(0,i.h)("h5",{class:"story-title"}," Our Story "),(0,i.h)("h2",null,"The Loft's Island Roots"),(0,i.h)("p",null,"It was tough being a kid from the mainland spending summers on the island of Oahu. My aunties, uncles and cousins were always teasing me, my brothers and sister about how funny we talked. Being a “ko-tonk” in Hawaii wasn’t easy but I got to eat delicious local Hawaiian foods. My fondest memories are of chasing the manapua truck through Waipahu, eating crackseed from GEM, and of course, shaved ice. The best of times were spent with my cousins at our beach house in Punaluu – eating saimin at midnight, gambling with the aunties, picking ogo with Mom and Dad at Ewa beach and watching Kikaida on TV. I’ve always dreamt of running a restaurant and when the time came, I thought back to those summers in Punaluu. My hope is to bring the flavors and memories (minus the mosquitoes) of those Hawaiian summers to the mainland. I hope you enjoy our food – a little Hawaii and a little California – blending the best of both great places. Mahalo and enjoy . . ."),(0,i.h)("div",{class:"quote"}," ",(0,i.h)("strong",null,"Tad Kawasaki")," "),(0,i.h)("a",{href:"#",class:"btn"},"Reserve"," ")),(0,i.h)("div",{class:"col-md-6"},(0,i.h)("div",{class:"image"})))))};var i=t(0)},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var a=e.state;e.actions;return(0,i.h)("section",{class:"topimg"},(0,i.h)("div",{class:"container"},(0,i.h)("div",{class:"title"},(0,i.h)("h5",null,"Welcome"),(0,i.h)("h1",null,a.globalState.companyInfo.title)),(0,i.h)("div",{class:"contact-info"},(0,i.h)("div",{class:"container"},(0,i.h)("div",{class:"call"}," Call to place your to-go/catering orders!"),(0,i.h)("h2",null,a.globalState.companyInfo.phone),(0,i.h)("div",{class:"hours"},"Opening Hours ",(0,i.h)("strong",null,"Monday:")," CLOSED ",(0,i.h)("strong",null,"Tues-Sat: ")," 11am - 9pm",(0,i.h)("strong",null," Sundays:")," 11am - 8pm")))))};var i=t(0)},function(e,a,t){"use strict";var i=t(0),s=r(t(12)),n=t(9),o=t(11),l=r(t(10));function r(e){return e&&e.__esModule?e:{default:e}}(0,i.app)({state:{globalState:o.globalState},view:function(e,a){return(0,i.h)(l.default,{state:e,actions:a})},root:document.getElementById("app"),actions:n.actions,events:{action:function(e,a,t){var i=t.name,s=t.data;console.group("Action Info"),console.log("Name:",i),console.log("Data:",s),console.groupEnd()},load:function(e,a){}   },mixins:[(0,s.default)()]})}],[28]);