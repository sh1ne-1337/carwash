import { STATUS_CODES } from "./statusCode.js";

export class NotFoundError extends Error {
  constructor(message = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
    this.status = STATUS_CODES.NOT_FOUND;
  }
}
