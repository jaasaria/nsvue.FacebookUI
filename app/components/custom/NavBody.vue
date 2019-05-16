<template>
  <StackLayout>
    <WhatsOnYourMind
      @photo="press('Press Photo')"
      @compose="press('Press Compose')"
      @checkIn="press('Press Check In')"
      @live="press('Press Live')"
    ></WhatsOnYourMind>

    <ListView heigth="100%" ref="listview" separatorColor="transparent" for="item in listAds">
      <v-template if="$index === 0">
        <Stories :listFriends="listFriends" @storyProfile="press"></Stories>
      </v-template>

      <v-template>
        <StackLayout>
          <GridLayout marginTop="10" rows="auto, auto" columns="auto,auto">
            <Image
              backgroundColor="red"
              class="profile"
              stretch="aspectFill"
              src="~/assets/images/friends/profile1.jpg"
              col="0"
              rowspan="2"
            />
            <Label :text="item.group" class="card-title" row="0" col="1"/>
            <Label :text="item.date" class="card-date" row="1" col="1"/>
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
      </v-template>
    </ListView>

    <!-- </ScrollView> -->
  </StackLayout>
</template>
<script>
import { friends } from "@/api/friends";
import { ads } from "@/api/ads";
import { toast } from "@/helper";

import WhatsOnYourMind from "./WhatsOnYourMind";
import Stories from "./Stories";

// const friend_list = new friends();
export default {
  components: {
    WhatsOnYourMind,
    Stories
  },
  mounted() {},
  data() {
    return {
      listFriends: friends,
      listAds: ads
    };
  },
  methods: {
    press(message) {
      toast(message);
    }
  }
};
</script>

<style scoped>
.card-picture {
  width: 100%;
  height: 200;
  margin-top: 10;
}
.stories-picture {
  width: 25%;
  height: 35%;
}
.card-profile {
  border-width: 1;
  border-color: white;
  background-color: green;
  border-radius: 50%;
  margin-right: 15;
  margin-left: 10;
  width: 40;
  height: 40;
}

.card-title {
  font-weight: bold;
}
.card-date {
  font-size: 12;
}
</style>