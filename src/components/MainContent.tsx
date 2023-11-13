function MainContent() {
  return (
    <div className='p-6 sm:p-8 font-mont sm:w-1/2'>
      <div className='flex flex-col-reverse'>
        <h1 className='font-bold font-fraunces text-[32px] leading-[32px] mb-4 sm:mb-6 text-[#1C232B]'>
          Gabrielle Essence Eau De Parfum
        </h1>
        <h2 className='mb-3 sm:mb-5 text-[#6C7289] tracking-[5px] font-medium text-xs leading-[15px]'>
          PERFUME
        </h2>
      </div>
      <p className='text-[#6C7289] text-sm leading-[23px] font-medium mb-6 sm:mb-[29px]'>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
        for the House of CHANEL.
      </p>
      <div className='flex items-center gap-[19px] mb-5 sm:mb-[30px]'>
        <p className='text-[#3D8168] font-fraunces text-[32px] leading-[32px] font-bold'>$149.99</p>
        <p className='text-[#6C7289] line-through font-medium text-[13px] leading-[23px]'>
          $169.99
        </p>
      </div>
      <button className='bg-[#3D8168] transition-colors hover:bg-[#234b3d] w-full gap-[11.61px] h-12 text-white rounded-lg flex justify-center items-center'>
        <img src='/images/icon-cart.svg' alt='cart icon' />
        <span className='font-bold text-sm'>Add to Cart</span>
      </button>
    </div>
  );
}

export default MainContent;
