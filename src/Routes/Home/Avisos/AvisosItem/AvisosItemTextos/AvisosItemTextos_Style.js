const sm = {
  container: " w-6/12 h-full ",
  containerSection: " h-full ",
  containerSectionTittle: " text-xl ",
  containerSectionDate: " hidden ",
  containerBox: "",
  containerBoxResume: " hidden  ",
}
const md = {
  container: "",
  containerSection: " md:h-3/6 ",
  containerSectionTittle: "",
  containerSectionDate: "",
  containerBox: " md:h-3/6 ",
  containerBoxResume: " md:flex md:text-md ",
}
const lg = {
  container: "",
  containerSection: "",
  containerSectionTittle: " xl:text-2xl ",
  containerSectionDate: " lg:flex ",
  containerBox: "",
  containerBoxResume: "",
}
const xl = {
  container: " xl:h-full  ",
  containerSection: "  ",
  containerSectionTittle: " xl:text-3xl ",
  containerSectionDate: "",
  containerBox: "  ",
  containerBoxResume: " text-lg ",
}





function AvisosItemTextos_Style() {
  return {
    container: 
      " flex justify-around items-start flex-col " +
        sm.container +
        md.container +
        lg.container +
        xl.container ,


    containerSection:
      " flex justify-around items-start flex-col " +
        sm.containerSection +
        md.containerSection +
        lg.containerSection +
        xl.containerSection ,
    containerSectionTittle: 
      " text-preto " +
        sm.containerSectionTittle +
        md.containerSectionTittle +
        lg.containerSectionTittle +
        xl.containerSectionTittle ,
    containerSectionDate: 
      " text-preto " +
        sm.containerSectionDate +
        md.containerSectionDate +
        lg.containerSectionDate +
        xl.containerSectionDate ,


    containerBox: 
      " flex justify-around items-center " +
        sm.containerBox +
        md.containerBox +
        lg.containerBox +
        xl.containerBox ,
    containerBoxResume: 
      " text-preto  " +
        sm.containerBoxResume +
        md.containerBoxResume +
        lg.containerBoxResume +
        xl.containerBoxResume ,
  }
}

export default AvisosItemTextos_Style;