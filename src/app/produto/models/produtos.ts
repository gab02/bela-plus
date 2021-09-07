
  export class Produto {
    constructor(
     public brand: string,
     public sku: string,
     public productId: number,
     public categoryId: number,
     public condition:	string,
     public description:	string,
     public fiscalNcm: number,
     public fiscalSource: number,
     public model: string,
     public name: string,
     public packageHeight: number,
     public packageLength: number,   
     public packageWidth: number,
     public price:	number,
     public weight: number,	
        ) {}

}