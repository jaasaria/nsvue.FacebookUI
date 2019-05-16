<template>
  <StackLayout>
    <GridLayout marginTop="10" rows="auto" columns="auto,auto">
      <Image
        backgroundColor="gray"
        class="profile"
        stretch="aspectFill"
        src="~/assets/images/friends/profile1.jpg"
        col="0"
      />
      <StackLayout row="0" col="1">
        <Label :text="item.group" class="card-title"/>
        <Label :text="item.date" class="card-date"/>
      </StackLayout>
    </GridLayout>

    <GridLayout rows="auto, auto " columns="auto,auto">
      <Label :text="item.title" marginLeft="10" marginTop="10" marginRight="10" row="0"/>
      <Image
        @tap="press(item.title)"
        class="card-picture"
        stretch="aspectFill"
        :src="item.picture"
        row="1"
      />
    </GridLayout>
  </StackLayout>
</template>


<script>
export default {
  props: ["item"],
  components: {}
};
</script>

<style scoped>
.card-title {
  font-weight: bold;
}
.card-date {
  font-size: 12;
}
.profile {
  border-width: 1;
  border-color: white;
  background-color: green;
  border-radius: 50%;
  margin-right: 15;
  margin-left: 10;
  width: 40;
  height: 40;
}
.card-picture {
  width: 100%;
  height: 200;
  margin-top: 10;
}
</style>