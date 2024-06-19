const ConvenienceFee = 99;
let BagItemObjects;

onLoad();

function onLoad() {
    LoadBagItemObjects();
    DisplayBagItems();
    DisplayBagSummary();
}

function LoadBagItemObjects() {
    BagItemObjects = bagitems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(BagItemObjects);
}

function DisplayBagItems() {
    let BagContainerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    BagItemObjects.forEach(bagItem => {
        innerHTML += GenerateItemHTML(bagItem);
    });
    BagContainerElement.innerHTML = innerHTML;
}

function RemoveFromBag(itemId) {
    bagitems = bagitems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
    LoadBagItemObjects();
    Display_Bag_icon();
    DisplayBagItems();
    DisplayBagSummary();
}

function GenerateItemHTML(item) {
    return `
        <div class="bag-item-container">
            <div class="item-left-part">
                <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
                <div class="company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price-container">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
                </div>
                <div class="return-period">
                    <span class="return-period-days">${item.return_period} days</span> return available
                </div>
                <div class="delivery-details">
                    Delivery by
                    <span class="delivery-details-days">${item.delivery_date} Oct 2023</span>
                </div>
            </div>
            <div class="remove-from-cart" onclick="RemoveFromBag(${item.id})">X</div>
        </div>
    `;
}


function DisplayBagSummary()
{
    let BagSummaryElement = document.querySelector('.bag-summary');
    let TotalItems = BagItemObjects.length;
    let TotalMRP = 0;
    let TotalDiscount = 0;

    BagItemObjects.forEach(bagItem =>
        {
            TotalMRP += bagItem.original_price;
            TotalDiscount += bagItem.original_price - bagItem.current_price;
        }
    )

    let FinalPayment = TotalMRP-TotalDiscount + ConvenienceFee;

    BagSummaryElement.innerHTML =
    `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${TotalItems} Items) </div>
    <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs ${TotalMRP}</span>
    </div>
    <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs ${TotalDiscount}</span>
    </div>
    <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${FinalPayment}</span>
    </div>
    </div>
    <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
    </button>
    `
}