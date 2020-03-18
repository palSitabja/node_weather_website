console.log('Client side javascript file is loaded!')


const weatherForm=document.querySelector('form')
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    document.getElementById("message-1").innerHTML="Loading..."
    //console.log("Testing")
    const location=document.querySelector('input').value
    //console.log(location)
    const url='/weather?address='+location
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                document.getElementById("message-1").innerHTML=data.error
                document.getElementById("message-2").innerHTML=''
                //console.log(data.error)
            }else{
                //else console.log(data)
                document.getElementById("message-1").innerHTML=data.location
                document.getElementById("message-2").innerHTML=data.forecast
            }
        })
    })
})