# Music History



body{
	margin: 0 auto;
	max-width: 75%;
	font-family: sans-serif;
}

/* Trying to figure out CSS so nav scrolls */ 
#body-main {
	max-width: 75%;
}

#header {
	position: fixed;
	width: 100%;
}

.border {
	border: 2px solid black
}

.navigation {
	margin-right: 25%;
}

#nav {
	list-style-type: none;
	text-align: center;
	padding: 20px 9px;
	margin: auto 0;
	background-color: #FFB4B0;
}

#nav li {
	padding: 0 .2em;
	width:	45px;
	text-align: left;
	display: inline;
}

#nav li:hover {
	background-color: white;
}

.bluebox {   
  display: inline-block;
  float: left;
  background: #4DD7FA ;
  box-sizing: border-box;  /*???????????*/
  width: 30%;
  height: 60%;
  padding: auto;
 }


 .bluebox, .yellowbox {
 	margin-top: 100px;
 }

.yellowbox {
	display: inline-block;
/*	float: right;  */
	color: #785616;
	width: 65%;
	margin-left: 40px;
}
/********CSS for inside BlueBox   */  
 .length {
 	margin: 50px 0 50px 20px;
 }

.artist {
 	margin: 20px 0 0 20px;
 }
.album {
 	margin: 50px 0 50px 20px;
 }
.check {
 	margin: 25px 0 50px 20px;
 }

 .check p {
 	margin: 10px auto 10 px 20px; 
 }

#artist-opt, #album-opt {
	color: black;
	font-weight: bolder;
	border: 2px solid black;
	border-radius: 5px 5px 5px 5px;
}
#button {
	text-align: center;
	margin: 10px 0 20px 0;
}
/***** hide pages depending on the click */

.hidden {
	display: none;
}

/* Code to style songlist songs */

.songLists {
	padding: 15px 4px;
}
/*******************
.songColor :nth-child(2n+0) {  
  background: #FFF5EE;
}

.songColor :nth-child(2n+1) { 
  background: #F5FFFA;
}

.songLists:first-child {
  font-weight: bolder;
}
*************************/
.more {
	background: grey;
	margin: 40px 275px;
}

.more :hover {
	background:  white;
}







