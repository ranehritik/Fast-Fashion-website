import Input from '../../Component/Input'
import './Prize.css'
const Prize = ({handlechange}) => {
  return (
    <div className='prize-container'>
      <h2>Prize</h2>
        <div className="label-contaimer">
          <Input handlechange={handlechange}
          value={499}
          title="499" 
          name="test3"/>
          <Input
          handlechange={handlechange}
          value={1299}
          title="1,299"
          name="test3"/>
          <Input
          handlechange={handlechange}
          value={1399}
          title="1,399"
          name="test3"/>
          <Input
          handlechange={handlechange}
          value={1599}
          title="1,599"
          name="test3"/>
             <Input
          handlechange={handlechange}
          value={1799}
          title="1,799"
          name="test3"/>
             <Input
          handlechange={handlechange}
          value={1999}
          title="1,999"
          name="test3"/>
        </div>
    </div>
  )
}

export default Prize
