<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <loading :active.sync="isLoading"></loading>
        <select v-model="titleName" class="form-control">
          <option v-for="item in publicArray" :key="item.uid">{{item.title}}</option>
        </select>
        <h2 class="my-4">{{titleName}}</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a id="topic" href="#companyProfileList" data-toggle="tab" class="active">主題</a>
            </li>
            <li>
              <a id="addProfile" href="#companyProfileUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="companyProfileList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">主題名稱</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,key) in publicContent" :key="key">
                      <th scope="row">{{item.title}}</th>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#companyModal"
                          class="btn btn-info mr-2"
                          @click="openPublicContentModal(item)"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#deleteModal"
                          class="btn btn-danger mr-2"
                          @click="openDelModal(item)"
                        >刪除</button>
                        <button
                          data-toggle="modal"
                          data-target="#upFileModal"
                          class="btn btn-success"
                          @click="openUpFileModal(item)"
                        >上傳檔案</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="companyProfileUpdate">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
                <div class="col-sm-10">
                  <input v-model="newContent.title" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">主題內文</label>
                <div class="col-sm-10">
                  <ckeditor v-model="newContent.contents"></ckeditor>
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary" @click="postNewContent">新增</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="openModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改項目</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">內容</label>
              <div class="col-sm-10">
                <input value="內容內容內容內容" type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">儲存修改</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="companyModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改項目</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row my-4">
              <label class="col-sm-2">主題名稱</label>
              <div class="col-sm-10">
                <input v-model="upContent.title" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">主題內文</label>
              <div class="col-sm-10">
                <ckeditor v-model="upContent.contents"></ckeditor>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateContent">儲存修改</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">刪除</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">確認刪除此筆資料?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delContent">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deletePdfModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="z-index:1051"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">刪除</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">確認刪除此筆資料?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delPdf">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      id="upFileModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content px-5">
          <div class="form-group row my-4">
            <label class="col-sm-2">上傳檔案</label>
            <div class="col-sm-10">
              <input
                @change="uploadChange"
                name="uploadingFiles"
                ref="files"
                type="file"
                class="form-control"
                multiple="multiple"
              />
            </div>
          </div>
          <div class="form-group row justify-content-end">
            <button class="btn btn-outline-primary" @click="postPdf">上傳</button>
          </div>
          <div class="form-group row my-4">
            <label class="col-sm-2">檔名</label>
            <div class="col-sm-10">
              <div class="row my-3" v-for="(item,key) in pdfList" :key="key">
                <p class="col-sm-6">{{item.pdfPath}}</p>
                <div class="col-sm-6">
                  <button
                    v-if="item"
                    type="button"
                    class="btn btn-primary mr-2"
                    @click="preview(item)"
                  >預覽</button>
                  <button
                    data-toggle="modal"
                    data-target="#deletePdfModal"
                    v-if="item"
                    type="button"
                    class="btn btn-danger"
                    @click="openDelPdfModal(item)"
                  >刪除</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      //預設的標題
      titleName: "公司依據",
      //取得八大類標題
      publicArray: [],
      //主題的列表
      publicContent: [],
      pdfFile: "",
      isLoading: false,
      //新增主題的物件
      newContent: {
        sort: 1,
        categoryUId: "",
        edition: "edition what? B",
        createUser: "system B",
        updateUser: "system B"
      },
      newpdf: {},
      upPdf: {},
      //pdf的列表
      pdfList: [],
      //編輯主題內容的物件
      upContent: {}
    };
  },
  methods: {
    //編輯主題內容的Modal
    openPublicContentModal(item) {
      this.upContent = Object.assign({}, item);
      console.log(item);
    },
    //刪除主題的Modal
    openDelModal(item) {
      this.upContent = Object.assign({}, item);
      console.log(this.upContent);
    },
    //刪除pdf的Modal
    openDelPdfModal(item) {
      this.upPdf = Object.assign({}, item);
      console.log(this.upPdf);
    },
    //上傳檔案的Modal
    openUpFileModal(item) {
      this.upContent = Object.assign({}, item);
      this.getPdfList();
      console.log(item);
      console.log(this.pdfList);
    },
    //刪除主題
    delContent() {
      let vm = this;
      let infoId = vm.upContent.companyInfo.uid;
      let itemId = vm.upContent.uid;
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${infoId}/item/${itemId}`;
      this.$http.delete(api).then(response => {
        if (response.data.result) {
          $("#deleteModal").modal("hide");
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${infoId}/item`;
          this.$http.get(api).then(response => {
            vm.publicContent = response.data.result.list;
          });
        }
        console.log(response.data);
      });
    },
    //編輯主題內容
    updateContent() {
      let vm = this;
      let infoId = vm.upContent.companyInfo.uid;
      let itemId = vm.upContent.uid;
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${infoId}/item/${itemId}`;
      this.$http.put(api, vm.upContent).then(response => {
        if (response.data.result) {
          $("#companyModal").modal("hide");
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${infoId}/item`;
          this.$http.get(api).then(response => {
            vm.publicContent = response.data.result.list;
          });
        }
        console.log(response.data);
      });
    },
    //取得八大類標題
    getPublicArray() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info`;
      this.$http.get(api).then(response => {
        vm.publicArray = response.data.result.list;
      });
    },
    //新增主題
    postNewContent() {
      let vm = this;
      let api = "";
      vm.publicArray.forEach(item => {
        if (vm.titleName === item.title) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${item.uid}/item`;
          this.$http.post(api, vm.newContent).then(response => {
            if (response.data.result) {
              $("#addProfile").removeClass("active");
              $("#topic").addClass("active");
              $("#companyProfileUpdate")
                .removeClass("show")
                .removeClass("active");
              $("#companyProfileList")
                .addClass("show")
                .addClass("active");
              this.$http.get(api).then(response => {
                vm.publicContent = response.data.result.list;
                console.log(vm.publicContent);
              });
            }
            console.log(response.data);
          });
        }
      });
    },
    uploadChange() {
      const vm = this;
      vm.pdfFile = this.$refs.files.files;
    },
    //上傳pdf
    postPdf() {
      const vm = this;
      const formData = new FormData();
      for (let i = 0; i < vm.pdfFile.length; i++) {
        formData.append("uploadingFiles", vm.pdfFile[i]);
      }
      const url = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info-item/${vm.upContent.uid}/resource/pdf`;
      vm.isLoading = true;
      this.$http.post(url, formData).then(res => {
        if (res.data.result !== "") {
          vm.isLoading = false;
          vm.getPdfList();
        }
        console.log(res.data);
      });
    },
    //取得pdf檔案列表
    getPdfList() {
      let vm = this;
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info-item/${vm.upContent.uid}/resource/pdf/info`;
      this.$http.get(api).then(res => {
        vm.pdfList = res.data.result.list;
        console.log(vm.pdfList);
      });
    },
    //刪除pdf
    delPdf() {
      let vm = this;
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info-item/${vm.upContent.uid}/resource/pdf/${vm.upPdf.pdfPath}`;
      this.$http.delete(api).then(res => {
        if (res.data.result !== "") {
          $("#deletePdfModal").modal("hide");
          vm.getPdfList();
        }
      });
    },
    //先取得預設的標題內容
    getAllTitle() {
      let vm = this;
      let _Id = "B99B9096-06DA-4E6C-B845-1A5885C3DA21";
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${_Id}/item`;
      this.$http.get(api).then(response => {
        vm.publicContent = response.data.result.list;
      });
    },
    preview(item) {
      const vm = this;
      let pdfPath = item.pdfPath;
      console.log(pdfPath);
      let url = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info-item/${vm.upContent.uid}/resource/pdf/${pdfPath}`;
      window.open(url);
    }
  },
  watch: {
    titleName() {
      let vm = this;
      let api = "";
      vm.publicArray.forEach(item => {
        if (vm.titleName === item.title) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/publication/info/${item.uid}/item`;
          this.$http.get(api).then(response => {
            vm.publicContent = response.data.result.list;
            vm.newContent.categoryUId = item.uid;
            console.log(vm.publicContent);
          });
        }
      });
    }
  },
  created() {
    this.getPublicArray();
    this.getAllTitle();
  }
};
</script>
<style lang="scss" scoped>
.table tbody tr th {
  max-width: 600px !important;
  overflow-x: auto;
}
</style>