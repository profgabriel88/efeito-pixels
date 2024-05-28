const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tamanho = 600;
canvas.width = tamanho;
canvas.height = tamanho;


const inputRes = document.getElementById('res');
inputRes.addEventListener('change', () => {
    res = inputRes.value;
    bloco = tamanho / res;
    pixeliza();
});
let res = 0;//inputRes.value;
let bloco = tamanho / res;
let cores = [];
const img = new Image();
img.src = 'mona.jpg';

window.addEventListener('load', () => {
    pixeliza();
})

let timeout;
function pixeliza() {
    for (let k = 1; k < 1200; k++) {
        console.log(k);
        setTimeout(() => {
            res = k;
            bloco = tamanho / res;
            if (bloco % 4 == 0) {
                ctx.clearRect(0, 0, tamanho, tamanho);
                ctx.drawImage(img, 0, 0, tamanho, tamanho);
                for (let j = 0; j < tamanho; j += bloco) {
                    for (let i = 0; i < tamanho; i += bloco) {
                        const data = ctx.getImageData(j, i, bloco, bloco).data;
                        let idc = (data.length / 2)
                        let vm = data[idc];
                        let vd = data[idc + 1];
                        let az = data[idc + 2];
                        ctx.fillStyle = 'rgb(' + vm + ',' + vd + ',' + az + ')';
                        ctx.fillRect(j, i, bloco, bloco);
                    }
                }
            }
        }, 10)
    }
}