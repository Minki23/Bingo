var colors
var visitCount = localStorage.getItem("page_view");
      visitCount = Number(visitCount) + 1;
      localStorage.setItem("page_view", visitCount);
      console.log(visitCount);
      function toggleButtonColor(button) {
        if (button.style.backgroundColor !== "white") {
          button.style.backgroundColor = "white";
          button.style.color="black";
        } else {
          button.style.backgroundColor = "rgb(255, 0, 0)";
          button.style.color="white";
        }
      }

      window.onload = function() {
        for(var i=1;i<=90;i++){
          document.getElementById('grid').innerHTML=document.getElementById('grid').innerHTML+
          `<button class='number'>${i}</button>`
        }

        var numberButtons = document.getElementsByClassName("number");

        for (var i = 0; i < numberButtons.length; i++) {
          numberButtons[i].id="number";
          numberButtons[i].style.backgroundColor = "white";
          if(i<75){
            numberButtons[i].style.opacity="1";
          }
          else{
            numberButtons[i].style.pointerEvents="none";
          }
          numberButtons[i].addEventListener('click', function() {
            toggleButtonColor(this);
            document.getElementById("ostatni-container").style.opacity="1";
            document.getElementById("ostatnia-button").innerText=this.innerText;
            if(this.style.backgroundColor == "rgb(255, 0, 0)"){
              ani(this);
            }
          });
        }
        var yesButton=document.getElementById("tak");
        yesButton.style.pointerEvents="none";

        var popup=document.getElementById("popup");
        popup.style.opacity="0";

        yesButton.addEventListener('click', function(){
          for (var i = 0; i < numberButtons.length; i++) {
            numberButtons[i].style.backgroundColor = "white";
            numberButtons[i].style.color="black";
          }
          popup.style.opacity="0";
          yesButton.style.pointerEvents="none";
          document.getElementById("ostatnia-button").innerText="";
        })

        var resetButton=document.getElementById("reset");
        resetButton.addEventListener('click', function(){
          if(popup.style.opacity === "0"){
            popup.style.opacity="1";
            yesButton.style.pointerEvents="all";
          }
          else{
            popup.style.opacity="0";
            yesButton.style.pointerEvents="none";
          }
        })
        var cancelButton=document.getElementById("anuluj");
        cancelButton.addEventListener('click', function(){
         popup.style.opacity="0";
          yesButton.style.pointerEvents="none";
        })

        var slider=document.getElementById("slider");
        slider.addEventListener('click', function(){
          if(slider.checked==true){
          for (var i = 0; i < numberButtons.length; i++) {
            numberButtons[i].style.opacity="1";
            numberButtons[i].style.pointerEvents="all";
          }
        }
        else{
          for (var i = 0; i < numberButtons.length; i++) {
            if(numberButtons[i].innerHTML>75){
              numberButtons[i].style.opacity="0";
              numberButtons[i].style.pointerEvents="none";
            }
          }
        }
      })
      };

      async function ani(btn) {
        btn.className = 'animate';
        await sleep(5000);
        btn.className = 'number';
      }
      function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }
      function reset(){
        localStorage.setItem("page_view", 0);
        console.log(localStorage.getItem("page_view"));
      }