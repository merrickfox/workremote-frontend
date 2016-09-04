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
  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(
      jobs => this.jobs = jobs,
      error =>  console.log(error));
  }

}
