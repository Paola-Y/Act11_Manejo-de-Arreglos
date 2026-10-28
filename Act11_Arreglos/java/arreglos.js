function procesarTemperaturas() {
            
            let temperaturas = [];
            let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

           
            for (let i = 0; i < 7; i++) {
                let temp = parseFloat(prompt(`Ingresa la temperatura para el día ${dias[i]}:`));
                if (isNaN(temp)) {
                    alert("Por favor ingresa un número válido.");
                    i--; 
                } else {
                    temperaturas.push(temp);
                }
            }

            
            let max = Math.max(...temperaturas);
            let min = Math.min(...temperaturas);
            let suma = temperaturas.reduce((total, num) => total + num, 0);
            let promedio = suma / temperaturas.length;

            let html = `<table>
                <tr>
                    <th>Día / Concepto</th>
                    <th>Temperatura</th>
                </tr>`;

            for (let i = 0; i < 7; i++) {
                html += `<tr><td>${dias[i]}</td><td>${temperaturas[i]} °C</td></tr>`;
            }

            html += `
                <tr><td><strong>Valor máximo</strong></td><td><strong>${max} °C</strong></td></tr>
                <tr><td><strong>Valor mínimo</strong></td><td><strong>${min} °C</strong></td></tr>
                <tr><td><strong>Temperatura promedio de la semana</strong></td><td><strong>${promedio.toFixed(2)} °C</strong></td></tr>
            </table>`;

            document.getElementById("resultado-temperaturas").innerHTML = html;

}


let matrizTarifas = [
            [120, 240, 210], 
            [240, 280, 300], 
            [400, 600, 3000] 
        ];

       
        let nombresPuestos = ["Diseñador", "Programador", "Líder"];
        let nombresNiveles = ["Newbe", "Jr", "Sr"];

        function generarTablaSueldo() {
            
            let p = parseInt(document.getElementById("puesto").value);
            let n = parseInt(document.getElementById("nivel").value);
            let hrs = parseFloat(document.getElementById("horas").value);

            
            let tarifaHora = matrizTarifas[p][n];
            
            
            let total = tarifaHora * hrs;

            
            let html = `
                <table>
                    <tr>
                        <th>Concepto</th>
                        <th>Detalle / Valor</th>
                    </tr>
                    <tr>
                        <td><strong>Puesto</strong></td>
                        <td>${nombresPuestos[p]}</td>
                    </tr>
                    <tr>
                        <td><strong>Nivel</strong></td>
                        <td>${nombresNiveles[n]}</td>
                    </tr>
                    <tr>
                        <td><strong>Tarifa por hora</strong></td>
                        <td>$${tarifaHora.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><strong>Hrs Trabajadas</strong></td>
                        <td>${hrs} hrs</td>
                    </tr>
                    <tr>
                        <td><strong>Total a Pagar</strong></td>
                        <td><strong>$${total.toFixed(2)}</strong></td>
                    </tr>
                </table>
            `;

            
            document.getElementById("resultado-tabla").innerHTML = html;
        }



        const patronesNumeros = {
            0: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            1: [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 1]
            ],
            2: [
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1]
            ],
            3: [
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1]
            ],
            4: [
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1],
                [0, 0, 1],
                [0, 0, 1]
            ],
            5: [
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1]
            ],
            6: [
                [1, 1, 1],
                [1, 0, 0],
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            7: [
                [1, 1, 1],
                [0, 0, 1],
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            8: [ 
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ],
            9: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
                [0, 0, 1],
                [1, 1, 1]
            ]
        };

        function dibujarNumero() {
            let num = parseInt(document.getElementById("numeroInput").value);

            
            if (isNaN(num) || num < 0 || num > 9) {
                alert("Por favor ingresa un número válido entre 0 y 9.");
                return;
            }

            
            let matriz = patronesNumeros[num];

            
            let tablaHTML = "<table>";

            for (let i = 0; i < matriz.length; i++) { // Recorre las filas
                tablaHTML += "<tr>";
                for (let j = 0; j < matriz[i].length; j++) { // Recorre las columnas
                    
                    
                    if (matriz[i][j] === 1) {
                        tablaHTML += `<td class="activo">S</td>`;
                    } else {
                        tablaHTML += `<td class="inactivo"></td>`;
                    }
                }
                tablaHTML += "</tr>";
            }
            tablaHTML += "</table>";

            
            document.getElementById("pantalla-display").innerHTML = tablaHTML;
        }

        
        window.onload = function() {
            dibujarNumero();
        };