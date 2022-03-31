function totalInCid(cid) {
  let total = 0;
  6;
  cid.map((i) => {
    total += i[1];
  });

  return total;
}

function calculateChangeDue(difference, cid) {
  let change = {
    status: "",
    change: [],
  };
  let due = [];
  let differenceCpy = difference;

  for (let i = cid.length - 1; i >= 0 && differenceCpy > 0; i--) {
    if (cid[i][0] === "ONE HUNDRED") {
      let moneyValue = 100;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["ONE HUNDRED", total]);
        }
      }
    } else if (cid[i][0] === "TWENTY") {
      let moneyValue = 20;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["TWENTY", total]);
        }
      }
    } else if (cid[i][0] === "TEN") {
      let moneyValue = 10;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["TEN", total]);
        }
      }
    } else if (cid[i][0] === "FIVE") {
      let moneyValue = 5;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["FIVE", total]);
        }
      }
    } else if (cid[i][0] === "ONE") {
      let moneyValue = 1;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["ONE", total]);
        }
      }
    } else if (cid[i][0] === "QUARTER") {
      let moneyValue = 0.25;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["QUARTER", total]);
        }
      }
    } else if (cid[i][0] === "DIME") {
      let moneyValue = 0.1;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["DIME", total]);
        }
      }
    } else if (cid[i][0] === "NICKEL") {
      let moneyValue = 0.05;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["NICKEL", total]);
        }
      }
    } else if (cid[i][0] === "PENNY") {
      let moneyValue = 0.01;
      if (cid[i][1] >= moneyValue && differenceCpy >= moneyValue) {
        let total = 0;
        let sufficient = cid[i][1] >= moneyValue ? true : false;
        while (differenceCpy >= moneyValue && sufficient) {
          differenceCpy = differenceCpy.toFixed(2);
          cid[i][1] = cid[i][1].toFixed(2);
          differenceCpy -= moneyValue;
          cid[i][1] -= moneyValue;
          total += moneyValue;
          if (cid[i][1] < moneyValue) {
            sufficient = false;
          }
        }
        if (total >= 0) {
          due.push(["PENNY", Number(total.toFixed(2))]);
        }
      }
    }
  }

  if (due.length === 0 || differenceCpy !== 0) {
    change.status = "INSUFFICIENT_FUNDS";
  } else if (totalInCid(cid) === 0) {
    change.status = "CLOSED";
    for (let i = 0; i < cid.length - 1; i++) {
      if (due[i]) {
        if (due[i][0] == cid[i][0]) {
          cid[i][1] = due[i][1];
        }
      }
    }
    change.change = cid;
  } else {
    change.status = "OPEN";
    change.change = due;
  }

  return change;
}

function checkCashRegister(price, cash, cid) {
  let change = {
    status: "",
    change: [],
  };
  let difference = cash - price;

  let totalCid = totalInCid(cid);
  if (difference > totalCid) {
    change.status = "INSUFFICIENT_FUNDS";
  } else {
    return calculateChangeDue(difference, cid, change);
  }
  return change;
}

let res = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);