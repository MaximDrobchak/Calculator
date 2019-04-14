const engines = [];
let engine = 0.8;

for(let i = 0; i < 57; i++){
  engines.push([i,(engine + i / 10).toFixed(1)]);
}

export default engines;