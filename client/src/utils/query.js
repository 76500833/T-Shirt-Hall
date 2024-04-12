import {gql} from '@apollo/client'
const GET_SHIRTS = gql`
  query GetShirts {
    shirts {
      _id
      name
      description
      image
      
    }
  }
`;
export { GET_SHIRTS };