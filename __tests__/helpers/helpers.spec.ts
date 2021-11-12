import { cpfNormalizer } from "../../src/helpers/documentFormater";

describe('cpfNormalizer Helper', () => {
  
  test('cpfNormalizer with only numbers', async () => {
    const result = cpfNormalizer("12345678910");
    expect(result).toEqual("12345678910");
  });

  test('cpfNormalizer with only numbers add zero at the beginning', async () => {
    const result = cpfNormalizer("1111111111");
    expect(result).toEqual("01111111111");
  });

  test('cpfNormalizer full format', async () => {
    const result = cpfNormalizer("12345678910", false);
    expect(result).toEqual("123.456.789-10");
  });
});
