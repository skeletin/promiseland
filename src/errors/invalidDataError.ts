export default class InvalidDataError extends Error {
  constructor(message: string = "Inavlid Data") {
    super(message);
    this.name = "InvalidDataError";
  }
}
