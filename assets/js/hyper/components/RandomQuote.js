import { h, app } from "hyperapp";

export default function RandomQuote({ state, actions }) {
  return (
    <section id="random-quote" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), 
        url("http://renatures.com/wp-content/uploads/2016/11/beaches-sea-rainbow-sand-beautiful-mountains-cliffs-islands-beach-hawaii-wallpaper-for-desktop-background-1920x1000.jpg")`}}>
    <div class="container">
    <h1>"Aloha - <br/> Aloha is a value, one of unconditional love. Aloha is the outpouring and receiving of the spirit."</h1>
      </div>
    </section>
  );
}

