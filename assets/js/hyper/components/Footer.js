import { h, app } from "hyperapp";

export default function Menu({ state, actions }) {
  return (
    <footer id="footer">
      <div class="container">
        <nav class="menu">
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Specialties</a>
          <a href="#">Contact Us</a>
        </nav>

        <ul class="social">
          <a href="https://www.facebook.com/loft.hawaiian" target="new">
            <li>
              <i class="fab fa-facebook-f" aria-hidden="true" />
            </li>
          </a>

          <a href="https://twitter.com/TheLoftHawaii" target="new">
            <li>
              <i class="fab fa-twitter" aria-hidden="true" />
            </li>
          </a>

          <a
            href="https://foursquare.com/v/the-loft-hawaiian-restaurant/4af5dcd8f964a520f7fd21e3"
            target="new"
          >
            <li>
              <i class="fab fa-foursquare" />
            </li>
          </a>

          <a
            href="https://www.yelp.com/biz/loft-hawaiian-restaurant-torrance?start=40"
            target="new"
          >
            <li>
              <i class="fab fa-yelp" />
            </li>
          </a>
        </ul>

        <div class="copyright">
          © 2018 LTK Hawaii, Inc./TAB Enterprises, LLC All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
