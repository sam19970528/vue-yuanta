<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <h2 class="my-4">醫療院所</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a href="#hospitalList" data-toggle="tab" class="active show">主題</a>
            </li>
            <li>
              <a href="#hospitalInsert" data-toggle="tab">新增</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="hospitalList">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">醫院名稱</th>
                      <th scope="col">電話</th>
                      <th scope="col">編輯、刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>民生承安診所</td>
                      <td>(02)2503-2633</td>
                      <td>
                        <button
                          data-toggle="modal"
                          data-target="#hospitalUpdate"
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
            <div class="tab-pane fade" id="hospitalInsert">
              <div class="form-group row my-4">
                <label class="col-sm-2">醫院名稱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">電話</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">地址</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">地址url</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">體檢時間</label>
                <div class="col-sm-10">
                    <ckeditor></ckeditor>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">項目</label>
                <div class="col-sm-10">
                  <div class="checkbox-group">
                    <label>一般體檢:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>靜止心電圖:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>胸部X光:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>生化檢驗(尿液及各項血液檢查):</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>運動心電圖:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>肺功能:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>腹部超音波:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>心臟超音波:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>聽力(含純音聽力):</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
                  <div class="checkbox-group">
                    <label>尿意尼古丁檢測:</label>
                    <label>
                      <input type="checkbox" />不需預約
                    </label>
                    <label>
                      <input type="checkbox" />需預約
                    </label>
                  </div>
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
      id="hospitalUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改-醫院資訊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-sm-2">醫院名稱</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">電話</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">地址</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">地址url</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">體檢時間</label>
              <div class="col-sm-10">
                  <ckeditor></ckeditor>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2">項目</label>
              <div class="col-sm-10">
                <div class="checkbox-group">
                  <label>一般體檢:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>靜止心電圖:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>胸部X光:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>生化檢驗(尿液及各項血液檢查):</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>運動心電圖:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>肺功能:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>腹部超音波:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>心臟超音波:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>聽力(含純音聽力):</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
                <div class="checkbox-group">
                  <label>尿意尼古丁檢測:</label>
                  <label>
                    <input type="checkbox" />不需預約
                  </label>
                  <label>
                    <input type="checkbox" />需預約
                  </label>
                </div>
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