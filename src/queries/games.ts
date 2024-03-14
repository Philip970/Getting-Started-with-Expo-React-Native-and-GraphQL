import { gql } from "../__generated__";

export const GET_GAMES = gql(`
    query getGames {
        games {
            id
            title
            platform
        }
    }
`);

export const UPDATE_GAME = gql(`
    mutation UpdateMutation($id: ID!, $edits: EditGameInput!) {
        updateGame(edits: $edits, id: $id) {
            title
            platform
        }
    }
`);
