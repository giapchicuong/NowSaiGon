const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productList = $(".productList");
const searchInput = $(".search");
const sortValue = $(".Sort-value");
const pg = document.getElementById("pagination");
data = [
  {
    name: "Nike Air Zoom 36",
    price: 3200000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/f-img-1.2.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom  36",
    price: 4200000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/f-img-2.2.png",
    cat: "Adidas",
  },
  {
    name: "Nike Air Zoom  36",
    price: 5000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/f-img-3.2.png",
    cat: "Jordan",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: "Vanz 36",
    price: 6000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-1.png",
    cat: "Vanz",
  },
  {
    name: " A Nike Air Zoom Pegasus 36",
    price: 7000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-2.png",
    cat: "Vanz",
  },
  {
    name: " B Nike Air Zoom Pegasus 36",
    price: 8000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-3.png",
    cat: "Jordan",
  },
  {
    name: " C Nike Air Zoom Pegasus 36",
    price: 5000000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-4.png",
    cat: "Nike",
  },
  {
    name: " D Nike Air Zoom Pegasus 36",
    price: 3030000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-5.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3040000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/product-6.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3100000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-3.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 10402000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-4.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 4500000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-5-purple.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 30001230,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-5-black.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3406600,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-5-purple.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3004000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-6.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3005000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-free.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3005000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-free.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3005000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-free.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3005000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-free.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3005000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-metcon-free.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 3060000,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-pegasus-36.png",
    cat: "Nike",
  },
  {
    name: "Nike Air Zoom Pegasus 36",
    price: 300500,
    sizes: [40, 41, 42, 43],
    Status: "Hết Hàng",
    image: "../images/nike-zoom-kobe-1-protro.png",
    cat: "Nike",
  },
];
let currentPage = 1;
let perPage = 8;
let totalPage = data.length / 2;
let perData = [];
perData = data.slice(
  (currentPage - 1) * perPage,
  (currentPage - 1) * perPage + perPage
);

// Xem nhanh sản phẩm
const seeall = () => {
  productList.addEventListener("click", (e) => {
    id = e.target.parentElement.dataset.indexNumber;
    console.log(id)
   data.filter((item,i)=>{
    if(i==id){
      console.log(i)
      $(".big-image-1").src =e.target.parentElement.children[0].src
      $(".product-detail-name-title").textContent=e.target.parentElement.children[3].children[0].textContent
      $(".product-detail-price").textContent = e.target.parentElement.children[3].children[1].textContent
    }
   })
    
  });
};
const displayProducts = (filteredProducts) => {
  productList.innerHTML = filteredProducts
    .map(
      (product,i) =>
        `
        <div class="product-item col-sm-3"   data-index-number=${i}>
        <img src=${product.image} alt=${product.name} class="product-item-image" />
        <a class="product-item-a" href="" data-toggle="modal" data-target="#ProductFast" >Xem nhanh</a>  
        <a class="product-item-a-2" href="./ProductItem.html">Tùy chọn</a>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price}</div>
        </div>
     </div>
             `
    )
    .join("");
};
displayProducts(perData);

searchInput.addEventListener("keyup",(e)=> {
  const value = e.target.value.toLowerCase()
  if(value){
    displayProducts(perData.filter((item)=> item.name.toLowerCase().indexOf(value) !== -1))
  }else {
    displayProducts(perData)
  }
})

const setSort = () => {
  sortValue.addEventListener("click", (e) => {
    const selectedSort = e.target.value;
    if (selectedSort == 1) {
      displayProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (selectedSort == 2) {
      displayProducts(data.sort((a, b) => b.name.localeCompare(a.name)));
    } else if (selectedSort == 3) {
      displayProducts(data.sort((a, b) => a.price - b.price));
    } else if (selectedSort == 4) {
      displayProducts(data.sort((a, b) => b.price - a.price));
    } else {
      displayProducts(data);
    }
  });
};

function handlePageNumber(num) {
  currentPage = num;
  perData = data.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  if(currentPage===1) {
    pg.children[0].style = "background:#0089ff;color:black"
    pg.children[1].style = "background:white"
    pg.children[2].style = "background:white"
  }
  else if(currentPage===2){ 
    pg.children[0].style = "background:white"
    pg.children[1].style = "background:#0089ff;color:black"
    pg.children[2].style = "background:white"
  }
  else {
    pg.children[0].style = "background:white"
    pg.children[1].style = "background:white"
    pg.children[2].style = "background:#0089ff;color:black"
  }

  displayProducts(perData);
}
function renderPageNumber() {
  totalPage = data.length / perPage;
  for (let i = 1; i < totalPage; i++) {
    pg.innerHTML += `<li onclick ="handlePageNumber(${i})">${i}</li>`;
    pg.children[0].style = "background:#0089ff;color:black"
  }
}

renderPageNumber();
setSort();
seeall()