const productList=[
    {id:"01", name:"Nước mía", price:10000, image:"../assets/images/anh.jpg", productLink:"product-detail.html"},
    {id:"02", name:"Nước dừa", price:12000, image:"../assets/images/dua.jpg", productLink:"product-detail.html"},
    {id:"03", name:"Nước cam", price:8000, image:"../assets/images/cam.jpg", productLink:"product-detail.html"},
    {id:"04", name:"Trà đào", price:15000, image:"../assets/images/tradao.jpg", productLink:"product-detail.html"},
    {id:"05", name:"Trà chanh", price:10000, image:"../assets/images/trachanh.jpg", productLink:"product-detail.html"},
    {id:"06", name:"Cà phê sữa", price:18000, image:"../assets/images/caphe.jpg", productLink:"product-detail.html"},
    {id:"07", name:"Sinh tố xoài", price:20000, image:"../assets/images/xoai.jpg", productLink:"product-detail.html"},
    {id:"08", name:"Sinh tố dâu", price:22000, image:"../assets/images/dau.jpg", productLink:"product-detail.html"},
    {id:"09", name:"Nước ép táo", price:17000, image:"../assets/images/tao.jpg", productLink:"product-detail.html"},
    {id:"10", name:"Sữa tươi", price:14000, image:"../assets/images/suatuoi.jpg", productLink:"product-detail.html"}
]
function addProduct(id, name, price, image, hyperLink)
{
    //Tạo một product item
    //1. Tao khung chua 1 item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-3 col-sm-6");

    //2. Tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    //3. Tạo đối tượng hình ảnh
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover h-100");
    //4. Gán hình vào khung
    productImage.appendChild(Image);

    //5. Tạo khung chứa thông tin
     const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center text-truncate");
    //Tạo paragraph 1
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
  
    //Tạo paragraph 2
    const productPrice = document.createElement("p");
    const formattedPrice = Number(price).toLocaleString("vi-VN") + " đ";
    productPrice.setAttribute("class", "product-price text-danger fw-bold mb-2");
    const productPriceText = document.createTextNode(formattedPrice);
    productPrice.appendChild(productPriceText);

    
    //Tạo hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    productLink.setAttribute("class", "btn btn-outline-info btn-sm mt-auto");

    //gán paragraph 1, 2 và Link vào khung
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    //6. Gán khung hình và khung thông tin vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    //Gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
    const container = document.getElementById('product-list');
    
    container.innerHTML = "";

    products.forEach(item => {
        // Tạo element cha bằng createElement 
        const productItem = document.createElement('div');
        productItem.className = 'product-item col-md-3 col-sm-6';

        // Sử dụng Template Literal nạp dữ liệu vào
        productItem.innerHTML = `
            <div class="product-image ratio ratio-1x1 overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
            </div>
            <div class="product-info p-2 text-center">
                <p class="product-name mb-1">${item.name}</p>
                <p class="product-price text-danger fw-bold mb-2">
                    ${item.price.toLocaleString('vi-VN')} đ
                </p>
                <a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
                    Xem chi tiết
                </a>
            </div>
        `;

        container.appendChild(productItem);
    });
}
function addNewProduct() {
    const name = document.getElementById("name").value;
    const price = Number(document.getElementById("price").value);
    const image = document.getElementById("image").value;

    const newProduct = {
        id: Date.now(), // tạo id tự động
        name: name,
        price: price,
        image: image,
        productLink: "#"
    };

    productList.push(newProduct);

    showProduct(productList);

    // reset form
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
}