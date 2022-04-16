export const generateDestinyDDD = (origin: string) => {
  if (origin === "011" || origin === "11") {
    return ["---", "16", "17", "18"];
  } else if (origin === "" || null || undefined) {
    return ["---"];
  }

  return ["---","11"];
};

export const propsDropdownOrigin = {
  labelText: "Origem",
  options: ["---", "11", "16", "17", "18"],
};

export const propsDropdownPlan = {
  labelText: "Plano",
  options: ["---", "FaleMais 30", "FaleMais 60", "FaleMais 120"],
};