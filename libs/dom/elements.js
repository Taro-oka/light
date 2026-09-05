const lightCord = document.querySelector(".light-cord");
const lightBulb = document.querySelector(".light-bulb");

const elements = {
  lightCord,
  lightBulb,
};

export const getElements = () => {
  if (Object.values(elements).some((e) => !e)) {
    throw new Error("Cannot access one or more necessary dom elements");
  }

  return elements;
};
