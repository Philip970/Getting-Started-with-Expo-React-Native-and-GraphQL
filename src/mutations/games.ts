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
