export const getData = async (api) => {
  const resp = await fetch(api);
  const data = await resp.json();
  return data;
};
