export class ApplicationDate {
  private term: number

  private createdAt: Date

  private closedAt: Date

  constructor(term: number, createdAt?: string) {
    this.term = term;
    this.createdAt = (!createdAt) ? new Date() : new Date(createdAt);
    this.closedAt = this.getClosedAt();
  }

  private getClosedAt(): Date {
    this.closedAt = new Date(this.createdAt);
    const dayOfMounth = this.closedAt.getDate();
    const termFromBeginningMonth = this.term + dayOfMounth;
    this.closedAt.setDate(termFromBeginningMonth);
    return this.closedAt;
  }

  private getDateString = (dateObj: Date): string => {
    const day = dateObj.getDate();
    const mounth = dateObj.getMonth() + 1;
    const preparedMounth = (mounth < 10) ? `0${mounth}` : mounth;
    const year = dateObj.getFullYear();
    return `${day}.${preparedMounth}.${year}`;
  }

  getCreatedAtString(): string {
    return this.createdAt.toString();
  }

  getClosedAtString(): string {
    return this.closedAt.toString();
  }

  getCreatedAtStrInHumanView(): string {
    return this.getDateString(this.createdAt);
  }

  getClosedAtStrInHumanView(): string {
    return this.getDateString(this.closedAt);
  }
}
