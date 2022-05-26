import { useQuery, gql } from '@apollo/client'

const GET_DATAS = gql`
query{
    category(input: {title: "all"}){
      name
      products{
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices{
          currency{
            symbol
          }
          amount
        }
      }
    }
  }
`


export const AllHooks = () =>{
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