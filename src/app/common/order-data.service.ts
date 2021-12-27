import { Injectable } from '@angular/core';  
import { Observable, Subject } from 'rxjs';
  
@Injectable()  
export class OrderDataService {  
  
  private exportOrders:any = [];  
  private searchVal: Subject<string> = new Subject();
  private statusVal: Subject<string> = new Subject();
  private distributionVal: Subject<string> = new Subject();
  
  setExportOrders(value:any) {      
    this.exportOrders = value;  
  }  
  
  getExportOrders() {  
    return this.exportOrders;  
  }

  setSearchVal(val: any) {
    this.searchVal.next(val);
  }

  getSearchVal(): Observable<any> {
    return this.searchVal.asObservable();
  }

  setStatusVal(val: any) {
    this.statusVal.next(val);
  }

  getStatusVal(): Observable<any> {
    return this.statusVal.asObservable();
  }

  setDistributionVal(val: any) {
    this.distributionVal.next(val);
  }

  getDistributionVal(): Observable<any> {
    return this.distributionVal.asObservable();
  }
}  
