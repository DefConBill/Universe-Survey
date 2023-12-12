import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, AnswerResult, Result, Survey } from 'src/models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  answerResults: AnswerResult[] = [];
  constructor(private http: HttpClient) { }

  getSurveys() {
    return this.http.get<{ success: boolean, data: any }>('https://api.hottubuniverse.ca/api/v1/auth/survey');
  }

  sendSurvey(survey: Survey) {
    survey.questions.forEach(question => {
      if (!question.heading) {
        if (question.answers.strongA) {
          this.answerResults.push(new AnswerResult(question.question, 'Strongly Agree'));
        }
        if (question.answers.someA) {
          this.answerResults.push(new AnswerResult(question.question, 'Somewhat Agree'));
        }
        if (question.answers.neutral) {
          this.answerResults.push(new AnswerResult(question.question, 'Neutral'));
        }
        if (question.answers.someD) {
          this.answerResults.push(new AnswerResult(question.question, 'Somewhat Disagree'));
        }
        if (question.answers.strongD) {
          this.answerResults.push(new AnswerResult(question.question, 'Strongly Disagree'));
        }
      }
    });
    const result = new Result(survey.name, survey.job, survey.personal, survey.feedback, this.answerResults);
    this.http.post<{ success: boolean, data: any }>('https://api.hottubuniverse.ca/api/v1/auth/survey', result).subscribe();
  }
}
