import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Komponen } from '../komponen/Komponen';
import { KomponenService } from '../komponen/komponen.service';

@Component({
  selector: 'app-komponenlist',
  templateUrl: './komponenlist.component.html',
  styleUrls: ['./komponenlist.component.css'],
  providers: [KomponenService]
})
export class KomponenlistComponent implements OnInit {

  listproduct!: Komponen[];

  constructor(private komponenService: KomponenService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.komponenService.getKategoriAll().subscribe(data => {
      this.listproduct = data;
    })
  }

}
