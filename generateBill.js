const taxes = {
    sgst: 2.7,
    cgst: 1.7
};

let items = [
    {
        itemName: "roti",
        itemPrice: 8,
        itemType: "wheat"
    },
    {
        itemName: "dal",
        itemPrice: 40,
        itemType: "lush green"
    },
    {
        itemName: "rice",
        itemPrice: 30,
        itemType: "rice"
    },
    {
        itemName: "chinese",
        itemPrice: 100,
        itemType: "maida"
    },
    {
        itemName: "paneer",
        itemPrice: 120,
        itemType: "milk"
    }
];

let orderItems = [
    {
        itemName: "paneer",
        qantity: 1
    },
    {
        itemName: "dal",
        qantity: 2
    },
    {
        itemName: "rice",
        qantity: 2
    }
];

let grandTotal = 0;

function itemTotal(itemName) {
    let total = 0; 
    for (let i = 0; i < orderItems.length; i++) {
        if (itemName === orderItems[i].itemName) {
            total = getItemPrice(i) * orderItems[i].qantity;
            grandTotal += total;
            return total;
        }
    }
}

function payableAmount() {
    let sGst = grandTotal / 100 * taxes.sgst;
    let cGst = grandTotal / 100 * taxes.cgst;

    return grandTotal + sGst + cGst;
}

function sGst() {
    return grandTotal / 100 * taxes.sgst;
}

function cGst() {
    return grandTotal / 100 * taxes.cgst;
}

function addItems(itemName, itemQuantity) {
    let status = true;
    for (let item of orderItems) {
        if (item.itemName === itemName) {
            item.qantity += itemQuantity;
            status = false;
            return;
        }
    }
    if (status === true) {
        let newItem = { itemName: itemName, qantity: itemQuantity };
        orderItems.push(newItem);
        return;
    }
}

function getItemPrice(orderedItemId) {
    for (let i in items) {
        if (items[i].itemName == orderItems[orderedItemId].itemName) {
            return items[i].itemPrice;
        }
    }
}

function generateBill() {
    console.log("********************** Hotel Maharaja **********************");
    console.log("S/N      Item Name      Price      Quantity      Item Total");
    for (let i = 0; i < orderItems.length; i++) {
        console.log(` ${i + 1}        ${orderItems[i].itemName}           ${getItemPrice(i)}            ${orderItems[i].qantity}        ${itemTotal(orderItems[i].itemName)}`);
    }
    console.log("                                         Sub Total : ", grandTotal);
    console.log(`                                       SGST(${taxes.sgst} %) : `, sGst());
    console.log(`                                       CGST(${taxes.cgst} %) : `, cGst());
    console.log("*************************************************************");
    console.log("                                     Payable Amount: ", payableAmount());
    grandTotal = 0;
}

generateBill();
addItems("roti", 4);
addItems("paneer", 2);
addItems('roti',1);
generateBill();