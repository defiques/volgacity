/*4 col slider*/
var lleft = -295;
var boxBundle = '';
var indexBoxLast = 0;
var indexBoxFirst = 0;

var contentArrBigIMG = [
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#FFF2D6;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_letu_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Л'этуаль</div>
        <div class="act-disc">Коллекция UNITY – создана<br> ради лучшего будущего!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#D6E9F2;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_letu_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Л'этуаль</div>
        <div class="act-disc">Коллекция UNITY – создана<br> ради лучшего будущего!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#FFF2D6;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_BK_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Бургер Кинг</div>
        <div class="act-disc">Новая коллекция школьной<br> формы к началу учебного года</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#E1FFD9;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_GJ_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">PUMA</div>
        <div class="act-disc">Магазин Adidas снова открыл<br> свои двери!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#D6E9F2;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_letu_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Л'этуаль</div>
        <div class="act-disc">Коллекция UNITY – создана<br> ради лучшего будущего!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#FFF2D6;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_letu_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Л'этуаль</div>
        <div class="act-disc">Коллекция UNITY – создана<br> ради лучшего будущего!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#E1FFD9;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_BK_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">Бургер Кинг</div>
        <div class="act-disc">Новая коллекция школьной<br> формы к началу учебного года</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`,
`<a class="event-a" href="#" data-events="akcii" data-ofend="2021-06-31">
    <div style="background-color:#D6E9F2;" class="event-card">
      <div class="old-event"></div>
      <div class="img-sl-wrapper"><img src="img/events/akcii_GJ_374X374.png"></div>
      <div class="event__wrapper">
        <div class="shop-name">PUMA</div>
        <div class="act-disc">Магазин Adidas снова открыл<br> свои двери!</div>
        <div class="act-time">с 1 февраля по 30 марта</div>
      </div>
    </div>
  </a>
`
];



var contentArr = [
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`,
`<a href="#">
  <div class="shops-card shp-card" data-shop="3 5">
      <div class="hidden-img"><img src="img/shops/big_imgs/GJ_275_275.png"></div>
      <div class="img-wr"><img src="img/shops/little_imgs/GJ_275_180.svg"></div>
      <div class="level-dis">3 этаж</div>
      <div class="main-dis">Gloria Jeans</div>
  </div>
</a>`];

  function sliderBox(content){
    return '<div class="slider-4-box">'+content+'</div>';
  }
  for(var i = 0; i < 6; i++){
    boxBundle+= sliderBox(contentArr[i]);
    indexBoxLast++;
}
$('.slider-4-line').html(boxBundle);
$('#right-4col').click(function(){
  $(this).attr('disabled', 'disabled');
  if(indexBoxLast == contentArr.length-1){
    indexBoxLast = -1;
  }
  if(indexBoxFirst == contentArr.length-1){
    indexBoxFirst = -1;
  }
  indexBoxLast++;
  indexBoxFirst++;
  lleft = lleft - 295;
  var lleftPX = lleft + 'px';
  $('.slider-4-line').css('left', lleftPX);
  var timerId = setTimeout(function(){
    $('.slider-4-line').css('transition','none');
    $('.slider-4-box').eq(0).remove();
    $('.slider-4-line').css('left', '-295px');
    var timerIdNew = setTimeout(function(){
    lleft = -295;
    $('.slider-4-line').css('transition','left .3s');
    $('#right-4col').removeAttr('disabled');
  }, 100);
}, 200);
  $('.slider-4-line').append(sliderBox(contentArr[indexBoxLast]));

  console.log('last - '+ indexBoxLast);
  console.log('first - '+ indexBoxFirst);
});
$('#left-4col').click(function(){
  $(this).attr('disabled', 'disabled');
  if(indexBoxFirst == 0){
    indexBoxFirst = contentArr.length;
  };
  if(indexBoxLast == 0){
    indexBoxLast = contentArr.length;
  };
  indexBoxLast--;
  indexBoxFirst--;
  lleft = lleft + 295;
  var lleftPX = lleft + 'px'; //изменение по x влево;
  $('.slider-4-line').css('left', lleftPX);
  var timerId = setTimeout(function(){
    $('.slider-4-line').css('transition','none');
    $('.slider-4-box').eq(6).remove();
    $('.slider-4-line').css('left', '-295px');
    var timerIdNew = setTimeout(function(){
    lleft = -295;
    $('.slider-4-line').css('transition','left .2s');
    $('#left-4col').removeAttr('disabled');

  }, 100);
      $('.slider-4-line').prepend(sliderBox(contentArr[indexBoxFirst]));
    }, 200);

  console.log('last - '+ indexBoxLast);
  console.log('first - '+ indexBoxFirst);
});
var newSlideTime = setInterval(
  function(){
    if(indexBoxLast == contentArr.length-1){
      indexBoxLast = -1;
    }
    if(indexBoxFirst == contentArr.length-1){
      indexBoxFirst = -1;
    }
    indexBoxLast++;
    indexBoxFirst++;
    lleft = lleft - 295;
    var lleftPX = lleft + 'px'; //изменение по x влево;
    $('.slider-4-line').css('left', lleftPX);
    var timerId = setTimeout(function(){
      $('.slider-4-line').css('transition','none');
      $('.slider-4-box').eq(0).remove();
      $('.slider-4-line').css('left', '-295px');
      var timerIdNew = setTimeout(function(){
      lleft = -295;
      $('.slider-4-line').css('transition','left .2s');
    }, 100);
  }, 200);
    $('.slider-4-line').append(sliderBox(contentArr[indexBoxLast]));
  }, 4000);

/*3 col slider*/
var lleftBImg = -393;
var boxBundleBImg = '';
var indexBoxLastBImg = 0;
var indexBoxFirstBImg = 0;


  function sliderBoxBImg(content){
    return '<div class="slider-3-box">'+content+'</div>';
  }
  for(var i = 0; i < 5; i++){
    boxBundleBImg+= sliderBoxBImg(contentArrBigIMG[i]);
    indexBoxLastBImg++;
}
$('.slider-3-line').html(boxBundleBImg);
$('#right-3col').click(function(){
  $(this).attr('disabled', 'disabled');
  if(indexBoxLastBImg == contentArrBigIMG.length-1){
    indexBoxLastBImg = -1;
  }
  if(indexBoxFirstBImg == contentArrBigIMG.length-1){
    indexBoxFirstBImg = -1;
  }
  indexBoxLastBImg++;
  indexBoxFirstBImg++;
  lleftBImg = lleftBImg - 393;
  var lleftPX = lleftBImg + 'px';
  $('.slider-3-line').css('left', lleftPX);
  var timerId = setTimeout(function(){
    $('.slider-3-line').css('transition','none');
    $('.slider-3-box').eq(0).remove();
    $('.slider-3-line').css('left', '-393px');
    var timerIdNew = setTimeout(function(){
    lleftBImg = -400;
    $('.slider-3-line').css('transition','left .3s');
    $('#right-3col').removeAttr('disabled');
  }, 100);
}, 200);
  $('.slider-3-line').append(sliderBoxBImg(contentArrBigIMG[indexBoxLastBImg]));

  console.log('last - '+ indexBoxLastBImg );
  console.log('first - '+ indexBoxFirstBImg );
});
$('#left-3col').click(function(){
  $(this).attr('disabled', 'disabled');
  if(indexBoxFirstBImg  == 0){
    indexBoxFirstBImg  = contentArrBigIMG.length;
  };
  if(indexBoxLastBImg  == 0){
    indexBoxLastBImg  = contentArrBigIMG.length;
  };
  indexBoxLastBImg --;
  indexBoxFirstBImg --;
  lleftBImg = lleftBImg + 393;
  var lleftPX = lleftBImg  + 'px'; //изменение по x влево;
  $('.slider-3-line').css('left', lleftPX);
  var timerId = setTimeout(function(){
    $('.slider-3-line').css('transition','none');
    $('.slider-3-box').eq(5).remove();
    $('.slider-3-line').css('left', '-393px');
    var timerIdNew = setTimeout(function(){
    lleftBImg = -393;
    $('.slider-3-line').css('transition','left .2s');
    $('#left-3col').removeAttr('disabled');

  }, 100);
      $('.slider-3-line').prepend(sliderBoxBImg(contentArrBigIMG[indexBoxFirstBImg]));
    }, 200);

  console.log('last - '+ indexBoxLastBImg );
  console.log('first - '+ indexBoxFirstBImg );
  console.log(contentArrBigIMG[indexBoxFirst]);
});
