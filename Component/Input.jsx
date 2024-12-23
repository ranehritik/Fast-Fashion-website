
const Input = ({handlechange,value,name,title}) => {
  return (
    <label className="label"> 
    <input onChange={handlechange }  type='radio' value={value} name={name} className='input'/>
    <span  className="checkmark"></span>{title}
   </label>
  )
}

export default Input
