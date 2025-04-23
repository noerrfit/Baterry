function initBattery() {
    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const Bpercentage = document.querySelector(".Bpercentage");
  
    navigator.getBattery().then((batt) => {
      function updateBattery() {
        let level = Math.floor(batt.level * 100);
        Bpercentage.innerHTML = `${level}%`;
        batteryLiquid.style.height = `${level}%`;
  
        if (level === 100) {
          batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
          batteryLiquid.style.height = "100%";
        } else if (level <= 20 && !batt.charging) {
          batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red"></i>`;
        } else if (batt.charging) {
          batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`;
        } else {
          batteryStatus.innerHTML = "";
        }
  
        if (level <= 20) {
          batteryLiquid.className = "Bliquid gradient-color-red";
        } else if (level <= 48) {
          batteryLiquid.className = "Bliquid gradient-color-orange";
        } else if (level <= 80) {
          batteryLiquid.className = "Bliquid gradient-color-yellow";
        } else {
          batteryLiquid.className = "Bliquid gradient-color-green";
        }
      }
  
      updateBattery();
  
      batt.addEventListener("chargingchange", updateBattery);
      batt.addEventListener("levelchange", updateBattery);
    });
  }
  
  initBattery();
  