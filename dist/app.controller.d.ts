import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createItem(itemDto: any): Promise<import("./item.entity").ItemEntity>;
    getItemById(id: number): Promise<import("./item.entity").ItemEntity>;
}
