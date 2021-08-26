var total;
        var income=0;
        var expense=0;

        const click=document.querySelector(".click");
        const input=document.querySelector("#amount");
        const text=document.querySelector("#text");
        const grid=document.querySelector(".grid");
        const totaltext=document.querySelector(".total");
        const incomeamount=document.querySelector(".incomeamount");
        const expenseamount=document.querySelector(".expenseamount");
        const bar=document.querySelector(".bar");
        
        click.addEventListener('click',()=>{
            var inputvalue=parseFloat(input.value);
                if( inputvalue>= 0)
                {
                    income+=inputvalue;
                    expense+=0;
                    var transaction=`<h6 class="text-dark heading p-2 item" style="font-weight: 500 !important;border-right: 5px solid lightgreen !important;">${text.value}<span class="offset-9 itemmoney">$+${input.value}</span></h6>`;
                    grid.innerHTML+=transaction;
                    
                }
                else{

                    expense+=inputvalue;
                    income+=0;
                    var transaction=`<h6 class="text-dark heading p-2 item" style="font-weight: 500 !important;border-right: 5px solid red !important; break-word:normal">${text.value}<span class="offset-9 itemmoney">$${input.value}</span></h6>`;
                    grid.innerHTML+=transaction;
                }

                total=income+expense;
                totaltext.innerHTML=`$${total}`;
                incomeamount.innerHTML=`$${income}`;
                expenseamount.innerHTML=`$${-expense}`;  
                if(total>=0)
                {
                    bar.style.width=`${total*0.008}%`;
                }
                else{
                    alert("Balnce Is Very Low !");
                }
                text.value='';
                input.value='';
        });