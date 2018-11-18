<template>
    <div class="layout-simple">
      <a-row>
          <a-col span="12">
              <div class="item">12</div>
          </a-col>
          <a-col span="12">
              <div class="item">12</div>
          </a-col>
      </a-row>
      <hr />
      <a-row space="16">
          <a-col span="12">
              <div class="item">space 16px</div>
          </a-col>
          <a-col span="12">
              <div class="item">space 16px</div>
          </a-col>
      </a-row>
      <hr />
      <a-row space="2em">
          <a-col span="12">
              <div class="item">space 2em</div>
          </a-col>
          <a-col span="12">
              <div class="item">space 2em</div>
          </a-col>
      </a-row>
      <hr />
      <a-row space="16">
          <a-col span="6">
              <div class="item">6</div>
          </a-col>
          <a-col span="18">
              <div class="item">18</div>
          </a-col>
      </a-row>
      <hr />
      <a-row space="16">
          <a-col span="6">
              <div class="item">6</div>
          </a-col>
          <a-col span="6">
              <div class="item">6</div>
          </a-col>
          <a-col span="6">
              <div class="item">6</div>
          </a-col>
          <a-col span="6">
              <div class="item">6</div>
          </a-col>
      </a-row>
    </div>
</template>
<style>
.item {
    background-color: skyblue;
    color:white;
    text-align: center;
}
.a-col:nth-child(even) .item {
  background-color: lightgreen;
}
</style>
<script>
import onface from "onface.vue"
export default {}
</script>
