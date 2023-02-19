import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListAbsentsService } from 'src/app/services/list-absents.service';
import { STUDENT, Student } from 'src/mocks/mock';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {



  student: Student[] = STUDENT;
  absentStudent!: Student[];
  presentStudent?: Student[];
  absentForm!: FormGroup;
  randomStudent!: Student;

  result!: string;
  message!: string;




  constructor(public formbuilder: FormBuilder, private studentService: ListAbsentsService) {

  }


  ngOnInit(): void {
    // Initialisation du formulaire pour ajouter un étudiant absent
    this.initForm();

  }

  initForm() {
    this.absentForm = this.formbuilder.group({
      student: null
    })

  }


  getRandomStudent() {


    // Récupération de la liste des étudiants absents
    this.absentStudent = this.studentService.getStudent();

    // Filtrage de la liste complète des étudiants pour obtenir la liste des étudiants présents
    this.presentStudent = this.student.filter(person => !this.absentStudent.includes(person));

    // Génération d'un nombre aléatoire compris entre 0 et le nombre d'étudiants présents
    const randomIndex = Math.floor(Math.random() * this.presentStudent.length);

    // Accès à l'étudiant correspondant à l'index aléatoire
    const randomStudent = this.presentStudent[randomIndex];

    // Affichage du prénom de l'étudiant sélectionné
    this.result = randomStudent.prenom;

    // Affichage de la condition pour afficher un message different en fonction du genre

    if (randomStudent.genre === "femme") {
      this.message = "Tu es la grande gagnante !";
    }

    if (randomStudent.genre === "homme") {
      this.message = "Tu es le grand gagnant !";
    }
    else ("Aucun utilisateur n'a été trouvé");

    console.log(randomStudent);


  }

}









  // //recupère la liste des étudiants présents
  // getPresentStudent(){
  //   this.presentStudent= this.studentService.getStudent();
  // }

  // // Obtenir le nom d'un étudiant aléatoirement

  // getRandomStudent(){
  //   this.randomStudent= this.presentStudent?.sort(() =>Math.random() -0.5);
  //   // return this.randomStudent;
  // }



