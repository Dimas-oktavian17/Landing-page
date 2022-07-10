document.addEventListener('click', function(){
    document.querySelector('.crd').classList.add("card-hidden")  
})
document.addEventListener('click', function(){
    document.querySelector('.page-1').classList.remove("hiddenn")  
})

document.addEventListener('click', function(){
    document.querySelector('.page-2').classList.remove("hiddenn")  
})

document.querySelector('.toggle').addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
});