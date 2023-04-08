import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom'

const Select_Vehicle = ({setI}) => {
   const vehicleList = [
      {
        type: "Car",
        company:"Audi",
        VehicleNo: "MP20 AJ1234",
      },
      {
        type: "Bike",
        company:"Hero",
        VehicleNo: "MP20 AJ1234",
      },
      {
        type: "Truck",
        company:"Suzuki",
        VehicleNo: "MP20 AJ1234",
      },
      {
        type: "Bike",
        company:"Renault",
        VehicleNo: "MP20 AJ1234",
      },
      {
        type: "car",
        company:"Mercedes",
        VehicleNo: "MP20 AJ1234",
      },
    ];
   return (
      <DropdownButton id="dropdown-basic-button" size="sm" className="text-center" title="Select Vehicle">
      {
         vehicleList.map((element,index)=>{
            return <Dropdown.Item href="#/action-1" onClick={()=>setI(index)} >{element.VehicleNo}</Dropdown.Item>
         })
      }
      <Dropdown.Item ><Link to='/'>Add Another Vehicle</Link></Dropdown.Item>
    </DropdownButton>
    );
}

export default Select_Vehicle
