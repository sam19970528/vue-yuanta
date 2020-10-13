<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">公司職場</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#companyList" data-toggle="tab" class="active show">列表</a>
            </li>
            <li>
              <a href="#companyInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="companyList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">標題</th>
                      <th scope="col">按鈕名稱</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">標題標題標題標題標題</th>
                      <td>光榮時刻</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#companyUpdate"
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
            <div class="tab-pane fade" id="companyInsert">
              <div class="form-group row my-4">
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
                <label class="col-sm-2">youtube影片</label>
                <div class="col-sm-10">
                  <input class="form-control" placeholder="https://www.youtube.com" type="text" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">內文</label>
                <div class="col-sm-10">
                  <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">按鈕文字</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
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
      </div>
    </div>
    <div
      class="modal fade"
      id="companyUpdate"
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
              <label class="col-sm-2">youtube影片</label>
              <div class="col-sm-10">
                <input class="form-control" placeholder="https://www.youtube.com" type="text" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">內文</label>
              <div class="col-sm-10">
                <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">按鈕文字</label>
              <div class="col-sm-10">
                <input value="光榮時刻" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">按鈕URL</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary">儲存修改</button>
            </div>
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