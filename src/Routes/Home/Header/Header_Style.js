const sm = " w-full h-5/6 flex-col "
const md = " md:h-5/6 "
const lg = " lg:w-5/6 lg:h-5/6 lg:flex-row "
const xl = " xl:w-5/6 xl:h-4/5 "





function Header_Style() {
  return {
    container: 
      " w-screen h-screen flex justify-around items-end overflow-x-hidden ",


    containerBox: 
      " w-full h-full bg-azul lg:bg-branco flex justify-around items-end ",


    containerBoxSection: 
      " flex bg-azul justify-around items-center " +
        sm + 
        md + 
        lg + 
        xl ,
  }
}

export default Header_Style;