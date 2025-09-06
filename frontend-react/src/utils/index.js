import { FEMALE_PRODUCTS_DATA } from './femaleProducts';
import { MALE_PRODUCTS_DATA } from './maleProducts';

const generateId = () => Math.random().toString(36).substr(2, 9);

export const productsDataWithIds = {
  feminina: Object.values(FEMALE_PRODUCTS_DATA).flat().map(p => ({ ...p, id: generateId() })),
  masculina: Object.values(MALE_PRODUCTS_DATA).flat().map(p => ({ ...p, id: generateId() })),
};

export const allProductsArray = [...productsDataWithIds.feminina, ...productsDataWithIds.masculina];

export const femaleCategories = ['todas', ...Object.keys(FEMALE_PRODUCTS_DATA)];
export const maleCategories = ['todas', ...Object.keys(MALE_PRODUCTS_DATA)];

export const allCategories = ['todas', ...femaleCategories.slice(1), ...maleCategories.slice(1)];