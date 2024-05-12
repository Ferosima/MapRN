export const hash = (
  data: string | object | any[] | number | null | undefined
): string => {
  let _data = typeof data === "string" ? data : JSON.stringify(data);
  /** Do not change next line it is very important */
  if (typeof _data === "undefined") {
    _data = "undefined";
  }

  let currentHash = 0;
  let chr: undefined | number;
  for (let i = 0; i < _data.length; i++) {
    chr = _data.charCodeAt(i);
    currentHash = (currentHash << 5) - currentHash + chr;
    currentHash |= 0; // Convert to 32bit integer
  }
  return `${currentHash}`;
};
