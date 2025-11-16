export function calculateResultPercentage(target, player) {
  const errorCases = [
    {
      func: () => {
        if (player.red == 0 && player.green == 0 && player.blue == 0)
          return false;
      },
    },
    {
      func: () => {
        if (player.red == 255 && player.green == 255 && player.blue == 255)
          return false;
      },
    },
  ];

  const redPercentage = calcColor(target.red, player.red);
  const greenPercentage = calcColor(target.green, player.green);
  const bluePercentage = calcColor(target.blue, player.blue);
  const average = Math.trunc(
    (redPercentage + greenPercentage + bluePercentage) / 3
  );

  if (
    (player.red == 0 &&
      player.green == 0 &&
      player.blue == 0 &&
      target.red != 0 &&
      target.green != 0 &&
      target.blue != 0) ||
    (player.red == 255 &&
      player.green == 255 &&
      player.blue == 255 &&
      target.red != 255 &&
      target.green != 255 &&
      target.blue != 255)
  ) {
    return 0;
  }

  return average;
}

function calcColor(target, player) {
  const difference = Math.abs(target - player);
  const accuracy = 100 - (difference / 255) * 100;
  return Math.trunc(Math.max(0, accuracy));
}
