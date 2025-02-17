import { FaFacebookF } from "react-icons/fa";
import { TopBar} from './../components';
import { Outlet } from "react-router-dom";

/**
  * @function Main
  * @description Funcion que devuele el menu lateral principal y Superior
  * @param No aplica
 */
const Main = () => {
  return (
    <section className='w-1/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
      {/*TopBar section here */}
      <TopBar />
      <div id='main-section' className='grid grid-cols-1 gap-4 w-full h-screen'>
          {/*Here grid layout */}
          <Outlet />
      </div>
    </section>
  )
}
export default Main;
