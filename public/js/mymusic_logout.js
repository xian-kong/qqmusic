// 检测登录和注册页面
var vm=new Vue({
  el:"#app",
  data:{
    phone:"",
    password:"",
    qq:"",
    qqPassword:"",
    uname:"",
    phone1:"",
    upwd1:"",
    upwd2:"",
    check1:false,
    check2:false,
    check3:false,
    check4:false,
    check5:false,
    check6:false,
    check7:false,
    check8:false,
    message1:"",
    message2:"",
    message3:"",
    message4:"",
    clicked:false,
    isAgreen:false,
    isReg:false
  },
  methods:{
    clear(){
      this.isReg=false;
      this.phone="";
      this.password="";
      this.qq="";
      this.qqPassword="";
      this.uname="";
      this.phone1="";
      this.upwd1="";
      this.upwd2="";
      this.clicked=false;
      this.isAgreen=false
    },
    phonereg(){
      this.clicked=true;
    },
    returnlog(){
      this.clicked=false
    },
    // ？？？为啥不能绑定button
    alertmessage(e){      
      if(this.isAgreen==false&&e.target.className=="form-control"){
        alert("请先勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》")
      }
    },
    clickreg(){
       this.isReg=true;
      
    }
  },
  watch:{
    phone(){
      var reg=/^1[3-9]\d{9}$/;
      this.check1=reg.test(this.phone);
      this.message1=this.check1?"手机格式正确":"手机格式错误"
    },
    password(){
      var reg=/^\w{6,12}$/;
      this.check2=reg.test(this.password);
      this.message2=this.check2?"密码格式正确":"密码格式错误"
    },
    qq(){
      var reg=/^\d{6,12}$/;
      this.check3=reg.test(this.qq);
      this.message3=this.check3?"qq号格式正确":"qq号格式错误"
    },
    qqPassword(){
      var reg=/^\w{6,12}$/;
      this.check4=reg.test(this.qqPassword);
      this.message4=this.check4?"密码格式正确":"密码格式错误"
    },
    uname(){
      var reg=/^[a-zA-Z\u4e00-\u9fa5]{1,10}$/;
      this.check5=reg.test(this.uname);
    },
    phone1(){
      var reg=/^1[3-9]\d{9}$/;
      this.check6=reg.test(this.phone1);
    },
    upwd1(){
      var reg=/^\w{6,12}$/;
      this.check7=reg.test(this.upwd1);
    },
    upwd2(){
      var reg=/^\w{6,12}$/;
      this.check8=this.upwd2===this.upwd1;
    }
  }
})
