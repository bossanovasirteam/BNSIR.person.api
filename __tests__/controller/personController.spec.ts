import { PersonController } from "../../src/controllers/personController";

import {
    DOCUMENT_WITHOUT_RELATIVES,
    DOCUMENT_WITH_RELATIVES, 
    NON_NUMERIC_ONLY_DOCUMENT
} from "../_mockData/requestMocks";
import {
    RELATIVES_RESPONSE
} from "../_mockData/expectedMocks";
import { customError } from "../../src/customErrors/customErrors";

jest.mock("../../src/config/database");
jest.mock("../../src/services/personService");
const personController = new PersonController();

describe('personController Class', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })
    describe('relationships', () => {
        test('[async] relationships with result', async () => {
            const relatioships = await personController.relationships(DOCUMENT_WITH_RELATIVES);
            expect(relatioships).toEqual(RELATIVES_RESPONSE);
        });

        test('[async] relationships with bad document', async () => {
            try{
                const relatioships = await personController.relationships(NON_NUMERIC_ONLY_DOCUMENT);
                expect(1).toEqual(0);
            } catch (err) {
                expect(err).toBeInstanceOf(customError);
                if(err instanceof customError){
                    expect(err.status).toEqual(400);
                    expect(err.message).toEqual("O documento deve conter apenas dígitos numéricos.");
                } 
            }
        });

        test('[async] relationships with empty result', async () => {
            try{
                const relatioships = await personController.relationships(DOCUMENT_WITHOUT_RELATIVES);
                expect(1).toEqual(0);
            } catch (err) {
                expect(err).toBeInstanceOf(customError);
            }
        });

    });
});
