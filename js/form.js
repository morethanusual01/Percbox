
var db = firebase.initializeApp({
    apiKey: "AIzaSyAUzEa4pz4VJp2j_ANZqCG9r2UEdSIFzVA",
    authDomain: "taskproject-87dc3.firebaseapp.com",
    databaseURL: "https://taskproject-87dc3.firebaseio.com",
    projectId: "taskproject-87dc3",
    storageBucket: "taskproject-87dc3.appspot.com",
    messagingSenderId: "558369244015",
    appId: "1:558369244015:web:27d781d4fdde401b149e9a",
    measurementId: "G-HK0E5LV4S5"
  }).firestore();

  var docID = 12345;

  var userDetail = {
    fullName: "",
    userEmail: "",
    userCity: "",
    userAdress1: "",
    userPhoneNumber: "",
    userAdress2: "",
    };

// form functions

var link1 = "www.youtube.com";
var link2 = "www.facebook.com";
var link3 = "www.twitter.com";
var link4 = "www.instagram.com";

($(function(){
    

//progressbar
$('#progressbar').append('<div class="line"></div>');
function addLI(title, subtitle){
    let div = '';
        div += '<li class="text-right">';
        div += '<h5>'+title+'</h5>';
		div += '<p>'+subtitle+'</p>';
        div += '<span></span>';
        div += '<div class="imgContainer"><img src="./images/check.png" </div>';
        div += '</li>'
        return div;
}

const li1 = addLI('Enter Your Details', 'Please enter your details below so we know where to send your fresh coffee');
const li2 = addLI('Choose Your Size', 'How much coffee would you like?');
const li3 = addLI('Choose Grind', 'We have a selection of three different grinds');
const li4 = addLI('Choose Frequency', 'Choose how ofter would you like to recieve your box');
const li5 = addLI('Submit Payment', 'Please proceed to payment');

$('#progressbar').append(li1);
$('#progressbar').append(li2);
$('#progressbar').append(li3);
$('#progressbar').append(li4);
$('#progressbar').append(li5);

 //Fieldset 1   
var fieldset1 = document.getElementById("fieldset1");

var titleFeildset1 = document.createElement("h2");
titleFeildset1.setAttribute("class", "fs-title text-left");
titleFeildset1.innerHTML = "Simple Registration";
fieldset1.appendChild(titleFeildset1);

var subTitleFeildset1 = document.createElement("p");
subTitleFeildset1.setAttribute("class", "fs-subtitle text-left");
subTitleFeildset1.innerHTML = "Get a new coffee delivered every month or every two-weeks from over 20 of the UAE’s coffee roasters. We imclude the highest quality coffee, from singe origin to speacility blends";
fieldset1.appendChild(subTitleFeildset1);

var title2Feildset1 = document.createElement("h5");
title2Feildset1.innerHTML = "Enter Your Details";
fieldset1.appendChild(title2Feildset1);

var subTitle2Feildset1 = document.createElement("p");
subTitle2Feildset1.setAttribute("class", "mobile");
subTitle2Feildset1.innerHTML = "Please enter your details below so we know where to send your fresh coffee";
fieldset1.appendChild(subTitle2Feildset1);

var row1 = document.createElement("div");
row1.setAttribute("class", "row");
var divCol1 = document.createElement("div");
divCol1.setAttribute("class", "col-md-6");
var inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "full-name");
inputName.setAttribute("name", "full-name");
inputName.setAttribute("placeholder", "full name");
divCol1.appendChild(inputName);
row1.appendChild(divCol1);

var divCol2 = document.createElement("div");
divCol2.setAttribute("class", "col-md-6");
var inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("placeholder", "email");
divCol2.appendChild(inputEmail);
row1.appendChild(divCol2);

var divCol3 = document.createElement("div");
divCol3.setAttribute("class", "col-md-6");
var inputState = document.createElement("select");
inputState.setAttribute("id", "state");
inputState.setAttribute("class", "dropdown-city dropdown");
inputState.setAttribute("name", "user_state");
function statesOptions(){
    var states = ["Abu Dhabi", "Ajman", "Georgia", "Al Ain", "Dubai", "Fujairah"];
    for(state of states){
        var option = document.createElement("option");
        option.setAttribute("value", state)
        option.innerHTML = state;
        inputState.appendChild(option)
    }
     divCol3.appendChild(inputState); 
}
statesOptions();
row1.appendChild(divCol3)

var divCol4 = document.createElement("div");
divCol4.setAttribute("class", "col-md-6");
var inputAddress1 = document.createElement("input");
inputAddress1.setAttribute("type", "text");
inputAddress1.setAttribute("id", "Adress_Line_1");
inputAddress1.setAttribute("name", "Adress_1");
inputAddress1.setAttribute("placeholder", "Adress Line 1");
divCol4.appendChild(inputAddress1);
row1.appendChild(divCol4);

var divCol5 = document.createElement("div");
divCol5.setAttribute("class", "col-md-6");
var divNum = document.createElement("div");
divNum.setAttribute("class", "phoneNumber");
var divDropdown = document.createElement("div");
divDropdown.setAttribute("class", "dropdown");
var divLink = document.createElement("a");
divLink.setAttribute("class", "dropdown-toggle");
divLink.setAttribute("id", "dropdownMenuButton");
divLink.setAttribute("data-toggle", "dropdown");
divLink.setAttribute("aria-haspopup", "true");
divLink.setAttribute("aria-expanded", "false");
divLink.innerHTML = '<img src="images/Dubi.png"/>';
divDropdown.appendChild(divLink);
divNum.appendChild(divDropdown);
var inputPhoneNumber = document.createElement("input");
inputPhoneNumber.setAttribute("type", "text");
inputPhoneNumber.setAttribute("id", "Phone_Number");
inputPhoneNumber.setAttribute("name", "Phone_Number");
inputPhoneNumber.setAttribute("placeholder", "Phone Number");
divNum.appendChild(inputPhoneNumber);
divCol5.appendChild(divNum);
row1.appendChild(divCol5);

var divCol6 = document.createElement("div");
divCol6.setAttribute("class", "col-md-6");
var inputAddress2 = document.createElement("input");
inputAddress2.setAttribute("type", "text");
inputAddress2.setAttribute("id", "Adress_Line_2");
inputAddress2.setAttribute("name", "Adress_2");
inputAddress2.setAttribute("placeholder", "Adress Line 2");
divCol6.appendChild(inputAddress2);
row1.appendChild(divCol6);


fieldset1.appendChild(row1);

var inputSubmit = document.createElement("input");
inputSubmit.setAttribute("type", "submit");
inputSubmit.setAttribute("id", "submitUser");
inputSubmit.setAttribute("class", "next action-button next-first text-center");
inputSubmit.setAttribute("value", "Next Step");
	
fieldset1.appendChild(inputSubmit);	

$(inputSubmit).click(function(e) {
    
  e.preventDefault();
      userDetail = {
      fullName: inputName.value,
      userEmail: inputEmail.value,
      userCity: inputState.value,
      userAdress1: inputAddress1.value,
      userPhoneNumber: inputPhoneNumber.value,
      userAdress2: inputAddress2.value,
      };
  return db.collection("userDetails").add(userDetail)
      .then((ref) => {
          userDetail.id = ref.id;
          docID = ref.id;
          return userDetail ;
  })
  }	)	  



    //card 2
    var fieldset2 = document.getElementById("fieldset2");
    $(fieldset2).append('<h2 class="fs-title">Choose your Size</h2>');
    $(fieldset2).append('<p class="fs-subtitle text-left">Get a new coffee delivered every month or every two-weeks from over 20 of the UAE’s coffee roasters. We imclude the highest quality coffee, from singe origin to speacility blends</p>');
    $(fieldset2).append('<h5 class="text-left">How much coffee would you like ?</h5>');
    $(fieldset2).append('<div class="mobile">How much coffee would you like?</div>');
    var row2 = $('<div class="row" id="row2"></div>');
    $(fieldset2).append(row2);
    var divcol21 = '<div class="divcol21 col-md-4 col-sm-6 text-center"></div>';
    $(row2).append(divcol21);
    var divcol22 = '<div class="divcol22 col-md-4 col-sm-6 text-center"></div>';
    $(row2).append(divcol22);

    function addCoffeFun(imgSrc, weight, counter, pSmall, coin, num) {
        let divCoffe = '';
        divCoffe += '<div class="bag-coffe text-center">';
        divCoffe += '<img src="./images/icon/'+imgSrc+'" height="64px" width="64px">';
        divCoffe += '<h4>' + weight + '</h4>';
        divCoffe += '<p>'+counter+'</p>';
        divCoffe += '<div class="text-center"><small>'+pSmall+'</small><h6>'+coin+'<span>'+num+'</span></h6></div>';
        divCoffe += '</div>';
        return divCoffe;
    }

    const coffeDiv1 = addCoffeFun('Size (1) 1.png','250 G', '( 10 - 12 Cups )', 'Price', 'AED', '120');
    $('.divcol21').append(coffeDiv1);
    $('.divcol21').append('<small class="text-left notePrice">* You chose 250 G</small>');

    const coffeDiv2 = addCoffeFun('Size (1) 1.png','500 G', '( 20 - 24 Cups )', 'Price', 'AED', '220');
    $('.divcol22').append(coffeDiv2);
    $(fieldset2).append('<input type="button" name="next" class="next action-button next-first text-center" value="Next Step" />')
    $(fieldset2).append('<a type="button" name="previous" class="previous action-prev text-left" value="Previous"><i class="bi bi-arrow-left-short"></i> Go Back</a>')
    
    
    // card 3
    $('#fieldset3').append('<h2 class="fs-title text-left">Choose Grind</h2>');
    $('#fieldset3').append('<p class="fs-subtitle text-left">Get a new coffee delivered every month or every two-weeks from over 20 of the UAE’s coffee roasters. We imclude the highest quality coffee, from singe origin to speacility blends</p>');
    $('#fieldset3').append('<h5 class="text-left">We have a selection of three different grinds</h5>');
    $('#fieldset3').append('<div class="mobile">We have selection of three different grinds</div>');

    var row3 = $('<div class="row" id="row3"></div>');
    $('#fieldset3').append(row3);
    var divcol31 = '<div class="divcol31 col-md-4 col-sm-6 text-center"></div>';
    $(row3).append(divcol31);
    var divcol32 = '<div class="divcol32 col-md-4 col-sm-6 text-center"></div>';
    $(row3).append(divcol32);
    var divcol33 = '<div class="divcol33 col-md-4 col-sm-6 text-center"></div>';
    $(row3).append(divcol33);
    
    function addCoffeFun2(imgSrc, title, subtitle) {
        let divCoffe2 = '';
        divCoffe2 += '<div class="bag-coffe text-center">';
        divCoffe2 += '<img src="./images/icon/'+imgSrc+'" height="50px" width="50px">';
        divCoffe2 += '<h4>' + title + '</h4>';
        divCoffe2 += '<h6 class="contentUnderimg">'+subtitle+'</h6>';
        divCoffe2 += '</div>';
        return divCoffe2;
    }
    const coffeDiv31 = addCoffeFun2('Wholebean 1.png','Wholebean', 'Grind it how you like');
    $('.divcol31').append(coffeDiv31);
    $('.divcol31').append('<small class="notePrice">* You chose Wholebean Coffee</small>');
    
    const coffeDiv32 = addCoffeFun2('Pourover 1.png','Pour Over', 'Best for trip coffee');
    $('.divcol32').append(coffeDiv32);
    
    const coffeDiv33 = addCoffeFun2('Espresso 1.png','Espresso', 'For the at home baristas using coffee machines');
    $('.divcol33').append(coffeDiv33);

    $('#fieldset3').append('<input type="button" name="next" class="next action-button next-first text-center" value="Next Step" />')
    $('#fieldset3').append('<a type="button" name="previous" class="previous action-prev text-left" value="Previous"><i class="bi bi-arrow-left-short"></i> Go Back</a>')
    
    //card4
    $('#fieldset4').append('<h2 class="fs-title text-left">Choose Frequency</h2>');
    $('#fieldset4').append('<p class="fs-subtitle text-left">Get a new coffee delivered every month or every two-weeks from over 20 of the UAE’s coffee roasters. We imclude the highest quality coffee, from singe origin to speacility blends</p>');
    $('#fieldset4').append('<h5 class="text-left">Choose how often you would like to receive your box</h5>');
    $('#fieldset4').append('<div class="mobile">Choose how ofter would you like to recieve your box</div>');
    
    var row4 = $('<div class="row" id="row4"></div>');
    $('#fieldset4').append(row4);
    var divcol41 = '<div class="divcol41 col-md-4 col-sm-6 text-center"></div>';
    $(row4).append(divcol41);
    var divcol42 = '<div class="divcol42 col-md-4 col-sm-6 text-center"></div>';
    $(row4).append(divcol42);
    
    function addCoffeFun3(imgSrc, title) {
        let divCoffe3 = '';
        divCoffe3 += '<div class="bag-coffe text-center">';
        divCoffe3 += '<img src="./images/icon/'+imgSrc+'" height="50px" width="50px">';
        divCoffe3 += '<h4>' + title + '</h4>';
        divCoffe3 += '</div>';
        return divCoffe3;
    }

    const coffeDiv41 = addCoffeFun3('Frequency 1.png','Every Two Weeks');
    $('.divcol41').append(coffeDiv41);
    $('.divcol41').append('<small class="notePrice">* You choose Every Two Weeks</small>');
    
    const coffeDiv42 = addCoffeFun3('Pourover 1.png','Every Month');
    $('.divcol42').append(coffeDiv42);

    $('#fieldset4').append('<input type="button" name="next" class="next action-button addPrices next-first text-center" value="Next Step" />')
    $('#fieldset4').append('<a type="button" name="previous" class="previous action-prev text-left" value="Previous"><i class="bi bi-arrow-left-short"></i> Go Back</a>')
    
    //card 5

    $('#fieldset5').append('<img src="./images/icon/Thank you icon 1.png" />');
    $('#fieldset5').append('<h4 class="thankyou">Thank You</h4>');
    $('#fieldset5').append('<h6 class="thnkyoucontent">Thank you for joining with us. You’re almost there, please proceed to payment & fresh coffee will be on its way</h6>');
    
    $('#fieldset5').append('<table class="table"></table>');
    $('.table').append('<thead style="display: none"><tr><th scope="col">#</th><th scope="col">First</th></tr></thead>');
    
    $('.table').append('<tbody class="tbody"></tbody>');
    $('.tbody').append('<tr><th scope="row" class="quantity">Quantity - 250 G</th><td class="quantity_price">$200.00</td></tr>');
    $('.tbody').append('<tr><th scope="row" class="time">Two in Two Weeks</th><td  class="time_price"></td></tr>');
    $('.tbody').append('<tr><th scope="row" class="type">Grind - Wholebean</th><td class="type_price"></td></tr>');
    $('.tbody').append('<tr><th scope="row">Total to pay</th><td class="total_price">$230.00</td></tr>');
    $('#fieldset5').append('<input type="submit" name="submit" id="submit" class="submit action-button submit" value="Proceed to Payment" />');
    $('#fieldset5').append('<a type="button" name="previous" class="previous action-prev text-left" value="Previous"><i class="bi bi-arrow-left-short"></i> Go Back</a>')


//addorders ;
 $("#submit").click(function (){
    
    let orderDetail = {
        quantity: $(".quantity").html(),
        type: $(".type").html(),
        time: $(".time").html(),
    };
    console.log("orderDetail", $(".quantity"), $(".type"), $(".time").html())
    
    var userOrder = {user : userDetail, orders : orderDetail}
    return db.collection("orderDetails").add(userOrder)
        .then((ref) => {
            
        if(orderDetail.quantity.trim() == "Quantity 500 G" && orderDetail.time.trim() == "Every Month"){
            window.location.href=link1;
        } 
        if(orderDetail.quantity.trim() == "Quantity 500 G" && orderDetail.time.trim() == "Every Two Weeks"){
            window.location.href=link2;
        }
        if(orderDetail.quantity.trim() == "Quantity 250 G" && orderDetail.time.trim() == "Every Month"){
            window.location.href=link3;
        }
        if(orderDetail.quantity.trim() == "Quantity 250 G" && orderDetail.time.trim() == "Every Two Weeks"){
            window.location.href=link4;
        }
    })
    })
    
}))












