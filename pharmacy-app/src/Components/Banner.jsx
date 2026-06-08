
const Banner = ({title, bgImage}) => {
  return (
    <div className=' h-[50vh] mt-20 flex justify-center items-center bg-center bg-cover relative '
     style={{ backgroundImage : `url(${bgImage})`}}>
      <h1 className='text-6xl text-black bg-white p-4 rounded-full font-bold z-10 dark:bg-gray-800  dark:text-white'   > {title}</h1>
 <div className='bg-black/20 absolute inset-0 '>

 </div>
 
    </div>
  )
}

export default Banner
