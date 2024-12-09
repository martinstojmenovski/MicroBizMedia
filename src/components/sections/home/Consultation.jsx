import { Link } from 'react-router-dom';
import emailUsIcon from './/icon_images/email_us_icon.png'
const Consultation = () => {
  // To open the lightbox change the value of the "toggler" prop.
  return (
    <>
      <section id='funfact-section' className=' bg-colorBackground'>
        <div className='mx-auto  px-5 '>
        <div
              className='jos hero-img overflow-hidden rounded-[40px]  bg-gradient-to-t from-colorBackground to-colorPurple  max-w-[1024px]
              flex flex-col-reverse mx-auto lg:flex-row mb-20 '
            >
            <div className='flex flex-col justify-center   px-8 py-20 lg:pl-24 lg:max-w-[50%]'>
                <h2>Our consultations are always free</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base '>Give us an email and one of our agents will contact you as soon as we can</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Free Consultation &#x27a4;  </Link>
              </div>
            
            <div className='  pt-20  lg:pt-0 flex justify-center items-center'>
            <img 
                src={emailUsIcon}
                alt='hero-dashboard'
                className='  size-1/3'
              />
            </div>
            </div>
            <div
              className='jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 
              flex flex-col-reverse mx-auto max-w-[1024px] lg:flex-row '
            >

            {/* FunFact Left Block */}
            <div className='flex flex-col justify-center flex-1 bg-colorBackground px-4 py-10 lg:pl-16'>
                <h2>Our Story</h2>
                <p className='lg:mt-6 lg:mb-10 mt-4 mb-14 text-base lg:max-w-[70%]'>Read more about us and what inspired us to do what we do for you</p>
                <Link className='button inline-block lg:self-start bg-colorWhite text-colorBackground rounded-md'>Learn More &#x27a4;  </Link>
              </div>

            <img
                src='assets/img/th-1/funfact-image.jpg'
                alt='hero-dashboard'
                className='flex-1 pt-4 lg:pr-20 bg-colorBackground  object-cover object-center  max-h-[340px] lg:pt-0 w-full'
              />
            </div>
            
        </div>
      </section>
    </>
  );
};

export default Consultation;
