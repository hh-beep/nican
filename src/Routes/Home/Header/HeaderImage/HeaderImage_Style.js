const sm = " w-full h-3/6 order-1 "
const md = " md:w-5/6 "
const lg = " lg:w-7/12 lg:order-0 "
const xl = " xl:w-3/6"





function HeaderImage_Style() {
  return {
    container: 
      " flex justify-around items-center " +
        sm +
        md +
        lg +
        xl ,


    containerImage: 
      " w-auto md:h-full lg:w-full lg:h-auto ",
  }
}

export default HeaderImage_Style;