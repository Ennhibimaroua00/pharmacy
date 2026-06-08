
function Header(props){
    return(
     <div className="w-fit mx-auto">
                <h2 className=" md:text-6xl  text-[3rem] font-bold">
                 <span className="text-black-500 ">{props.Highlight}</span>
                </h2> 
                <div className="w-30 h-1 bg-green-500 md:mt-6 mt-3 ml-auto"></div>  
             </div>   
              );

}
export default Header;
