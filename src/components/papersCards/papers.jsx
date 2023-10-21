import PaperCard from './paperCard'
import { useFetch } from '../../hooks/useFetch';

function ListPapers() {

    // Consulta API utilizando hook useFetch
    const { data:papers, isFetching } = useFetch('/papers');
  
    return (
        isFetching ? console.log("ToDo: Animacao de Loading") :
        (papers?.map((paper) => (
          <PaperCard broker={paper.broker} ticker={paper.ticker} amount={paper.amount} qtd={paper.qtd}/>
        )))
    );
  }
  
  export default ListPapers;