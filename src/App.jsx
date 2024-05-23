import NavbarComp from './component/navbarComp';
import HomeComp from './component/homeComp';
import AboutComp from './component/aboutComp';
import ServiceComp from './component/serviceComp';
import FaqComp from './component/faqComp';
import ContactComp from './component/contactComp';
import FooterComp from './component/footerComp';

function App() {
  return (
    <div className='w-body'>
      <NavbarComp />
      <HomeComp />
      <AboutComp />
      <ServiceComp />
      <FaqComp />
      <ContactComp />
      <FooterComp />
      
    </div>
  );
}

export default App;