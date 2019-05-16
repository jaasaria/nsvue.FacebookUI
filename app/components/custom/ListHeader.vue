<template>
  <StackLayout>
    <WhatOnYourMind></WhatOnYourMind>
    <Stories></Stories>
  </StackLayout>
</template>


<script>
import WhatOnYourMind from "@/components/custom/WhatsOnYourMind";
import Stories from "@/components/custom/Stories";

export default {
  components: {
    WhatOnYourMind,
    Stories
  }
};
</script>

<style scoped>
</style>