document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if (day == "monday" || day == "wednesday" || day =="friday"){
    alert("Boring day...")
  }else if(day == "tuesday" || day == "thursday"){
    alert("Class day :)")
  }else if(day == "saturday" || day == "sunday"){
    alert("Weekend! :D")
  }else{
    alert("-not a day of the week-")
  }
}