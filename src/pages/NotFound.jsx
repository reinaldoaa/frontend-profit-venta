//IMAGES
import PageNotFound from './../images/enconstruccion.jpg'

function NotFound() {
  return (
    <div className='h-[100vh] py-10 px-10 flex justify-center'>
      <div className='w-[65vw] rounded overflow-hidden shadow-2xl justify-center items-center gap-8 px-2' >
        {/* PAGE NOT FOUND className='' */}
        <div className='font-Oswald items-center justify-center py-4 px-4 '>
          LA PAGINA NO EXISTE
          <img src={PageNotFound} alt='PAGE NOT FOUND' />
        </div>
      </div>
    </div>
  )
}

export default NotFound;