import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
        <header>
            <div class="container">
            <div class="logo">
            <img src="http://static1.squarespace.com/static/548ddba9e4b0d3ebe89358a3/t/548de8e0e4b0b33049318a25/1504913975173/"></img>
            </div>  
            <nav>
                <a href="#">Menu</a>
                <a href="#">Catering</a>
                <a href="#">Contact Us</a>
                </nav>
                </div>
            </header>
  ) 
}