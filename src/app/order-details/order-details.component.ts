import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../common/order-data.service';
import orderDetails from '../common/order-details.json';
import headerDetails from '../common/header-details.json';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders: any = orderDetails;
  headers = headerDetails;
  allSelected: boolean = false;
  selectedOrders: any = [];
  orderDataService: OrderDataService;
  searchKeyWord: any;

  constructor(orderDataService: OrderDataService) {
    this.orderDataService = orderDataService;

    this.orderDataService.getSearchVal().subscribe((newValue) => {
      this.searchKeyWord = newValue;
    });
    this.orderDataService.getStatusVal().subscribe((newValue) => {
      this.searchKeyWord = newValue;
    });
    this.orderDataService.getDistributionVal().subscribe((newValue) => {
      this.searchKeyWord = newValue;
    });
  }

  ngOnInit(): void {
  }

  evtClickSelectAll() {
    if (this.allSelected) {
      this.selectedOrders = [];
      this.allSelected = false;
      this.orders = this.orders.map((x: any) => {
        x.isSelected = false;
        return x;
      });
    } else {
      this.selectedOrders = this.orders;
      this.allSelected = true;
      this.orders = this.orders.map((x: any) => {
        x.isSelected = true;
        return x;
      });
    }
    let formattedData = this.convertDataInFormat(this.selectedOrders);
    this.orderDataService.setExportOrders(formattedData);
  }

  evtClickSelectOrder(order:any) {
    if (order.isSelected) {
      order.isSelected = false;
      this.selectedOrders.splice(this.selectedOrders.findIndex((x:any)=> x.orderId === order.orderId),1);
    } else {
      order.isSelected = true;
      this.selectedOrders.push(order);
    }
    let formattedData = this.convertDataInFormat(this.selectedOrders);
    this.orderDataService.setExportOrders(formattedData);
  }

  convertDataInFormat(orders:any) {
    let formattedData:any = [];
    if (orders && orders.length) {
      for (let orderObj of orders) {
        let tempObj:any = {};
        for (let headerObj of this.headers) {
          tempObj[headerObj.label] = orderObj[headerObj.key];
        }
        formattedData.push(tempObj);
      }
    }
    return formattedData;
  }
}
