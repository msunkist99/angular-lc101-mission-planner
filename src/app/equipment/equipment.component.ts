import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks',
    'boo'
  ];

  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string){
    if (this.equipment.indexOf(equipmentName) < 0){
      this.equipment.push(equipmentName);      
    }
  }

  remove(equipmentName: string) {
    let index = this.equipment.indexOf(equipmentName);
    console.log("index - " + index + " equipmentName " + equipmentName);
    this.equipment.splice(index, 1);
  }

  edit(equipmentName: string) {
    this.equipmentBeingEdited = equipmentName;
  }

  save(updatedEquipmentName: string, equipmentName: string){
    let index = this.equipment.indexOf(equipmentName);
    this.equipment[index] = updatedEquipmentName;
  }
}
