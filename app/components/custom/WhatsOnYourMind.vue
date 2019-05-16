<template>
  <StackLayout>
    <GridLayout class="bg" width="100%" rows="auto,auto" columns="*">
      <!-- Whats on your mind -->
      <GridLayout
        height="60"
        @tap="press('compose')"
        row="0"
        col="0"
        rows="*"
        columns="auto,*"
        width="100%"
      >
        <Image
          class="profile center-v"
          stretch="aspectFill"
          src="~/assets/images/friends/profile1.jpg"
          col="0"
          row="0"
        />
        <Label
          class="profile-text center-v"
          horizontalAlignment="left"
          text="What's on your mind?"
          textWrap="true"
          col="1"
          row="0"
        />
      </GridLayout>

      <!-- Utils -->
      <GridLayout marginTop="5" row="1" col="0" rows="auto" columns="auto,*,auto">
        <StackLayout
          @tap="press('live')"
          class="center-h"
          row="0"
          col="0"
          width="33%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/live.png"/>
          <Label text="Live" class="util-text" textWrap="true"/>
        </StackLayout>
        <StackLayout
          @tap="press('photo')"
          class="center-h"
          row="0"
          col="1"
          width="34%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/photo.png"/>
          <Label text="Photo" class="util-text" textWrap="true"/>
        </StackLayout>
        <StackLayout
          @tap="press('checkIn')"
          class="center-h"
          row="0"
          col="2"
          width="33%"
          orientation="horizontal"
        >
          <Image class="image-util" src="~/assets/images/checkin.png"/>
          <Label text="Check In" class="util-text" textWrap="true"/>
        </StackLayout>
      </GridLayout>
    </GridLayout>
    <StackLayout marginTop="10" class="line-card"/>
  </StackLayout>
</template>


<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    press(name) {
      console.log(name);
      // this.$emit(name);
    }
  }
};
</script>

<style scoped>
.image-util {
  height: 18;
  horizontal-align: center;
  margin-right: 3;
}

.profile-text {
  font-size: 18;
}
</style>