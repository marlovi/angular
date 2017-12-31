import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';
import { forwardRef } from '@angular/core';
@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( ()=> RadioComponent),
    multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() option: RadioOption; 

  value: any;
  onChange: any;
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any):void{
    this.value = obj;
  }
  registerOnChange(fn: any): void{
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void{

  }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void{

  }
}
