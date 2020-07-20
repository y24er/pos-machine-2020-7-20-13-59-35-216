function printReceipt(barcodes) {
    console.log(`
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************`)
}


module.exports = {
    printReceipt
};