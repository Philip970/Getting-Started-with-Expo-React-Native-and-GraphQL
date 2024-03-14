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
