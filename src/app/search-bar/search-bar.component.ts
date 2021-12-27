import { Component, OnInit } from '@angular/core';
import * as xlsx from 'xlsx';
import { OrderDataService } from '../common/order-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  orderDataService: any;
  statusArr: any = [
    {
      label: 'Status',
      value: ''
    },
    {
      label: 'In Transit',
      value: 'In Transit'
    },
    {
      label: 'Delivered',
      value: 'Delivered'
    },
    {
      label: 'Out For Delivery',
      value: 'Out For Delivery'
    },
    {
      label: 'Placed',
      value: 'Placed'
    }];
  distributionArr: any = [
    {
      label: 'Distribution',
      value: ''
    },
    {
      label: 'Delhi',
      value: 'Delhi'
    },
    {
      label: 'Pune',
      value: 'Pune'
    },
    {
      label: 'Hyderabad',
      value: 'Hyderabad'
    },
    {
      label: 'Bangalore',
      value: 'Bangalore'
    },
    {
      label: 'Mumbai',
      value: 'Mumbai'
    }];
  searchVal: string = '';
  statusVal: string = '';
  distributionVal: string = '';

  constructor(orderDataService: OrderDataService) { 
    this.orderDataService = orderDataService;
  }

  ngOnInit(): void {
  }

  evtClickExport() {  
    let data = this.orderDataService.getExportOrders();

    let workBook = xlsx.utils.book_new(); // create a new blank book
    let workSheet = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    xlsx.writeFile(workBook, 'orders.xlsx');
  }



  evtKeyupSearch() {
    setTimeout(()=>{
      this.orderDataService.setSearchVal(this.searchVal);
    },400);
  }

  evtStatusChanged() {
    this.orderDataService.setStatusVal(this.statusVal);
  }

  evtDistributionChanged() {
    this.orderDataService.setDistributionVal(this.distributionVal);
  }

}
