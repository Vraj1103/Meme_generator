import Face from '../images/Troll Face.png'

function Header(){
    return(
        <div>
        <header className="header">
        <img src={Face} alt="Meme generator"
        className="header--image"/>
        <h2 className="header--title">Meme generator</h2>
        <h4 className="header--project">By Vraj</h4>
        </header>
  </div>
    )
    
}
export default Header