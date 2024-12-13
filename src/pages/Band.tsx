import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../components/Header'
import BandHeader from '../components/BandHeader'
import BandDescription from '../components/BandDescription'
import DisplayTicket from '../components/DisplayTicket'
import DisplayTotal from '../components/DisplayTotal'
import Billing from '../components/Billing'
import { TicketType } from '../Interfaces'


interface Band {
  name: string;
  date: number;
  description_blurb: string;
  location: string;
  imgUrl: string;
  ticketTypes: TicketType[];
}

function Band(){
  const { bandId } = useParams();
  const [data, setData] = useState<Band>();
  const [total, setTotal] = useState(0);
  const [subTotals, setSubTotals] = useState(new Map());

  const updateSubTotal = (item:string, t:number) => {
    setSubTotals({...subTotals,  [item]: t });
  };

  useEffect(() => {
    const sum = Object.values(subTotals).reduce((acc, value) => acc + value, 0);
    setTotal(sum);
  }, [subTotals]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/band-json/${bandId}.json`);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Header title={data?.name}/>
          <BandHeader date={data?.date} location={data?.location}/>
        </div>
        <div className="col-sm"/>
      </div>
      <div className="row">
        <div key="description" className="col-sm">
          <BandDescription imgUrl={data?.imgUrl} description={data?.description_blurb}/>
        </div>
        <div key="ticket" className="col-sm">
            <h2>Select Tickets</h2>
            {data?.ticketTypes && data?.ticketTypes.map(item => <DisplayTicket item={item} key={item.type} updateSubTotal={updateSubTotal} />) }
             < DisplayTotal total={total} />
             < Billing total={total} />
        </div>
      </div>
    </div>);
}

export default Band;
