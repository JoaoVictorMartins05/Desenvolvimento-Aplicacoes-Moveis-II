import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SplashScreen } from '@capacitor/splash-screen';

type Item = {
  id?: number;
  title: string,
  description: string,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public items: Item[];

  constructor(private modalController: ModalController, private router: Router, private dataService: DataService) {
    this.items = [];
    
    this.initializeIndexedDB();    
  }

  private async initializeIndexedDB() {
    try {
      await this.dataService.initializeIndexedDB();
      this.items = await this.dataService.fetchData();
      SplashScreen.hide();
    } catch (error) {
      console.error('Error initializing IndexedDB:', error);
    }
  }

  addItem() {
    const addModal = this.modalController.create({
      component: AddItemPage,
      componentProps: {  },
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false, 
      animated: true 
    });
    
    addModal.then(modal => {
      modal.present();
    });    

    addModal.then((modal) => {
      modal.onDidDismiss().then((data) => {
        const response = data?.data;

        if (response?.role === 'success' && response?.item) {
          const item: Item = response.item;
          this.dataService.addItem(item);
          this.items.push(item);
        }        
      });
    });
  }

  updateItem(item: Item) {
    const addModal = this.modalController.create({
      component: AddItemPage,
      componentProps: { item, pageTitle: 'Edit Item' },
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false, 
      animated: true 
    });
    
    addModal.then(modal => {      
      modal.present();
    });    

    addModal.then((modal) => {
      modal.onDidDismiss().then(async (data) => {
        const response = data?.data;        

        if (response?.role === 'success' && response?.item) {
          const item: Item = response.item;
          await this.dataService.updateItem(item);
          this.items = await this.dataService.fetchData();
        }        
      });
    });
  }

  async deleteItem(item: Item) {
    await this.dataService.deleteItem(item);

    this.items = await this.dataService.fetchData();
  }

  viewItem(item: Item) {
    this.router.navigate(['/item-detail', { item: JSON.stringify(item) }]);
  }
}
