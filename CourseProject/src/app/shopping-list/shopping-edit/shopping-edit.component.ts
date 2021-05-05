import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;

  editSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void 
  {
    this.editSub = this.shoppingListService.StartedEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount})
      }
    );
  }

  ngOnDestroy()
  {
    this.editSub.unsubscribe();
  }

  onAddShopping(form: NgForm)
  {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode)
    {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIng);
    }
    else
    {
      this.shoppingListService.addIngredient(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete()
  {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }
}
