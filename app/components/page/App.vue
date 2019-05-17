<template>
  <Page actionBarHidden="true" androidStatusBarBackground="#4167b2">
    <GridLayout rows="auto, *,auto" columns="*">
      <NavHeader row="0" col="0"></NavHeader>
      <NavBody row="1" col="0"></NavBody>
      <NavFooter row="2" col="0"></NavFooter>
    </GridLayout>
  </Page>
</template>


<script >
import NavHeader from "@/components/custom/NavHeader";
import NavBody from "@/components/custom/NavBody";
import NavFooter from "@/components/custom/NavFooter";

export default {
  components: {
    NavHeader,
    NavBody,
    NavFooter
  },
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
