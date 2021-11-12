import { relative_data } from "../../src/models/queryResultsTypes";
import { relationship } from "../../src/models/responseTypes";

export const RELATIVES_RESPONSE:relative_data[] = [
    {
        name: "FULANO",
        type: "Tio(a)",
        death: false,
        document: "01234567890",
        updated_at: "2021-11-10 00:00:00"
    } as relative_data,
    {
        name: "CICLANO",
        type: "Tio(a)",
        death: false,
        updated_at: "2021-11-10 00:00:00"
    } as relative_data,
    {
        name: "BELTRANO",
        type: "Tio(a)",
        death: true,
        document: "12345678910",
        updated_at: "2021-11-10 00:00:00"
    } as relative_data
];

export const EMPTY_RESULT:relationship[] = [];