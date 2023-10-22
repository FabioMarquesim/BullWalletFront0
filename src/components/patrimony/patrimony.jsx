import api from '../../api/api';
import { useQuery } from 'react-query'
import './style.css'

function ShowPatrimony() {

    // myBalance eh o id em cache
    const { data: allBalance, isFetching } = useQuery('myBalance', async () => {
        const response = await api.get('/balance')
        return response.data;
    }, {
        // Se quiser desabilitar o autorefresh
        //refetchOnWindowFocus: false,

        // Tempo de cache 30sec
        staleTime: 1000 * 30,
    })

    return (
        <div className="patrimonyData">
            <div id="totalAvailable">
                <h2>Saldo disponível</h2>
                <p><span>R$ </span>{ isFetching ? '0.00' : (allBalance[0]['totalBalance']) }</p>
            </div>
            <div id="totalInvested" >
                <h2>Total investido</h2>
                <p><span>R$ </span>{ isFetching ? '0.00' : (allBalance[0]['totalBalanceInvested']) }</p>
            </div>
        </div>   
    );
  }
  
  export default ShowPatrimony;