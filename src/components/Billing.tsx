import Form from 'react-bootstrap/Form';

interface Props {
  total: number;
}

function Billing({total}: Props) {

  return (
    <>
     <div className="row  p-3">
       <div className="col-sm">
         <Form.Control type="text" placeholder="First Name" />
       </div>
       <div className="col-sm">
         <Form.Control type="text" placeholder="Last Name" />
       </div>
     </div>
     <div className="row p-3">
       <div className="col-sm">
         <Form.Control type="text" placeholder="Address" />
       </div>
     </div>
     <div className="row p-3">
       <div className="col-sm">
         <b>Payment Details</b>
       </div>
     </div>
     <div className="row p-3">
       <div className="col-sm">
         <Form.Control type="text" placeholder="0000 0000 0000 0000" />
       </div>
     </div>

     <div className="row p-3">
       <div className="col-sm">
         <Form.Control type="text" placeholder="MM / YY" />
       </div>
       <div className="col-sm">
         <Form.Control type="text" placeholder="CVV" />
       </div>
     </div>
     <div className="row p-3">
       <div className="col-sm">
         <Form.Control type="submit" value="Get Tickets" onClick={() => {console.log(`place order for total ${total}`)}} />
       </div>
     </div>



    </>
  );
}


export default Billing

