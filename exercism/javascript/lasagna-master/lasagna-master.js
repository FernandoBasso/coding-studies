/// <reference path="./global.d.ts" />
// @ts-check

const AVG_PREP_TIME_PER_LAYER = 2;

export function cookingStatus(timer) {
  if (timer === undefined)
    return "You forgot to set the timer.";

  return timer === 0
    ? "Lasagna is done."
    : "Not done, please wait.";
}

export function preparationTime(
  layers,
  prepTimePerLayer = AVG_PREP_TIME_PER_LAYER,
) {
  return layers.length * prepTimePerLayer;
}

export function quantities(layers) {
  const info = {
    noodles: 0,
    sauce: 0,
  };

  for (const layer of layers)
    if (layer === "noodles")
      info.noodles += 50;
    else if (layer === "sauce")
      info.sauce += 0.2;

  return info;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, factor) {
  const scaledRecipe = {};
  const amountForOnePerson = factor / 2;

  for (const ingredient in recipe)
    scaledRecipe[ingredient] = recipe[ingredient] * amountForOnePerson;

  return scaledRecipe;
}
