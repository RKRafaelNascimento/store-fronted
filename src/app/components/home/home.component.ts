import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/shared/services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts()
  }

  private getProducts() {
    this.productService.products().subscribe((res: any) => {
      this.products = res
    })
  }
}
