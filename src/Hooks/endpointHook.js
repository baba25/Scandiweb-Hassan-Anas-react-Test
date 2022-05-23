import { useQuery, gql } from '@apollo/client'

const GET_DATAS = gql`
query {
    categories{
      name
      products{
        id
      }
    }
  }
`


export const EndpointHook = () =>{
    const {error, loading, data} = useQuery(GET_DATAS, {
        variables: {
            code: `BR`
        }
    });

    return{
        error,
        loading,
        data
    };
}