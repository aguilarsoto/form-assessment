import { PrettyDollar } from '../Utils'
import { TicketType } from '../Interfaces'

interface Props {
  item: TicketType;
  updateSubTotal: (item:string, total: number) => void;
}

function DisplayTicket({item, updateSubTotal}: Props) {
  const handleChange = (event:any) => {
    const newTotal = event.target.value*item.cost;
    updateSubTotal(item.type, newTotal);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <p>{item.type}</p>
          <p>{item.description}</p>
          <p> $ {PrettyDollar(item.cost)} </p>
        </div>
        <div className="col-sm">
          <input type="number" id={item.type} className="form-control" min="0" onChange={handleChange} />
        </div>
      </div>
    </>
  );
}


export default DisplayTicket

