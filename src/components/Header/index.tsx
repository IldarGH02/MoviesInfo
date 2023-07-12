import { NavLink } from 'react-router-dom'

import { routeMain as routeHomePage } from 'pages/Home'
import { routeMain as routeMovieCategory } from 'pages/MovieCategory'
import { routeMain as routeAbout } from 'pages/About'
import { routeMain as routeSearch } from 'pages/Search'

import { Navbar, Nav } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <Navbar.Brand className='header__logo' href='/'>
                        <svg width="185" height="41" viewBox="0 0 185 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="14" r="12" fill="#E59C9C"/>
                        <path d="M21.7627 32L16.6064 15.1982H16.4746C16.6602 18.6162 16.7529 20.8965 16.7529 22.0391V32H12.6953V10.584H18.877L23.9453 26.9609H24.0332L29.4092 10.584H35.5908V32H31.3574V21.8633C31.3574 21.3848 31.3623 20.833 31.3721 20.208C31.3916 19.583 31.46 17.9229 31.5771 15.2275H31.4453L25.9229 32H21.7627ZM60.4346 21.2627C60.4346 24.8076 59.5557 27.5322 57.7979 29.4365C56.04 31.3408 53.5205 32.293 50.2393 32.293C46.958 32.293 44.4385 31.3408 42.6807 29.4365C40.9229 27.5322 40.0439 24.7979 40.0439 21.2334C40.0439 17.6689 40.9229 14.9492 42.6807 13.0742C44.4482 11.1895 46.9775 10.2471 50.2686 10.2471C53.5596 10.2471 56.0742 11.1943 57.8125 13.0889C59.5605 14.9834 60.4346 17.708 60.4346 21.2627ZM44.8047 21.2627C44.8047 23.6553 45.2588 25.457 46.167 26.668C47.0752 27.8789 48.4326 28.4844 50.2393 28.4844C53.8623 28.4844 55.6738 26.0771 55.6738 21.2627C55.6738 16.4385 53.8721 14.0264 50.2686 14.0264C48.4619 14.0264 47.0996 14.6367 46.1816 15.8574C45.2637 17.0684 44.8047 18.8701 44.8047 21.2627ZM77.0898 10.584H81.6748L74.3945 32H69.4434L62.1777 10.584H66.7627L70.791 23.3281C71.0156 24.0801 71.2451 24.959 71.4795 25.9648C71.7236 26.9609 71.875 27.6543 71.9336 28.0449C72.041 27.1465 72.4072 25.5742 73.0322 23.3281L77.0898 10.584ZM84.3848 32V10.584H88.9258V32H84.3848ZM106.65 32H94.3164V10.584H106.65V14.3047H98.8574V19.0068H106.108V22.7275H98.8574V28.25H106.65V32ZM123.774 26.0527C123.774 27.9863 123.076 29.5098 121.68 30.623C120.293 31.7363 118.359 32.293 115.879 32.293C113.594 32.293 111.572 31.8633 109.814 31.0039V26.7852C111.26 27.4297 112.48 27.8838 113.477 28.1475C114.482 28.4111 115.4 28.543 116.23 28.543C117.227 28.543 117.988 28.3525 118.516 27.9717C119.053 27.5908 119.321 27.0244 119.321 26.2725C119.321 25.8525 119.204 25.4814 118.97 25.1592C118.735 24.8271 118.389 24.5098 117.93 24.207C117.48 23.9043 116.558 23.4209 115.161 22.7568C113.853 22.1416 112.871 21.5508 112.217 20.9844C111.562 20.418 111.04 19.7588 110.649 19.0068C110.259 18.2549 110.063 17.376 110.063 16.3701C110.063 14.4756 110.703 12.9863 111.982 11.9023C113.271 10.8184 115.049 10.2764 117.314 10.2764C118.428 10.2764 119.487 10.4082 120.493 10.6719C121.509 10.9355 122.568 11.3066 123.672 11.7852L122.207 15.3154C121.064 14.8467 120.117 14.5195 119.365 14.334C118.623 14.1484 117.891 14.0557 117.168 14.0557C116.309 14.0557 115.649 14.2559 115.19 14.6562C114.731 15.0566 114.502 15.5791 114.502 16.2236C114.502 16.624 114.595 16.9756 114.78 17.2783C114.966 17.5713 115.259 17.8594 115.659 18.1426C116.069 18.416 117.031 18.9141 118.545 19.6367C120.547 20.5938 121.919 21.5557 122.661 22.5225C123.403 23.4795 123.774 24.6562 123.774 26.0527ZM127.114 11.3896C127.114 9.93457 127.925 9.20703 129.546 9.20703C131.167 9.20703 131.978 9.93457 131.978 11.3896C131.978 12.083 131.772 12.625 131.362 13.0156C130.962 13.3965 130.356 13.5869 129.546 13.5869C127.925 13.5869 127.114 12.8545 127.114 11.3896ZM131.772 32H127.305V15.623H131.772V32ZM151.592 32H147.124V22.4346C147.124 21.2529 146.914 20.3691 146.494 19.7832C146.074 19.1875 145.405 18.8896 144.487 18.8896C143.237 18.8896 142.334 19.3096 141.777 20.1494C141.221 20.9795 140.942 22.3613 140.942 24.2949V32H136.475V15.623H139.888L140.488 17.7178H140.737C141.235 16.9268 141.919 16.3311 142.788 15.9307C143.667 15.5205 144.663 15.3154 145.776 15.3154C147.681 15.3154 149.126 15.833 150.112 16.8682C151.099 17.8936 151.592 19.3779 151.592 21.3213V32ZM165.244 18.9775H161.377V32H156.909V18.9775H154.448V16.8242L156.909 15.623V14.4219C156.909 12.5566 157.368 11.1943 158.286 10.335C159.204 9.47559 160.674 9.0459 162.695 9.0459C164.238 9.0459 165.61 9.27539 166.812 9.73438L165.669 13.0156C164.771 12.7324 163.94 12.5908 163.179 12.5908C162.544 12.5908 162.085 12.7812 161.802 13.1621C161.519 13.5332 161.377 14.0117 161.377 14.5977V15.623H165.244V18.9775ZM171.382 23.7822C171.382 25.4033 171.646 26.6289 172.173 27.459C172.71 28.2891 173.579 28.7041 174.78 28.7041C175.972 28.7041 176.826 28.2939 177.344 27.4736C177.871 26.6436 178.135 25.4131 178.135 23.7822C178.135 22.1611 177.871 20.9453 177.344 20.1348C176.816 19.3242 175.952 18.9189 174.751 18.9189C173.56 18.9189 172.7 19.3242 172.173 20.1348C171.646 20.9355 171.382 22.1514 171.382 23.7822ZM182.705 23.7822C182.705 26.4482 182.002 28.5332 180.596 30.0371C179.189 31.541 177.231 32.293 174.722 32.293C173.149 32.293 171.763 31.9512 170.562 31.2676C169.36 30.5742 168.438 29.583 167.793 28.2939C167.148 27.0049 166.826 25.501 166.826 23.7822C166.826 21.1064 167.524 19.0264 168.921 17.542C170.317 16.0576 172.28 15.3154 174.81 15.3154C176.382 15.3154 177.769 15.6572 178.97 16.3408C180.171 17.0244 181.094 18.0059 181.738 19.2852C182.383 20.5645 182.705 22.0635 182.705 23.7822Z" fill="white"/>
                        </svg>
                    </Navbar.Brand>
                    <Nav className='header__nav'>
                        <NavLink to={routeHomePage()} className='header__link'>Главная</NavLink>
                        <NavLink to={routeMovieCategory()} className='header__link'>Фильмы по категории</NavLink>
                        <NavLink to={routeAbout()} className='header__link'>О нас</NavLink>
                        <NavLink to={routeSearch()} className='header__link'>Поиск <BsSearch/></NavLink>
                    </Nav>
                </div>
            </div>
        </header>
    )
}

export default Header