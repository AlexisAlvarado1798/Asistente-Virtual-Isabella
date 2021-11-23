import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_SERVER} from '../../../environments/environment';
import {TipHumanizationModel} from '../models/tip-humanization.model';


@Injectable({
  providedIn: 'root',
})
export class TipsService {
  constructor(private httpClient: HttpClient) {
  }

  getTipsHumanization(): Promise<TipHumanizationModel[]> {
    const url = `${API_SERVER}/tiphuma/api/v1/search/tipshumanization`;
    return this.httpClient.get<TipHumanizationModel[]>(url).toPromise();
  }

  createTipHumanization(tip: TipHumanizationModel): Promise<any> {
    const url = `${API_SERVER}/tiphuma/api/v1/tipsHumanization`;
    return this.httpClient.post(url, tip).toPromise();
  }
}
