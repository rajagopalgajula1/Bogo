const boxes = document.querySelectorAll('.box');
const totalText=document.querySelector(".total");

boxes.forEach((box,index)=>{
    const sizeDiv = box.querySelector('.size-div');
    const circle = box.querySelector(".circle");
    if(index !==1)
    {
        sizeDiv.style.display='none';
    }
    else{
        sizeDiv.style.display="flex";
        circle.classList.add("active")
        const price = box.getAttribute('data-price');
        totalText.textContent = `Total : $${price}.00 USD`;
    }
});

boxes.forEach(box => {
    box.addEventListener('click', () => {
      boxes.forEach(b => {
        b.classList.remove("active")
        b.querySelector('.size-div').style.display = 'none'; 
        b.querySelector(".circle").classList.remove("active");
      });
      box.classList.add("active");
      box.querySelector('.size-div').style.display = 'flex'; 
      box.querySelector(".circle").classList.add("active");

      const price = box.getAttribute("data-price");
      totalText.textContent=`Total : $${price}.00 USD`;
    });
  });