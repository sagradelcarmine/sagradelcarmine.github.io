//product object
function Product(photo, name, price, desc,category) {
    this.photo = photo;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.category=category;
}

var prod_list=[];
prod_list.push(new Product("media/menu/GnocchiAlPomodoro.png","Gnocchi al Pomodoro",5.50,"Gnocchi al pomodoro","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRagu.png","Gnocchi al Rag\u00F9",6.00,"Gnocchi al rag\u00F9","Primi"));
prod_list.push(new Product("media/menu/GnocchiAlRaguDiConiglio.png","Gnocchi al Rag\u00F9 di coniglio",6.50,"Gnocchi al rag\u00F9 di coniglio","Primi"));
prod_list.push(new Product("media/menu/SpaghettiAlPomodoro.png","Spaghetti al Pomodoro",5.50,"Spaghetti al pomodoro","Primi"));
prod_list.push(new Product("media/menu/SpaghettiAlRagu.png","Spaghetti al Rag\u00F9",6.00,"Spaghetti al rag\u00F9","Primi"));
prod_list.push(new Product("media/menu/SpaghettiAlRaguDiConiglio.png","Spaghetti al Rag\u00F9 di Coniglio",6.50,"Spaghetti al rag\u00F9 di coniglio","Primi"));



prod_list.push(new Product("media/menu/PiattoEstivo.png","Piatto Estivo",9.00,"Mozzarella di bufala, pomodoro, culatello e pane","Secondi"));
prod_list.push(new Product("media/menu/BisteccaDiCavallo.png","Bistecca di Cavallo",10.00,"Bistecca di cavallo con pane","Secondi"));
prod_list.push(new Product("media/menu/Stinco.png","Stinco",12.00,"Stinco di maiale al forno con pane","Secondi"));
prod_list.push(new Product("media/menu/Costicine.png","Costicine",8.00,"3 costicine con polenta","Secondi"));
prod_list.push(new Product("media/menu/Pancetta.png","Pancetta alla Piastra",6.50,"Pancetta alla piastra con pane","Secondi"));
prod_list.push(new Product("media/menu/CosciaDiPollo.png","Coscia di Pollo",7.00,"Coscia di pollo disossata con polenta","Secondi"));
prod_list.push(new Product("media/menu/Salsiccia.png","Salsiccia",6.50,"2 salsicce con polenta","Secondi"));
prod_list.push(new Product("media/menu/Tagliata.png","Tagliata",12.00,"Tagliata di manzo con rucola e pane","Secondi"));
prod_list.push(new Product("media/menu/PiattoSagra.png","Piatto Sagra",10.00,"2 costicine, salsiccia, pancetta e polenta","Secondi"));
prod_list.push(new Product("media/menu/PiattoBimbi.png","Piatto Bimbi",5.00,"Wurstel di POLLO con patatine fritte","Secondi"));
prod_list.push(new Product("media/menu/FormaggioCotto.png","Formaggio Cotto",7.00,"Formaggio cotto con polenta","Secondi"));
prod_list.push(new Product("media/menu/FritturaDiAnelli.png","Frittura di Anelli",10.00,"Frittura di anelli di totano con polenta","Secondi"));
prod_list.push(new Product("media/menu/PolpetteConiglio.png","Polpette di Coniglio",8.00,"Polpette di Coniglio in umido con pane","Secondi"));
prod_list.push(new Product("media/menu/Trippa.png","Trippa alla Parmigiana",7.00,"Trippa alla parmigiana con pane","Secondi"));


prod_list.push(new Product("media/menu/Patate.png","Patatine Fritte",3.00,"Patatine fritte","Contorni"));
prod_list.push(new Product("media/menu/Funghi.png","Funghi",3.50,"Funghi","Contorni"));
prod_list.push(new Product("media/menu/Fagioli.png","Fagioli",3.00,"Fagioli (sedano e cipolla)","Contorni"));
//prod_list.push(new Product("media/menu/Patate.png","Patatine Fritte (BAR)",2.50,"Patatine fritte da ritirare presso il bar","Contorni"));

prod_list.push(new Product("media/menu/PaninoOnto.png","Panino ONTO *",6.00,"Panino con pastin, cipolla e peperoni","Panini"));
prod_list.push(new Product("media/menu/PaninoPastin.png","Panino PASTIN *",5.00,"Panino con pastin","Panini"));
prod_list.push(new Product("media/menu/PaninoVegetariano.png","Panino VEGETARIANO *",5.00,"Panino con cipolla e peperoni","Panini"));
prod_list.push(new Product("media/menu/PaninoPorchetta.png","Panino PORCHETTA *",4.00,"Panino con porchetta","Panini"));
prod_list.push(new Product("media/menu/Bruschetta.png","BRUSCHETTA della Sagra *",4.00,"Bruschetta con zucchine, pomodoro, carote, peperoni, aglio, capperi, basilico e rucola","Panini"));
prod_list.push(new Product("media/menu/ConiglioBar.png","Polpettine di Coniglio *",5.00,"Polpettine di coniglio al forno","Panini"));

prod_list.push(new Product("media/menu/Acqua.png","Acqua minerale 0.5lt",1.00,"Acqua minerale naturale o frizzante","Bevande"));
prod_list.push(new Product("media/menu/Bibite.png","Bibite",2.50,"Coca Cola, aranciata, Lemonsoda o the","Bevande"));
//prod_list.push(new Product("media/menu/Succo.png","Succo di Frutta",2.00,"Succo di frutta, gusti assortiti","Bevande"));
prod_list.push(new Product("media/menu/Caffe.png","Caff\u00E8",1.00,"Caff\u00E8","Bevande"));
prod_list.push(new Product("media/menu/Ombra.png","Ombra di Vino",1.00,"Ombra di vino rosso o bianco","Bevande"));
prod_list.push(new Product("media/menu/Vino.png","Vino in Bottiglia SFUSO (0.75lt)",5.50,"Vino in Bottiglia SFUSO (0.75lt)","Bevande"));
prod_list.push(new Product("media/menu/VinoBott.png","Vino in Bottiglia (0.75lt)",9.00,"Vino in Bottiglia (0.75lt): merlot, cabernet sauvignon","Bevande"));
//prod_list.push(new Product("media/menu/Prosecco.png","Prosecco DOC Treviso BRUT",8.00,"Prosecco DOC Treviso BRUT","Bevande"));

prod_list.push(new Product("media/menu/BirraCastelloBionda.png","Birra BIONDA PICCOLA",3.00,"Birra bionda Castello PICCOLA","Bevande"));
prod_list.push(new Product("media/menu/BirraPedavenaNF.png","Birra NON FILTRATA PICCOLA",3.00,"Birra non filtrata Dolomite PICCOLA","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloRossa.png","Birra ROSSA PICCOLA",3.00,"Birra rossa Castello PICCOLA","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloBionda.png","Birra BIONDA GRANDE",5.00,"Birra bionda Castello GRANDE","Bevande"));
prod_list.push(new Product("media/menu/BirraPedavenaNF.png","Birra NON FILTRATA GRANDE",5.00,"Birra non filtrata Dolomite GRANDE","Bevande"));
prod_list.push(new Product("media/menu/BirraCastelloRossa.png","Birra ROSSA GRANDE",5.00,"Birra rossa Castello GRANDE","Bevande"));
prod_list.push(new Product("media/menu/Radler.png","Radler",3.00,"Radler in bottiglia","Bevande"));
prod_list.push(new Product("media/menu/Caraffa.png","Caraffa di BIRRA 1,5lt",15.00,"Caraffa di birra (1,5lt) Rossa o Bionda","Bevande"));
prod_list.push(new Product("media/menu/Spritz.png","Spritz",3.00,"Spritz","Bevande"));
prod_list.push(new Product("media/menu/GinLemon.png","Gin Lemon",6.00,"Gin Lemon","Bevande"));
prod_list.push(new Product("media/menu/GinTonic.png","Gin Tonic",6.00,"Gin Tonic","Bevande"));
prod_list.push(new Product("media/menu/Sgroppino.png","Sgroppino",3.00,"Sgroppino gusto limone o liquirizia","Bar"));

//prod_list.push(new Product("media/menu/Dolci.png","Fetta di dolce (profiteroles, torta della nonna, torta al cioccolato)",2.50,"Profiteroles, torta della nonna o torta al cioccolato","Dolci"));
//prod_list.push(new Product("media/menu/Sgroppino.png","Sgroppino",3.00,"Sgroppino gusto limone o liquirizia","Dolci"));


prod_list.push(new Product("media/menu/Paella.png","Paella",17,"Paella mista pesce e carne","Serate-speciali"));
prod_list.push(new Product("media/menu/Costata.png","Costata",35,"Costata","Serate-speciali"));
prod_list.push(new Product("media/menu/Coniglio.png","Coniglio",35,"Delizie a base di coniglio","Serate-speciali"));
//prod_list.push(new Product("media/menu/Classi.png","Serata Classi",null,"Serata delle classi, menu standard a scelta","Serate-speciali"));
//prod_list.push(new Product("media/menu/Pesce.png","Grigliata di Pesce",25,"Orata, Seppie, Mazzancolle, Scampo, Spada e polenta","Serate-speciali"));




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
    //var categoriesList=['Primi','Secondi','Contorni','Panini','Bevande','Dolci','Serate-speciali'];

    var categoriesList=['Primi','Secondi','Contorni','Panini','Bevande','Serate-speciali'];
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
            categorya.textContent = cat.charAt(0).toUpperCase() + cat.slice(1).replace("-"," ");//replacing

            categorya.href="#"+cat;
            categoriesdiv.appendChild(categorya);


            var categorytitle=document.createElement("h3");
            if(cat==="Serate-speciali"){
                categorytitle.innerText="Serate Speciali - SU PRENOTAZIONE";
            }else{
                categorytitle.innerText=cat.replace("-"," ");//replacing
            }

            categorytitle.classList="category-title";
            categorytitle.id=cat;
            var categorydiv=document.createElement("div");
            categorydiv.id=cat+"-div";
            maincon.appendChild(categorytitle);
            maincon.appendChild(categorydiv);
            generate_product_list_by_categories(prod_list,cat);

            if(cat==="Panini"){
                let panpar=document.createElement("p");
                panpar.innerText="* da ritirare presso il BAR";
                panpar.classList="panini-exc";
                maincon.appendChild(panpar);
            }
        }








        //NUMERI PER PRENOTARE
        let par=document.createElement("p");
        par.innerText="PER PRENOTARE: ";
        par.classList="number-par";
        par.id="tel-num";
        let bookinglist=document.createElement("ul");
        bookinglist.classList="ref-list";
        let el=document.createElement("li");
        el.innerHTML="<a href='tel:3488096823' class='ph-lk'>348.8096823</a> Concetta";
        bookinglist.appendChild(el);
        el=document.createElement("li");
        el.innerHTML="<a href='tel:3394171820' class='ph-lk'>339.4171820</a> Mario";
        bookinglist.appendChild(el);
        el=document.createElement("li");
        el.innerHTML="<a href='tel:3478382222' class='ph-lk'>347.8382222</a> Silvana";
        bookinglist.appendChild(el);
        par.appendChild(bookinglist);
        maincon.appendChild(par);

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
                var price;
                if(product.price != null){
                    price = product.price.toFixed(2);
                }else{
                    price=null
                }
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
                if(price != null){
                    col_price.innerHTML = Number(price).toFixed(2)+" \u20AC";
                    //col_price.innerHTML ="-";
                }


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

