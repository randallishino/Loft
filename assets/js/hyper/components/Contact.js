import { h, app } from "hyperapp";

export default function Contact({ state, actions }) {
  return (
    <section id="contact">
      <div class="container">
        <h5 class="title">Contact Us</h5>
        <h2 />

        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="city">{state.globalState.companyInfo.location}</div>
              <h6 class="address">
                2210 W. Artesia Blvd.<br />
                Torrance, CA 90504
              </h6>
              <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10576.559788904038!2d-118.31682577699296!3d33.874024744189555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58c9874c7bacbe06!2sThe+Loft!5e0!3m2!1sen!2sus!4v1527918947706" width="450" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-md-6">
            <h6> <strong>Phone</strong>:</h6>
            <div class="title">
            310-217-1000<br/>
            </div>
              <div class="hours">
            <h6> <strong>Opening Hours</strong>:</h6>
            <p class="times"> <strong>Monday</strong>: Closed<br/> <strong>Tues-Sat</strong>: 11am - 9pm<br/> <strong>Sundays</strong>: 11am - 8pm</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
