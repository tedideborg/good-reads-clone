<template>
  <TheProfileHeader />
  <base-content>
    <TheActivityField />
    <template v-slot:aside>
      <TheProfileBookshelves />
      <TheCurrentlyReading />
    </template>
  </base-content>
</template>

<script>
import TheProfileHeader from "../components/layout/profile/TheProfileHeader";
import TheProfileBookshelves from "../components/layout/profile/TheProfileBookshelves";
import TheActivityField from "../components/layout/profile/TheActivityField";
import TheCurrentlyReading from "../components/layout/profile/TheCurrentlyReading";

export default {
  components: {
    TheProfileHeader,
    TheProfileBookshelves,
    TheActivityField,
    TheCurrentlyReading,
  },
};
</script>
