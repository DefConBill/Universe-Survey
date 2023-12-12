import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Result } from 'src/models/answer.model';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  results: Result[] = [];
  selectedResult!: Result;
  resultId: string = '';
  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.resultId = params['id'];
          this.surveyService.getSurveys().subscribe(res => {
            this.results = res.data;
            this.selectedResult = this.results.find(result => result._id === this.resultId)!;
          });
        });
  }
}
