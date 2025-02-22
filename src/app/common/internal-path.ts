import { environment } from "../../environments/environment";

export class InternalPath {
    static readonly apiUrlV2 = environment.apiUrl + '/api/v2/';
    static readonly dictionary = this.apiUrlV2 + 'entries/en/:word';

}