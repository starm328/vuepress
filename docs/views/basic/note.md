# 基础知识-git常用指令
## title1
content...

## title3
content...

## title3-01

## small title
content...

<Common-Democode title="基本用法" description="基本按钮用法">
  <text-text1></text-text1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <dt-button>默认按钮</dt-button>
          <dt-button type="primary">主要按钮</dt-button>
          <dt-button type="success">成功按钮</dt-button>
          <dt-button type="info">信息按钮</dt-button>
          <dt-button type="warning">警告按钮</dt-button>
          <dt-button type="danger">危险按钮</dt-button>
        </div>
      </div>
    </template>
    <script>
      export default {
        data(){
          return {
            loading:false,
            finished:false,
            data:'loading',
            page:1,
            pageSize:10,
          }
        },
      }
    </script>
  </highlight-code>
</Common-Democode>

| Tables    | Are      | Cool |
| ------------- |:-------------:| -----:|
| col 3 is   | right-aligned | $1600 |
| col 2 is   | centered   |  $12 |
| zebra stripes | are neat   |  $1 |