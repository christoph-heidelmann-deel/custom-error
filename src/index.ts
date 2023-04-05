export class CustomError extends Error {
  constructor(message: string) {
    super(message);

    Object.defineProperty(this, 'name', {
      value: new.target.name,
      enumerable: false,
      configurable: true,
    });

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this, new.target.constructor);
  }
}
