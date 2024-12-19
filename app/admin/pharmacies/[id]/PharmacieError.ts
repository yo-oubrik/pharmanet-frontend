export class PharmacieError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PharmacieError";
  }
}
