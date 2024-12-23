import Category from './Category/Category'
import Prize from './Prize/Prize'
import Colour from './Colour/Colour'
import "./Sidebar.css"

const Sidebar = ({handlechange }) => {
  return (
      <>
        <section className='sidebar-container'>
          <div className="icon-container"><img src='./src/assets/logo.png' className='brand-icon' alt='#' /></div>
          <span className='line'></span>
          <Category handlechange={handlechange}/>
          <Prize  handlechange={handlechange}/>
          <Colour handlechange={handlechange}/>
        </section>
      </>
  )
}
export default Sidebar
