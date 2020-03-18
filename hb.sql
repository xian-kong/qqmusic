SET NAMES UTF8,
DROP DATABASE IF EXISTS CHARSET=UTF8,
CREATE DATABASE hb;
USE hb;

-- 用户表
CREATE TABLE hb_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname varchar(30),
	upwd varchar(15),
	phone varchar(15),
	avatar varchar(128)
);
INSERT INTO hb_user VALUES(1,'heartbeat','123456','13555555555','public/imgs/avatar/01.png'); 

-- 歌单推荐
CREATE TABLE songlist_rec(
	srid INT PRIMARY KEY AUTO_INCREMENT,
	srpic varchar(128),
	srdetails varchar(128)
);
INSERT INTO songlist_rec VALUES
	("1","蕾哈娜","public/images/rihanna.jpg","你无法超越的rihanna"),
	("2","Gem邓紫棋","public/images/gem1.jpg","神级歌者邓紫棋"),
	("3","The Pussycat Dolls","public/images/The Pussycat Dolls.jpg","曾经的小野猫组合"),
	("4","岑宁儿","public/images/zhuiguangzhe.jpg","做一个追光者"),
	("5","鹿先森乐队","public/images/lusir.jpg","所有的都不如你"),
	("6","攀登组合","public/images/pandeng.jpg","神级rap刺破你的耳膜"),
	("7","周笔畅","public/images/bibi.jpg","用尽我的一切奔向你"),
	("8","周深","public/images/zhoushen.jpg","曾经拥有，沧海桑田")

