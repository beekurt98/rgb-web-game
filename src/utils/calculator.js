export function calculateResultPercentage(target, player) {
  const redPercentage = calcColor(target.red, player.red);
  const greenPercentage = calcColor(target.green, player.green);
  const bluePercentage = calcColor(target.blue, player.blue);
  const average = Math.trunc(
    (redPercentage + greenPercentage + bluePercentage) / 3
  );
  return average;
}

function calcColor(target, player) {
  const difference = Math.abs(target - player);
  const accuracy = 100 - (difference / 255) * 100;
  return Math.trunc(Math.max(0, accuracy));
}
