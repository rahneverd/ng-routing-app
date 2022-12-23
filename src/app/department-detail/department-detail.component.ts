import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId
  idToBeSent
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe((params: ParamMap) => {this.departmentId = parseInt(params.get('id'))})
  }

  goBack() {
    // this.router.navigate(['/departments', {id: this.departmentId}])
    this.router.navigate(['../', {id: this.departmentId}], {relativeTo: this.route})
  }

  previous() {
    this.departmentId === 1 ? this.idToBeSent = 5 : this.idToBeSent = this.departmentId - 1;
    // this.router.navigate(['/departments', this.idToBeSent])
    this.router.navigate(['../', this.idToBeSent], {relativeTo: this.route})
  }
  next() {
    this.departmentId === 5 ? this.idToBeSent = 1 : this.idToBeSent = this.departmentId + 1;
    // this.router.navigate(['/departments', this.idToBeSent])
    this.router.navigate(['../', this.idToBeSent], {relativeTo: this.route})
  }
}
