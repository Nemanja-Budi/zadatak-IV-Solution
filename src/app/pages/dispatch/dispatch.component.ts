import { Component, inject } from '@angular/core';
import { IDate } from 'src/app/models/date.model';
import { IDispatch } from 'src/app/models/dispatch.model';
import { SidebarData } from 'src/app/models/sidebar.data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss'],
})
export class DispatchComponent {
  dataService: DataService = inject(DataService);
  dates: IDate[] = this.dataService.getDates();
  dispatchs: IDispatch[] = this.dataService.getDispatchs();
  sidebarData: SidebarData[] = this.dataService.getSidebarData();
}
