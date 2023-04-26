
const btn3  = document.querySelector('#btn3');
    
btn3.addEventListener('click', ()=>{ 

    const placa = document.querySelector('#placa').value
  const valor = document.querySelector('.valor')
  const form = document.querySelector('.form-box')
   const modelo = document.querySelector('#modelo').value;
   const horas = document.querySelector('#horas').value;
   let texto = document.querySelector('#texto');
   if(modelo == 0 || horas==0 || placa==""){
    alert("Valores inválidos! Verifique os dados e tente novamente.")
    return;
   }
    const total = modelo*horas
   texto.textContent = total.toFixed(2)+'R$'

   alert('Compra Realizada com Sucesso!')
  
   form.classList.add('inactive')
   valor.classList.add('active')
  
  
});

const btn2 = document.querySelector('#btn-2') 
btn2.addEventListener('click', ()=>{
  window.location.reload(false);
})

