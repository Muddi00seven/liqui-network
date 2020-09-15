import { Divider } from '@material-ui/core'
import React from 'react'
import './footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import discrod from './discord.svg'
// import { faDiscord } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <body>
        <div className="main-div">
        <div class="container">

            <div className="section">   

                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>

            </div>
            {/* <div class="centered">Connect With The Community:</div> */}
            <a href="https://t.me/liquinetwork" style={{textDecoration: 'none'}} target="_blank">   <div class="centered1"> <i size="9x" class="fab fa-telegram-plane"></i> Telegram </div> </a>

        <a href="https://discord.com/invite/GmZpTP3" style={{textDecoration: 'none'}} target="_blank">   <div class="centered2"><i  size="9x"  class="fab fa-discord"/> Discord</div> </a>
           <a href="https://twitter.com/liquinetwork" style={{textDecoration: 'none'}} target="_blank"> <div class="centered3"><i size="9x"  class="fab fa-twitter" /> Twitter </div></a>
           <a  style={{textDecoration: 'none'}} target="_blank"> <div class="centered4"><i size="9x"  class="fab fa-medium" /> Medium </div></a>

</div>
{/* <h1>dsasd</h1> <br/><h1>dsasd</h1> <br/>
            <h1>dsasd</h1> <br/> */}
        </div>

        </body>
    )
}

export default Footer
