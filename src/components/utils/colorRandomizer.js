export function getRandomHexColor() {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`.toUpperCase();
  } while (color === '#FFFFFF');
  return color;
}
