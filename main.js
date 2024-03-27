(function () {

    "uses strict"
    const btn = document.querySelector("#btn")
    const email = document.querySelector("#email")

    btn.disabled = false;

    btn.addEventListener("submit", function() {
        email.addEventListener("change", stateHandle);
    
        function stateHandle() {
            if(email.value === "" || 
            email.value === 0 || email.value === null) {
                btn.disabled = true;
            } else {
                btn.disabled = false;
            }
        }
    })
}) 
()

