/** @format */

document.getElementById("calculate").addEventListener("click", function () {
  const appliance = document.getElementById("appliance").value;
  const wattage = parseFloat(document.getElementById("wattage").value);
  const dailyUsage = parseFloat(document.getElementById("dailyUsage").value);
  const backupDays = parseFloat(document.getElementById("backupDays").value);

  let result = 0;

  if (appliance === "light") {
    result = wattage * dailyUsage * backupDays;
  } else if (appliance === "fan") {
    result = wattage * dailyUsage * backupDays;
    // You can add more conditions for other appliances
  }

  document.getElementById(
    "result"
  ).textContent = `Total Load: ${result} watt-hours`;
});
