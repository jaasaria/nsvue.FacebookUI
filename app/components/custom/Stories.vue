<template>
  <StackLayout>
    <!-- Stories and Archive -->
    <GridLayout
      marginBottom="10"
      marginTop="10"
      marginLeft="5"
      marginRight="5"
      row="0"
      col="0"
      rows="auto"
      columns="auto,*,auto"
    >
      <Label @tap="press('stories')" text="Stories" textWrap="true" col="0"/>
      <Label
        @tap="press('archive')"
        marginRight="5"
        text="See Archive"
        textWrap="true"
        col="1"
        horizontalAlignment="right"
      />
      <Label
        :text="'fa-arrow-right' | fonticon"
        class="fa"
        textWrap="true"
        col="2"
        horizontalAlignment="right"
      />
    </GridLayout>

    <!-- Friends -->
    <ScrollView class orientation="horizontal">
      <StackLayout orientation="horizontal">
        <GridLayout v-for="(image , index) in listFriends" :key="index" rows="auto" columns="*">
          <Image
            @tap="pressPicture( 'storyProfile',image.name)"
            class="friend-thumb"
            row="0"
            col="0"
            :src="image.picture"
            stretch="aspectFill"
          />
        </GridLayout>
      </StackLayout>
    </ScrollView>
    <StackLayout marginTop="10" class="line-card"/>
  </StackLayout>
</template>


<script>
import { friends } from "@/api/friends";

export default {
  methods: {
    press(name) {
      this.$emit(name);
    },
    pressPicture(name, value) {
      this.$emit(name, value);
    }
  },
  data() {
    return {
      listFriends: friends
    };
  }
};
</script>
<style scoped>
.friend-thumb {
  background-color: #828282;
  vertical-align: center;
  border-radius: 5;
  width: 110;
  height: 150;
  margin-left: 5;
}
</style>
