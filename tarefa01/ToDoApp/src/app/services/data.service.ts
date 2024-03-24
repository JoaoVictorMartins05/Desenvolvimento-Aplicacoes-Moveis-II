import { Injectable } from '@angular/core';

type Item = {  
  id?: number;
  title: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private indexedDB!: IDBDatabase;
  private items: Item[];

  constructor() { 
    this.items = [];
  }

  public async initializeIndexedDB() {
    return new Promise((resolve, reject) => {      
      const request = indexedDB.open('totodb', 1);

      request.onupgradeneeded = (event: any) => {        
        const db = event.target.result;

        if (!db.objectStoreNames.contains('items')) {
          db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = async (event: any) => {
        this.indexedDB = event.target.result;
        await this.getItems();
        resolve(this.items);
      };

      request.onerror = (event: any) => {
        console.error('Error initializing IndexedDB:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  private async getItems() {
    const transaction = this.indexedDB.transaction(['items'], 'readonly');
  
    const store = transaction.objectStore('items');
    const request = store.getAll();
  
    return new Promise<void>((resolve, reject) => {
      request.onsuccess = async (event: any) => {
        try {
          
          this.items = await event.target.result as Item[];
          
          resolve();
        } catch (error) {
          console.error('Error fetching items from IndexedDB:', error);
          reject(error);
        }
      };
  
      request.onerror = (event: any) => {
        console.error('Error fetching items from IndexedDB:', event.target.error);
        reject(event.target.error);
      };
    });
  }  

  public async addItem(item: Item) {
    const transaction = this.indexedDB.transaction(['items'], 'readwrite');
    const store = transaction.objectStore('items');

    const request = store.add(item);
    request.onsuccess = async () => {
      await this.getItems();
    };

    request.onerror = (event: any) => {
      console.error('Error adding item to IndexedDB:', event.target.error);
    };
  }

  public async updateItem(updatedItem: Item) {
    const transaction = this.indexedDB.transaction(['items'], 'readwrite');
    const store = transaction.objectStore('items');
  
    const request = store.put(updatedItem);
    request.onsuccess = async () => {
      await this.getItems(); 
    };
  
    request.onerror = (event: any) => {
      console.error('Error updating item in IndexedDB:', event.target.error);
    };
  }

  public async deleteItem(item: Item) {
    const transaction = this.indexedDB.transaction(['items'], 'readwrite');
    const store = transaction.objectStore('items');
  
    const request = store.delete(item.id ?? -1);

    request.onsuccess = async () => {
      await this.getItems();
    };
  
    request.onerror = (event: any) => {
      console.error('Error deleting item from IndexedDB:', event.target.error);
    };
  }
  
  

  public async fetchData(): Promise<Item[]> {
    await this.getItems();    

    return this.items;
  }
}
