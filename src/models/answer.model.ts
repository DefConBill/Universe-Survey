export class Answer {
  constructor(
    public strongA: boolean,
    public someA: boolean,
    public neutral: boolean,
    public someD: boolean,
    public strongD: boolean
  ) { }
}

export class Question {
  constructor(
    public question: string,
    public heading: boolean,
    public answers: Answer
  ) { }
}

export class Survey {
  constructor(
    public name: string,
    public job: string,
    public personal: string,
    public feedback: string,
    public questions: Question[]
  ) { }
}

export class AnswerResult {
  constructor(
    public question: string,
    public answer: string
  ) { }
}

export class Result {
  constructor(
    public name: string,
    public job: string,
    public personal: string,
    public feedback: string,
    public answers: AnswerResult[],
    public _id?: string
  ) { }
}
