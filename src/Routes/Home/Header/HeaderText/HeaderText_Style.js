const sm = {
  container: " h-2/5 order-0 items-center ",
  containerTittle: " text-center text-4xl w-5/6 ",
  containerText: " text-center text-lg w-5/6 "
}
const md = {
  container: " ",
  containerTittle: " md:text-5xl ",
  containerText: " "
}
const lg = {
  container: " lg:items-start lg:w-5/12 lg:h-3/6 lg:order-1 ",
  containerTittle: " lg:text-start lg:text-6xl ",
  containerText: " lg:text-start lg:text-xl "
}
const xl = {
  container: " xl:w-2/6 xl:h-3/6 ",
  containerTittle: "",
  containerText: " xl:text-2xl "
}





function HeaderText_Style() {
  return {
    container: 
      " flex justify-around flex-col " +
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    containerTittle: 
      " text-preto " +
        sm.containerTittle +
        md.containerTittle +
        lg.containerTittle +
        xl.containerTittle,


    containerText: 
      " text-preto " +
        sm.containerText +
        md.containerText +
        lg.containerText +
        xl.containerText ,
  }
}

export default HeaderText_Style;