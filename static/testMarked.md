由于迫切地需要让页面外观更加美观、操作文本内容等功能，出现了一些 HTML 标记（font、center）允许对文本的外观和防止进行控制，这也看出了文本的重要性

文本和字体的区别：

文本：内容
字体：用于显示这个内容

使用文本属性可以控制文本相对于该行余下内容的位置、使其作为上标、加下划线、改变大小写等

- 缩进和水平对齐
 
    - 缩进文本
    
        将 Web 页面上段落的第一行缩进

        <html>
            <table>
                <tr>
                    <td colspan="2" style="text-align:center; font-weight: bold;">text-indent</td>
                </tr>
                <tr>
                    <td>值：</td>
                    <td><length> | <percentage> | inherit</td>
                </tr>
                <tr>
                    <td>初始值：</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>应用于：</td>
                    <td>块级元素</td>
                </tr>
                <tr>
                    <td>继承性：</td>
                    <td>有</td>
                </tr>
                <tr>
                    <td>百分数：</td>
                    <td>相对于包含块的宽度</td>
                </tr>
                <tr>
                    <td>计算值：</td>
                    <td>对于百分数值，要根据指定确定；对于长度值，则为绝对长度</td>
                </tr>
            </table>
        </html>
    - 水平对齐
    
        <html>
            <table>
                <tr>
                    <td colspan="2" style="text-align:center; font-weight: bold;">text-align</td>
                </tr>
                <tr>
                    <td>值：</td>
                    <td>left | center | right | justify | inherit</td>
                </tr>
                <tr>
                    <td>初始值：</td>
                    <td>用户代理特定的值；还可能取决于书写方向</td>
                </tr>
                <tr>
                    <td>应用于：</td>
                    <td>块级元素</td>
                </tr>
                <tr>
                    <td>继承性：</td>
                    <td>有</td>
                </tr>
                <tr>
                    <td>计算值：</td>
                    <td>根据指定确定</td>
                </tr>
            </table>
        </html>
    
        justify 属性在打印领域很常见，在 css 中少用
        
        由用户代理（而不是 css ）来确定两端对齐文本如何拉伸来填满左右便捷之间的空间。有的浏览器旨在单词之间增加额外的空间，有的会平均分布字母间的额外空间，有的会减少偶写行的空间，使文本更加紧密。
    
- 垂直对齐

    - 行高
    
        line-height 属性是指文本行基线之间的最小距离，而不是字体的大小，它确定了各个元素框的高度增加或减少多少。
        
        它定义的是最小距离，而不是绝对数值，文本基线拉开的距离可能比 line-height 值更大。line-height 并不影响替换元素的布局，不过确实可以应用到替换元素
        
        <html>
            <table>
                <tr>
                    <td colspan="2" style="text-align:center; font-weight: bold;">line-height</td>
                </tr>
                <tr>
                    <td>值：</td>
                    <td> <length> | <percentage> | <number> | normal | inherit</td>
                </tr>
                <tr>
                    <td>初始值：</td>
                    <td>normal</td>
                </tr>
                <tr>
                    <td>应用于：</td>
                    <td>所有元素</td>
                </tr>
                <tr>
                    <td>继承性：</td>
                    <td>有</td>
                </tr>
                <tr>
                    <td>百分数：</td>
                    <td>相对于元素的字体大小</td>
                </tr>
                <tr>
                    <td>计算值：</td>
                    <td>对于长度和百分数值是绝对数值；否则，根据指定确定</td>
                </tr>
            </table>
        </html>
        
        **构造文本行**
        
        文本行中的每个元素都会生成一个内容区，这由字体的大小确定。
        
        这个内容区则会生成一个行内框（inline box），如果不存在其他因素，这个行内框就完全等于该元素的内容区。由 line-height 产生的行间距就是增加或减少各行内框高度的因素之一。
        
        要确定一个给定元素的行间距，只需将 line-height 的计算值减去 fong-size 的计算值，这个值是总的行间距（可能为负值），然后将行间距的一半分别应用到内容区的顶部和底部。其结果就是该元素的行内框。
        
        ![行内框](../imgs/行内框.png)
        
        **指定 line-height 值**
        
        如果使用默认值 normal，用户代理必须计算行间的垂直空间，不同的用户代理计算出的值可能不同，不过通常都是字体大小的 1.2 倍，这使得行框要高于给定元素的 font-size 值
        
        ```css
        body {line-height: 14px; font-size: 13px;}
        p.cl1 {line-height: 1.5em;}
        p.cl2 {font-size: 10px; line-height: 150%;}
        p.cl3 {line-height: 0.33in;}
        ```
        
        ```html
        <p>line-height 14px</p>
        <p class="cl1">line-height of 19.5px (13 * 1.5)</p>
        <p class="cl2">line-height of 15px (10 * 1.5)</p>
        <p class="cl3">line-height of 0.33in</p>
        ```
        ![line-height 属性计算](../imgs/line-height属性计算.png)
        
        **行高和继承**
        
        使用缩放因子解决继承问题
        
        如果指定值 inherit，元素则会使用其父元素的计算值，这与值自然继承没有什么不同，不过特殊性和层叠解决方案不同
        
    - 垂直对齐文本
        
        <html>
            <table>
                <tr>
                    <td colspan="2" style="text-align:center; font-weight: bold;">vertical-align</td>
                </tr>
                <tr>
                    <td>值：</td>
                    <td> baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | inherit</td>
                </tr>
                <tr>
                    <td>初始值：</td>
                    <td>baseline</td>
                </tr>
                <tr>
                    <td>应用于：</td>
                    <td>行内元素和表单元格</td>
                </tr>
                <tr>
                    <td>继承性：</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>百分数：</td>
                    <td>相对于元素的 line-height 值</td>
                </tr>
                <tr>
                    <td>计算值：</td>
                    <td>对于长度和百分数值是绝对数值；否则，根据指定确定</td>
                </tr>
                <tr>
                    <td>说明：</td>
                    <td>应用到表单元格时，只能识别 baseline、top、middle、bottom等值</td>
                </tr>
            </table>
        </html>
        
        **注意：** vertical-align 不影响块级元素中内容的对齐，不过可以用它来影响表单元格中元素的垂直对齐
        
        **基线对齐**
        
        `vertical-align: baseline;`
        要求一个元素的基线与父元素的基线对齐。默认情况下，浏览器都会这么做。
        
        如果一个垂直对齐元素没有基线 —— 也就是说，如果这是个图像或表单输入元素，或其他替换元素 —— 那么该元素的底端与其父元素的基线对齐
        
        ```css
        img{width: 60px; vertical-align: baseline;}
        ```
        ```html
        <p>The image found in this paragraph 中文中文<img src="https://github.com/zonghua2016/CSS-The-Definitive-Guide/blob/master/imgs/CSS-The-Definitive-Guide.jpg?raw=true" alt=""> has its bottom edge aligned with the baseline of the text in the paragraph.</p>
        ```
        
        ![图像基线对齐](../imgs/图像基线对齐.png)
        
        **上标和下标**
        
        `vertical-align: sub;` 声明会使一个元素变成下标，这意味着其基线（或者如果这是一个替换元素，则是其底端）相对于其父元素的基线降低。规范没有定义元素降低的距离，所以根据不同的用户代理，降低距离可能有所不同
        
        super 刚好和 sub 相反，它将元素的基线（或替换元素的底端）相对于父元素的基线升高
        
        不会改变元素的字体大小，上标或下标元素中的所有文本默认与父元素中的文本大小相同
        
        ```css
        .raise{vertical-align: super;}
        .lower{vertical-align: sub;}
        ```
        ```html
        <p>The image found in this paragraph<span class="raise">superscripted</span> and <span class="lower">subscribe</span> the text in the paragraph.</p>
        ```
        
        ![上标和下标](../imgs/上标和下标.png)
        
        **底端对齐**
        
        `vertical-align: bottom;` 将元素行内框的底端与行框的底端对齐
        
        `vertical-align: text-bottom;` 是指行内文本的底端。
        
        替换元素或任何其他类型的非文本元素会忽略这个值。对于这些元素，将考虑一个 “默认” 的文本框。这个默认框由父元素的 font-size 得到。要对齐的元素的行内框底端在与这个默认文本框的底端对齐
        
        ```css
        img{width: 60px; vertical-align: bottom;}
        img.short {height: 20px; vertical-align: text-bottom;}
        ```
        
        ```html
        <p>The image found in this paragraph 中文中文
        <img src="https://github.com/zonghua2016/CSS-The-Definitive-Guide/blob/master/imgs/CSS-The-Definitive-Guide.jpg?raw=true" alt="">
        测试测试
        <img class="short" src="https://github.com/zonghua2016/CSS-The-Definitive-Guide/blob/master/imgs/CSS-The-Definitive-Guide.jpg?raw=true" alt=""> 
        has its bottom edge aligned with the baseline of the text in the paragraph.
        </p>
        ```
        
        ![底端对齐](../imgs/底端对齐.png)
        
        **顶端对齐**
        
        `vertical-align: top;`
        `vertical-align: text-top;`
        
        顶端对齐的效果与 bottom 相反
        
        **居中对齐**
        
        `vertical-align: middle;` 往往应用于图像
        
        middle 会把行内元素框的中点与父元素基线上方 0.5ex 处的一个点对齐，这里的 1ex 相对于父元素的 font-size 定义。如图： 
        
        ![居中对齐的详细说明](../imgs/居中对齐的详细说明.png)
        
        因为大多数用户代理都把 1ex 处理为 0.5em，middle 往往将元素垂直中点与父元素基线上方 0.25em 出的一个点对齐。不过，有点用户代理确实会为个元素计算准确的 x-height（详见第 5 章）
        
        **百分数**
        
        使用百分数回把元素的基线（或替换元素的底边）相对于父元素的基线升高或降低指定的量（你指定的百分数要计算为该元素 line-height 的百分数，而不是相对于其父元素的 line-height）。正百分数会使元素升高。负值将会降低。
        
        ```css
        sup{vertical-align: 100%;}
        sub{vertical-align: -100%;}
        ```
        ```html
        <p>
            we can either
            <sup>soar to new heights</sup> or
            <sub>sink into despair...</sub>
        </p>
        ```
        ![百分比效果](../imgs/百分比效果.png)
        
        ```css
        div{font-size: 14px; line-height: 18px;}
        span{vertical-align: 50%;}
        ```
        ```html
        <div>
            I felt that ,if nothing else , I deserved a
            <span>raise</span>
            for my efforts
        </div>
        ```
        ![百分比效果2](../imgs/百分比效果2.png)
        
        **长度对齐**
        
        指定长度垂直对齐：正值使元素上升，负值使元素下降
        
        ```css
        p{vertical-align: 5px;}
        ```
        
    所有垂直对齐的元素都会影响行高。
    
    行框的描述：其高度要足以包含最高行内框的顶端和最低行内框的底端。这包括因垂直对齐上升或下降的行内框。

- 字间隔和字母间隔


- 文本转换


- 文本装饰


- 文本阴影










