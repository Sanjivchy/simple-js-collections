document.getElementById('searchinput').addEventListener('keyup',function(event){
    let searchQuery= event.target.value.toLowerCase();
    let allNameDomCollection= document.getElementsByClassName('name');
    for(var i=0; i<allNameDomCollection.length;i++){
        const currentname= allNameDomCollection[i].textContent.toLocaleLowerCase();
        if(currentname.includes(searchQuery)){
            allNameDomCollection[i].style.display="block"
        }
        else{
            allNameDomCollection[i].style.display='none'
        }
    }
      });