import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries"

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Bannana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ]

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: `Removing ${item.name}, ${index}`,
      duration: 2000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showItemPrompt();
  }

  async showItemPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Item',
      message: 'Please enter item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Save Clicked', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
}
