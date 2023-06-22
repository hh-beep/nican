const sm = {
  containerSection: " w-full h-full ",
  containerSectionList: " h-full w-11/12 ",
}
const md = {
  containerSection: " md:h-full ",
  containerSectionList: " md:h-full md:w-11/12 ",
}
const lg = {
  containerSection:  " lg:w-10/12 lg:h-5/6 lg:rounded-2xl ",
  containerSectionList: " lg:flex-col lg:h-5/6 lg:w-full ",
}
const xl = {
  containerSection: " xl:w-11/12 ",
  containerSectionList: " xl:h-5/6 xl:w-11/12 ",
}





function Sobre_Style() {
  return {
    container: 
      " w-screen h-screen bg-black overflow-x-hidden flex justify-around items-center ",


    containerSection: 
      " bg-white flex justify-around items-center flex-col " +
        sm.containerSection +
        md.containerSection +
        lg.containerSection +
        xl.containerSection ,


    containerSectionList: 
      " flex justify-around items-center flex-wrap flex-row  " +
        sm.containerSectionList +
        md.containerSectionList +
        lg.containerSectionList +
        xl.containerSectionList ,
  }
}

export default Sobre_Style;