import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './models/category.model';
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
  }

  getCategories(){
    this.categoryService.getCategories().subscribe();
  }
}
