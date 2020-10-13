<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">繳費管道</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#payPipeList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#payPipeUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="payPipeList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">主題</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>要保人變更</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#payPipeModal"
                          class="btn btn-info mr-2"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#deleteModal"
                          class="btn btn-danger"
                        >刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="payPipeUpdate">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">適用險種</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">續期保險費扣款說明</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">保費折扣</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary">新增</button>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-4">繳費方式變更</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#payMethodList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#payMethodUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="payMethodList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">主題</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>要保人變更</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#payMethodModal"
                          class="btn btn-info mr-2"
                        >編輯</button>
                        <button
                          data-toggle="modal"
                          data-target="#deleteModal"
                          class="btn btn-danger"
                        >刪除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="payMethodUpdate">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">申請方式</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">郵寄、臨櫃應備文件</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">上傳檔案</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" multiple="multiple" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">注意事項</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary">新增</button>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-4">繳費紀錄查詢</h2>
        <div class="form-group row">
          <label class="col-sm-2">文字說明</label>
          <div class="col-sm-10">
              <ckeditor></ckeditor>
          </div>
        </div>
        <div class="form-group row justify-content-end">
          <button class="btn btn-outline-primary">儲存</button>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="payPipeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改-主題</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">主題名稱</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">適用險種</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">續期保險費扣款說明</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">保費折扣</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">新增</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="payMethodModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改-主題</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">主題名稱</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">申請方式</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">郵寄、臨櫃應備文件</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">上傳檔案</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" multiple="multiple" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">注意事項</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">新增</button>
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
            <button type="button" class="btn btn-danger">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
