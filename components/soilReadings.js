export function calculateAverage(read) {
  var total = 0;
  var count = 0;

  read.forEach(function (item, index) {
    total += item;
    count++;
  });
  return total / count;
}
export function nitrogenAnalysis(Nitrogen) {
  let evaluation = null;
  if (Nitrogen >= 0 && Nitrogen <= 99.0) {
    evaluation = "low";
  } else if (Nitrogen >= 99.1 && Nitrogen <= 149.0) {
    evaluation = "medium";
  } else if (Nitrogen >= 149.1 && Nitrogen <= 299.0) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }

  return evaluation;
}
export function phosphorusAnalysis(Phosphorus) {
  let evaluation = null;
  if (Phosphorus >= 0 && Phosphorus <= 99.0) {
    evaluation = "low";
  } else if (Phosphorus >= 99.1 && Phosphorus <= 149.0) {
    evaluation = "medium";
  } else if (Phosphorus >= 149.1 && Phosphorus <= 299.0) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }
  return evaluation;
}
export function potassiumAnalysis(potassium) {
  let evaluation = null;
  if (potassium >= 0 && potassium <= 99.0) {
    evaluation = "low";
  } else if (potassium >= 99.1 && potassium <= 149.0) {
    evaluation = "medium";
  } else if (potassium >= 149.1 && potassium <= 299.0) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }
  return evaluation;
}
