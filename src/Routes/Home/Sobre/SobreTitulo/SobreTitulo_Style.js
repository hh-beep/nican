const sm = {
  container: " items-center m-16 ",
  containerTittle: " text-center text-xl ",
}
const md = {
  container: "  ",
  containerTittle: " md:text-2xl ",
}
const lg = {
  container: " lg:items-start lg:m-0 ",
  containerTittle: " lg:text-start lg:text:3xl ",
}
const xl = {
  container: "",
  containerTittle: " xl:text-4xl ",
}





function SobreTitulo_Style() {
  return {
    container: 
      " w-5/6 " + 
        sm.container +
        md.container +
        lg.container +
        xl.container ,
      

    containerTittle: 
      " text-black " +
        sm.containerTittle +
        md.containerTittle +
        lg.containerTittle +
        xl.containerTittle ,
  }
}

export default SobreTitulo_Style;