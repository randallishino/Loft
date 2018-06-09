import { h, app } from "hyperapp";

export default function TopImg({ state, actions }) {
  return (
    <section class="topimg">
    <div class="container">
    <div class="title">
      <h5>Welcome</h5>

      <h1>{state.globalState.companyInfo.title}</h1>
      </div>
    
      <div class="contact-info">
      <div class="container">
        <div class="call"> Call to place your to-go/catering orders!</div>
        <h2>{state.globalState.companyInfo.phone}</h2>
        <div class="hours">
          Opening Hours <strong>Monday:</strong> CLOSED <strong>Tues-Sat: </strong> 11am - 9pm
          <strong> Sundays:</strong> 11am - 8pm
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

