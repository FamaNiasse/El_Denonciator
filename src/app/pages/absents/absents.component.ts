import { Component, OnInit } from '@angular/core';
import { STUDENT, Student } from 'src/mocks/mock';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ListAbsentsService } from 'src/app/services/list-absents.service';

// Définition du composant Angular
@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})

export class AbsentsComponent implements OnInit {

  // Propriétés
  student: Student[] = STUDENT; // Liste des étudiants dans un tableau
  absentForm! : FormGroup; // Formulaire pour ajouter un étudiant absent
  absentStudent!: Student[]; // Liste des étudiants absents

  constructor(private formbuilder: FormBuilder, private studentService: ListAbsentsService) {
    
  } 

 // Méthode d'initialisation du composant Angular
  ngOnInit(): void {
    this.initForm() // Initialisation du formulaire pour ajouter un étudiant absent
    this.absentStudent= this.studentService.getStudent()  // Récupération de la liste des étudiants absents
  }

// Methode qui permet l'ajout d'un étudiant absent dans la liste des absents
addElement(){
  this.studentService.addStudent(this.absentForm.value.student) // Ajout de l'étudiant absent avec le service
  this.absentStudent= this.studentService.getStudent() // Mise à jour de la liste des étudiants absents
  console.log(this.absentStudent); // Affichage dans la console de la liste des étudiants absents
  
}

// Initialisation du formulaire pour ajouter un étudiant absent
initForm(){
  this.absentForm= this.formbuilder.group({
    student: null
  })
  
}

 // Suppression d'un étudiant absent de la liste des absents
removeElement(idStudent: number): void{
  this.studentService.removeElement(idStudent);
  this.absentStudent= this.studentService.getStudent()
}

}
