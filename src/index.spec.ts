import {CustomError} from '.';

describe(CustomError.name, () => {
  describe('when constructor was called', () => {
    let errorClassInstance: CustomError;
    const messageFixture = 'any-message';
    beforeAll(() => {
      errorClassInstance = new CustomError(messageFixture);
    });

    it('error name is correct', () => {
      expect(errorClassInstance.name).toBe('CustomError');
    });

    it('error message is correct', () => {
      expect(errorClassInstance.message).toBe(messageFixture);
    });

    it('custom error is instance of error', () => {
      expect(errorClassInstance instanceof Error).toBeTruthy();
    });
  });

  describe('when constructor of extended error was called', () => {
    let errorClassInstance: CustomError;
    const messageFixture = 'any-message';
    beforeAll(() => {
      class AnyError extends CustomError {}

      errorClassInstance = new AnyError(messageFixture);
    });

    it('error name is correct', () => {
      expect(errorClassInstance.name).toBe('AnyError');
    });

    it('error message is correct', () => {
      expect(errorClassInstance.message).toBe(messageFixture);
    });

    it('custom error is instance of error', () => {
      expect(errorClassInstance instanceof Error).toBeTruthy();
    });

    it('any error is instance of custom error', () => {
      expect(errorClassInstance instanceof CustomError).toBeTruthy();
    });
  });
});
