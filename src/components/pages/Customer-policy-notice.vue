<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">須知說明</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#fileList" data-toggle="tab" class="active show">檔案列表</a>
            </li>
            <li>
              <a href="#fileInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="fileList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">檔案</th>
                      <th scope="col">外連or內連</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>保險人須知</td>
                      <td>外連</td>
                      <td>
                        <button data-toggle="modal" data-target="#fileModal" class="btn btn-info mr-2">編輯</button>
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
            <div class="tab-pane fade" id="fileInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">上傳檔案</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" />
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

              <div class="form-group row justify-content-end">
                <button class="btn btn-outline-primary mr-3">取消</button>
                <button class="btn btn-outline-primary">新增</button>
              </div>
            </div>
          </div>
        </div>
        <h2 class="my-4">常見問題</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#QAList" data-toggle="tab" class="active show">Q&A</a>
            </li>
            <li>
              <a href="#QAInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="QAList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Q</th>
                      <th scope="col">A</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>問題問題問題</td>
                      <td>答案答案答案</td>
                      <td>
                        <button data-toggle="modal" data-target="#QAModal" class="btn btn-info mr-2">編輯</button>
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
            <div class="tab-pane fade" id="QAInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">問題</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row my-4">
                <label class="col-sm-2">答案</label>
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
      </div>
    </div>
    <div
      class="modal fade"
      id="fileModal"
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
              <label class="col-sm-2">上傳檔案</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" />
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
      id="QAModal"
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
              <label class="col-sm-2">問題</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">答案</label>
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