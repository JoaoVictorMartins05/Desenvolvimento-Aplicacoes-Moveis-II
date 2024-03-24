import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

type Item = {
  id?: number,
  title: string,
  description: string,
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})

export class AddItemPage {
  public item: Item;
  public pageTitle: string;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.item = this.navParams.get('item') ?? { title: '', description: '' } as Item;

    this.pageTitle = this.navParams.get('pageTitle') ?? 'Add Item';
  }

  saveItem(item: Item) {    
    this.modalController.dismiss({ role: 'success', item });
  }

  close() {
    this.modalController.dismiss();
  }

}
