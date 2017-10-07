export class Item {
  constructor(
    public imgUrl: string,
    public price: number,
    public description: string,
    public title: string,
    public inStock: boolean,
    public selectedQty: number,
    public quantity?: number) {}

}
