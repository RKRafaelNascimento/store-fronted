import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false
  customerData: any

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('customerData')) {
      this.isLoggedIn = true
      this.customerData = JSON.parse(localStorage.getItem('customerData'))
      console.log(this.customerData)
    }
  }

  logout() {
    localStorage.removeItem('customerData')
  }
}
