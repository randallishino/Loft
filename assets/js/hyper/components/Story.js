import { h, app } from "hyperapp";

export default function Story({ state, actions }) {
  return (
    <section id="story">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="story-title"> Our Story </h5>
            <h2>The Loft's Island Roots</h2>
            <p>
              It was tough being a kid from the mainland spending summers on the
              island of Oahu. My aunties, uncles and cousins were always teasing
              me, my brothers and sister about how funny we talked. Being a
              “ko-tonk” in Hawaii wasn’t easy but I got to eat delicious local
              Hawaiian foods. My fondest memories are of chasing the manapua
              truck through Waipahu, eating crackseed from GEM, and of course,
              shaved ice. The best of times were spent with my cousins at our
              beach house in Punaluu – eating saimin at midnight, gambling with
              the aunties, picking ogo with Mom and Dad at Ewa beach and
              watching Kikaida on TV. I’ve always dreamt of running a restaurant
              and when the time came, I thought back to those summers in
              Punaluu. My hope is to bring the flavors and memories (minus the
              mosquitoes) of those Hawaiian summers to the mainland. I hope you
              enjoy our food – a little Hawaii and a little California –
              blending the best of both great places. Mahalo and enjoy . . .
            </p>
            <div class="quote"> <strong>Tad Kawasaki</strong> </div>
            <a href="#" class="btn">
              Reserve{" "}
            </a>
          </div>

          <div class="col-md-6">
            <div class="image">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
