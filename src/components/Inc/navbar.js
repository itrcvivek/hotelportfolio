import { useRef } from "react";
import {  FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { motion } from "framer-motion"

// import LogoIcon from "../../../src/icons/hotel.png"
import Logo from "../../Assets/logo.jpeg"
import {useSpring, animated } from '@react-spring/web'

function Navbar() {
	const navRef = useRef();

	const springs = useSpring({
		from: { x: -100 },
		to: { x: 0 },
	  })

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	
	return (
		<animated.header style={{...springs}}>
			{/* <h3>Logo</h3> */}
			<Link to="/"><img src={Logo} alt="logo" style={{height:"50px",width:"50px"}}/></Link>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/pricing">Pricing</Link>
				<Link to="/AboutUs">About Us</Link>
				<Link to="/ContactUs">Contact Us</Link>
				<Link to="/ContactUs" className="demo">Demo<ArrowOutwardIcon style={{fontSize:"14px",marginLeft:"5px"}}/></Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<CiMenuFries />
			</button>
		</animated.header>
	);
}

export default Navbar;
