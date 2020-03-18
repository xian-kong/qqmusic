// 实现点击歌单新建按钮功能
var newbuild=$(".songlist .btn");
newbuild.click(function(){
  var $div=$(`
    <div class="cover1">
      <div class="box">
        <div>
          <span>新建歌单</span>
          <button class="closebox">×</button>
        </div>
        <div>
          <div>
            歌单名：
            <input type="text" class="form-control">
          </div>
          <div class="notnul">
            <img src="images/tishi.png" alt="">
            <span>歌单名不能为空</span>
          </div>
          <button class="addlist btn btn-success">确定</button>
          <button class="closebox btn">取消</button>
        </div>
      </div>
    </div>
  `);
  $(".container").append($div);
  $("input").focus();
  $(".box button.closebox").click(function(){
    $div.remove();
  });
  $("button.addlist").click(function(){
    var inputval=$("input").val();
    if(!inputval){
      $(".notnul").css("display","flex");
    }else{
      $(".notnul").css("display","none");
      var $newlist=$(`
      <li>
        <img src="" alt="">
        <div>
          <p class="listname"></p>
          <p>10首</p>
        </div>
        <div>
          <a class="setlist" href="javascript:;">
            <img src="images/bianji.png" alt="">
          </a>
          <a class="dellist" href="javascript:;">
            <img src="images/shanchu.png" alt="">
          </a>
        </div>
      </li>
      `);
      $(".leftside ul").append($newlist);
      var lastliname=$(".leftside ul>li:last p.listname");
      lastliname.html(inputval);
      $div.remove();
    // 删除歌单
      $(".leftside .dellist").click(function(e){
        var $delbox=$(`
        <div class="cover2">
          <div class="delbox">
            <div>提示</div>
            <div>确定删除歌单？</div>
            <div>
              <button class="btn btn-success ok">确定</button>
              <button class="btn no">取消</button>
            </div>
          </div>
        </div> 
        `);
        $(".container").append($delbox);
        $(".delbox .ok").click(function(){
          $delbox.remove();
          $(e.target).parent().parent().parent().remove();
        });
        $(".delbox .no").click(function(){
          $delbox.remove();
        })
      });
    // 编辑歌单功能
      $(".leftside .setlist").click(function(){
        var $setbox=$(`
        <div class="cover3">
          <div class="setbox">
            <button class="closebox">×</button>
            <div class="setit">
              <span>编辑歌单：</span>
              <input type="text" class="form-control">
              <button class="btn btn-success ok">OK</button>
            </div>
            <div class="notnul">
              <img src="images/tishi.png" alt="">
              <span>歌单名不能为空</span>
            </div>
          </div>
        </div>
        `);
        $(".container").append($setbox);
        $(".setbox>div>input").focus();
        $(".setbox .ok").click(function(){
          var setval=$(".setbox>div>input").val();
          if(!setval){
            $(".setbox .notnul").show();
            $(".setbox>div>input").focus(function(){
              $(".setbox .notnul").hide();
            });
          }else{
            $(".setbox .notnul").hide();
            lastliname.html(setval);
            $setbox.remove();
          }
        })
        $(".setbox button.closebox").click(function(){
          $setbox.remove();
        });
        
      })
    }  
  });
})
// 音乐播放器功能实现
  var myaudio=document.getElementById("myaudio");
  // if(!myaudio.paused){
  //     $(".icon-bofang-").addClass("icon-zanting-");
  // }else{
  //   $(".icon-bofang-").removeClass("icon-zanting-");
  // };
  $(".icon-bofang-").click(function(){
    if(myaudio.paused){
      myaudio.play();
      $(".icon-bofang-").addClass("icon-zanting-");
    }else{
      myaudio.pause();
      $(".icon-bofang-").removeClass("icon-zanting-");
    }
  });
  var toplays=[
    "./audio/G.E.M. 邓紫棋 - 光年之外.mp3",
    "./audio/周深 - 曾经沧海.mp3",
    "./audio/EminemRihanna - The Monster.mp3",
    "./audio/岑宁儿 - 追光者.mp3",
    "./audio/鹿先森乐队 - 春风十里.mp3",
    "./audio/潘玮柏 _ G.E.M. 邓紫棋 _ 艾热 - 攀登 (Live).wav",
    "./audio/周笔畅 - 用尽我的一切奔向你.mp3",
    "./audio/The Pussycat Dolls - Hush Hush.mp3"
  ];
  var i=0;
  myaudio.src=toplays[0];
  var arr=myaudio.src.split("/");
  var songdetail=decodeURI(arr[arr.length-1]);
  var span_name= document.getElementsByClassName("songdetail")[0];
  span_name.innerHTML=songdetail;
  
  var nextsong=function(){
      i++;
      if(i>toplays.length-1){
        i=0;
      };
      myaudio.src=toplays[i];
      if(myaudio.paused){
        myaudio.play();
        $(".icon-bofang-").addClass("icon-zanting-");
      };
      var arr=myaudio.src.split("/");
      var songdetail=decodeURI(arr[arr.length-1]);
      $(".songtail").html(songdetail);
      span_name.innerHTML=songdetail;
  };
  var lastsong=function(){
      i++;
      if(i>toplays.length-1){
        i=0;
      };
      myaudio.src=toplays[i];
      var arr=myaudio.src.split("/");
      var songdetail=decodeURI(arr[arr.length-1]);
      $(".songtail").html(songdetail);
      span_name.innerHTML=songdetail;
  };
  var singleloop=function(){
      if(myaudio.paused){
        myaudio.play();
        $(".icon-bofang-").addClass("icon-zanting-");
      };
      var arr=myaudio.src.split("/");
      var songdetail=decodeURI(arr[arr.length-1]);
      $(".songtail").html(songdetail);
      span_name.innerHTML=songdetail;
  };
  var randomplay=function(){
      i=Math.floor(Math.random()*toplays.length);
      // console.log(i);
      myaudio.src=toplays[i];
      if(myaudio.paused){
        myaudio.play();
        $(".icon-bofang-").addClass("icon-zanting-");
      };
      var arr=myaudio.src.split("/");
      var songdetail=decodeURI(arr[arr.length-1]);
      $(".songtail").html(songdetail);
      span_name.innerHTML=songdetail;
  };
  $(".icon-shangyiqu1").click(
    function(){
      i--;
      if(i<0){
        i=toplays.length-1;
      };
      myaudio.src=toplays[i];
      
      if(myaudio.paused){
        myaudio.play();
        $(".icon-bofang-").addClass("icon-zanting-");
      };
      var arr=myaudio.src.split("/");
      var songdetail=decodeURI(arr[arr.length-1]);
      $(".songtail").html(songdetail);
      span_name.innerHTML=songdetail;
  })
  $(".icon-xiayiqu").click(
    function(){
      nextsong();
    }
  );
     
   //播放方式切换
  // myaudio.ended===true&& $(".icon-bofang-").addClass("icon-zanting-");
  var playstyles=[
    "icon-shunxubofang-",
    "icon-xunhuanbofang",
    "icon-danquxunhuan",
    "icon-qiatong-suijibofang"
  ];
  var whichstyle=0;
  $(".playstyle").click(
    function(){
      whichstyle++
      if(whichstyle>3){
        whichstyle=0
      };
      $(this).removeClass(playstyles[whichstyle-1]).addClass(playstyles[whichstyle]);
    }
  )
  //时间规范函数
  function timeStandard(t){
    if(t<10){
      t="00:0"+t;
    }else if(t>=10&&t<60){
      t="00:"+t;
    }else if(t%60<10){
      t="0"+Math.floor(t/60)+":"+"0"+t%60;
    }else{
      t="0"+Math.floor(t/60)+":"+t%60;
    };
    return t;
  };
  var nowtime,l,x,t;
  
  // $(".processbar").hover(
  //   function(){
  //     $(this).css("background-color","red")
  //   },
  //   function(){
  //     $(this).css("background-color","transparent")
  //   }
  // );

  //记录音乐播放的当前时间
  setInterval(function(){
    nowtime=myaudio.currentTime.toFixed(0);
    l=myaudio.duration.toFixed(0);
    nowtime=timeStandard(nowtime);
    l=timeStandard(l);
    x=( parseFloat($(".audio").css("width"))/myaudio.duration.toFixed(0)*myaudio.currentTime.toFixed(0) ).toFixed(0);
    $(".timedetail").html(nowtime+"/"+l);
    $(".process_button").animate({
      marginLeft:x
    },0);
    if(myaudio.ended){
      $(".icon-bofang-").removeClass("icon-zanting-");
      // console.log(myaudio.ended)
    };
    //顺序播放
    if($(".playstyle").hasClass("icon-shunxubofang-"))
    {
      if(myaudio.ended){
        setTimeout(function(){
          if(i==toplays.length-1){
            lastsong();
          }
        },500);
      }
    };
    //循环播放
    if($(".playstyle").hasClass("icon-xunhuanbofang"))
    {
      if(myaudio.ended){
        setTimeout(function(){
          singleloop();
        },500);
      }
    };
    //单曲循环
    if($(".playstyle").hasClass("icon-danquxunhuan"))
    {
      if(myaudio.ended){
        setTimeout(function(){
          myaudio.play();
          $(".icon-bofang-").addClass("icon-zanting-")
        },500);
      }
    };
    //随机播放
    if($(".playstyle").hasClass("icon-qiatong-suijibofang"))
    {
      if(myaudio.ended){
        setTimeout(function(){
          randomplay();
        },500);
      }
    };
  },1000)


  // function(event){
    //   //   //event.which可以返回对应鼠标按键的键值
    //   //   //1:左键  2:中键  3:右键
    //   //   console.log(event.which)
    //   // })
 //鼠标拖动改变播放进度效果
  var processbar=document.getElementsByClassName("processbar")[0];
  var barleft=processbar.offsetLeft;
  // console.log("main-t:"+t,myaudio.currentTime)
  $(".processbar").click(
    function(e){
      t=myaudio.duration.toFixed(0)/(parseFloat($(".audio").css("width")));
      $(".process_button").css("marginLeft",e.clientX-barleft-12);
      myaudio.currentTime=(e.clientX-barleft-12)*t;
      // console.log(myaudio.currentTime)
    }
  )
  var tag=false;
  // console.log("main:"+tag)
  $(".process_button").mousedown(
    function(){
        tag=true;
        // console.log("down:"+tag,myaudio.currentTime)
    }
  )
  $(".processbar").on("mouseup",
    function(){
        tag=false;
        // console.log("up:"+tag,myaudio.currentTime)
    }
  ) 
  $(".processbar").mousemove(
    function(e){
        if(tag){
        console.log("move:"+tag)
        $(".process_button").css("marginLeft",e.clientX-barleft-12);
        myaudio.currentTime=(e.clientX-barleft-12)*t;
        }
    }
  )
  //添加喜欢功能
  $(".icon-xinaixin1").click(
    function(){
      if($(this).hasClass("icon-xinaixin1")){
        $(this).removeClass("icon-xinaixin1").addClass("icon-xinaixin")
        .css("color","#EE5E7B");
      }else{
        $(this).removeClass("icon-xinaixin").addClass("icon-xinaixin1")
        .css("color","#fff");
      }
    }
  )
  // 音量控制
  $(".icon-shengyin").click(
    function(){
      if($(this).hasClass("icon-shengyin")){
      $(this).removeClass("icon-shengyin").addClass("icon-mute");
      myaudio.volume=0;
      }else{
        $(this).removeClass("icon-mute").addClass("icon-shengyin");
        myaudio.volume=1;
      }
    }
  )
  var vol=document.getElementsByClassName("vol")[0];
  var volleft=vol.offsetLeft;
  var everyvol=1/(parseFloat($(".volbar").css("width")));
  $(".vol").click(
    function(e){
      $(".vol_button").css("marginLeft",e.clientX-volleft-12);
      myaudio.volume=(e.clientX-volleft-12)*everyvol;
      // console.log(myaudio.currentTime)
    }
  )
  // $(".vol_button").ondragstart=function(){
  //   console.log(1)
  // }
  // myaudio.volume值为0到1
  // console.log(myaudio.volume)
//当鼠标移到body下方边缘时，音乐播放器显示
    var  mout=false;
    var timer1;
    $(".playbox").mouseleave( 
      function(){
        console.log("出去",mout)
        timer1=setTimeout(()=>{
          $(this).css({
            transform:"translateY(0)"
          })
          console.log("1")
        },1000);
      }
    )
    $(".playbox").mouseenter(
      function(){
        mout=true;
        clearTimeout(timer1);
        console.log("进入",mout)
        $(this).css({
          transform:"translateY(-98px)"
        }); 
      }
    )
