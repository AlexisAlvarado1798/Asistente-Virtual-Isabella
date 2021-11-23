import {Component, OnInit} from '@angular/core';
import {TipsService} from '../../services/tips.service';
import {TipHumanizationModel} from '../../models/tip-humanization.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-tiphumanization-management',
  templateUrl: './tips-humanization-management-list.component.html',
  styleUrls: ['./tips-humanization-management-list.component.scss'],
  providers: [MessageService]
})
export class TipsHumanizationManagementListComponent implements OnInit {
  tipsHumanization: TipHumanizationModel[] = [];

  constructor(private tipshumaservice: TipsService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.tipshumaservice.getTipsHumanization().then(data => this.tipsHumanization = data);
    this.messageService.add({
      severity: 'success',
      closable: true,
      life: 10000,
      summary: 'Success',
      detail: 'Data Retornada'
    });
    let j = 0;
  }
}
