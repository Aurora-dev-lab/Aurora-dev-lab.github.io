  let myImage = document.querySelector('img');

  myImage.onclick = function()
  {
      let mySrc = myImage.getAttribute('src');
      if(mySrc=='images\\testimage-3.png')
      {
        myImage.setAttribute('src', 'images\\testimage-4.png');//"\t中的'\'被认为是转义字符,在字符串中需用'\\'来表示" 
      } 
      else 
      {
        myImage.setAttribute('src' , 'images\\testimage-3.png');
      }
  }
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  function setUserName() 
  {
    let myName = prompt('请输入你的名字。');
    if(!myName)
      {
          setUserName();
      }
      else
      {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Dear:'+myName;
      }
    
  }
  if(!localStorage.getItem('name'))
  {
    setUserName();
  } 
  else 
  {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dear:'+storedName;
  }
  myButton.onclick = function() 
 {
    setUserName();
 }
 /* document.querySelector('html').addEventListener('click', () => {
  alert('嗨嗨嗨');
}); */

 
  
  

  

  
  
