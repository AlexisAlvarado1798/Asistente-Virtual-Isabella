import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SugmeService} from "../../services/sugme.service";
import {SuggetionMenuModel} from "../../models/suggetion-menu.model";
import {typeMultimediaConst} from "../../constants/type-multimedia.const";


@Component({
  selector: 'app-sugme-menu-management',
  templateUrl: './sugme-menu-management.component.html',
  styleUrls: ['./sugme-menu-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SugmeMenuManagementComponent implements OnInit {
  model: SuggetionMenuModel[] = [];
  showCard = false;
  msgs: any;

  constructor(private sugmeService: SugmeService) {
  }

  ngOnInit(): void {
    this.getSuggetionsMenu();
  }

  async getSuggetionsMenu(): Promise<void> {
    this.model = await this.sugmeService.getSuggetionMenu();
    this.bindCommandItems(this.model)
  }

  bindCommandItems(menus: SuggetionMenuModel[]): void {
    menus.forEach(o => {
      if (o.isMenu) {
        this.bindCommandItems(o.items || []);
      } else {
        o.command = this.callItem.bind(this);
      }
    });
  }

  callItem(event: any): void {
    console.log(event);
    if (event.item.type.id == typeMultimediaConst.LINK || event.item.type.id == typeMultimediaConst.PDF) {
      window.open(event.item.data, '_blank');
    }

    if (event.item.type.id == typeMultimediaConst.HTML) {
      this.showCard = true;
      this.msgs = event.item.data;
    }
  }
}
