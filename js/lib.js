/*const productList=[
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
]*/
const productList = [
    { 
        id: "01", 
        name: "Nước mía", 
        price: 10000, 
        image: "../assets/images/anh.jpg", 
        productLink: "product-detail.html",

        desc: "Nước mía tươi nguyên chất được ép trực tiếp từ những cây mía ngọt tự nhiên, mang đến hương vị thanh mát và giàu năng lượng. Thức uống này giúp giải nhiệt hiệu quả trong những ngày nắng nóng, đồng thời bổ sung khoáng chất và vitamin cần thiết cho cơ thể. Nước mía ngon hơn khi uống lạnh và thêm chút tắc hoặc chanh để tăng hương vị."
    },

    { 
        id: "02", 
        name: "Nước dừa", 
        price: 12000, 
        image: "../assets/images/dua.jpg", 
        productLink: "product-detail.html",

        desc: "Nước dừa tươi mát được lấy từ những trái dừa tự nhiên, có vị ngọt thanh dịu nhẹ và rất tốt cho sức khỏe. Đây là loại nước giải khát giàu điện giải, giúp bù nước và làm mát cơ thể nhanh chóng. Nước dừa thích hợp sử dụng hàng ngày, đặc biệt trong thời tiết nóng bức."
    },

    { 
        id: "03", 
        name: "Nước cam", 
        price: 8000, 
        image: "../assets/images/cam.jpg", 
        productLink: "product-detail.html",

        desc: "Nước cam thơm ngon được làm từ cam tươi nguyên chất, chứa nhiều vitamin C giúp tăng cường sức đề kháng và bổ sung năng lượng cho cơ thể. Với vị chua ngọt hài hòa, nước cam là thức uống yêu thích của nhiều người và phù hợp cho mọi lứa tuổi."
    },

    { 
        id: "04", 
        name: "Trà đào", 
        price: 15000, 
        image: "../assets/images/tradao.jpg", 
        productLink: "product-detail.html",

        desc: "Trà đào là sự kết hợp hoàn hảo giữa vị trà thanh mát và hương đào thơm ngọt tự nhiên. Những lát đào giòn ngon hòa quyện cùng trà lạnh tạo nên thức uống hấp dẫn, giúp giải nhiệt hiệu quả và mang lại cảm giác thư giãn dễ chịu."
    },

    { 
        id: "05", 
        name: "Trà chanh", 
        price: 10000, 
        image: "../assets/images/trachanh.jpg", 
        productLink: "product-detail.html",

        desc: "Trà chanh mát lạnh với vị trà đậm nhẹ kết hợp cùng vị chua thanh của chanh tươi tạo nên hương vị vô cùng sảng khoái. Đây là loại đồ uống quen thuộc, thích hợp để giải khát và thư giãn cùng bạn bè trong những buổi gặp gỡ."
    },

    { 
        id: "06", 
        name: "Cà phê sữa", 
        price: 18000, 
        image: "../assets/images/caphe.jpg", 
        productLink: "product-detail.html",

        desc: "Cà phê sữa đậm đà được pha từ cà phê nguyên chất kết hợp cùng sữa đặc béo ngậy, mang lại hương vị thơm ngon khó cưỡng. Đây là thức uống quen thuộc giúp tỉnh táo, tăng năng lượng và phù hợp cho những buổi sáng hoặc giờ nghỉ thư giãn."
    },

    { 
        id: "07", 
        name: "Sinh tố xoài", 
        price: 20000, 
        image: "../assets/images/xoai.jpg", 
        productLink: "product-detail.html",

        desc: "Sinh tố xoài được làm từ xoài chín tự nhiên, xay nhuyễn cùng sữa tạo nên hương vị thơm ngon và béo mịn. Thức uống này không chỉ giải nhiệt mà còn bổ sung vitamin và dưỡng chất tốt cho cơ thể, phù hợp cho mọi lứa tuổi."
    },

    { 
        id: "08", 
        name: "Sinh tố dâu", 
        price: 22000, 
        image: "../assets/images/dau.jpg", 
        productLink: "product-detail.html",

        desc: "Sinh tố dâu thơm ngọt với màu sắc hấp dẫn được làm từ những quả dâu tươi kết hợp cùng sữa mát lạnh. Đây là loại thức uống giàu vitamin và chất chống oxy hóa, giúp làm đẹp da và mang lại cảm giác tươi mới mỗi ngày."
    },

    { 
        id: "09", 
        name: "Nước ép táo", 
        price: 17000, 
        image: "../assets/images/tao.jpg", 
        productLink: "product-detail.html",

        desc: "Nước ép táo nguyên chất có vị ngọt thanh tự nhiên, chứa nhiều vitamin và khoáng chất tốt cho sức khỏe. Thức uống này giúp thanh lọc cơ thể, hỗ trợ tiêu hóa và mang lại cảm giác tươi mát, dễ chịu khi thưởng thức."
    },

    { 
        id: "10", 
        name: "Sữa tươi", 
        price: 14000, 
        image: "../assets/images/suatuoi.jpg", 
        productLink: "product-detail.html",

        desc: "Sữa tươi thơm ngon, giàu dinh dưỡng giúp bổ sung canxi và năng lượng cần thiết cho cơ thể. Với hương vị béo nhẹ tự nhiên, sữa tươi phù hợp cho cả trẻ em và người lớn, có thể dùng lạnh hoặc nóng tùy sở thích."
    }
];
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
    productPrice.setAttribute("class", "product-price text-danger fw-bold mb-2")
    const productPriceText = document.createTextNode(price.toLocaleString("vi-VN") + "đ");
    productPrice.appendChild(productPriceText);

    
    //Tạo hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink+"?id="+id);
    productLink.setAttribute("class", "btn btn-sm btn-outline-primary w-100");

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
            ${Number(item.price).toLocaleString('vi-VN')} đ
        </p>
        <a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100 mb-1">
            Xem chi tiết
        </a>
        <button class="btn btn-sm btn-danger w-100" onclick="deleteProduct('${item.id}')">
            Xóa
        </button>
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
function deleteProduct(id) {
    // Lọc bỏ sản phẩm có id cần xóa
    const newList = productList.filter(item => item.id != id);

    // Cập nhật lại mảng
    productList.length = 0;
    productList.push(...newList);

    // Render lại
    showProduct(productList);
}