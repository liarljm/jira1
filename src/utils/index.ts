import { useEffect, useState } from "react";
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(function () {
//             func(...param);
//         }, delay);
//     }
// }
// const log = debounce(() => console.log('call'), 5000);
// log();
export const useDebounce = (value: unknown, delay?: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //在上一个useEffect处理完后运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
