<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">員工關懷</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#employeeList" data-toggle="tab" class="active show">列表</a>
            </li>
            <li>
              <a href="#employeeInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="employeeList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">主題</th>
                      <th scope="col">列表管理</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">社團活動</th>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#listManage"
                          class="btn btn-primary"
                        >列表</button>
                      </td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#employeeUpdate"
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
            <div class="tab-pane fade" id="employeeInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">主題名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">主題圖片</label>
                <div class="col-sm-10">
                  <input type="file" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">內文</label>
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
      id="employeeUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">編輯主題</h5>
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
              <label class="col-sm-2">主題圖片</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">內文</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
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
      id="listManage"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">列表管理</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <ul class="nav nav-tabs">
                <li>
                  <a href="#addListAdmin" data-toggle="tab" class="active show">管理</a>
                </li>
                <li>
                  <a href="#addListInsert" data-toggle="tab">新增</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="addListAdmin">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">名稱</th>
                          <th scope="col">卡片</th>
                          <th scope="col">編輯、刪除</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">元桌舞式</th>
                          <td>
                            <button
                              data-toggle="modal"
                              data-target="#cardModal"
                              class="btn btn-primary"
                            >卡片管理</button>
                          </td>
                          <td>
                            <button
                              data-toggle="modal"
                              data-target="#employeeListUpdate"
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
                <div class="tab-pane fade" id="addListInsert">
                  <div class="form-group row my-4">
                    <label class="col-sm-2">名稱</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row my-4">
                    <label class="col-sm-2">內文</label>
                    <div class="col-sm-10">
                      <ckeditor></ckeditor>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-outline-primary">新增</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="employeeListUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改列表</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">名稱</label>
              <div class="col-sm-10">
                <input value="元桌舞式" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">內文</label>
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
      id="cardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">卡片管理</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <ul class="nav nav-tabs">
                <li>
                  <a href="#cardList" data-toggle="tab" class="active show">卡片管理</a>
                </li>
                <li>
                  <a href="#cardInsert" data-toggle="tab">新增卡片</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="cardList">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">內文</th>
                          <th scope="col">編輯、刪除</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">使同仁於閒暇之餘.......</th>
                          <td>
                            <button
                              data-toggle="modal"
                              data-target="#updateCardModal"
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
                <div class="tab-pane fade" id="cardInsert">
                  <div class="form-group row my-4">
                    <label class="col-sm-2">卡片圖</label>
                    <div class="col-sm-10">
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row my-4">
                    <label class="col-sm-2">卡片內文</label>
                    <div class="col-sm-10">
                      <ckeditor></ckeditor>
                    </div>
                  </div>
                  <div class="form-group row justify-content-end">
                    <button class="btn btn-primary">確定新增</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="updateCardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">編輯卡片</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row my-4">
              <label class="col-sm-2">卡片圖</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" />
              </div>
            </div>
            <div class="form-group row my-4">
              <label class="col-sm-2">卡片內文</label>
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
