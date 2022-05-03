export default defineEventHandler(async (event) => {
  await new Promise((r) => setTimeout(r, 6000));
  return true;
});
