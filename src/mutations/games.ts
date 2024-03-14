import { gql } from "../__generated__";

export const CREATE_GAME = gql(`
    mutation CreateGame($game: AddGameInput!) {
        addGame(game: $game) {
            id
            title
            platform
        }
    }
`);

export const DELETE_GAME = gql(`
    mutation DeleteGame($id: ID!) {
        deleteGame(id: $id) {
            id
            title
            platform
        }
    }
`);
