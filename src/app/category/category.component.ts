import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {


  constructor(private categoryService: CategoryService) { }
  categories$ = this.categoryService.categories$;

  ngOnInit() {
    this.getCategories();
    console.log(this.categories$);
  }

  getCategories(){
    this.categoryService.getCategories().subscribe();
  }
}
