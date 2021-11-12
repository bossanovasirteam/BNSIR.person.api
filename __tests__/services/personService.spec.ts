import { PersonService } from "../../src/services/personService";
import { db } from "../../src/config/database";

import {
  DOCUMENT_WITH_RELATIVES, NON_NUMERIC_ONLY_DOCUMENT
} from "../_mockData/requestMocks";
import {
  RELATIVES_RESPONSE
} from "../_mockData/expectedMocks";
import { RELATIVES_QUERY_RESULT } from "../_mockData/queryResultMocks";

jest.mock("../../src/config/database");
const personService = new PersonService();

describe('personService Class', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  test('[async] relationships with result', async () => {
    const query = jest.spyOn(db, "query");
    query.mockResolvedValue(RELATIVES_QUERY_RESULT);
    const relatioships = await personService.relationships(DOCUMENT_WITH_RELATIVES);
    const query_builder_argument = query.mock.calls[0][1];
    expect(query).toBeCalledTimes(1);
    expect(query_builder_argument).toContain(DOCUMENT_WITH_RELATIVES);
    expect(relatioships).toEqual(RELATIVES_RESPONSE);
  });
});
