import { Component, inject } from '@angular/core';
import { IDispatchRanking } from 'src/app/models/dispatch.ranking.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dispatch-ranking',
  templateUrl: './dispatch-ranking.component.html',
  styleUrls: ['./dispatch-ranking.component.scss'],
})
export class DispatchRankingComponent {
  dataService: DataService = inject(DataService);
  dispatchRankings: IDispatchRanking[] = this.dataService.getDispatchRankings();
}
