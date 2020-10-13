<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">基本資料變更</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#basicList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#basicUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="basicList">
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
                          data-target="#updateModal"
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
            <div class="tab-pane fade" id="basicUpdate">
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
        <h2 class="my-4">保單內容變更</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#insuranceContentList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#insuranceContentUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="insuranceContentList">
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
                          data-target="#updateModal"
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
            <div class="tab-pane fade" id="insuranceContentUpdate">
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
        <h2 class="my-4">投資型保單變更</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#investList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#investUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="investList">
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
                          data-target="#updateModal"
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
            <div class="tab-pane fade" id="investUpdate">
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
        <h2 class="my-4">補發保單/電子通知申請</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#reissueList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#reissueUpdate" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="reissueList">
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
                          data-target="#updateModal"
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
            <div class="tab-pane fade" id="reissueUpdate">
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
      </div>
    </div>
    <div
      class="modal fade"
      id="updateModal"
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
            <button type="button" class="btn btn-primary">儲存修改</button>
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