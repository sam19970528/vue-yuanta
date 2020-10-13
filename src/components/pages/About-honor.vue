<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="container">
        <ul class="nav nav-tabs">
          <li>
            <a href="#manage" data-toggle="tab" class="active show">管理</a>
          </li>
          <li>
            <a href="#insert" data-toggle="tab">新增</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade active show" id="manage">
            <h2 class="my-4">光榮時刻</h2>
            <div class="form-group row">
              <label class="col-sm-1">年度</label>
              <div class="col-sm-11">
                <select class="form-control">
                  <option value="2019">2019</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-1 mt-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1" />
                </div>
              </div>
              <div class="col-sm-2 mb-2">
                <label>排序</label>
                <input value="1" type="text" class="form-control" />
              </div>
              <div class="col-sm-4 mb-2">
                <label>主辦單位</label>
                <input value="金管會" type="text" class="form-control" />
              </div>
              <div class="col-sm-5 mb-2">
                <label>獎項</label>
                <input value="評選優質保單" type="text" class="form-control" />
              </div>
              <div class="col-sm-1 mt-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2" />
                </div>
              </div>
              <div class="col-sm-2 mb-2">
                <label>排序</label>
                <input value="2" type="text" class="form-control" />
              </div>
              <div class="col-sm-4 mb-2">
                <label>主辦單位</label>
                <input value="金管會" type="text" class="form-control" />
              </div>
              <div class="col-sm-5 mb-2">
                <label>獎項</label>
                <input value="評選優質保單" type="text" class="form-control" />
              </div>
              <div class="col-sm-1 mt-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="3" />
                </div>
              </div>
              <div class="col-sm-2 mb-2">
                <label>排序</label>
                <input value="3" type="text" class="form-control" />
              </div>
              <div class="col-sm-4 mb-2">
                <label>主辦單位</label>
                <input value="金管會" type="text" class="form-control" />
              </div>
              <div class="col-sm-5 mb-2">
                <label>獎項</label>
                <input value="評選優質保單" type="text" class="form-control" />
              </div>

              <div class="form-group row w-100 justify-content-end mt-3">
                <button class="btn btn-outline-primary mr-3">刪除</button>
                <button class="btn btn-outline-primary">儲存</button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="insert">
            <h2 class="my-4">光榮時刻</h2>
            <div class="form-group row">
              <label class="col-sm-1" >日期</label>
              <div class="col-sm-11">
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-1">主辦單位</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-1">獎項</label>
              <div class="col-sm-11">
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
</template>
