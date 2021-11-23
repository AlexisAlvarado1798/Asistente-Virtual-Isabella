import {Component, OnInit} from '@angular/core';
import {TipsService} from '../../services/tips.service';
import {NameModel} from '../../../mod-core/models/name.model';
import {TipHumanizationModel} from '../../models/tip-humanization.model';
import {DaysModel} from '../../models/days.model';

@Component({
  selector: 'app-tiphumanization-management',
  templateUrl: './tips-humanization-management.component.html',
  styleUrls: ['./tips-humanization-management.component.scss']
})


export class TipsHumanizationManagementComponent implements OnInit {
  tips = <NameModel>{};
  msgs: any;
  days = <DaysModel>{};
  time?: Date;
  cronExpressionDays?: string;
  cronExpression: string = '* * * * *';
  hour?: any;
  minute?: any;

  constructor(public tipsService: TipsService) {
  }

  ngOnInit(): void {
  }

  async onClickSave(): Promise<void> {
    this.valid(this.tips);
    this.generateCronExpression();
    await this.tipsService.createTipHumanization(this.tips);
  }

  generateCronExpression() {
    this.hour = this.time?.getHours();
    this.minute = this.time?.getMinutes();

    this.cronExpressionDays = `${this.days['monday'] ? '2,' : ''}${this.days['tuesday'] ? '3,' : ''}${this.days['wednesday'] ? '4,' : ''}${this.days['thursday'] ? '5,' : ''}${this.days['friday'] ? '6,' : ''}`;

    if (this.cronExpressionDays == "") {
      this.cronExpressionDays = `* `;
    }

    if (this.minute == undefined || this.hour == undefined) {
      this.hour = `*`;
      this.minute = `*`;
    }

    this.cronExpressionDays = this.cronExpressionDays.substring(0, this.cronExpressionDays.length - 1)
    this.cronExpression = "0 " + this.minute + " " + this.hour + " ?" + " * " + this.cronExpressionDays+ " *";
    //console.log("La expresion Cron se esta construyendo" + this.cronExpression);
    this.tips.conExpressionDate = this.cronExpression;
    this.days = <DaysModel>{};
  }

  valid(tip: TipHumanizationModel) {
    if (tip.code == null && tip.description == null) {
        this.msgs = "Todos los Campos del formualrios Obligatorios"
    }
  }

  onCloseMessage() {
    this.msgs = "";
  }
}
