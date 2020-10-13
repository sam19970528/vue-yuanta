<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">適用資格</h2>
        <div class="form-group row">
          <label class="col-sm-2">文字說明</label>
          <div class="col-sm-10">
              <ckeditor></ckeditor>
          </div>
        </div>
        <div class="form-group row justify-content-end">
          <button class="btn btn-outline-primary">儲存</button>
        </div>
        <h2 class="my-4">服務步驟</h2>
        <div class="form-group row">
          <label class="col-sm-2">文字說明</label>
          <div class="col-sm-10">
              <ckeditor></ckeditor>
          </div>
        </div>
        <div class="form-group row justify-content-end">
          <button class="btn btn-outline-primary">儲存</button>
        </div>
        <h2 class="my-4">服務項目</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#serviceList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#serviceInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="serviceList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">尊榮服務</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>項目</td>
                      <td>
                        <button data-toggle="modal" data-target="#listModal" class="btn btn-info mr-2">編輯</button>
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
            <div class="tab-pane fade" id="serviceInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
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
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#chinaServiceList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#chinaServiceInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="chinaServiceList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">大陸地區特殊服務 - MedPass 任中橫服務</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>項目</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#chinaListModal"
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
            <div class="tab-pane fade" id="chinaServiceInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">tip欄位</label>
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
        <h2 class="my-4">注意事項</h2>
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
      id="listModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改-尊榮服務</h5>
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
      id="chinaListModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改-尊榮服務</h5>
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
            <div class="form-group row my-4">
              <label class="col-sm-2">tip欄位</label>
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