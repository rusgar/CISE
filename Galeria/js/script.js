let modoActual = 'aleatorio';
        let coloresActuales = [];

        // Inicializar
        document.querySelectorAll('.btn-modo').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.btn-modo').forEach(b => b.classList.remove('activo'));
                this.classList.add('activo');
                modoActual = this.dataset.modo;
                
                const colorBaseSection = document.getElementById('colorBaseSection');
                if (modoActual === 'similares' || modoActual === 'armonicos') {
                    colorBaseSection.style.display = 'flex';
                } else {
                    colorBaseSection.style.display = 'none';
                }
            });
        });

        document.getElementById('colorBase').addEventListener('input', function(e) {
            document.getElementById('colorBaseTexto').textContent = e.target.value;
        });

        // Generar color aleatorio
        function generarColorAleatorio() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return rgbToHex(r, g, b);
        }

        // Convertir RGB a HEX
        function rgbToHex(r, g, b) {
            return "#" + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }).join('');
        }

        // Convertir HEX a RGB
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        // Generar colores similares
        function generarColoresSimilares(colorBase) {
            const rgb = hexToRgb(colorBase);
            const colores = [colorBase];
            
            for (let i = 0; i < 2; i++) {
                const variacion = 40;
                const r = Math.max(0, Math.min(255, rgb.r + (Math.random() * variacion * 2 - variacion)));
                const g = Math.max(0, Math.min(255, rgb.g + (Math.random() * variacion * 2 - variacion)));
                const b = Math.max(0, Math.min(255, rgb.b + (Math.random() * variacion * 2 - variacion)));
                colores.push(rgbToHex(Math.floor(r), Math.floor(g), Math.floor(b)));
            }
            
            return colores;
        }

        // Generar colores armónicos (complementarios, tríada, etc)
        function generarColoresArmonicos(colorBase) {
            const rgb = hexToRgb(colorBase);
            
            // Convertir a HSL para manipular mejor
            const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
            
            // Generar esquema de color complementario y análogo
            const colores = [
                colorBase,
                hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l), // Análogo +30°
                hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l)  // Complementario
            ];
            
            return colores;
        }

        // RGB a HSL
        function rgbToHsl(r, g, b) {
            r /= 255, g /= 255, b /= 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                    case g: h = ((b - r) / d + 2) / 6; break;
                    case b: h = ((r - g) / d + 4) / 6; break;
                }
            }

            return { h: h * 360, s: s * 100, l: l * 100 };
        }

        // HSL a HEX
        function hslToHex(h, s, l) {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
                const k = (n + h / 30) % 12;
                const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
                return Math.round(255 * color);
            };
            return rgbToHex(f(0), f(8), f(4));
        }

        // Generar paleta según modo
        function generarPaleta() {
            let colores;
            
            switch(modoActual) {
                case 'similares':
                    const colorBaseSimilar = document.getElementById('colorBase').value;
                    colores = generarColoresSimilares(colorBaseSimilar);
                    break;
                case 'armonicos':
                    const colorBaseArmonico = document.getElementById('colorBase').value;
                    colores = generarColoresArmonicos(colorBaseArmonico);
                    break;
                default:
                    colores = [
                        generarColorAleatorio(),
                        generarColorAleatorio(),
                        generarColorAleatorio()
                    ];
            }
            
            coloresActuales = colores;
            mostrarPaleta(colores);
        }

        // Mostrar paleta
        function mostrarPaleta(colores) {
            const galeria = document.getElementById('galeria');
            galeria.innerHTML = '';
            
            colores.forEach((color, index) => {
                const tarjeta = crearTarjeta(color, index);
                galeria.appendChild(tarjeta);
            });
        }

        // Crear tarjeta
        function crearTarjeta(color, index) {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-color';
            tarjeta.style.background = color;
            
            tarjeta.innerHTML = `
                <div class="tarjeta-header">
                    <div class="numero-color">${index + 1}</div>
                </div>
                <div class="tarjeta-footer">
                    <div class="codigo-color" onclick="copiarColor('${color}')">${color}</div>
                    <div class="picker-container">
                        <input type="color" value="${color}" onchange="cambiarColor(${index}, this.value)">
                    </div>
                </div>
            `;
            
            return tarjeta;
        }

        // Cambiar color individual
        function cambiarColor(index, nuevoColor) {
            coloresActuales[index] = nuevoColor;
            mostrarPaleta(coloresActuales);
        }

        // Copiar color
        function copiarColor(color) {
            navigator.clipboard.writeText(color);
            mostrarNotificacion('Color copiado: ' + color);
        }

        // Mostrar notificación
        function mostrarNotificacion(mensaje) {
            const notif = document.createElement('div');
            notif.className = 'notificacion';
            notif.textContent = mensaje;
            document.body.appendChild(notif);
            
            setTimeout(() => {
                notif.remove();
            }, 2000);
        }

        // Exportar paleta
        function exportarPaleta() {
            if (coloresActuales.length === 0) {
                mostrarNotificacion('⚠️ Genera una paleta primero');
                return;
            }
            
            const texto = coloresActuales.join('\n');
            navigator.clipboard.writeText(texto);
            mostrarNotificacion('✅ Paleta exportada al portapapeles');
        }

        // Generar paleta inicial
        window.onload = function() {
            // Generar color base aleatorio inicial
            const colorAleatorio = generarColorAleatorio();
            document.getElementById('colorBase').value = colorAleatorio;
            document.getElementById('colorBaseTexto').textContent = colorAleatorio;
            
            generarPaleta();
        };