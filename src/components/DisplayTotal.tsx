import { PrettyDollar } from '../Utils'

interface Props {
  total: number;
}

function DisplayTotal({total}: Props) {

  return (
    <>
     <div className="row">
       <div className="col-sm">
       Total:
       </div>
       <div className="col-sm">
	 $ {PrettyDollar(total)}
       </div>
     </div>
    </>
  );
}


export default DisplayTotal

