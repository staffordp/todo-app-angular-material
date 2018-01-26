export class Todo {
  index: number;
  text: string;
  date: string;

  constructor(index: number, date: string, text: string) {
    this.index = index;
    this.date = date;
    this.text = text;

  }
}
