export class DateUtility {
  static getCurrentDate(): string {
    return new Date().toISOString();
  }

  static formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-AU", options).format(new Date(date));
  }

  static parseDate(dateString: string): Date | null {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  }
}
