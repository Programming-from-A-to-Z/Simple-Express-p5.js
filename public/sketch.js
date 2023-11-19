async function setup() {
  createCanvas(400, 400);
  loadJSON('/talk?name=Llama', gotData);

  // For using fetch
  // const response = await fetch('/talk?name=Llama');
  // const data = await response.json();
  // background(0);
  // fill(255);
  // textAlign(CENTER, CENTER);
  // textSize(32);
  // text(data.message, 200, 150);
  // text(data.time, 200, 250);
}

function gotData(data) {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(data.message, 200, 150);
  text(data.time, 200, 250);
}
