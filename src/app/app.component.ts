import { Component, OnInit, } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { NbAService } from './services/nba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'using-kendo-grid';
  public playerData: GridDataResult = { data: [], total: 0 };

  public playerGridState: State = {
    skip: 0,
    take: 5,
    sort: [],
  }

  constructor(private nbaService: NbAService) {

  }
  ngOnInit() {
    this.getData()
  }


  getData() {
    this.nbaService.getData().subscribe(data => {
      this.playerData = process(data, this.playerGridState);
    });
  }
  public onDataStateChange(state: State) {
    this.playerGridState = state;
    this.getData();
  }

}



