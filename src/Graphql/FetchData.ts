import { gql } from '@apollo/client';




export type postsProps = {

    blurhash: string;
}

export const FETCH_POST = gql`
{

posts{
id 
    blurhash

}

}



`