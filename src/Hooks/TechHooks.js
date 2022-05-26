import { useQuery, gql } from '@apollo/client'

const GET_DATAS = gql`
query{
  category(input: {title: "tech"}){
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


export const TechHooks = () =>{
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