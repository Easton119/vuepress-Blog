import{_ as s,c as n,b as a,o as i}from"./app-Bp4UWJ0z.js";const t={};function l(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<blockquote><p>Linux环境：Ubuntu 22.04.2 LTS</p></blockquote><h3 id="_1、linux下连不上git" tabindex="-1"><a class="header-anchor" href="#_1、linux下连不上git"><span>1、linux下连不上Git</span></a></h3><h4 id="临时解决方案-修改修改hosts文件" tabindex="-1"><a class="header-anchor" href="#临时解决方案-修改修改hosts文件"><span>临时解决方案-修改修改hosts文件：</span></a></h4><p>尝试在系统的hosts文件中添加以下条目来映射GitHub的IP地址：</p><p><code>sudo vim /etc/hosts</code></p><p>在文件的末尾添加以下内容：</p><p><code>140.82.113.4 github.com 140.82.114.4 gist.github.com</code></p><p>保存文件并尝试重新连接到GitHub。(:wq!)</p><h4 id="其他方案" tabindex="-1"><a class="header-anchor" href="#其他方案"><span>其他方案：</span></a></h4><ul><li>安装clash等vpn</li><li>使用SSH</li></ul><h4 id="使用校园网时git被屏蔽" tabindex="-1"><a class="header-anchor" href="#使用校园网时git被屏蔽"><span>使用校园网时git被屏蔽</span></a></h4><p>ping github.com 能ping通 telnet github.com 443 失败，说明 443 端口被拦截（学校的网络可能屏蔽了 GitHub）， 通过切换DNS解决： <code>sudo vim /etc/resolv.conf</code> 添加： <code>nameserver 8.8.8.8</code><code>nameserver 8.8.4.4</code></p><p>然后运行：<code>sudo systemctl restart NetworkManager</code></p><p>然后git push 成功！</p><h3 id="_2、获取最新的git版本" tabindex="-1"><a class="header-anchor" href="#_2、获取最新的git版本"><span>2、获取最新的Git版本</span></a></h3><p>Ubuntu 官方软件源的 Git 版本通常较旧，因此推荐使用 Git 官方维护的 <strong>PPA 源</strong> 来安装最新版本：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sudo add-apt-repository ppa:git-core/ppa -y</span></span>
<span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install git -y</span></span>
<span class="line"><span>git --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、git初始化时" tabindex="-1"><a class="header-anchor" href="#_3、git初始化时"><span>3、Git初始化时</span></a></h3><h4 id="初始化本地仓库时-一般命令行" tabindex="-1"><a class="header-anchor" href="#初始化本地仓库时-一般命令行"><span>初始化本地仓库时，一般命令行</span></a></h4><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 初始化 Git 仓库</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加所有文件到暂存区</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提交更改</span></span>
<span class="line"><span>git commit -m &quot;Initial commit&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将当前分支重命名为 main</span></span>
<span class="line"><span>git branch -M main</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加远程仓库</span></span>
<span class="line"><span>git remote add origin https://github.com/yourusername/yourrepository.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 推送本地分支到远程仓库，并设置默认上游分支</span></span>
<span class="line"><span>git push -u origin main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-git-init-后的分支命名问题" tabindex="-1"><a class="header-anchor" href="#_1-git-init-后的分支命名问题"><span>1. <code>git init</code> 后的分支命名问题</span></a></h5><p>设定默认分支为 <code>main</code><code>git config --global init.defaultBranch main</code></p><h5 id="_2、detected-dubious-ownership-in-repository" tabindex="-1"><a class="header-anchor" href="#_2、detected-dubious-ownership-in-repository"><span>2、detected dubious ownership in repository</span></a></h5><p>Git 发现仓库目录的所有者与当前用户不匹配，通常是因为仓库是在 root 用户或其他用户下创建的。 <strong>手动添加该目录为安全目录</strong>： <code>git config --global --add safe.directory &quot;/home/user/project&quot;</code></p><h5 id="_3、fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#_3、fatal-refusing-to-merge-unrelated-histories"><span>3、<code>fatal: refusing to merge unrelated histories</code></span></a></h5><p><strong>本地仓库和远程仓库是两个完全独立的历史</strong>，通常是：</p><ul><li>远程仓库已有 <code>README.md</code> 或 <code>.gitignore</code> 文件，而本地是空仓库。</li><li>本地已有提交，但远程是空仓库。</li></ul><p>允许合并不相关的历史： <code>git pull --allow-unrelated-histories origin main</code></p><h5 id="_4、-git-pull-时提示-divergent-branches" tabindex="-1"><a class="header-anchor" href="#_4、-git-pull-时提示-divergent-branches"><span>4、 <code>git pull</code> 时提示 <code>divergent branches</code></span></a></h5><p>本地和远程 <code>main</code> 分支的提交历史不同步，Git 需要你选择如何合并。 <strong>使用 <code>merge</code>（默认方式）</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git config pull.rebase false</span></span>
<span class="line"><span>git pull origin main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 <code>rebase</code>（保持线性历史）</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>git config pull.rebase true</span></span>
<span class="line"><span>git pull --rebase origin main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>由3 和 4 联合起来可以使用： 远程仓库已有提交但本地也有代码： <code>git pull --no-rebase --allow-unrelated-histories origin main</code><strong>拉取远程 <code>main</code> 分支的代码，并合并到本地仓库</strong>，即使本地和远程仓库<strong>没有共同的历史</strong>，Git 也会允许合并。</p>`,34)]))}const r=s(t,[["render",l],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/article/dqe565hw/","title":"Git使用问题与解决","lang":"zh-CN","frontmatter":{"title":"Git使用问题与解决","createTime":"2025/02/09","tags":null,"categories":null,"permalink":"/article/dqe565hw/","outline":"deep"},"headers":[],"readingTime":{"minutes":2.18,"words":654},"git":{"updatedTime":1739537503000,"contributors":[{"name":"qyj","username":"qyj","email":"1137109222@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/qyj?v=4","url":"https://github.com/qyj"}]},"filePathRelative":"工作流/Git使用问题与解决（持续更新）.md","categoryList":[{"id":"228526","sort":10002,"name":"工作流"}]}');export{r as comp,o as data};
