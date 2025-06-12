   function openPopup() {
      document.getElementById("popupOverlay").style.display = "flex";
      document.getElementById("message").textContent = "";
      document.getElementById("answerInput").value = "";
    }

    function closePopup() {
      document.getElementById("popupOverlay").style.display = "none";
    }

    function checkAnswer() {
      const input = document.getElementById("answerInput").value.trim().toLowerCase();
      const message = document.getElementById("message");

      if (input == "יהלום") {
        message.style.color = "green";
        message.textContent = "ענית נכונה! השערים ייפתחו לפניך...";
        document.getElementById('diamond').style.display = "flex";
        setTimeout(() => {
        document.getElementById('diamond').style.display = "none";
        window.location.href = "eracBall.html"; 
      }, 1000);
      } else {
        message.style.color = "red";
        message.textContent = "תשובה שגויה... נסה/י שוב.";
      }
    }

