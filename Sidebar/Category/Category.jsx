import Input from '../../Component/Input'
import "./Category.css"

const Category = ({handlechange}) => {
  return (
    <div className='category-container'>
        <h2>Category</h2>
        <div className="label-contaimer">
          <Input
          handlechange={handlechange}
          value="tee"
          title="T-Shirt"
          name="test"/>
          <Input
          handlechange={handlechange}
          value="shirt"
          title="Shirt"
          name="test"/>
          <Input   handlechange={handlechange}
          value="polo-t"
          title="Polo T-Shirt"
          name="test"/>
          <Input   handlechange={handlechange}
          value="jacket"
          title="Jacket"
          name="test"/>
        </div>
      </div>
  )
}
export default Category
