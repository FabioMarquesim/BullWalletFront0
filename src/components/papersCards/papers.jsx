import api from '../../api/api';
import PaperCard from './paperCard'
import { useQuery } from 'react-query'

function ListPapers() {

    // myPapers eh o id em cache
    const { data: papers, isFetching } = useQuery('myPapers', async () => {
        const response = await api.get('/papers')

        return response.data;
    }, {
        // Se quiser desabilitar o autorefresh
        //refetchOnWindowFocus: false,

        // Tempo de cache 30sec
        staleTime: 1000 * 30,
    })
  
    return (
        isFetching ? console.log("ToDo: Animacao de Loading") :
        (papers?.map((paper) => (
          <PaperCard broker={paper.brokerName} ticker={paper.ticker} amount={paper.amount} qtd={paper.qtd}/>
        )))
    );
  }
  
  export default ListPapers;