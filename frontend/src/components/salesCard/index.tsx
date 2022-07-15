import axios from "axios"
import NotificationButton from "../notificationsButton"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'
import { useEffect, useState } from "react"
import { BASE_URL } from "../../ultil/request"
import { Sale } from "../../models/sale"

function SalesCard() {
  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate()-365));
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState <Sale[]>([]);

  useEffect(()=>{
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);
    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then(res=> {
        setSales(res.data.content);
      })
  }, [minDate, maxDate]);

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
                {
                  sales.map(sale => {
                    return (
                      <tr key={sale.id}>
                      <td className="show-id-visit-sales">#{sale.id}</td>
                      <td className="show-data">{new Date (sale.date).toLocaleDateString()}</td>
                      <td>{sale.sellerName}</td>
                      <td className="show-id-visit-sales">#{sale.visited}</td>
                      <td className="show-id-visit-sales">#{sale.deals}</td>
                      <td>R$ {sale.amount.toFixed(2)}</td>
                      <td>
                        <div className="meta-read-btn-container">
                        <NotificationButton saleId={sale.id}/>
                        </div>
                      </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
      </div>
  )
}

export default SalesCard
