<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">標頭</h2>
        <div class="form-group row">
          <label class="col-sm-2">標頭內文</label>
          <div class="col-sm-10">
           <ckeditor></ckeditor>
          </div>
        </div>
        <div class="form-group row justify-content-end">
          <button class="btn btn-outline-primary">儲存</button>
        </div>
        <h2 class="my-4">公益活動</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#welfareList" data-toggle="tab" class="active show">標題</a>
            </li>
            <li>
              <a href="#welfareInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="welfareList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">標題</th>
                      <th scope="col">日期</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>銀向陽光失智長者陪伴關懷</td>
                      <td>2019/10/10</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#welfareUpdate"
                          class="btn btn-info mr-2"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#welfareDelete"
                          class="btn btn-danger"
                        >刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="welfareInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">標題</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">圖片</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">日期</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">內文</label>
                <div class="col-sm-10">
                  <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">按鈕URL</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary">新增</button>
              </div>
            </div>
          </div>
        </div>
        <!-- main-panel ends -->
      </div>
    </div>
    <div
      class="modal fade"
      id="welfareUpdate"
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
              <label class="col-sm-2">標題</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">圖片</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">日期</label>
              <div class="col-sm-10">
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">內文</label>
              <div class="col-sm-10">
                <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">按鈕URL</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
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
      id="welfareDelete"
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
            <button type="button" class="btn btn-danger">確認刪除</button>
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
    return {};
  },
  methods: {}
};
</script>