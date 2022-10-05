let menuOpenButton = document.getElementById('menu-opener');
let menuCloseButton = document.getElementById('menu-closer');
let navResponsive = document.querySelector('.mobile-menu-responsive');
let navResponsiveContainer = document.querySelector('.header-right--mobile-container');

const openNavbar = () =>{
  navResponsiveContainer.style["zIndex"] = '100'
  navResponsiveContainer.style["opacity"] = '1'
  navResponsive.style["marginLeft"] = "0px"
  document.body.style["overflow"] = 'hidden';
}

const closeNavbar = () =>{
  navResponsive.style["animation"] = "closeNavbar .3s ease"
  navResponsiveContainer.style["animation"] = "closeNavbarBackround .3s ease"
  console.log('asd1')
  navResponsiveContainer.style["opacity"] = '0'
  const timer = setTimeout(()=>{
    console.log('asd2')
    navResponsive.style["animation"] = "none"
    navResponsive.style["marginLeft"] = "-250px"
    navResponsiveContainer.style["zIndex"] = '-10'
    document.body.style.overflow ='visible';
  },200)
}

menuOpenButton.addEventListener('click', () => openNavbar())
menuCloseButton.addEventListener('click', () => closeNavbar())