export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function calculateExperience(initialDate) {
  const currentDate = new Date();
  const startDate = new Date(initialDate);

  const yearDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthDifference = currentDate.getMonth() - startDate.getMonth();

  let experience = yearDifference;

  // If the current month is before the initial month, decrement the experience
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < startDate.getDate())
  ) {
    experience--;
  }

  return experience < 1 ? "Less than 1 year" : `${experience}+ years`;
}

export const getFifthShades = (colors) => {
  const fifthShades = [];

  for (const colorCategory in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, colorCategory)) {
      const colorShades = colors[colorCategory];
      const fifthShade = colorShades[4]; // 5th shade is at index 4

      fifthShades.push(fifthShade);
    }
  }

  return fifthShades;
};
