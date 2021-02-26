import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  productId!:BigInteger;
  cariForm!:FormGroup;
  cari!:BigInteger;
  searchStr = "";

  constructor(private komponenService: KomponenService, private route: ActivatedRoute, private router : Router) {

    this.cariForm = new FormGroup({
      cari : new FormControl(null)
    })

   }

  ngOnInit(): void {
        this.komponenService.getKategoriAll(this.productId).subscribe(data => {
        this.listproduct = data;
      })
    } 

    cariProduct() {

      this.cari = this.cariForm?.controls.cari.value;
      console.log('masuk' + this.cari);
      if (!this.cari) {
        this.ngOnInit;
      } else {
        console.log(this.cari);
        this.komponenService.getKategoriAll(this.cari).subscribe(
          hasil => {
            if(hasil) {
              this.listproduct = hasil;
              console.log(hasil)
            }
          }
        )
      }
    }

  }





  // delete() {
  //   this.route.params.subscribe(rute => {
  //     this.productId = rute.id;
  //     this.komponenService.deleteKategori(this.productId);
  //     this.router.navigateByUrl('/komponenlist');
  //   })
  // }


