<template>
  <Page actionBarHidden="true" androidStatusBarBackground="#4167b2">
    <GridLayout rows="auto, *,auto" columns="*">
      <NavBar row="0" col="0"></NavBar>
      <NavCompose row="1" col="0"></NavCompose>
      <NavBottom row="2" col="0"></NavBottom>
    </GridLayout>
  </Page>
</template>


<script >
import NavBottom from "@/components/custom/NavBottom";
import NavBar from "@/components/custom/navbar";
import NavCompose from "@/components/custom/NavCompose";

export default {
  components: {
    NavBottom,
    NavBar,
    NavCompose
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
