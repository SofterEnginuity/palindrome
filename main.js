document.querySelector('#Check').addEventListener('click', makeReq)
  
  

function makeReq(){
  const userInput = document.querySelector('input').value
  fetch(`/api?word=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.result)
      // document.querySelector('p').innerText = data.result
      if(data.result == true){
         document.querySelector('p').innerText = `Dope! It is a palindrome!`
      }else{
       document.querySelector('p').innerText = `Sorry, try another word.`
      //  document.querySelector('p').innerText = ""  need to make it disappear after
      }
    });

}

