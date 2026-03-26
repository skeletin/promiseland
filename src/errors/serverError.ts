export default class ServerError extends Error {
  status: number;

  constructor() {
    super("Something went wrong on our end.");
    this.name = "ServerError";
    this.status = 500;
  }
}
