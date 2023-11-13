import MainContent from './MainContent';

function Body() {
  return (
    <div className='bg-white max-w-[600px] rounded-[10px] overflow-hidden sm:flex'>
      <img className='sm:hidden' src='/images/image-product-mobile.jpg' alt='parfume' />
      <div className='h-full sm:w-1/2'>
        <img className='hidden sm:block ' src='/images/image-product-desktop.jpg' alt='parfume' />
      </div>
      <MainContent />
    </div>
  );
}

export default Body;
