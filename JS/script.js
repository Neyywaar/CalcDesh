const buttons = document.querySelectorAll("input[type='button']");
        const dispalyInput = document.getElementById("displayInput");
        const opeartion = document.getElementById("operation");

        const buttonClickHandler = (btn) => {
            if (btn.value === "=") {
                opeartion.innerHTML = dispalyInput.value;
                dispalyInput.value = eval(dispalyInput.value.replace(/%/g, '/100'));
            } else if (btn.value === "C") {
                opeartion.innerHTML = "";
                dispalyInput.value = "";
            } else if (btn.value === "Del") {
                dispalyInput.value = dispalyInput.value.slice(0, -1);
            } else {
                dispalyInput.value += btn.value;
            }
        };

        const addButtonListeners = (btn) => {
            btn.addEventListener("click", () => buttonClickHandler(btn));
            btn.addEventListener("touchstart", (event) => {
                event.preventDefault();
                buttonClickHandler(btn);
            });
        };

        buttons.forEach(addButtonListeners);

        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                opeartion.innerHTML = dispalyInput.value;
                dispalyInput.value = eval(dispalyInput.value.replace(/%/g, '/100'));
            }
        });