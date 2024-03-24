import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public title: string;
  public description: string;

  constructor(private route: ActivatedRoute) {
    this.title = '';
    this.description = '';
   }

   ngOnInit(): void {
    const itemParam = this.route.snapshot.paramMap.get('item');
    if (itemParam) {
      const item = JSON.parse(itemParam);
      this.title = item.title;
      this.description = item.description;
    }
  }
  
}
