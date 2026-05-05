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
function addProduct(id,name, price, image, hyperLink) {
    //Tạo một product item
    //1.Tạo khung chua 1 item
    const productItem = document.createElement("div")
    productItem.setAttribute("class","product-item col-md-3 col-lg-6")
    //2.Tạo khung chứa hình
    const productImage = document.createElement("div")
    productImage.setAttribute("class","product-image ratio ratio-1x1 overflow-hidden")
    //3.Tạo đối tượng hình ảnh
    const Image = document.createElement("img")
    Image.setAttribute("src",image)
    Image.setAttribute("alt",name)
    productImage.setAttribute("class","img-fluid object-fit-cover h-100")

    //4.Gán hình vào khung
    productImage.appendChild(Image)

    //5.Tạo khung chứa thông tin
    const productInfo = document.createElement("div")
    productInfo.setAttribute("class","product-info text-center")
    //Tạo paragraph 1
    const productName = document.createElement("p")
    const productNameText=document.createTextNode(name)
    productName.appendChild(productNameText)

    //Tạo paragraph 2
    const productPrice = document.createElement("p")
    const productPriceText=document.createTextNode(price)
    productPrice.appendChild(productPriceText)
    //Tạo hyperLink
    const productLink = document.createElement("a")
    const productLinkText=document.createTextNode("Xem chi tiết")
    productLink.appendChild(productLinkText)
    productLink.setAttribute("href",hyperLink)
    productLink.setAttribute("class","btn btn-info")
    //Gán paragrapg 1,2 và link
    productInfo.appendChild(productName)
    productInfo.appendChild(productPrice)
    productInfo.appendChild(productLink)
    //6.Gán khung hình và khung thông tin vào product item
    productItem.appendChild(productImage)
    productItem.appendChild(productInfo)
    //Gán product item vào product list
    document.getElementById("product-list").appendChild(productItem)
}