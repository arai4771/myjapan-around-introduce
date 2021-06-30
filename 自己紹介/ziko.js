
ScrollReveal().reveal('.title', { 
  origin:"bottom",
  distance: '50px',
  duration: 2000, 
  
});
ScrollReveal().reveal('.bikename', { 
  origin:"bottom",
  distance: '50px',
  duration: 2000, 
  
});
ScrollReveal().reveal('.bikename2', { 
  origin:"bottom",
  distance: '5px',
  duration: 2000, 
  delay:1000
});

ScrollReveal().reveal('.img_bun', { 
  origin:"bottom",
  distance: '200px',
  duration: 2000, 
  delay:500
});
ScrollReveal().reveal('.tt_img', { 
  origin:"bottom",
  distance: '200px',
  duration: 2000, 
  delay:100
});

// ScrollReveal().reveal('.int_img', { 
//   origin:"left",
//   distance: '200px',
//   duration: 2000, 
//   rotate: { x: 0, y: 0, z: -180}
// });
ScrollReveal().reveal('.int_cat', { 
  origin:"bottom",
  distance: '200px',
  duration: 2000, 
  
});

ScrollReveal().reveal('.table2', { 
  origin:"bottom",
  distance: '50px',
  duration: 2000, 
});
ScrollReveal().reveal('.lastbun', { 
  origin:"bottom",
  distance: '50px',
  duration: 2000, 
});


new Vue({
  el: '#con',
  data: {
    scrollY: 0
  },
  mounted() {
    window.addEventListener('scroll', this.handlScroll);
  },
  methods: {
    handlScroll() {
        this.scrollY = window.scrollY;
    }
  }
});

new Vue({
  el:"#eq_fade",
  data:{
    isActive:false,
    show: true,

  },
  mounted(){
    window.addEventListener("scroll",this.planscroll);
    // window.addEventListener("scroll",this.planscroll);
  },
  methods:{
    active: function () {
      this.isActive = !this.isActive
    },
    planscroll(){
      if(window.scrollY > 1250 && window.scrollY < 2160){
        document.getElementById("plan_li").classList.add("plan_lifa")
      }else{
        document.getElementById("plan_li").classList.remove("plan_lifa")
      }
    },
    
  },
      
    
  
});



new Vue({
  el: '#radio',
  data: {
    isActive: '1'
  },

  mounted(){
    window.addEventListener("scroll",this.soubiscroll);
  
  },
  methods:{
    soubiscroll(){
      if(window.scrollY > 3640 && window.scrollY < 6340){
        document.getElementById("radiofade").classList.add("soubifade")
      }else{
        document.getElementById("radiofade").classList.remove("soubifade")
      }
    },
    
  },


});

new Vue({
  el:"#eqvue",
  data:{
    eq_setumei:true,
    eq_setumei2:true,
    meta:false,
    tank:false,
    light:false,
    mafra:false

  },

  mounted(){
    window.addEventListener("scroll",this.bikescroll);
   
  },

  methods: {
    metabtn: function () {
      if(this.tank==true){
        this.tank =!this.tank;
      }
      this.meta =!this.meta;
      if(this.eq_setumei==true){
        this.eq_setumei=!this.eq_setumei
      }else if(this.tank==false&&this.meta==false){
        this.eq_setumei=!this.eq_setumei
      }
    },

    tankbtn: function () {
      if(this.meta==true){
        this.meta =!this.meta;
      }
      this.tank =!this.tank
      if(this.eq_setumei==true){
        this.eq_setumei=!this.eq_setumei
      }else if(this.tank==false&&this.meta==false){
        this.eq_setumei=!this.eq_setumei
      }
    },
    mafrabtn: function () {
      if(this.light==true){
        this.light =!this.light
      }
        this.mafra =!this.mafra
      if(this.eq_setumei2==true){
        this.eq_setumei2=!this.eq_setumei2
      }else if(this.mafra==false&&this.light==false){
        this.eq_setumei2=!this.eq_setumei2
      }
    },
    lightbtn: function () {
      if(this.mafra==true){
        this.mafra =!this.mafra;
      }
        this.light =!this.light
      if(this.eq_setumei2==true){
        this.eq_setumei2=!this.eq_setumei2
      }else if(this.mafra==false&&this.light==false){
        this.eq_setumei2=!this.eq_setumei2
      }
    },
    
    bikescroll(){
      if(window.scrollY > 1970 && window.scrollY < 3280){
        document.getElementById("eqvuefade").classList.add("eqvuefadein")
      }else{
        document.getElementById("eqvuefade").classList.remove("eqvuefadein")
      }
    },
  }
});

let vm = new Vue({
  el: '#slide',
  data: {
    current_slide: 0,
    slides: [
      './photo/IMG_3434.JPG',
      './photo/IMG_3027.JPG',
      './photo/IMG_4237.JPG',
      './photo/IMG_3411.JPG',
      './photo/IMG_3389.JPG',
      './photo/DSC06662.JPG',
    ],
  },
  mounted() {
    setInterval(() => {
      this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
    }, 3000);

    window.addEventListener("scroll",this.slidescroll);


  },
  methods:{
    slidescroll(){
      if(window.scrollY > 6060 && window.scrollY < 7250){
        document.getElementById("slidefade").classList.add("slidefadein")
      }else{
        document.getElementById("slidefade").classList.remove("slidefadein")
      }
    },
  }
});

new Vue({
  el:"#scrol",
  data:{
   
  },
  mounted(){
    window.addEventListener("scroll",this.handlescroll);
  },
  methods:{
    
      handlescroll(){
        if(window.scrollY > 120){
          document.getElementById("navnav").classList.add("navnav")
          document.getElementById("space").classList.add("space")
          
        }else{
          document.getElementById("navnav").classList.remove("navnav")
          document.getElementById("space").classList.remove("space")
        }
      }
      
    }
    
  });

  