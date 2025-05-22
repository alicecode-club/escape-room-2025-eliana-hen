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

      // התשובה הנכונה: "הד"
      if (input === "הד") {
        message.style.color = "#2e5c2c";
        message.textContent = "תשובה נכונה! השערים ייפתחו לפניך... 🎻";
      } else {
        message.style.color = "#a00";
        message.textContent = "תשובה שגויה... נסה/י שוב.";
      }
    }