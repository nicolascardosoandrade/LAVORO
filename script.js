let display = document.getElementById('display');
        
        function appendToDisplay(value) {
            if (display.textContent === '0' && value !== '.') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }

        function clearDisplay() {
            display.textContent = '0';
        }

        function calculate() {
            try {
                let result = eval(display.textContent.replace('×', '*').replace('÷', '/'));
                if (isFinite(result)) {
                    display.textContent = result;
                } else {
                    display.textContent = 'Erro';
                }
            } catch (e) {
                display.textContent = 'Erro';
            }
        }