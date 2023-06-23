//product object
function Product(photo, name, price, desc,category) {
    this.photo = photo;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.category=category;
}

var prod_list=[];
prod_list.push(new Product("media/menu/GnocchiAlPomodoro.jpg","Gnocci al Pomodoro",5.00,"Gnocchi al pomodoro","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRagu.jpg","Gnocci al Rag\u00F9",5.50,"Gnocchi al rag\u00F9","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRaguDiConiglio.jpg","Gnocci al Rag\u00F9 di coniglio",5.50,"Gnocchi al rag\u00F9 di coniglio","Primi"));
prod_list.push(new Product("media/menu/SapaghettiAlPomodoro.jpg","Spaghetti al Pomodoro",5.00,"spaghetti al pomodoro","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRagu.jpg","Gnocci al Rag\u00F9",5.50,"Spaghetti al rag\u00F9","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRaguDiConiglio.jpg","Gnocci al Rag\u00F9 di Coniglio",5.50,"Spaghetti al rag\u00F9 di coniglio","Primi"));


prod_list.push(new Product("media/menu/PiattoEstivo.jpg","Piatto Estivo",8.00,"mozzarella di bufala, pomodoro, prosciutto crudo e pane","Secondi"));
prod_list.push(new Product("media/menu/BisteccaDiCavallo.jpg","Bistecca di Cavallo",10.00,"Bistecca di cavallo con pane","Secondi"));
prod_list.push(new Product("media/menu/StincoDiMaiale.jpg","Stinco",9.00,"Stinco di maiale al forno con pane","Secondi"));
prod_list.push(new Product("media/menu/Costicine.jpg","Costicine",7.00,"3 costicine con polenta","Secondi"));
prod_list.push(new Product("media/menu/Pancetta.jpg","Pancetta alla Piastra",6.00,"Pancetta alla piastra con pane","Secondi"));
prod_list.push(new Product("media/menu/CosciaDiPollo.jpg","Coscia di Pollo",7.00,"Coscia di pollo disossata con polenta","Secondi"));
prod_list.push(new Product("media/menu/Salsiccia.jpg","Salsiccia",6.00,"2 salsicce con polenta","Secondi"));
prod_list.push(new Product("media/menu/Tagliata.png","Tagliata",11.00,"Tagliata di manzo con rucola e pane","Secondi"));
prod_list.push(new Product("media/menu/PiattoSagra.jpg","Piatto Sagra",10.00,"2 costicine, salsiccia, pancetta e polenta","Secondi"));
prod_list.push(new Product("media/menu/PiattoBimbi.jpg","Piatto Bimbi",5.00,"Wurstel con patate","Secondi"));
prod_list.push(new Product("media/menu/FormaggioCotto.jpg","Formaggio Cotto",6.00,"Formaggio cotto con polenta","Secondi"));
prod_list.push(new Product("media/menu/FritturaDiAnelli.jpg","Frittura di Anelli",10.00,"Frittura di anelli di totano con polenta","Secondi"));


prod_list.push(new Product("media/menu/Patate.jpg","Patatine Fritte",2.50,"Patatine fritte","Contorni"));
prod_list.push(new Product("media/menu/Funghi.jpg","Funghi",3.00,"Funghi","Contorni"));
prod_list.push(new Product("media/menu/Fagioli.jpg","Fagioli",3.00,"Fagioli","Contorni"));
prod_list.push(new Product("media/menu/Patate.jpg","Patatine Fritte (BAR)",2.50,"Patatine fritte da ritirare presso il bar","Contorni"));

prod_list.push(new Product("media/menu/PaninoOnto.jpg","Panino ONTO",6.00,"Panino con pastin, cipolla e peperoni","Panini"));
prod_list.push(new Product("media/menu/PaninoPastin.jpg","Panino PASTIN",5.50,"Panino con pastin","Panini"));
prod_list.push(new Product("media/menu/PaninoVegetariano.jpg","Panino VEGETARIANO",6.00,"Panino con cipolla e peperoni","Panini"));
prod_list.push(new Product("media/menu/PaninoPorchetta.jpg","Panino PORCHETTA",4.00,"Panino con porchetta","Panini"));

prod_list.push(new Product("media/menu/Acqua.jpg","Acqua minerale 0.5lt",1.00,"Acqua minerale naturale o frizzante","Bevande"));
prod_list.push(new Product("media/menu/Bibite.jpg","Bibite",2.00,"coca cola, aranciata, lemonsoda o the","Bevande"));
prod_list.push(new Product("media/menu/Succo.jpg","Succo di Frutta",2.00,"Succo di frutta, gusti assortiti","Bevande"));
prod_list.push(new Product("media/menu/Caffe.jpg","Caff\u00E8",1.00,"Caff\u00E8","Bevande"));
prod_list.push(new Product("media/menu/Ombra.jpg","Ombra di Vino",1.00,"Ombra di vino rosso o bianco","Bevande"));
prod_list.push(new Product("media/menu/Vino.jpg","Vino in Bottiglia SFUSO (0.75lt)",5.00,"Vino in Bottiglia SFUSO (0.75lt)","Bevande"));
prod_list.push(new Product("media/menu/Vino.jpg","Vino in Bottiglia (0.75lt)",8.00,"Vino in Bottiglia (0.75lt)","Bevande"));
prod_list.push(new Product("media/menu/Prosecco.jpg","Prosecco DOC Treviso BRUT",10.00,"Prosecco DOC Treviso BRUT","Bevande"));

prod_list.push(new Product("media/menu/BirraCastelloBionda.jpg","Birra BIONDA 0,25cc",2.50,"Birra bionda Castello, bicchiere da 0,25cc","Bevande"));
prod_list.push(new Product("media/menu/BirraPedavenaNF.jpg","Birra NON FILTRATA 0,25cc",2.50,"Birra non filtrata Dolomite, bicchiere da 0,25cc","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloRossa.jpg","Birra ROSSA 0,25cc",2.50,"Birra rossa Castello, bicchiere da 0,25cc","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloBionda.jpg","Birra BIONDA 0,4cc",4.50,"Birra bionda Castello, bicchiere da 0,4cc","Bevande"));
prod_list.push(new Product("media/menu/BirraPedavenaNF.jpg","Birra NON FILTRATA 0,4cc",4.50,"Birra non filtrata Dolomite, bicchiere da 0,4cc","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloRossa.jpg","Birra ROSSA 0,4cc",4.50,"Birra rossa Castello, bicchiere da 0,4cc","Bevande"));
prod_list.push(new Product("media/menu/Caraffa.jpg","Caraffa di BIRRA 1,5lt",12.00,"Caraffa di birra (1,5lt) Rossa,Bionda o non filtrata","Bevande"));


prod_list.push(new Product("media/menu/Dolci.jpg","Fetta di dolce",2.50,"Profiteroles, torta della nonna o torta al cioccolato","Dolci"));
prod_list.push(new Product("media/menu/Sgroppino.jpg","Sgroppino",2.50,"Sgroppino gusto limone o liquirizia","Dolci"));


//declaring shopping cart
var shoppingCart;

//defining url
var host= window.location.protocol+"//"+window.location.host+"/";
var sagronewebapp=window.location.href.replace(host,"");
//console.log(basicUrl);
//console.log(sagronewebapp);
sagronewebapp=sagronewebapp.slice(0,sagronewebapp.indexOf("/"));
//console.log(sagronewebapp);
var baseURL=host+sagronewebapp;
var product_list;

document.addEventListener("DOMContentLoaded", function(){
    var categoriesList=['Primi','Secondi','Contorni','Panini','Bevande','Dolci'];


    generate_categories_list(categoriesList);


});

function generate_categories_list(categoriesList){
    var categoriesdiv=document.getElementById("categories-list");
    var maincon=document.getElementById("full-content");
    if(categoriesList.length > 0){
        let firstCategory; //needed to load the first elements.
        for(var i=0; i<categoriesList.length; i++){
            //var categoryli= document.createElement("li");
            //categoryli.className = "nav-item category-item";
            var categorya= document.createElement("a");
            categorya.classList.add("nav-link");
            categorya.classList.add("category-item");

            var cat = categoriesList[i];
            categorya.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);

            categorya.href="#"+cat;
            categoriesdiv.appendChild(categorya);


            var categorytitle=document.createElement("h3");
            categorytitle.innerText=cat;
            categorytitle.classList="category-title";
            categorytitle.id=cat;
            var categorydiv=document.createElement("div");
            categorydiv.id=cat+"-div";
            maincon.appendChild(categorytitle);
            maincon.appendChild(categorydiv);
            generate_product_list_by_categories(prod_list,cat);
        }


    }else{
        let categoriesNav= document.getElementById("categories-nav");
        let categoryParent=categoriesNav.parentNode;
        categoryParent.removeChild(categoriesNav);
        printError("No products available!",20);
    }

}




function generate_product_list_by_categories(productsList,category){

    var productContainer = document.getElementById(category+"-div");
    productContainer.innerHTML = "";
    for (let i = 0; i < productsList.length; i++) {
        (function () {
            var product = productsList[i];
            if(product.category===category){
                var name = product.name;
                var price = product.price.toFixed(2);
                var photo = product.photo;

                var row = document.createElement("div");
                row.classList.add("product-row");
                row.classList.add("row");
                row.classList.add("gx-0");
                row.classList.add("shadow-sm", "bg-white", "rounded", "align-items-center");
                row.setAttribute("data-bs-toggle", "modal");
                row.setAttribute("data-bs-target", "#staticBackdrop");
                row.addEventListener("click", function () {
                    modifyPopup(product);
                });


                //Adding the image
                let col_img = document.createElement("div");
                col_img.classList.add("col");
                let imageElement = document.createElement("img");
                console.log(baseURL);
                imageElement.src = photo;
                imageElement.alt = "";
                imageElement.classList.add("product-image");
                col_img.appendChild(imageElement);
                row.appendChild(col_img);

                //Adding the name
                let col_name = document.createElement("div");
                col_name.classList.add("col", "text-center", "prod-name");
                col_name.innerHTML = name;

                row.appendChild(col_name);
                //Adding the price
                let col_price = document.createElement("div");
                col_price.classList.add("col","price-col", "text-center");
                col_price.innerHTML = Number(price).toFixed(2)+" \u20AC";

                row.appendChild(col_price);


                productContainer.appendChild(row);
            }

        })();


    }


}
function modifyPopup(product) {
    var popupTitle = $("#staticBackdropLabel");
    popupTitle.html(product.name);
    var dishDescription = $("#dishDescription");
    dishDescription.html("");
    dishDescription.html(product.desc);

    var dishImage = $("#dish-image");
    dishImage.attr("src",product.photo);
    dishImage.attr("alt",product.name);
    dishImage.attr("title",product.name);



}


var btn_scroll_top;
window.onload = function(){
    btn_scroll_top = document.getElementById("btn_scroll-top");
    btn_scroll_top.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
window.onscroll = function () {
    if (window.pageYOffset > 20)
        btn_scroll_top.style.display = "block";
    else
        btn_scroll_top.style.display = "none";
};

