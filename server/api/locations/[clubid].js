//nuxt3 bug? can't name route param club_id here. can't have _
export default defineEventHandler(async (event) => {
  const locations = await $fetch("/api/locations");

  const club_id = event.context.params.clubid;

  const location = locations.find((location) => location.club_id === club_id);

  if (!location) {
    //404
  }

  return location;
});
