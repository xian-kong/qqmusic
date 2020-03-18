const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
//1.注册的路由
router.post('/reg',function(req,res){
  //获取数据
  var obj=req.body;
  //执行SQL语句 
  pool.query('INSERT INTO hb_user SET ?',[obj],function(err,result){
    if(err) throw err;
	console.log(result);
	//插入成功
	res.send({code:200,msg:'register suc'});
  })
});
//2.登录的路由
router.get('/login',function(req,res){
  //2.1获取数据
  var obj=req.query;
  console.log(obj);
  //2.3执行SQL语句
  pool.query('SELECT uid FROM hb_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
    if(err) throw err;
    //console.log(result);
    //判断是否登录成功
    if(result.length>0){//查询到了
      res.send({code:200,msg:'login suc'});
    }else{//没有查询到
      res.send({code:301,msg:'uname or upwd err'});
    }
  });
});
//3.修改资料
router.get('/update',function(req,res){
  //3.1获取get数据
  var obj=req.query;
  //3.2验证数据是否为空
  //遍历对象，获取每个属性值，如果为空，属性名是必须的
  var i=400;
  for(var key in obj){
	i++;
    //obj[key] 属性值
    if(!obj[key]){
	  res.send({code:i,msg:key+' require'});
	  return;
	}
  }
  //3.3执行SQL语句
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],function(err,result){
    if(err) throw err;
	//console.log(result);
	//判断是否修改成功
    if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
});
//4.检索用户
router.get('/detail',function(req,res){
  //4.1获取数据
  var obj=req.query;
  //4.2验证数据是否为空
  if(!obj.uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  //4.3执行SQL语句
  pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
    console.log(result);
	//如果检索到用户
	if(result.length>0){
	  res.send( result[0] );
	}else{//没有检索到
	  res.send({code:301,msg:'not found'});
	}

  });
});
//5.删除用户
router.get('/delete',function(req,res){
  //5.1获取数据
  var obj=req.query;
  //5.2验证数据是否为空
  if(!obj.uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  //5.3执行SQL语句
  pool.query('DELETE FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
    //判断是否删除成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'delete suc'});
	}else{
	  res.send({code:301,msg:'delete err'});
	}
  });
});
//6.用户列表
router.get('/list',function(req,res){
  //6.1获取数据
  var obj=req.query;
  var pno=obj.pno;
  var size=obj.size;
  //6.2验证数据是否为空
  //页码为空，默认值1
  if(!pno) pno=1;
  //大小为空，默认值2
  if(!size) size=2;
  //6.3把页码和大小转为数值型
  pno=parseInt(pno);
  size=parseInt(size);
  //6.4计算开始查询的值
  var start=(pno-1)*size;
  //6.5执行SQL语句
  pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,size],function(err,result){
	if(err) throw err;
    //把查询的数据发送给浏览器
	res.send(result);
  });
});


//导出路由器对象
module.exports=router;








