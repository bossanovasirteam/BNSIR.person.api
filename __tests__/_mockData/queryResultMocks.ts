import { FieldPacket, RowDataPacket } from "mysql2";
import { relative_data } from "../../src/models/queryResultsTypes";

export const RELATIVES_QUERY_RESULT:[RowDataPacket[], FieldPacket[]] = [
    [
        {
            name: "FULANO",
            type: "Tio(a)",
            death: false,
            document: "1234567890",
            updated_at: "2021-11-10 00:00:00"
        },
        {
            name: "CICLANO",
            type: "Tio(a)",
            death: false,
            updated_at: "2021-11-10 00:00:00"
        },
        {
            name: "BELTRANO",
            type: "Tio(a)",
            death: true,
            document: "12345678910",
            updated_at: "2021-11-10 00:00:00"
        }
    ] as RowDataPacket[],
    [] as FieldPacket[]
];