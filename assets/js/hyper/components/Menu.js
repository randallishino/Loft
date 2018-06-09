import { h, app } from "hyperapp";

export default function Menu({ state, actions }) {
  
  return (
    <section id="menu">
      <div class="container">
        <h5 class="menu-title">Specialities</h5>
        <h2>Our Signature Items</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
              <div class="box-circle">{state.globalState.menu[0].price}</div>

              </div>
              <span class="title">{state.globalState.menu[0].title}</span>
              <p class="details">{state.globalState.menu[0].description}</p>
            </div>
          </div>
          <div class="col-md-4">
          <div class="box">
              <div class="box-img2">
              <div class="box-circle">{state.globalState.menu[1].price}</div>

              </div>
              <span class="title">{state.globalState.menu[1].title}</span>
              <p class="details">{state.globalState.menu[1].description}</p>
            </div>

          </div>
          <div class="col-md-4">
          <div class="box">
          <div class="box-img3">
          <div class="box-circle">{state.globalState.menu[2].price}</div>

          </div>
          <span class="title">{state.globalState.menu[2].title}</span>
          <p class="details">{state.globalState.menu[2].description}</p>
        </div>

          </div>
        </div>
        <a href="#"> View Full Menu</a>
      </div>
    </section>
  );
}
