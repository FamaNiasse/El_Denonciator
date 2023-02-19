import { Injectable } from '@angular/core';
import { STUDENT, Student } from 'src/mocks/mock';


@Injectable({
  providedIn: 'root'
})
export class ListAbsentsService {

  constructor() { }

  // Méthode pour récupérer la liste des étudiants absents enregistrée en local
  public getStudent() {

    const student = localStorage.getItem("student");

    if(student) {
      return JSON.parse(student);
    } else {
      this.createStudent(); // Si la liste n'existe pas, on en crée une nouvelle
      this.getStudent(); // On rappelle la méthode pour récupérer la liste créée
    }

  }
  // Méthode pour créer une nouvelle liste d'étudiants absents vide
  private createStudent() {

    const newStudent = JSON.stringify([]);
    localStorage.setItem('student', newStudent);

  }

  // Méthode pour sauvegarder la liste d'étudiants absents en local
  private saveStudent(student: Student) {
    localStorage.setItem('student', JSON.stringify(student));
    
  }

  // public RandomStudent(presentStudent: )

   // Méthode pour ajouter un étudiant absent à la liste
  public addStudent(absentStudent: Student){
    const student= this.getStudent() // Récupération de la liste des étudiants absents
    const existingStudent= student.find((student: Student) => student.id==absentStudent.id); // On vérifie si l'étudiant est déjà dans la liste
    if (existingStudent) {
      console.log("Cette personne est déjà dans la liste des absents"); // Si l'étudiant est déjà présent, on affiche un message d'erreur dans le localStorage
      
    }
    else {
      student.push(absentStudent) // Si l'étudiant n'est pas présent, on l'ajoute à la liste
    }
    this.saveStudent(student) // Sauvegarde de la nouvelle liste
  
    
  }

  // Sauvegarde de la nouvelle liste
  public removeElement(idStudent: number){
    const student= this.getStudent() // Récupération de la liste des étudiants absents
    student.splice(idStudent, 1) // On retire l'étudiant de la liste à l'indice donné
    this.saveStudent(student); // Sauvegarde de la nouvelle liste
  }


}

