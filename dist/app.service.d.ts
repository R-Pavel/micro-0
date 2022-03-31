import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';
export declare class AppService {
    private readonly itemRepository;
    constructor(itemRepository: ItemRepository);
    getHello(): string;
    createItem(itemDto: any): Promise<ItemEntity>;
    getItemById(id: any): Promise<ItemEntity>;
}
