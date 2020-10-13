<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <loading :active.sync="isLoading"></loading>
        <h2 class="my-4">選擇新聞</h2>
        <select v-model="titleName" class="form-control">
          <option v-for="news in newsArray" :key="news.category" :value="news.name">{{news.name}}</option>
        </select>
        <h2 class="my-4">上傳檔案</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a id="fileLiId" href="#fileList" data-toggle="tab" class="active">檔案列表</a>
            </li>
            <li>
              <a id="addFileId" href="#addFiles" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="fileList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">檔名</th>
                      <th scope="col">預覽</th>
                      <th scope="col">
                        <input v-model="imgSerch" placeholder="搜尋" type="text" class="form-control" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,key) in fillterImgData[imgCurrentPage]" :key="key">
                      <td>{{item.imageName}}</td>
                      <td>
                        <button class="btn btn-primary" @click="preview(item)">預覽</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="addFiles">
              <div class="form-group row my-4">
                <label class="col-sm-2">上傳檔案</label>
                <div class="col-sm-10">
                  <input
                    name="uploadingFiles"
                    type="file"
                    accept="image/*"
                    @change="uploadChange"
                    ref="files"
                    class="form-control"
                    multiple="multiple"
                  />
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary" @click="updateFiles">上傳</button>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{disabled:imgCurrentPage===0}">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                @click.prevent="imgCurrentPage= imgCurrentPage-1"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              :class="{active :imgCurrentPage === page-1 }"
              class="page-item"
              v-for="page in fillterImgData.length"
              :key="page"
            >
              <a class="page-link" href="#" @click.prevent="imgCurrentPage = page-1">{{page}}</a>
            </li>
            <li class="page-item" :class="{disabled:imgCurrentPage=== fillterImgData.length-1}">
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                @click.prevent="imgCurrentPage = imgCurrentPage+1"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        <h2 class="my-4">標籤管理</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a id="tagListTitle" href="#tagList" data-toggle="tab" class="active">標籤列表</a>
            </li>
            <li>
              <a id="tagInsertTitle" href="#tagInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="tagList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">標籤名稱</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="tags in tagsArray" :key="tags.uid">
                      <td>{{tags.name}}</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#tagModal"
                          class="btn btn-info mr-2"
                          @click="openUpdateTagsModal(tags)"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#deleteTagsModal"
                          class="btn btn-danger"
                          @click="openDelTagsModal(tags)"
                        >刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="tagInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">標籤文字</label>
                <div class="col-sm-10">
                  <input v-model="addTags.name" type="text" class="form-control" />
                </div>
              </div>
              <!-- <div class="form-group row">
                <label class="col-sm-2">標籤圖片</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" />
                </div>
              </div>-->
              <!-- <div class="form-group row my-4">
                <label class="col-sm-2">是否啟用</label>
                <div class="col-sm-10">
                  <label>
                    <input type="radio" name="tags" />是
                  </label>
                  <label>
                    <input type="radio" name="tags" />否
                  </label>
                </div>
              </div>-->
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary" @click="addTag">新增</button>
              </div>
            </div>
          </div>
        </div>
        <h2 v-if="titleName" class="my-4">{{titleName}}</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a id="newsListTitle" href="#newsList" data-toggle="tab" class="active">新聞列表</a>
            </li>
            <li>
              <a id="newsInsertTitle" href="#newsInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="newsList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">標題</th>
                      <th scope="col">日期</th>
                      <th scope="col">編輯、刪除</th>
                      <th scope="col">
                        <input
                          v-model="newsSerch"
                          placeholder="搜尋"
                          type="text"
                          class="form-control"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(content,key) in fillterNewsData[newsCurrentPage]" :key="key">
                      <th scope="row">{{content.title}}</th>
                      <td></td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#newsUpdate"
                          class="btn btn-info mr-2"
                          @click="openUpdateNewsModal(content)"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#deleteNewsModal"
                          class="btn btn-danger"
                          @click="openDelNewsModal(content)"
                        >刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item" :class="{disabled:newsCurrentPage===0}">
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Previous"
                        @click.prevent="newsCurrentPage= newsCurrentPage-1"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li
                      :class="{active :newsCurrentPage === page-1 }"
                      class="page-item"
                      v-for="page in fillterNewsData.length"
                      :key="page"
                    >
                      <a
                        class="page-link"
                        href="#"
                        @click.prevent="newsCurrentPage = page-1"
                      >{{page}}</a>
                    </li>
                    <li
                      class="page-item"
                      :class="{disabled:newsCurrentPage=== fillterNewsData.length-1}"
                    >
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Next"
                        @click.prevent="newsCurrentPage = newsCurrentPage+1"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="tab-pane fade" id="newsInsert">
              <!-- <div class="form-group row my-4">
                <label class="col-sm-2">圖片</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" />
                </div>
              </div>-->
              <div class="form-group row mt-4">
                <label class="col-sm-2">標題</label>
                <div class="col-sm-10">
                  <input v-model="addContent.title" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">日期</label>
                <div class="col-sm-10">
                  <input v-model="addContent.publishDate" type="date" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">內文</label>
                <div class="col-sm-10">
                  <ckeditor v-model="addContent.contents"></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">上稿標籤</label>
                <div class="col-sm-10">
                  <div
                    v-for="item in tagsArray"
                    :key="item.uid"
                    class="form-check form-check-inline"
                  >
                    <input
                      v-model="addContent.tagsDataList"
                      :value="{tagsUId:item.uid}"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label">{{item.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary" @click="addNews">新增</button>
              </div>
            </div>
          </div>
        </div>

        <!-- main-panel ends -->
      </div>
    </div>
    <div
      class="modal fade"
      id="newsUpdate"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改項目</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">標題</label>
              <div class="col-sm-10">
                <input v-model="upContent.title" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">日期</label>
              <div class="col-sm-10">
                <input v-model="upContent.publishDate" type="date" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">內文</label>
              <div class="col-sm-10">
                <ckeditor v-model="upContent.contents"></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">上稿標籤</label>
              <div class="col-sm-10">
                <div v-for="item in tagsArray" :key="item.uid" class="form-check form-check-inline">
                  <input
                    v-model="newTagsArray"
                    :value="item.uid"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label">{{item.name}}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateNews">儲存修改</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="tagModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">標籤管理</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">標籤文字</label>
              <div class="col-sm-10">
                <input v-model="upTags.name" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row justify-content-end">
              <button class="btn btn-primary" @click="updateTags">確認修改</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deleteTagsModal"
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
            <button type="button" class="btn btn-danger" @click="delTags">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deleteNewsModal"
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
            <button type="button" class="btn btn-danger" @click="delNews">確認刪除</button>
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
      //新增標籤物件
      addTags: {
        name: "",
        createUser: "aaa"
      },
      isLoading: false,
      file: "",
      //編輯標籤物件
      upTags: {},
      //預設新聞
      titleName: "最新活動",
      //新聞列表
      newsContent: [],
      //新增新聞物件
      addContent: {
        createUser: "bbb",
        tagsDataList: []
      },
      newsSerch: "",
      imgSerch: "",
      newsCurrentPage: 0,
      imgCurrentPage: 0,
      //編輯新聞物件
      upContent: {},
      //三大類新聞
      newsArray: [],
      //標籤列表
      tagsArray: [],
      newTagsArray: [],
      //上傳檔案的列表
      filesData: []
    };
  },
  methods: {
    //編輯標籤的Modal
    openUpdateTagsModal(tags) {
      this.upTags = Object.assign({}, tags);
    },
    //刪除標籤的Modal
    openDelTagsModal(tags) {
      this.upTags = Object.assign({}, tags);
    },
    //刪除新聞的Modal
    openDelNewsModal(content) {
      this.upContent = Object.assign({}, content);
      console.log(this.upContent);
    },
    //編輯新聞的Modal
    openUpdateNewsModal(content) {
      let vm = this;
      this.upContent = Object.assign({}, content);
      vm.newTagsArray = [];
      if (this.upContent.tagsDataList) {
        vm.newTagsArray = this.upContent.tagsDataList.map(item => {
          return item.tagsUId;
        });
      } else {
        this.upContent.tagsDataList = [];
      }
      console.log(this.upContent);
    },
    //取得三大新聞類別
    getNewsArray() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category`;
      this.$http.get(api).then(response => {
        vm.newsArray = response.data.result.categoryList;
      });
    },
    //取得標籤列表
    getTags() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/tags`;
      this.$http.get(api).then(response => {
        vm.tagsArray = response.data.result.tagsList;
        // vm.addContent.tagsDataList = response.data.result.tagsList;
      });
    },
    //編輯標籤
    updateTags() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/tags/${vm.upTags.uid}`;
      this.$http.put(api, vm.upTags).then(response => {
        if (response.data.errorMessage === "") {
          $("#tagModal").modal("hide");
          vm.getTags();
        }
        console.log(response.data);
      });
    },
    //編輯新聞
    updateNews() {
      let vm = this;
      let api = "";
      let fetch = 30;
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      vm.newsArray.forEach(item => {
        if (vm.titleName === item.name) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}/${vm.upContent.uid}`;
          vm.upContent.tagsDataList = vm.newTagsArray.map(item => {
            return { tagsUId: item };
          });
          this.$http.put(api, vm.upContent).then(response => {
            if (response.data.result !== "") {
              $("#newsUpdate").modal("hide");
              api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}?${year}-${month}-${day}&fetch=${fetch}`;
              this.$http.get(api).then(response => {
                vm.newsContent = response.data.result.list;
                console.log(vm.newsContent);
              });
            }
            console.log(response.data);
          });
        }
      });
    },
    //新增標籤
    addTag() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/tags`;
      this.$http.post(api, vm.addTags).then(response => {
        if (response.data.errorMessage === "") {
          vm.addTags = {};
          vm.getTags();
          $("#tagInsert")
            .removeClass("active")
            .removeClass("show");
          $("#tagInsertTitle").removeClass("active");
          $("#tagList")
            .addClass("active")
            .addClass("show");
          $("#tagListTitle").addClass("active");
        }
        console.log(response.data);
      });
    },
    //新增新聞
    addNews() {
      let vm = this;
      let api = "";
      let fetch = 30;
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      vm.newsArray.forEach(item => {
        if (vm.titleName === item.name) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}`;
          this.$http.post(api, vm.addContent).then(response => {
            if (response.data.result) {
              vm.addContent = {
                createUser: "bbb",
                tagsDataList: []
              };
              $("#newsInsert")
                .removeClass("active")
                .removeClass("show");
              $("#newsInsertTitle").removeClass("active");
              $("#newsList")
                .addClass("active")
                .addClass("show");
              $("#newsListTitle").addClass("active");
              api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}?${year}-${month}-${day}&fetch=${fetch}`;
              this.$http.get(api).then(response => {
                vm.newsContent = response.data.result.list;
              });
            }
            console.log(response.data);
          });
        }
      });
    },
    //刪除標籤
    delTags() {
      let vm = this;
      const api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/tags/${vm.upTags.uid}`;
      this.$http.delete(api).then(response => {
        if (response.data.errorMessage === "") {
          $("#deleteTagsModal").modal("hide");
          vm.getTags();
        }
        console.log(response.data);
      });
    },
    //刪除新聞
    delNews() {
      let vm = this;
      let api = "";
      let fetch = 30;
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      vm.newsArray.forEach(item => {
        if (vm.titleName === item.name) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}/${vm.upContent.uid}`;
          this.$http.delete(api).then(response => {
            if (response.data.result !== "") {
              $("#deleteNewsModal").modal("hide");
              api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}?${year}-${month}-${day}&fetch=${fetch}`;
              this.$http.get(api).then(response => {
                vm.newsContent = response.data.result.list;
                console.log(vm.newsContent);
              });
            }
            console.log(response.data);
          });
        }
      });
    },
    uploadChange() {
      const vm = this;
      vm.file = this.$refs.files.files;
      console.log(vm.file);
    },
    //上傳圖片
    updateFiles() {
      const vm = this;
      const formData = new FormData();
      // let uploadFiles = this.$refs.files.files;
      for (let i = 0; i < vm.file.length; i++) {
        formData.append("uploadingFiles", vm.file[i]);
      }
      // const headers = { "Content-Type": "multipart/form-data" };
      vm.isLoading = true;
      const url = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/resource/image`;
      this.$http.post(url, formData).then(res => {
        if (res.data.result) {
          vm.isLoading = false;
          $("#addFileId").removeClass("active");
          $("#fileLiId").addClass("active");
          $("#addFiles")
            .removeClass("active")
            .removeClass("show");
          $("#fileList")
            .addClass("active")
            .addClass("show");
          vm.getFilesInfo();
        }
      });
    },
    //取得檔案列表
    getFilesInfo() {
      let vm = this;
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/resource/image/info`;
      this.$http.get(api).then(res => {
        vm.filesData = res.data.result.list;
      });
    },
    //預覽圖片
    preview(item) {
      let imageName = item.imageName;
      console.log(imageName);
      let url = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/resource/image/${imageName}`;
      window.open(url);
    },
    //取得預設的新聞列表
    getInitialNews() {
      let vm = this;
      let fetch = 10;
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/activity`;
      this.$http.get(api).then(response => {
        vm.newsContent = response.data.result.list;
      });
    }
  },
  watch: {
    //當select新聞值發生變化 變換API取得新聞列表
    titleName() {
      let vm = this;
      let api = "";
      let fetch = "";
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      vm.newsArray.forEach(item => {
        if (vm.titleName === item.name) {
          api = `${process.env.VUE_APP_WEB}/${process.env.VUE_APP_BACK}/api/announcement/category/${item.category}`;
          this.$http.get(api).then(response => {
            vm.newsContent = response.data.result.list;
            console.log(vm.newsContent);
          });
        }
      });
      vm.newsCurrentPage = 0;
    }
  },
  computed: {
    //製作新聞分頁
    fillterNewsData() {
      const vm = this;
      let items = [];
      items = vm.newsContent.filter(item => {
        return item.title.match(vm.newsSerch);
      });
      let newDataList = [];
      items.forEach((item, i) => {
        if (i % 5 === 0) {
          newDataList.push([]);
        }
        const page = parseInt(i / 5);
        newDataList[page].push(item);
      });
      console.log(newDataList);

      return newDataList;
    },
    //製作檔案列表分頁
    fillterImgData() {
      const vm = this;
      let items = [];
      items = vm.filesData.filter(item => {
        return item.imageName.match(vm.imgSerch);
      });
      let newDataList = [];
      items.forEach((item, i) => {
        if (i % 5 === 0) {
          newDataList.push([]);
        }
        const page = parseInt(i / 5);
        newDataList[page].push(item);
      });
      return newDataList;
    }
  },
  created() {
    this.getNewsArray();
    this.getInitialNews();
    this.getTags();
    this.getFilesInfo();
    console.log(process.env.VUE_APP_WEB, process.env.VUE_APP_BACK);
  }
};
</script>