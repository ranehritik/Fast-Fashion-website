import Input from '../../Component/Input'
import "./Colour.css"
const Colour = ({handlechange}) => {
  return (
    <div className='colour-container'>
      <h2>Colour</h2>
      <div className="label-contaimer">
          <Input  handlechange={handlechange}
          value="black"
          title="Black" 
          name="test2"/>
          <Input handlechange={handlechange}
          value="blue"
          title="Blue" 
          name="test2"/>
          <Input handlechange={handlechange}
          value="green"
          title="Green" 
          name="test2"/>
          <Input handlechange={handlechange}
          value="brown"
          title="Brown" 
          name="test2"/>
        </div>
    </div>
  )
}

export default Colour
