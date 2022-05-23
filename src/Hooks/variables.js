import { useQuery, gql } from '@apollo/client'

const GET_VARAS = gql`
query GetChar($name: String!){
    product(filter: { name: $name}){
      name
      description
    }
    }
`

export const Varas = (id) =>{
    const [getMol, {error, loading, data}] = useQuery(GET_VARAS, {
    });

    return{
        getMol,
        error,
        loading,
        data
    };
}