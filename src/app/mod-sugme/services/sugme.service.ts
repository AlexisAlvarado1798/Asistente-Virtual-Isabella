import {Injectable} from "@angular/core";
import {SuggetionMenuModel} from "../models/suggetion-menu.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class SugmeService {
  constructor(private httpClient: HttpClient) {
  }

  getSuggetionMenu(): Promise<SuggetionMenuModel[]> {
    return this.httpClient.get<SuggetionMenuModel[]>('http://localhost:8080/sugme/api/v1/search/suggetionsMenu').toPromise();
  }
}
