import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="colAbout">
            <div className="logo">
                <h2>Avez's Blog</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error iusto, iste quia architecto
                laudantium dignissimos saepe nulla deleniti vitae accusantium fugiat distinctio corrupti sed, aut at?
                Soluta, magnam impedit.</p>
        </div>
        <div className="colSiteMap">
            <div className="logo">
                <h2>Sitemap</h2>
            </div>
            <ul>
                <li>Home</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Contact</li>
                <li>Write</li>
            </ul>
        </div>
        <div className="colSocail">
            <div className="logo">
                <h2>Socials</h2>
            </div>
            <div className="media">
                <ul>
                    <li><a href="#"><i className='bx bxl-linkedin'></i></a></li>
                    <li><a href="#"><i className='bx bxl-github'></i></a></li>
                    <li><a href="#"><i className='bx bxl-instagram'></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer