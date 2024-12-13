import { Link } from "react-router-dom";

import Header from "../components/Header"
import {BAND_NAMES} from '../Constants'

function Index(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Header title="List Of Bands"/>
        </div>
        <div className="col-sm"/>
      </div>
      <div className="row">
        <ul className="list-group">
        {
          BAND_NAMES.map(([item, key]) => <li key={key} className="list-group-item"><Link to={`/bands/${key}`}>{item}</Link></li>)
        }
        </ul>
      </div>
    </div>
  );

}

export default Index;
