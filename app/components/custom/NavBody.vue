<template>
  <StackLayout>
    <!-- Cards -->

    <RadListView ref="listview" separatorColor="transparent" for="item in listAds" :key="index">
      <v-template name="header">
        <ListHeader></ListHeader>
      </v-template>
      <v-template>
        <ListData :item="item"></ListData>
      </v-template>
    </RadListView>
  </StackLayout>
</template>
<script>
import { ads } from "@/api/ads";
import { toast } from "@/helper";

import ListHeader from "@/components/custom/ListHeader";
import ListData from "@/components/custom/ListData";

export default {
  components: {
    ListHeader,
    ListData
  },
  data() {
    return {
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
/* 
.stories-picture {
  width: 25%;
  height: 35%;
} */

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

.profile-text {
  font-size: 18;
}

.image-util {
  height: 18;
  horizontal-align: center;
  margin-right: 3;
}

.friend-thumb {
  background-color: #828282;
  vertical-align: center;
  border-radius: 5;
  width: 110;
  height: 150;
  margin-left: 5;
}
</style>