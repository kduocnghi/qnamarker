import { Component, OnInit , ViewChild , ViewContainerRef , ComponentFactoryResolver } from '@angular/core';
import {CreateKbService} from './create-kb.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-create-kb',
  templateUrl: './create-kb.component.html',
  styleUrls: ['./create-kb.component.css'],
  providers: [CreateKbService]
})
export class CreateKBComponent implements OnInit {
  items: number[] = [];
  constructor(private ckb: CreateKbService,resolver:ComponentFactoryResolver) { }
  ngOnInit() {
  }
  onSubmit() {
  }

  copy() {
    this.items.push(this.items.length + 1);
  }

  delete() {
    this.items.splice(-1, 1);
  }
}
