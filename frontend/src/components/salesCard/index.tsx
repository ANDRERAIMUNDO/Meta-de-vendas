import NotificationButton from "../notificationsButton"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'
import { useState } from "react"

function SalesCard() {
  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate()-365));
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return(
    <div className="meta-card">
          <h2 className="meta-sales-tittle">Vendas</h2>
          <div>
            <div className="meta-form-control-container">
              <DatePicker
                selected = {minDate}
                onChange={(date: Date)=> setMinDate(date)}
                className="meta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="meta-form-control-container">
             <DatePicker
                selected = {maxDate}
                onChange={(date: Date)=> setMaxDate(date)}
                className="meta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div>
            <table className="meta-sales-table">
              <thead>
                <tr>
                  <th className="show-id-visit-sales">ID</th>
                  <th className="show-data">Data</th>
                  <th>Vendendor</th>
                  <th className="show-id-visit-sales">Visitas</th>
                  <th className="show-id-visit-sales">Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="show-id-visit-sales">#333</td>
                  <td className="show-data">00/00/0000</td>
                  <td>Anakin</td>
                  <td className="show-id-visit-sales">#33</td>
                  <td className="show-id-visit-sales">#12</td>
                  <td>R$ 553000.00</td>
                  <td>
                    <div className="meta-read-btn-container">
                    <NotificationButton/>
                    </div>
                  </td>
                </tr>
        
                <tr>
                  <td className="show-id-visit-sales">#333</td>
                  <td className="show-data">00/00/0000</td>
                  <td>Anakin</td>
                  <td className="show-id-visit-sales">#33</td>
                  <td className="show-id-visit-sales">#12</td>
                  <td>R$ 553000.00</td>
                  <td>
                    <div className="meta-read-btn-container">
                      <NotificationButton/>
                    </div>
                  </td>
                </tr>
               
                <tr>
                  <td className="show-id-visit-sales">#333</td>
                  <td className="show-data">00/00/0000</td>
                  <td>Anakin</td>
                  <td className="show-id-visit-sales">#33</td>
                  <td className="show-id-visit-sales">#12</td>
                  <td>R$ 553000.00</td>
                  <td>
                    <div className="meta-read-btn-container">
                    <NotificationButton/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  )
}

export default SalesCard
