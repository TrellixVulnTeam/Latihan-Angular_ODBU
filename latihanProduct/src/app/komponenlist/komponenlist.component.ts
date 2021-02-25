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

  constructor(private komponenService: KomponenService, private route: ActivatedRoute, private router : Router) {

    this.cariForm = new FormGroup({
      cari : new FormControl(null)
    })

   }



  ngOnInit(): void {
        this.komponenService.getKategoriAll().subscribe(data => {
        this.listproduct = data;
      })
    } 

    delete(id : BigInteger) {
        this.komponenService.deleteKategori(id);
        console.log('masuk' + id);
    }

    cariProduct() {
      this.route.queryParams.subscribe(rute => {
      this.cari = rute.id;
      this.router.navigate(['/komponenlist'], { queryParams: { cari: this.cari } });
    })
    }

  }





  // delete() {
  //   this.route.params.subscribe(rute => {
  //     this.productId = rute.id;
  //     this.komponenService.deleteKategori(this.productId);
  //     this.router.navigateByUrl('/komponenlist');
  //   })
  // }


