let bagitems;
onLoad();
function onLoad()
{
    let bagitemsStr = localStorage.getItem('bagitems');
    bagitems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
    Display_Products_on_HomePage();
    Display_Bag_icon();
}

function AddToBag(itemId)
{
    bagitems.push(itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagitems));
    Display_Bag_icon();
}

function Display_Bag_icon()
{
    let BagItemCount = document.querySelector('.bag-item-count');
    BagItemCount.innerText = bagitems.length;
    if(bagitems.length>0)
        {
            BagItemCount.style.visibility = 'visible';
            BagItemCount.innerText = bagitems.length;
        }
        else
        {
            BagItemCount.style.visibility = 'hidden';
        }
}

function Display_Products_on_HomePage()
{
    let ItemsContainerElement  = document.querySelector('.items-container');
    if(!ItemsContainerElement){
        return;
    }
    let innerHTML='';
    items.forEach(item => {
    innerHTML+= `   
    <div class="item-container">
    <img class="item-image" src="${item.image}" alt="Product Image">
    <div class="ratings"> ${item.rating.stars} ⭐ | ${item.rating.count} </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="previous-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="Add-to-bag-btn" onclick = "AddToBag(${item.id})">Add to Bag</button>
    </div>`
});
ItemsContainerElement.innerHTML = innerHTML;
}


// let item = { 
//     item_image: 'images/1.jpg',
//     ratings: 
//     {
//         stars: 4.5,
//         no_of_reviews: 1400,
//     },
//     comapany_name: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     current_price: 2000,
//     previous_price: 4000,
//     discount_percentage: 50,
// };
