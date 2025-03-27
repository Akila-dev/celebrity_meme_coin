import { gql } from "@apollo/client";

export const GET_GLOW_TO_SOL = gql`
  query MyQuery {
    Solana {
      DEXTradeByTokens(
        limit: { count: 1 }
        orderBy: { descending: Block_Time }
        where: {
          Trade: {
            Dex: {
              ProgramAddress: {
                is: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P"
              }
            }
            Currency: {
              MintAddress: { is: "tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump" }
            }
          }
          Transaction: { Result: { Success: true } }
        }
      ) {
        Trade {
          Currency {
            MintAddress
            Name
            Symbol
          }
          PriceInUSD
          Price
        }
        Block {
          Time
        }
      }
    }
  }
`;
