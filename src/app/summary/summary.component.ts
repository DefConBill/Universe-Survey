import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/models/answer.model';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  results: Result[] = [];

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe(res => {
      this.results = res.data;
      console.log(this.results);
    });
  }

  selectResult(result: Result) {
    const id = result._id;
    const path = "/655506e8bd412b4a7e6387612/result/" + id;
    this.router.navigateByUrl(path);
  }
}
