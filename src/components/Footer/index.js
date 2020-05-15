import React from 'react'
import { FiGithub, FiLink2, FiLinkedin } from 'react-icons/fi'
import './styles.css'

export default function Footer() {

    return (

        <div className="footer">

            <script data-ad-client="ca-pub-1184696695935150" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            <div className="links">

                <div className="link marble-solid">
                    <FiLink2></FiLink2>
                    <a href="https://pokeapi.co/" target="new">
                        Made with PokéAPI
                     </a>
                </div>

                <div className="link marble-solid">
                    <FiGithub></FiGithub>
                    <a href="https://github.com/doravantebeto" target="new">
                        Github
                     </a>
                </div>

                <div className="link marble-solid">
                    <FiLinkedin></FiLinkedin>
                    <a href="https://www.linkedin.com/in/roberto-araujo-da-costa-7a3342148/" target="new">
                        Linkedin
                    </a>
                </div>


            </div>

        </div>

    )

}