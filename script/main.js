/*Mobile menu start*/
$('.mobile-menu').click(function(){
  $('.mobile-menu').css('display','none');
  $('.close-m-menu').css('display','block');
  $('.mobile-menu-block').css('display','block');
});
$('.close-m-menu').click(function(){
  $('.close-m-menu').css('display','none');
  $('.mobile-menu').css('display','block');
  $('.mobile-menu-block').css('display','none');
});
/*Mobile menu end*/

/*Страница shops сортировка по алфавиту*/
var getUniq = function(Arr){
  var Arr2 = [];
      for(var i = 0; i < Arr.length; i++){
        if(!Arr2.includes(Arr[i])){
          Arr2.push(Arr[i]);
        }
      }
      return Arr2
}
var shopsBoxesSq = document.getElementsByClassName('shops-card').length;
var alphOfBoxInArr = [];
var alphSortArrRu = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф','Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
var alphSortArrEng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var NumArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for(var i = 0; i < shopsBoxesSq; i++){
    alphOfBoxInArr.push($('.shp-card').eq(i).find('.main-dis').text().charAt(0).toUpperCase());
}
alphOfBoxInArr = getUniq(alphOfBoxInArr);
var getNumbers = function(ArrIn){
  for(var i = 0; i < ArrIn.length; i++){
    if(NumArr.includes(ArrIn[i])){
      var rtn = ' <span>0-9</span> ';
      break;
    }
    else{
      var rtn = ' 0-9 '
    }
  }
  return rtn;
}
var crAlphBundle = function(ArrConst, ArrIn){
  var bundle = '';
  for(var i = 0; i < ArrConst.length; i++){
    if(ArrIn.includes(ArrConst[i])){
      bundle+= ' <span>'+ArrConst[i]+'</span> ';
    }
    else{
      bundle+= ' ' + ArrConst[i] + ' ';
    }
  }
  return bundle;
}
var LetBundle = '<div class="f"><span class="act">Все</span>'+getNumbers(alphOfBoxInArr)+'</div>'+'<div><p>'+crAlphBundle(alphSortArrRu, alphOfBoxInArr)+'</p><p>'+crAlphBundle(alphSortArrEng, alphOfBoxInArr)+'</p></div>';
$('.nav-sort-alph').html(LetBundle);

/*Переключение между типами сортировки*/
$('#sort-cat').click(function(){
  $('.type-of-sort').attr('class', 'type-of-sort upc');
  $('#sort-cat').attr('class', 'type-of-sort active upc');
  $('.nav-sort-alph-wr').css('display', 'none');
  $('.nav-sort-cat-wr').css('display','block');
  $('.shp-card').css('display','block');
  $('.nav-sort-cat').find('div').removeClass('active');
  $('.nav-sort-cat').find('#sort__all').attr('class','active');
});
$('#sort-alph').click(function(){
  $('.type-of-sort').attr('class', 'type-of-sort upc');
  $('#sort-alph').attr('class', 'type-of-sort active upc');
  $('.nav-sort-alph-wr').css('display', 'block');
  $('.nav-sort-cat-wr').css('display','none');
  $('.shp-card').css('display','block');
  $('.nav-sort-alph').find('span').attr('class', '');
  $('.nav-sort-alph').find('span').eq(0).attr('class', 'act');
});
/*Переключение между типами сортировки в зависимости от ссылки*/
$(window).on('load', function(){
if(window.location.hash == '#cat'){
  $('.type-of-sort').attr('class', 'type-of-sort upc');
  $('#sort-cat').attr('class', 'type-of-sort active upc');
  $('.nav-sort-alph-wr').css('display', 'none');
  $('.nav-sort-cat-wr').css('display','block');
  $('.shp-card').css('display','block');
  $('.nav-sort-cat').find('div').removeClass('active');
  $('.nav-sort-cat').find('#sort__all').attr('class','active');
}
if(window.location.hash == '#alph'){
  $('.type-of-sort').attr('class', 'type-of-sort upc');
  $('#sort-alph').attr('class', 'type-of-sort active upc');
  $('.nav-sort-alph-wr').css('display', 'block');
  $('.nav-sort-cat-wr').css('display','none');
  $('.shp-card').css('display','block');
  $('.nav-sort-alph').find('span').attr('class', '');
  $('.nav-sort-alph').find('span').eq(0).attr('class', 'act');
}
});
/*Сортировка по категории*/
$('.nav-sort-cat__elem').click(function() {
  $('.nav-sort-cat__elem').removeClass('active');
  $(this).addClass('active');
  var dataCat = $(this).attr('data-cat');
  if(dataCat == 'all'){
    $('.shopsCard').css('display', 'block');
  }
  else{
    var elemArr = document.getElementsByClassName('shp-card');
    for(var i = 0; i < elemArr.length; i++){
      var dataShop = $('.shp-card').eq(i).attr('data-shop').split(' ');
      if(dataShop.includes(dataCat)){
        $('.shopsCard').eq(i).css('display','block');
      }
      else{
        $('.shopsCard').eq(i).css('display','none');
      }
    }
  }
});
/*Сортировка по алфавиту*/
$('.nav-sort-alph').find('span').click(function(){
  $('.nav-sort-alph').find('span').attr('class', '');
  $(this).attr('class', 'act');
  var varData = $(this).text();
  if(varData == "Все"){
    $('.shopsCard').css('display', 'block');
  }else{
    if(varData == '0-9'){
      var elemArr = document.getElementsByClassName('shp-card');
      for(var i = 0; i < elemArr.length; i++){
        var mainDisA = $('.shp-card').eq(i).find('.main-dis').text()[0];
        if(NumArr.includes(mainDisA)){
          $('.shopsCard').eq(i).css('display','block');
        }else{
          $('.shopsCard').eq(i).css('display','none');
        }
      }
    }else{
      var elemArr = document.getElementsByClassName('shp-card');
      for(var i = 0; i < elemArr.length; i++){
        var mainDisA = $('.shp-card').eq(i).find('.main-dis').text()[0];
        if(varData == mainDisA){
          $('.shopsCard').eq(i).css('display','block');
        }else{
          $('.shopsCard').eq(i).css('display','none');
        }
    }
  }
}});
/*Сортировка событий и акций*/
var eventsLength = document.getElementsByClassName('event-a').length;
$('.events-ctrl').find('div').click(function(){
  $('.events-ctrl').find('div').attr('class', 'upc');;
  $(this).attr('class', 'active upc');
  var typeSort = $(this).attr('data-ctrlev');
  if(typeSort == 'all'){
    $('.event-a').css('display','block');
  }
  else{
  for(var i = 0; i < eventsLength; i++){
    if($('.event-a').eq(i).attr('data-events') == typeSort){
      $('.event-a').eq(i).css('display','block');
    }
    else{
      $('.event-a').eq(i).css('display','none');
    }
  }
}
});


/*Map js*/
$(window).on('load', function(){
    var thisElem = null;
    /*убрать точку на карте отмеченную*/
    $('.shop-svg-box').click(function(){$('.shop-svg-box').removeClass('mapAct');});

  /*наведение на магазины*/
    $('.shop-svg-box').hover(function(){
      var dataLevel = $(this).attr('data-level');
      if(dataLevel == '0'){
        var levelElem = document.getElementById('level0');
      }
      if(dataLevel == '1'){
        var levelElem = document.getElementById('level1');
      }
      if(dataLevel == '2'){
        var levelElem = document.getElementById('level2');
      }
      if(dataLevel == '3'){
        var levelElem = document.getElementById('level3');
      }
    thisElem =  $('.shop-svg-box').index(this); //определяем данный элемент магазина, при наведении на табличку инфа должна сохранятся.
    var widthBox = levelElem.offsetWidth;
    var heightBox = levelElem.offsetHeight;
    var xBox = levelElem.getBoundingClientRect().left + pageXOffset;
    var yBox = levelElem.getBoundingClientRect().top + pageYOffset;
    var elemIX = Number($(this).attr('data-x'));
    var elemIY = Number($(this).attr('data-y'));
    var newElemX = xBox + widthBox*elemIX - 98;
    var newElemY = yBox + heightBox*elemIY - 80;
        var topInf = 100;
        var shopImg1 = $(this).attr('data-img');
        if(shopImg1 == ""){
          $('.shop-svg-info').css('height', '60px');
          $('.shop-svg-info').find('.name').css('margin-top','16px');
          topInf = 20;
        }
        else{
          $('.shop-svg-info').css('height', '145px');
          $('.shop-svg-info').find('.name').css('margin-top','110px');
          topInf = 100;
        }
        $(this).find('.st2').css('fill','#ffffff');
        $(this).find('.st56').css('fill','#ffffff');
          $(this).find('.st6').css('fill','#ffffff');
       $(this).addClass('actShop');

        var shopName = $(this).attr('data-name');
        var shopA = $(this).attr('data-a');
        var shopImg = $(this).attr('data-img');
        $('.shop-svg-info').find('img').attr('src', shopImg);
        $('.shop-svg-info').find('.name').html(shopName);
        $('.shop-svg-info').find('a').attr('href', shopA);
        $('.shop-svg-info').css('display', 'block');
        $('.shop-svg-info').css('top', newElemY);
        $('.shop-svg-info').css('left', newElemX);

      }, function(){
        $('.shop-svg-box').removeClass('actShop')
        $('.shop-svg-info').css('display', 'none');
        $(this).find('.st2').css('fill','#3E3E3E');
        $(this).find('.st56').css('fill','#3E3E3E');
        $(this).find('.st6').css('fill','#3E3E3E');
        $(this).find('.st0').css('fill','#D8D1CA');
        $(this).find('.st35').css('fill','#D8D1CA');
      });

      $('.shop-svg-info').hover(function(){
        $('.shop-svg-box').eq(thisElem).addClass('actShop');
        $('.shop-svg-info').css('display', 'block');
      },function(){
        $('.shop-svg-box').removeClass('actShop')
        $('.shop-svg-info').css('display', 'none');
      });

      $('.levels-wrapper').find('div').click(function(){
      $('.levels-wrapper').find('div').removeClass('act');
      $(this).addClass('act');
      var getId = $(this).attr('id');
      if(getId == 'l0'){
        $('.level-display').removeClass('nothidden');
        $('#level0').addClass('nothidden');
      }
      if(getId == 'l1'){
        $('.level-display').removeClass('nothidden');
        $('#level1').addClass('nothidden');
      }
      if(getId == 'l2'){
        $('.level-display').removeClass('nothidden');
        $('#level2').addClass('nothidden');
      }
      if(getId == 'l3'){
        $('.level-display').removeClass('nothidden');
        $('#level3').addClass('nothidden');
      }
      })
    });



    /*Way to place control*/
$(window).on('load', function(){
    $('.way-ctrl').find('div').click(function(){
      $('.way-ctrl').find('div').removeClass('active');
      $(this).addClass('active');
      var dataWay = $(this).attr('data-way');
      if( dataWay == 'bus'){
        $('.ymwr').css('display','none');
        $('#bus').css('display','block');
      }
      if( dataWay == 'car'){
        $('.ymwr').css('display','none');
        $('#car').css('display','block');
      }
      if( dataWay == 'metro'){
        $('.ymwr').css('display','none');
        $('#metro').css('display','block');
      }
    });
  });
/*Old events*/
// var oldAct = $('.event-a').length;
// for(var i = 0; i < oldAct; i++){
//   var dataEv = new Date($('.event-a').eq(i).attr('data-ofend'));
//   var dataTodat = new Date();
//   if(dataTodat > dataEv){
//     $('.event-a').eq(i).find('.old-event').css('display','block');
//   }
// }

const events = document.querySelectorAll(".event-a");
for (let i = 0; i < events.length; i++) {
  let dataEv = new Date(events[i].getAttribute("data-ofend"));
  let dataToday = new Date();
  if (dataToday > dataEv) {
    events[i].querySelector(".old-event").style.display = "block";
  } 
}

/*Переход на карте в нужную точку*/
$(window).on('load', function(){
  var tempHash = window.location.hash;
  tempHash = tempHash.slice(1);
  var hashArrInf = tempHash.split('-');
  if(hashArrInf[0] == 'map'){
    $('.levels-wrapper').find('div').removeClass('act');
    var hashInfLevel = Number(hashArrInf[1]);
    $('.levels-wrapper').find('div').eq(hashInfLevel).addClass('act');
    if(hashInfLevel == 0){
      $('.level-display').removeClass('nothidden');
      $('#level0').addClass('nothidden');
    }
    if(hashInfLevel == 1){
      $('.level-display').removeClass('nothidden');
      $('#level1').addClass('nothidden');
    }
    if(hashInfLevel == 2){
      $('.level-display').removeClass('nothidden');
      $('#level2').addClass('nothidden');
    }
    if(hashInfLevel == 3){
      $('.level-display').removeClass('nothidden');
      $('#level3').addClass('nothidden');
    }
    var hashInfPoint = hashArrInf[2];
    var ssbArrlength = document.getElementsByClassName('shop-svg-box').length;
    for(var i=0; i < ssbArrlength; i++){
      if($('.shop-svg-box').eq(i).attr('data-hash') == hashInfPoint){
        $('.shop-svg-box').eq(i).addClass('mapAct');
      }
    }
  }
});
