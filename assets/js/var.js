function sends(){
 
  var name=document.getElementById('name').value;
  var subject=document.getElementById('subject').value;
  var message=document.getElementById('message').value;
  if (message==''){
    alert('fill the All field')
  }else{
  window.open('mailto: fabinziyadjsd@gmail.com?subject=Enquiry &body=Your name:'+ 
  [name ,message])
}
}
;
function onsub(){
  window.open('mailto: fabinziyadjsd@gmail.com')
}
function linkedin(){
  window.open('https://www.linkedin.com/in/fabin-ziyad-439ba7224')
}
