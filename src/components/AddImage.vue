<template>
  <div class="wrap">
    <div class="title">Add picture</div>
    <div class="content">
        <div class="row">

        <file-pond
          name="test"
          ref="pond"
          label-idle="Drop files here..."
          v-bind:allow-multiple="true"
          accepted-file-types="image/jpeg, image/png"
          v-bind:files="myFiles"
          v-on:init="handleFilePondInit"
        />

        </div>
    </div>
  </div>
</template>


<script scoped>
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  name: "AddImage",
  components: {
      FilePond
  },
  data(){
    return {
      myFiles: []
    }
  },
  props: {
  },
};
</script>

<style>
.filepond--drip {
  opacity: 1 !important;
  background-color: #31312c;
  border-radius: 15px;
  
}
.filepond--drop-label {
  color: goldenrod;
  cursor: pointer;
}
.filepond--credits{
  display: none;
}
label{
  cursor: pointer !important;
}
</style>
<style scoped>

.material-icons {
    padding: 10px 10px;
  font-size: 30px;
  vertical-align: middle;
  transition: all 0.05s;
  color: #31312c;
  background-color: #79797943;
  border-radius: 10px;
}
.material-icons:hover {
  background-color: #7979796b;
}
.custom_button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  padding: 7px 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.title {
  font-size: 21px;
  padding: 10px 0px;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  padding: 10px 0px;
  border-top: 1px solid #f6c0c7;
  cursor: pointer !important;
}



@media screen and (max-width: 767px) {
  /* invisible footer appear */
/*   footer {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  } */
  .wrap {
    display: none;
  }
/*   .col-md-6 {
    padding: 0px;
  } */
}
</style>