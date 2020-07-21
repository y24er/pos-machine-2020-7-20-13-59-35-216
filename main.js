var itemList=[
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ];

function printReceipt(barcodes) {
    let itemsWithCount = decodeBarcides(barcodes);
    let itemsWithSubTotal = getSubTotal(itemsWithCount);
    console.log(printAllReceipt(itemsWithSubTotal));
};


function decodeBarcides(barcodes){
    var itemCounts=getItemCount(barcodes);
    return getItems(itemCounts);
};

function getItemCount(barcodes){
    var itemCounts = new Map();
    barcodes.filter(barcode=>{
        if(itemCounts.get(barcode)==null){
            itemCounts.set(barcode,1);
        }else{
            itemCounts.set(barcode,itemCounts.get(barcode)+1);
        }
    });
    return itemCounts;
}

function getItems(itemCounts){
    var itemsInformationWithCount=[];
    itemCounts.forEach(function(value,key){
        itemList.filter(item=>{
            if(item.barcode==key){
                item.quantity=value;
                itemsInformationWithCount.push(item);
            }
        })
    });
    return itemsInformationWithCount;
    
}
function getSubTotal(itemsInformationWithCount){
    var itemsInformations=[];
    itemsInformationWithCount.filter(item=>{
        item.subTotal=item.price*item.quantity;
        itemsInformations.push(item);
    });
    return itemsInformations;
}

function printAllReceipt(itemsInformations){
    let receipt="\n***<store earning no money>Receipt ***\n";
    itemsInformations.filter(item=>{
        receipt += printReceiptLine(item);
    });
    receipt+="----------------------\nTotal: "+getTotalMoney(itemsInformations)+" (yuan)\n**********************";
    return receipt;
}

function printReceiptLine(itemInformation){
    var line = "";
    line = "Name: "+itemInformation.name+", Quantity: "+itemInformation.quantity+", Unit price: "+itemInformation.price+" (yuan), Subtotal: "+itemInformation.subTotal+" (yuan)"+"\n";
    return line;
}

function getTotalMoney(itemsInformations){
    let totalMoney=0;
    itemsInformations.filter(item=>{
        totalMoney+=item.subTotal;
    });
    return totalMoney;
}

module.exports = {
    printReceipt
};