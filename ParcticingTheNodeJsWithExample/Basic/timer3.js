function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
  console.log("The value of te id1 is :",id1)
  console.log("Th Value of te id2 is : ",id2)
  clearTimeout(id1);  
  clearInterval(id2);       