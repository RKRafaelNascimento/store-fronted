import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/shared/services/user.service'
import { Router } from '@angular/router'
declare const swal: any

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  private user = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    address: {
      street: '',
      number: '',
      city: ''
    }
  }

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  private createUser() {
    if (
      this.user.firstName == '' ||
      this.user.lastName == '' ||
      this.user.password == '' ||
      this.user.email == '' ||
      this.user.address.street == '' ||
      this.user.address.number == '' ||
      this.user.address.city == ''
    )
      return swal(
        'Não foi possível salvar!',
        'Verifique se todos os campos foram preenchidos!',
        'warning'
      )
    console.log(this.user)
    this.userService.createUser(this.user).subscribe((res: any) => {
      swal('Pronto!', 'Cadastrado com sucesso!', 'success').then(() => {
        this.router.navigate(['cliente'])
      })
    })
  }
}
