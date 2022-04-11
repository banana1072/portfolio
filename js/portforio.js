function scrollvar(){
  var bar = new ProgressBar.Line(var_html, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 90) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  var bar = new ProgressBar.Line(var_python, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 70) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  var bar = new ProgressBar.Line(var_php, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 75) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  var bar = new ProgressBar.Line(var_js, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 70) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  var bar = new ProgressBar.Line(var_vba, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 50) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  var bar = new ProgressBar.Line(var_c, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 50) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  
}

/////////プログレスバーの処理終了
////////スクロールした時の色の変化

window.addEventListener( "scroll" ,function(){

  //スクロールの高さを取得
  let scroll = window.pageYOffset;

  var header = document.getElementById("body_header");
  var header_height = header.clientHeight;
  var menu_button = $('.header-menu-button');
  var add_button_border = 'header-menu-button-border';
  var contact_me = document.getElementById("contact_me");
  if(scroll>header_height){
    header.style.backgroundColor = "rgba(0,0,0,0.3)";
  }
  else{
    header.style.backgroundColor = "rgba(0,0,0,0.0)";
  }

  var main_about = document.getElementsByClassName("main-about")[0];
  var main_skill = document.getElementsByClassName("main-skill")[0];
  var main_works = document.getElementsByClassName("main-works")[0];
  var main_contact = document.getElementsByClassName("main-contact")[0];


  if (window.matchMedia('(max-width: 520px)').matches) {
    //スマホ処理
    if( scroll > 3635 ){ 
      document.body.style.backgroundColor = '#59c8df';
      contact_me.style.backgroundColor = "#1499BF";
  
    }else if( scroll > 2600 ){
      document.body.style.backgroundColor = '#d14d28';
      contact_me.style.backgroundColor = "#f45249";
    }else if( scroll > 1800 ){
      document.body.style.backgroundColor = '#2b9564';
    }else if( scroll > 345 ){
      document.body.style.backgroundColor = '#f5df65';
    }else{
      document.body.style.backgroundColor = '#59c8df';
    }
  } else if (window.matchMedia('(min-width:920px)').matches) {
    //PC処理
    if( scroll > 2610 ){ 
      document.body.style.backgroundColor = '#59c8df';
      contact_me.style.backgroundColor = "#1499BF";
  
    }else if( scroll > 1820 ){
      document.body.style.backgroundColor = '#d14d28';
      contact_me.style.backgroundColor = "#f45249";
    }else if( scroll > 1040 ){
      document.body.style.backgroundColor = '#2b9564';
    }else if( scroll > 345 ){
      document.body.style.backgroundColor = '#f5df65';
    }else{
      document.body.style.backgroundColor = '#59c8df';
    }
  }
  
});


