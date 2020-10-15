import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiment: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density',
    'boo'
  ];

  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string){
    if (this.experiment.indexOf(experimentName) < 0){
      this.experiment.push(experimentName);      
    }
  }

  remove(experimentName: string){
    let index = this.experiment.indexOf(experimentName);
    this.experiment.splice(index, 1);
  }

  edit(experimentName: string) {
    this.experimentBeingEdited = experimentName;
  }

  save(updatedName: string, experimentName: string){
    let index = this.experiment.indexOf(experimentName);
    this.experiment[index] = updatedName;
  }
}
