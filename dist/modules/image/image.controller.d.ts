import { Observable } from 'rxjs';
export declare class ImageController {
    getAllMeetings(): Promise<string>;
    uploadFile(file: any): Observable<Object>;
    findImage(imagename: any, res: any): Observable<Object>;
}
