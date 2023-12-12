import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Answer, Question, Survey } from 'src/models/answer.model';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // Rhonda: 655506e8bd412b4a7e519520
  // Michelle: 6555078cbd412b4a7e519540
  // Jonah: 655517f1cbb2bae7431672bd
  answers: Answer[] = [];
  questions: Question[] = [];
  employee: string = '';
  jobText: string = '';
  personalText: string = '';
  surveyError = false;
  jobError = false;
  personalError = false;
  isModalOpen = true;
  isDone = false;

  surveyForm = this.fb.group({
    job: ['', [Validators.required]],
    personal: ['', [Validators.required]],
    feedback: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          switch (id) {
            case '655506e8bd412b4a7e519520':
              this.employee = 'Rhonda';
              break;
            case '6555078cbd412b4a7e519540':
              this.employee = 'Michelle';
              break;
            case '655517f1cbb2bae7431672bd':
              this.employee = 'Jonah';
              break;
          }
        }
      )

    this.questions.push(new Question('Satisfaction with the company as a whole', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I am satisfied with my career and opportunities for advancement', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I enjoy a degree of autonomy which I need to be able to do my job', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My working environment fosters a feeling of well-being', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I am able to manage both work and family life well', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My working hours are flexible enough for me', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I believe I am paid appropriately', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Good performance is well rewarded in our company', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I believe not enough is demanded of me in my work', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with communication within the company', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I feel I am sufficiently informed about developments in the company', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('The flow of information between employees works well', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('The flow of information between employees and managers works well', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Company managers clearly communicate the strategic objectives of the firm', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I feel good about all developments which affect my work', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with teamwork and working atmosphere', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I can openly address problems and sensitive issues in our workplace.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('There is an overall positive atmosphere in our workplace.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('When mistakes happen, the most important question isn’t “who’s fault was it?”, but rather “how can we avoid such a mistake in the future?”.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Initiative and responsibility are important in our workplace.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Individual competence is what counts in our workplace - not gender, origin or age.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Overall teamwork within the company works well in my opinion.', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with business managers and their conduct in the workplace', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My manager(s) is trustworthy.', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My manager(s) show recognition for the work that I do', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My manager(s) set clear priorities and goals', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My manager(s) is open to new ideas and suggestions', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My manager(s) include other employees in decision-making', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with learning and educational opportunities', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I possess the required knowledge to complete my daily work', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Overall my colleagues are highly pro- fessional', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I am appropriately supported through changes in work processes', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Continued learning and education opportunities are offered to employees', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I have sufficient time to keep my working knowledge up to date', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I use the available opportunities to keep my working knowledge up to date', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('Employees are mutually helpful and share their knowledge with each other', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with the opportunity to give upwards feedback', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('The company fosters an environment in which creativity can flourish', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I feel encouraged to offer ideas and suggestions for improvement', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My ideas and suggestions are taken into account', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('New ideas are generally taken on and implemented', false, new Answer(false, false, false, false, false)));

    this.questions.push(new Question('Satisfaction with the company as a whole', true, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I like coming to work', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('My work is more than just a job', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I would recommend the company as an employer', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I would apply to the company again today if I had to decide', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I enjoy engaging with the company', false, new Answer(false, false, false, false, false)));
    this.questions.push(new Question('I see myself still working at the company in five years', false, new Answer(false, false, false, false, false)));
  }

  changeSelection(index: number, value: number) {
    this.questions[index].answers.strongA = false;
    this.questions[index].answers.someA = false;
    this.questions[index].answers.neutral = false;
    this.questions[index].answers.someD = false;
    this.questions[index].answers.strongD = false;

    switch (value) {
      case 1:
        this.questions[index].answers.strongA = !this.questions[index].answers.strongA;
        break;
      case 2:
        this.questions[index].answers.someA = !this.questions[index].answers.someA;
        break;
      case 3:
        this.questions[index].answers.neutral = !this.questions[index].answers.neutral;
        break;
      case 4:
        this.questions[index].answers.someD = !this.questions[index].answers.someD;
        break;
      case 5:
        this.questions[index].answers.strongD = !this.questions[index].answers.strongD;
        break;
    }
  }

  submit() {
    this.surveyError = false;
    this.jobError = false;
    this.personalError = false;
    let error = false;
    this.questions.forEach((question) => {
      if (!question.heading) {
        if (!question.answers.strongA && !question.answers.someA && !question.answers.neutral && !question.answers.someD && !question.answers.strongD) {
          error = true;
        }
      }
    });
    if (error) {
      this.surveyError = true;
      return;
    }
    if (this.surveyForm.value.job === '') {
      this.jobError = true;
      return
    }
    if (this.surveyForm.value.personal === '') {
      this.personalError = true;
      return;
    }
    let survey: Survey = new Survey(this.employee, this.surveyForm.value.job, this.surveyForm.value.personal, this.surveyForm.value.feedback, this.questions);
    this.surveyService.sendSurvey(survey);
    console.log(this.employee);
    this.isDone = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
