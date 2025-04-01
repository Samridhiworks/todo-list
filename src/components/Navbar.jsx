import React, { useEffect, useRef } from 'react';
import logo from '../Assets/logo-new.png';
import cart from '../Assets/cart_icon.png';
import { useSelector } from 'react-redux';
import{Link} from 'react-router-dom';

const Navbar = () => {
   const cartItems = useSelector((state) => state.cart);
   const navRef = useRef(null);
   const logoRef = useRef(null);
   const listRef = useRef(null);
   const iconRef = useRef(null)


   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 40) {
            navRef.current.style.backgroundColor = 'rgba(0,0,0,0.8)';
            navRef.current.style.height = '80px';
            logoRef.current.style.display = 'none';
            listRef.current.style.transform = 'translateY(-70px)'
            listRef.current.style.color = "#fff";
            iconRef.current.style.display ="none"
         } else {
            navRef.current.style.backgroundColor = 'transparent';
            navRef.current.style.height = 'auto';
            logoRef.current.style.display = 'block';
            listRef.current.style.transform = 'translateY(0px)'
              listRef.current.style.color = "#000"
              iconRef.current.style.display = "flex"
         }
      };

      window.addEventListener('scroll', handleScroll);

   
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header ref={navRef} style={{ transition: 'all 0.3s ease', height: 'auto' }}>
         <nav>
            <div className="container-fluid" id="navbars">
               <div className="container">
                  <div  className="logo d-flex justify-content-center flex-wrap p-5">
                     <img src={logo} alt='' ref={logoRef}/>
                  </div>
                  <div className="list-items">
                     <div className="all-items">
                        <ul className='d-flex justify-content-center flex-wrap' ref={listRef}>
                           <li>HOME</li>
                           <li>COLLECTIONS
                              <span className='sale rounded-5 text-white'>sale</span>
                           </li>
                           <li>SHOP</li>
                           <li>ACCESSORIES</li>
                           <li>BLOG</li>
                           <li>THEME FAQS</li>
                           <li>BRANDS</li>
                           <li className='d-flex'> <Link to={'/cart'}>CART</Link>
                              <span className='carts'>{cartItems.length}</span>
                              <img src={cart} alt='cart' ref={iconRef} />
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
