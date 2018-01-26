export class Todo {
  index: number;
  text: string;
  date: string;

  constructor(index: number, text: string, date: string) {
    this.index = index;
    this.date = date;
    this.text = text;
  }
}
