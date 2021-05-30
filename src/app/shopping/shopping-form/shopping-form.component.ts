import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  shoppingForm: FormGroup;


  months = [
    { id: 1, name: '01' },
    { id: 2, name: '02' },
    { id: 3, name: '03' },
    { id: 4, name: '04' },
    { id: 1, name: '05' },
    { id: 2, name: '06' },
    { id: 3, name: '07' },
    { id: 4, name: '08' },
    { id: 1, name: '09' },
    { id: 2, name: '10' },
    { id: 3, name: '11' },
    { id: 4, name: '12' },
  ];

  years = [
    { id: 1, name: '2021' },
    { id: 2, name: '2022' },
    { id: 3, name: '2023' },
    { id: 4, name: '2024' },
    { id: 1, name: '2025' },
    { id: 2, name: '2026' },
    { id: 3, name: '2027' },
    { id: 4, name: '2028' },
    { id: 1, name: '2029' },
    { id: 2, name: '2030' }
  ];

  checkboxes = [{ checked: false, value: 'Visa Card' }, { checked: false, value: 'Master Card' }];
  

  constructor() { }

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      'userName': new FormControl(),
      'email': new FormControl(),
      'mobileNo': new FormControl(),
      'address': new FormControl(),
      'cardNo': new FormControl(),
      'cvc': new FormControl(),
      'monthExpire': new FormControl(),
      'cardType': new FormControl()
    })
  }
  purchaseCart() {
    console.log(this.shoppingForm.value);
    Swal.fire({
      title: "Are you sure you want to place the offer",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Order Placed Successfully!",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelled",
          "The Order was Cancelled",
          "error"
        );
      }
    });
  }

  disableOther(chk: any) {
    this.checkboxes.forEach(x => {
      if (x.value !== chk.value) {
        x.checked = !x.checked;
      }
    })
  }

}
