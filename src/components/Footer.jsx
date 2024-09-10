import Nav from "./Nav"


function Footer(){
    return(
        <footer>
            {/* <nav aria-label="Footer Navigation" role="navigation">
                <ul class="footer-nav">
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">On The Street</a></li>
                    <li><a href="#">The Catwalk</a></li>
                    <li><a href="#">AdWatch</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tips</a></li>
                </ul>
            </nav> */}
            <Nav />
            <p class="copyright">&copy; 2013 Valet Industries. Inc</p>
        </footer>
    )
}

export default Footer