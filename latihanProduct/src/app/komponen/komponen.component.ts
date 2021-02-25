import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Komponen } from './Komponen';
import { KomponenService } from './komponen.service';

@Component({
  selector: 'app-komponen',
  templateUrl: './komponen.component.html',
  styleUrls: ['./komponen.component.css'],
  providers: [KomponenService]
})
export class KomponenComponent implements OnInit {

  productId!:BigInteger;
  komponenForm!:FormGroup;

  constructor(private komponenService: KomponenService, private route: ActivatedRoute, private router : Router) {
    this.komponenForm = new FormGroup({
      productId : new FormControl(null, [Validators.required]),
      productName : new FormControl(null, [Validators.required]),
      supplierId : new FormControl(null, [Validators.required]),
      categoryId : new FormControl(null, [Validators.required]),
      quantityPerUnit : new FormControl(null, [Validators.required]),
      unitPrice : new FormControl(null, [Validators.required]),
      unitInStock : new FormControl(null, [Validators.required]),
      unitsOnOrder : new FormControl(null, [Validators.required]),
      reOrderLevel : new FormControl(null, [Validators.required]),
      discontinued : new FormControl(null, [Validators.required]),
    });
   }

  ngOnInit(): void {

    this.route.params.subscribe(rute => {
      this.productId = rute.id;
      if(this.productId) {
        this.komponenService.getKategori(this.productId).subscribe(hasil => {
          if(hasil) {
            this.komponenForm.get('productId')?.setValue(hasil.productId);
            this.komponenForm.get('productName')?.setValue(hasil.productName);
            this.komponenForm.get('supplierId')?.setValue(hasil.supplierId);
            this.komponenForm.get('categoryId')?.setValue(hasil.categoryId);
            this.komponenForm.get('quantityPerUnit')?.setValue(hasil.quantityPerUnit);
            this.komponenForm.get('unitPrice')?.setValue(hasil.unitPrice);
            this.komponenForm.get('unitInStock')?.setValue(hasil.unitInStock);
            this.komponenForm.get('unitsOnOrder')?.setValue(hasil.unitsOnOrder);
            this.komponenForm.get('reOrderLevel')?.setValue(hasil.reOrderLevel);
            this.komponenForm.get('discontinued')?.setValue(hasil.discontinued);

          }
        });
      }
    })
    
  }

  simpan() {
    if(this.komponenForm?.valid){
      const komponen = new Komponen();
      komponen.productId = this.komponenForm?.controls.productId.value;
      komponen.productName = this.komponenForm?.controls.productName.value;
      komponen.supplierId = this.komponenForm?.controls.supplierId.value; 
      komponen.categoryId = this.komponenForm?.controls.categoryId.value; 
      komponen.quantityPerUnit = this.komponenForm?.controls.quantityPerUnit.value; 
      komponen.unitPrice = this.komponenForm?.controls.unitPrice.value; 
      komponen.unitInStock = this.komponenForm?.controls.unitInStock.value; 
      komponen.unitsOnOrder = this.komponenForm?.controls.unitsOnOrder.value; 
      komponen.reOrderLevel = this.komponenForm?.controls.reOrderLevel.value; 
      komponen.discontinued = this.komponenForm?.controls.discontinued.value; 
      console.log(komponen);
      this.komponenService.simpanKategori(komponen, false).subscribe(
        hasil => {
          console.log(hasil);
          this.router.navigateByUrl('/komponenlist')
        }, error => {
          console.log(error);
        }
      );
    } else {
      alert('wajib diisi')
    }

    
  }

}
