export { log, info, warn, error } from "./libts/log.ts";

export const max = Math.max.bind(Math);
export const min = Math.min.bind(Math);
export const floor = Math.floor.bind(Math);
export const ceil = Math.ceil.bind(Math);

export {
  type Nullable,
  type Nil,
  type NonNil,
  isNil,
  isNotNil,
  isNull,
} from "./libts/nullable.ts";

export { len } from "./libts/len.ts";
