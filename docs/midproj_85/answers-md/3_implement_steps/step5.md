### 產品頁改 ejs

```
    <h3><%= title %> -- <%= name %> <%= id %></h3>
   <div class="wrap-coffee">

        <div class="coffee-content">
                <ul class="view-list">
                    <li>咖啡飲品</li>
                    <li>茶瓦納</li>
                    <li>星冰樂</li>
                    <li>冷萃咖啡</li>
                    <li>其他飲料</li>
                    <li>罐裝飲料</li>
                </ul>
                <% data.forEach( item => { %>
                <article>
                    <h2><%= item.type %></h2>
                    <ul>
                        <li>
                            <a href="#">
                                <div class="column-img">
                                    <img src="<%= item.url %>" alt="">
                                </div>
                                <div class="column-text">
                                    <h1 class="title-cn"><%= item.name_cn %></h1>
                                    <h3 class="title-en"><%= item.name_en %></h3>
                                </div>
                            </a>
                        </li>
                        <% }); %>
```

![](https://i.imgur.com/vkdk9iy.png)
