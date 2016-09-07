import { Component, OnInit } from '@angular/core';
import {JobsService} from "../../services/jobs/jobs.service";

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
  providers: [JobsService]
})
export class JobsListComponent implements OnInit {
  jobs;
  showLoader: boolean;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.showLoader = true;
    this.jobsService.getJobs().subscribe(
      jobs => {
        this.jobs = jobs;
        this.showLoader = false;
      },
      error =>  console.log(error));
  }

}
