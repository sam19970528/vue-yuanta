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
        <h2 class="my-4">服務項目</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#tagList" data-toggle="tab" class="active show">標籤管理</a>
            </li>
            <li>
              <a href="#tagInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="tagList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">標籤</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>健康照護</td>
                      <td>
                        <button data-toggle="modal" data-target="#tagModal" class="btn btn-info mr-2">編輯</button>
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
            <div class="tab-pane fade" id="tagInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">標籤名稱</label>
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
              <a href="#projectList" data-toggle="tab" class="active show">項目管理</a>
            </li>
            <li>
              <a href="#projectInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="projectList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">項目名稱</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>慢性處方簽....</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#projectModal"
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
            <div class="tab-pane fade" id="projectInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">項目名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">url</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">連結方式</label>
                <div class="col-sm-10">
                  <label>
                    <input type="radio" name="group" />外連
                  </label>
                  <label>
                    <input type="radio" name="group" />內連
                  </label>
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">標籤歸屬</label>
                <div class="col-sm-10">
                  <label>
                    <input type="checkbox" />健康照護
                  </label>
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
      id="tagModal"
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
            <div class="form-group row my-4">
              <label class="col-sm-2">標籤名稱</label>
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
      id="projectModal"
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
            <div class="form-group row my-4">
              <label class="col-sm-2">項目名稱</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">url</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">連結方式</label>
              <div class="col-sm-10">
                <label>
                  <input type="radio" name="group" />外連
                </label>
                <label>
                  <input type="radio" name="group" />內連
                </label>
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">標籤歸屬</label>
              <div class="col-sm-10">
                <label>
                  <input type="checkbox" />健康照護
                </label>
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