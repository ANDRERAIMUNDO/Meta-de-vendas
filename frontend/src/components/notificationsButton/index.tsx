import axios from 'axios'
import vecrtor from '../../assets/Vector.svg'
import { BASE_URL } from '../../ultil/request'
import './styles.css'
import {toast} from 'react-toastify'

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
      .then(res=> {
        toast.info("SMS enviado")
      })
}

function NotificationButton({saleId}: Props) {
    return(
        <div className="meta-read-btn" onClick={()=> handleClick(saleId)}>
          <img src={vecrtor} alt="Vector"/>
        </div>
    )
}
export default NotificationButton