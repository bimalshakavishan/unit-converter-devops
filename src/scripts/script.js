function convert() {
  let value = document.getElementById("value").value;
  let type = document.getElementById("type").value;
  let result = "";

  if (type === "length") result = value * 100 + " cm";
  if (type === "weight") result = value * 1000 + " g";
  if (type === "temp") result = (value * 9/5 + 32) + " F";

  document.getElementById("result").innerText = result;
}
