/*! For license information please see learning-student-progress.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){window.randomScalingFactor=function(){return Math.round(20*Math.random())};var a=document.getElementById("summarychart").getContext("2d"),t=a.createLinearGradient(0,0,0,280);t.addColorStop(0,"rgba(0, 73, 232, 1)"),t.addColorStop(.5,"rgba(0, 168, 133, 0.5)"),t.addColorStop(1,"rgba(255, 193, 7, 0)");var r=a.createLinearGradient(0,0,0,280);r.addColorStop(0,"rgba(3, 4, 94, 0.85)"),r.addColorStop(1,"rgba(0, 73, 232, 0)");var o={type:"bar",data:{labels:["Apr","May","Jun","Jul","Aug","Sep","Oct"],datasets:[{label:"Fees Collected (lacs)",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:5,borderRadius:15,backgroundColor:t,borderColor:"#5840ef",borderWidth:0,fill:!0,tension:.5},{label:"# of hours",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:5,borderRadius:15,backgroundColor:r,borderColor:"#03045e",borderWidth:0,fill:!0,tension:.5}]},options:{animation:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{display:!0,beginAtZero:!0},x:{grid:{display:!0},display:!0,beginAtZero:!0}}}},e=new Chart(a,o);setInterval((function(){o.data.datasets.forEach((function(a){a.data=a.data.map((function(){return randomScalingFactor()}))})),e.update()}),3e3),new ProgressBar.Circle(circleprogressblue1,{color:"#015EC2",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"rgba(66, 157, 255, 0.15)",duration:1400,text:{autoStyleContainer:!1},from:{color:"#015EC2",width:10},to:{color:"#015EC2",width:10},step:function(a,t){t.path.setAttribute("stroke",a.color),t.path.setAttribute("stroke-width",a.width);var r=Math.round(100*t.value());0===r?t.setText(""):t.setText(r+"<small>%<small>")}}).animate(.65),new ProgressBar.Circle(circleprogressgreen1,{color:"#91C300",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"#eaf4d8",duration:1400,text:{autoStyleContainer:!1},from:{color:"#91C300",width:10},to:{color:"#91C300",width:10},step:function(a,t){t.path.setAttribute("stroke",a.color),t.path.setAttribute("stroke-width",a.width);var r=Math.round(100*t.value());0===r?t.setText(""):t.setText(r+"<small>%<small>")}}).animate(.85)}));