import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/shared/services/user.service'
import { Router } from '@angular/router'
declare const swal: any

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
  private user = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  private authenticate() {
    if (this.user.email == '') {
      return swal('Não foi possível!', 'Por favor informe seu e-mail!', 'warning')
    }
    if (this.user.password == '') {
      return swal('Não foi possível!', 'Por favor informe sua senha!', 'warning')
    }

    this.userService.authentication(this.user).subscribe(
      (res: any) => {
        localStorage.setItem('customerData', JSON.stringify(res))
        swal('Pronto!', 'Logado com sucesso!', 'success').then(() => {
          window.location.href = '/'
        })
      },
      error => {
        return swal('Não foi possível!', 'Senha ou e-mail inválido!', 'warning')
      }
    )
  }
}
