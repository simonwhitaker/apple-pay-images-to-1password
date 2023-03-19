// Massive props to https://manicmaniac.github.io/sips-js-api/

const img = sips.images[0];
const w = img.size.width;
const h = img.size.height;
const cornerRadius = Math.floor(img.size.width / 20);
const vPadding = Math.floor((w - h) / 2);
const rectTop = vPadding;
const rectBottom = vPadding + h;
const canvas = new Canvas(w, w);

// sips doesn't support roundRect, so we have to create the clipping mask the hard way. :,-(
canvas.beginPath();
canvas.moveTo(cornerRadius, rectTop);
canvas.lineTo(w - cornerRadius, rectTop);
canvas.arcTo(w, rectTop, w, rectTop + cornerRadius, cornerRadius);
canvas.lineTo(w, rectBottom - cornerRadius);
canvas.arcTo(w, rectBottom, w - cornerRadius, rectBottom, cornerRadius);
canvas.lineTo(cornerRadius, rectBottom);
canvas.arcTo(0, rectBottom, 0, rectBottom - cornerRadius, cornerRadius);
canvas.lineTo(0, rectTop + cornerRadius);
canvas.arcTo(0, rectTop, cornerRadius, rectTop, cornerRadius);
canvas.clip();

canvas.drawImage(img, 0, rectTop);
const output = new Output(canvas, sips.outputPath);
output.addToQueue();
