import Button from '../Component/Button'
import "./Recomm.css"
const Recomm = ({handleclick}) => {
  return (
    <div className='recom-container'>
      {/* <h2>Aesthetic </h2> */}
      <div className="button-container">
        <Button  handleclick={handleclick} value="chain" title="Chain"/>
        <Button  handleclick={handleclick} value="cap" title="Cap"/>
        <Button  handleclick={handleclick} value="sunglass" title="Sunglass"/>
        <Button  handleclick={handleclick} value="bracelet" title="Bracelet"/>  
        <Button  handleclick={handleclick} value="bag" title="Bag"/>  
      </div>
    </div>
  )
}

export default Recomm;
