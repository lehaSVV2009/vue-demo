(function(){"use strict";var t={5228:function(t,e,o){var s=o(5130),n=(o(5524),o(9666)),a=o(1370),l=o(3739),r=o(8221),u=o(6768);const i={class:"app"};function d(t,e,o,s,n,a){const l=(0,u.g2)("nav-bar"),r=(0,u.g2)("router-view");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(l),(0,u.Lk)("div",i,[(0,u.bF)(r)])],64)}o(4114);var c=o(4232),p={__name:"NavBar",setup(t){const e=[{label:"Vuex Posts",url:"/vuex-posts"},{label:"Vue3 Posts",url:"/vue3-posts"},{label:"Vue3 Todos",url:"/vue3-todos"},{label:"About",url:"/about"}];return(t,o)=>{const s=(0,u.g2)("v-app-bar-title"),n=(0,u.g2)("v-btn"),a=(0,u.g2)("v-list-item-title"),l=(0,u.g2)("v-list-item"),r=(0,u.g2)("v-list"),i=(0,u.g2)("v-menu"),d=(0,u.g2)("v-app-bar"),p=(0,u.g2)("v-layout");return(0,u.uX)(),(0,u.Wv)(p,null,{default:(0,u.k6)((()=>[(0,u.bF)(d,{elevation:2},(0,u.eX)({default:(0,u.k6)((()=>[(0,u.bF)(s,{onClick:o[0]||(o[0]=e=>t.$router.push("/"))},{default:(0,u.k6)((()=>[(0,u.eW)("My Posts")])),_:1})])),_:2},[t.$vuetify.display.mdAndUp?{name:"append",fn:(0,u.k6)((()=>[((0,u.uX)(),(0,u.CE)(u.FK,null,(0,u.pI)(e,(e=>(0,u.bF)(n,{key:e.url,onClick:o=>t.$router.push(e.url)},{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(e.label),1)])),_:2},1032,["onClick"]))),64))])),key:"0"}:{name:"append",fn:(0,u.k6)((()=>[(0,u.bF)(i,null,{activator:(0,u.k6)((({props:t})=>[(0,u.bF)(n,(0,c._B)((0,u.Ng)(t)),{default:(0,u.k6)((()=>[(0,u.eW)(" More ")])),_:2},1040)])),default:(0,u.k6)((()=>[(0,u.bF)(r,null,{default:(0,u.k6)((()=>[((0,u.uX)(),(0,u.CE)(u.FK,null,(0,u.pI)(e,(e=>(0,u.bF)(l,{key:e.url,onClick:o=>t.$router.push(e.url)},{default:(0,u.k6)((()=>[(0,u.bF)(a,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(e.label),1)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1})])),key:"1"}]),1024)])),_:1})}}};const m=p;var v=m,g={components:{NavBar:v}},f=o(1241);const P=(0,f.A)(g,[["render",d]]);var h=P,b=o(1387);const k=(0,u.Lk)("h1",null,"App to learn vue basics (vuex, vuetify, vue3)",-1);function C(t,e,o,s,n,a){const l=(0,u.g2)("vue-viewport");return(0,u.uX)(),(0,u.Wv)(l,null,{default:(0,u.k6)((()=>[k])),_:1})}var y={};const _=(0,f.A)(y,[["render",C]]);var F=_;const L=(0,u.Lk)("h1",null,"Vue Posts Demo",-1),w=(0,u.Lk)("div",null,"App to learn vue basics (vuex, vuetify, vue3)",-1);function W(t,e,o,s,n,a){const l=(0,u.g2)("v-btn"),r=(0,u.g2)("vue-viewport");return(0,u.uX)(),(0,u.Wv)(r,null,{default:(0,u.k6)((()=>[L,w,t.$store.state.auth.isLoggedIn?((0,u.uX)(),(0,u.Wv)(l,{key:0,onClick:a.logout},{default:(0,u.k6)((()=>[(0,u.eW)("Logout")])),_:1},8,["onClick"])):((0,u.uX)(),(0,u.Wv)(l,{key:1,onClick:a.login},{default:(0,u.k6)((()=>[(0,u.eW)("Login")])),_:1},8,["onClick"]))])),_:1})}var S={methods:{login(){this.$store.commit("auth/login"),this.$router.push("/vuex-posts")},logout(){this.$store.commit("auth/logout")}}};const X=(0,f.A)(S,[["render",W]]);var A=X;const x={key:0};function I(t,e,o,s,n,a){const l=(0,u.g2)("v-btn"),r=(0,u.g2)("v-col"),i=(0,u.g2)("v-text-field"),d=(0,u.g2)("v-select"),c=(0,u.g2)("v-row"),p=(0,u.g2)("post-form"),m=(0,u.g2)("v-card"),v=(0,u.g2)("v-dialog"),g=(0,u.g2)("post-list");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(c,{align:"center"},{default:(0,u.k6)((()=>[(0,u.bF)(r,{cols:"12",md:"3"},{default:(0,u.k6)((()=>[(0,u.bF)(l,{onClick:e[0]||(e[0]=t=>n.showCreatePostDialog=!0)},{default:(0,u.k6)((()=>[(0,u.eW)("Create post")])),_:1})])),_:1}),(0,u.bF)(r,{cols:"12",md:"6"},{default:(0,u.k6)((()=>[(0,u.bF)(i,{"model-value":t.searchText,"onUpdate:modelValue":t.setSearchText,placeholder:"Search"},null,8,["model-value","onUpdate:modelValue"])])),_:1}),(0,u.bF)(r,{cols:"12",md:"3"},{default:(0,u.k6)((()=>[(0,u.bF)(d,{label:"Sort","model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,items:n.sortOptions},null,8,["model-value","onUpdate:modelValue","items"])])),_:1})])),_:1}),(0,u.bF)(v,{modelValue:n.showCreatePostDialog,"onUpdate:modelValue":e[1]||(e[1]=t=>n.showCreatePostDialog=t)},{default:(0,u.k6)((()=>[(0,u.bF)(m,{class:"create-post-card",title:"Create post"},{default:(0,u.k6)((()=>[(0,u.bF)(p,{onCreatePost:a.createPost},null,8,["onCreatePost"])])),_:1})])),_:1},8,["modelValue"]),t.isLoadingPost?((0,u.uX)(),(0,u.CE)("div",x,"Loading...")):((0,u.uX)(),(0,u.Wv)(g,{key:1,posts:t.filteredAndSortedAndPagedPosts,"current-page":t.currentPage,"total-pages":t.totalPages,onDeletePost:t.deletePost,onOpenPost:a.openPost,onChangeCurrentPage:t.setCurrentPage},null,8,["posts","current-page","total-pages","onDeletePost","onOpenPost","onChangeCurrentPage"]))],64)}var O=o(782);function T(t,e,o,n,a,l){const r=(0,u.g2)("v-text-field"),i=(0,u.g2)("v-btn");return(0,u.uX)(),(0,u.CE)("form",{class:"post-form",onSubmit:e[2]||(e[2]=(0,s.D$)((()=>{}),["prevent"]))},[(0,u.bF)(r,{class:"post-input",modelValue:a.title,"onUpdate:modelValue":e[0]||(e[0]=t=>a.title=t),placeholder:"Title"},null,8,["modelValue"]),(0,u.bF)(r,{class:"post-input",modelValue:a.description,"onUpdate:modelValue":e[1]||(e[1]=t=>a.description=t),type:"textarea",placeholder:"Description"},null,8,["modelValue"]),(0,u.bF)(i,{class:"post-form-submit-button",color:"teal-accent-4",onClick:l.createPost},{default:(0,u.k6)((()=>[(0,u.eW)(" Create ")])),_:1},8,["onClick"])],32)}var V={data(){return{title:"",description:""}},methods:{createPost(){this.$emit("create-post",{title:this.title,description:this.description}),this.title="",this.description=""}}};const $=(0,f.A)(V,[["render",T],["__scopeId","data-v-55117fe5"]]);var E=$;const K={key:0},D={key:1};function j(t,e,o,n,a,l){const r=(0,u.g2)("post-list-item"),i=(0,u.g2)("v-pagination");return(0,u.uX)(),(0,u.CE)(u.FK,null,[Array.isArray(o.posts)&&o.posts.length>0?((0,u.uX)(),(0,u.CE)("div",K,[(0,u.bF)(s.F,{name:"posts",tag:"div"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(o.posts,(t=>((0,u.uX)(),(0,u.CE)("div",{class:"post",key:t.id},[(0,u.bF)(r,{post:t,withButtons:"",onDeletePost:l.deletePost,onOpenPost:l.openPost},null,8,["post","onDeletePost","onOpenPost"])])))),128))])),_:1})])):((0,u.uX)(),(0,u.CE)("div",D,"No posts")),(0,u.bF)(i,{"model-value":o.currentPage,length:o.totalPages,"onUpdate:modelValue":l.changeCurrentPage,rounded:"circle"},null,8,["model-value","length","onUpdate:modelValue"])],64)}function U(t,e,o,s,n,a){const l=(0,u.g2)("v-card-title"),r=(0,u.g2)("v-card-text"),i=(0,u.g2)("v-btn"),d=(0,u.g2)("v-card-actions"),p=(0,u.g2)("v-card");return(0,u.uX)(),(0,u.Wv)(p,null,{default:(0,u.k6)((()=>[(0,u.bF)(l,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(o.post.title),1)])),_:1}),(0,u.bF)(r,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(o.post.description),1)])),_:1}),o.withButtons?((0,u.uX)(),(0,u.Wv)(d,{key:0},{default:(0,u.k6)((()=>[(0,u.bF)(i,{color:"teal-accent-4",variant:"text",onClick:e[0]||(e[0]=t=>a.openPost(o.post))},{default:(0,u.k6)((()=>[(0,u.eW)(" Open")])),_:1}),(0,u.bF)(i,{color:"teal-accent-4",variant:"text",onClick:e[1]||(e[1]=t=>a.deletePost(o.post))},{default:(0,u.k6)((()=>[(0,u.eW)(" Delete")])),_:1})])),_:1})):(0,u.Q3)("",!0)])),_:1})}var B={props:{post:{type:Object,required:!0},withButtons:{type:Boolean}},methods:{deletePost(t){this.$emit("delete-post",t)},openPost(t){this.$emit("open-post",t)}}};const R=(0,f.A)(B,[["render",U]]);var q=R,N={components:{PostListItem:q},props:{posts:{type:Array,required:!0},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{deletePost(t){this.$emit("delete-post",t)},openPost(t){this.$emit("open-post",t)},changeCurrentPage(t){this.$emit("change-current-page",t)}}};const M=(0,f.A)(N,[["render",j],["__scopeId","data-v-40cd0c1a"]]);var H=M,z={name:"App",components:{PostForm:E,PostList:H},data(){return{sortOptions:[{title:"",value:""},{title:"Title",value:"title"},{title:"Description",value:"description"}],showCreatePostDialog:!1}},mounted(){this.fetchAllPosts()},computed:{...(0,O.aH)({posts:t=>t.posts.posts,currentPage:t=>t.posts.currentPage,limit:t=>t.posts.limit,searchText:t=>t.posts.searchText,selectedSort:t=>t.posts.selectedSort,isLoadingPost:t=>t.posts.isLoadingPost}),...(0,O.L8)({totalPages:"posts/totalPages",filteredAndSortedAndPagedPosts:"posts/filteredAndSortedAndPagedPosts"})},methods:{...(0,O.PY)({setCurrentPage:"posts/setCurrentPage",setPosts:"posts/setPosts",setSearchText:"posts/setSearchText",setSelectedSort:"posts/setSelectedSort"}),...(0,O.i0)({fetchAllPosts:"posts/fetchAllPosts",createPost:"posts/createPost",deletePost:"posts/deletePost"}),createPost(t){t.title&&t.description&&this.setPosts([t,...this.posts]),this.showCreatePostDialog=!1},openPost(t){this.$router.push(`/vuex-posts/${t.id}`)}}};const G=(0,f.A)(z,[["render",I]]);var Q=G;const Y={key:0},J={key:1},Z=(0,u.Lk)("h3",null,"Post",-1),tt=(0,u.Lk)("h3",{class:"mt-4"},"Comments",-1),et={key:3};function ot(t,e,o,s,n,a){const l=(0,u.g2)("post-list-item"),r=(0,u.g2)("post-comment");return t.isLoadingPost?((0,u.uX)(),(0,u.CE)("div",Y,"Loading post...")):t.isLoadingPostComments?((0,u.uX)(),(0,u.CE)("div",J,"Loading comments...")):t.post?((0,u.uX)(),(0,u.CE)(u.FK,{key:2},[Z,(0,u.bF)(l,{post:t.post,withButtons:!1},null,8,["post"]),tt,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(t.comments,(t=>((0,u.uX)(),(0,u.Wv)(r,{class:"mt-2",key:t.id,comment:t},null,8,["comment"])))),128))],64)):((0,u.uX)(),(0,u.CE)("div",et,"Post not found"))}function st(t,e,o,s,n,a){const l=(0,u.g2)("v-card-title"),r=(0,u.g2)("v-card-subtitle"),i=(0,u.g2)("v-card-item"),d=(0,u.g2)("v-card-text"),p=(0,u.g2)("v-card");return(0,u.uX)(),(0,u.Wv)(p,null,{default:(0,u.k6)((()=>[(0,u.bF)(i,null,{default:(0,u.k6)((()=>[(0,u.bF)(l,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(o.comment.name),1)])),_:1}),(0,u.bF)(r,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(o.comment.email),1)])),_:1})])),_:1}),(0,u.bF)(d,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(o.comment.body),1)])),_:1})])),_:1})}var nt={props:{comment:{type:Object,required:!0}}};const at=(0,f.A)(nt,[["render",st]]);var lt=at,rt={components:{PostComment:lt,PostListItem:q},computed:{...(0,O.aH)({isLoadingPost:t=>t.postItem.isLoadingPost,isLoadingPostComments:t=>t.postItem.isLoadingPostComments,post:t=>t.postItem.post,comments:t=>t.postItem.comments})},mounted(){this.fetchPost(this.$route.params.id),this.fetchPostComments(this.$route.params.id)},methods:{...(0,O.i0)({fetchPost:"postItem/fetchPost",fetchPostComments:"postItem/fetchPostComments"})}};const ut=(0,f.A)(rt,[["render",ot]]);var it=ut;const dt={key:0};function ct(t,e,o,s,n,a){const l=(0,u.g2)("post-list");return s.isLoadingPost?((0,u.uX)(),(0,u.CE)("div",dt,"Loading...")):((0,u.uX)(),(0,u.Wv)(l,{key:1,posts:s.posts,"current-page":1,"total-pages":1,onDeletePost:s.deletePost,onOpenPost:s.openPost,onChangeCurrentPage:s.setCurrentPage},null,8,["posts","onDeletePost","onOpenPost","onChangeCurrentPage"]))}var pt=o(144),mt=o(8355);const vt=mt.A.create({baseURL:"https://jsonplaceholder.typicode.com"}),gt=async()=>await vt.get("/posts"),ft=async t=>await vt.get(`/posts/${t}`),Pt=async t=>await vt.get(`/posts/${t}/comments`),ht=async()=>await vt.get("/users"),bt=async t=>await vt.get(`/users/${t}`),kt=async()=>await vt.get("/todos"),Ct=async t=>await vt.get(`/todos/${t}`);var yt=()=>{const t=(0,pt.KR)(!1),e=(0,pt.KR)([]),o=(0,pt.KR)(0),s=async()=>{try{t.value=!0;const o=await gt(),s=o.data;e.value=s.map((t=>({id:t.id,title:t.title,description:t.body})))}catch(o){console.log(o),e.value=[]}finally{t.value=!1}};(0,u.sV)(s);const n=(0,b.rd)(),a=t=>{n.push(`/vuex-posts/${t.id}`)},l=t=>{e.value=e.value.filter((e=>e.id!==t.id))},r=t=>{o.value=t};return{posts:e,isLoadingPost:t,currentPage:o,openPost:a,deletePost:l,setCurrentPage:r}},_t={components:{PostList:H},setup(){const{posts:t,isLoadingPost:e,currentPage:o,openPost:s,deletePost:n,setCurrentPage:a}=yt();return{posts:t,isLoadingPost:e,currentPage:o,openPost:s,deletePost:n,setCurrentPage:a}}};const Ft=(0,f.A)(_t,[["render",ct]]);var Lt=Ft,wt={__name:"TodoListItem",props:{todo:{type:Object,required:!0}},emits:["openTodo"],setup(t,{emit:e}){const o=t,s=e,n=()=>{s("openTodo",o.todo)};return(e,o)=>{const s=(0,u.g2)("v-card-text"),a=(0,u.g2)("v-card-title"),l=(0,u.g2)("v-card-subtitle"),r=(0,u.g2)("v-btn"),i=(0,u.g2)("v-card-actions"),d=(0,u.g2)("v-card");return(0,u.uX)(),(0,u.Wv)(d,null,{default:(0,u.k6)((()=>[(0,u.bF)(s,{class:(0,c.C4)(t.todo.completed?"bg-green":"bg-red")},{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.completed?"Completed":"To do"),1)])),_:1},8,["class"]),(0,u.bF)(a,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.title),1)])),_:1}),(0,u.bF)(l,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.user?.email),1)])),_:1}),(0,u.bF)(i,null,{default:(0,u.k6)((()=>[(0,u.bF)(r,{onClick:n},{default:(0,u.k6)((()=>[(0,u.eW)("Open")])),_:1})])),_:1})])),_:1})}}};const Wt=wt;var St=Wt;const Xt=(0,u.Lk)("h1",null,"Vue 3 Todos",-1),At={key:0};var xt={__name:"TodosPage",setup(t){const e=async()=>{try{const t=await kt();return t.data}catch(t){return console.log(t),[]}},o=async()=>{try{const t=await ht();return t.data}catch(t){return console.log(t),[]}},s=(0,pt.KR)(!1),n=(0,pt.KR)([]),a=(0,pt.KR)(""),l=(0,pt.KR)(""),r=(0,pt.Kh)([{title:"All",value:""},{title:"Completed",value:"completed"},{title:"To Do",value:"todo"}]);(0,u.sV)((()=>{s.value=!0,Promise.all([e(),o()]).then((([t,e])=>{n.value=t.map((t=>{const o=e.find((e=>e.id===t.userId));return o&&(t.user=o),t}))})).finally((()=>{s.value=!1}))}));const i=(t,e)=>"completed"===t?e.filter((t=>t.completed)):"todo"===t?e.filter((t=>!t.completed)):e,d=(0,u.EW)((()=>{const t=i(a.value,n.value);return l.value?t.filter((t=>t.title.toLowerCase().includes(l.value.toLowerCase()))):t})),c=(0,b.rd)(),p=t=>{c.push(`/vue3-todos/${t.id}`)};return(t,e)=>{const o=(0,u.g2)("v-col"),n=(0,u.g2)("v-text-field"),i=(0,u.g2)("v-select"),c=(0,u.g2)("v-row");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(c,null,{default:(0,u.k6)((()=>[(0,u.bF)(o,{cols:"12",md:"3"},{default:(0,u.k6)((()=>[Xt])),_:1}),(0,u.bF)(o,{cols:"12",md:"6"},{default:(0,u.k6)((()=>[(0,u.bF)(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),placeholder:"Search..."},null,8,["modelValue"])])),_:1}),(0,u.bF)(o,{cols:"12",md:"3"},{default:(0,u.k6)((()=>[(0,u.bF)(i,{items:r,modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t),label:"Select completed type"},null,8,["items","modelValue"])])),_:1})])),_:1}),s.value?((0,u.uX)(),(0,u.CE)("div",At,"Loading todos...")):((0,u.uX)(),(0,u.Wv)(c,{key:1},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(d.value,(t=>((0,u.uX)(),(0,u.Wv)(o,{cols:"12",md:"3",key:t.id},{default:(0,u.k6)((()=>[(0,u.bF)(St,{todo:t,onOpenTodo:p},null,8,["todo"])])),_:2},1024)))),128))])),_:1}))],64)}}};const It=xt;var Ot=It,Tt={__name:"TodoCard",props:{todo:{type:Object,required:!0}},emits:["back"],setup(t,{emit:e}){const o=t,s=e,n=()=>{s("back",o.todo)};return(e,o)=>{const s=(0,u.g2)("v-card-text"),a=(0,u.g2)("v-card-title"),l=(0,u.g2)("v-card-subtitle"),r=(0,u.g2)("v-btn"),i=(0,u.g2)("v-card-actions"),d=(0,u.g2)("v-card");return(0,u.uX)(),(0,u.Wv)(d,null,{default:(0,u.k6)((()=>[(0,u.bF)(s,{class:(0,c.C4)(t.todo.completed?"bg-green":"bg-red")},{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.completed?"Completed":"To do"),1)])),_:1},8,["class"]),(0,u.bF)(a,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.title),1)])),_:1}),(0,u.bF)(l,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,c.v_)(t.todo.user?.email)+", "+(0,c.v_)(t.todo.user?.name),1)])),_:1}),(0,u.bF)(i,null,{default:(0,u.k6)((()=>[(0,u.bF)(r,{onClick:n},{default:(0,u.k6)((()=>[(0,u.eW)("Back")])),_:1})])),_:1})])),_:1})}}};const Vt=Tt;var $t=Vt;const Et={key:0},Kt={key:1};var Dt={__name:"TodoPage",setup(t){const e=(0,pt.KR)(!1),o=(0,pt.Kh)({}),s=(0,b.lq)(),n=s.params.id,a=async()=>{try{e.value=!0;const t=await Ct(n),s=t.data;if(o.id=s.id,o.completed=s.completed,o.title=s.title,s.userId){const t=await bt(s.userId);o.user=t.data}}catch(t){console.log(t);for(const e of Object.getOwnPropertyNames(o))delete o[e]}finally{e.value=!1}};(0,u.sV)(a);const l=(0,b.rd)(),r=()=>{l.push("/vue3-todos")};return(t,s)=>e.value?((0,u.uX)(),(0,u.CE)("div",Et,"Loading todo...")):o.id?((0,u.uX)(),(0,u.Wv)($t,{key:2,todo:o,onBack:r},null,8,["todo"])):((0,u.uX)(),(0,u.CE)("div",Kt,"Todo not found"))}};const jt=Dt;var Ut=jt;const Bt=[{path:"/",component:A},{path:"/about",component:F},{path:"/vuex-posts",component:Q},{path:"/vuex-posts/:id",component:it},{path:"/vue3-posts",component:Lt},{path:"/vue3-todos",component:Ot},{path:"/vue3-todos/:id",component:Ut}],Rt=(0,b.aE)({history:(0,b.Bt)("/vue-posts-demo/"),routes:Bt});var qt=Rt;const Nt={state:()=>({isLoggedIn:!1}),getters:{},mutations:{login(t){t.isLoggedIn=!0},logout(t){t.isLoggedIn=!1}},actions:{},namespaced:!0},Mt={state:()=>({posts:[],currentPage:1,limit:10,searchText:"",selectedSort:"",isLoadingPost:!1}),getters:{selectedPost:t=>e=>{try{const o=parseInt(e);return t.posts.find((t=>t.id===o))}catch(o){return null}},totalPages(t){return Math.ceil(t.posts.length/t.limit)},filteredPosts(t){return t.searchText?t.posts.filter((e=>e.title.toLowerCase().includes(t.searchText.toLowerCase()))):t.posts},filteredAndSortedPosts(t,e){let o=e.filteredPosts;return t.selectedSort&&(o=[...o].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))),o},filteredAndSortedAndPagedPosts(t,e){if(0===e.filteredAndSortedPosts.length)return e.filteredAndSortedPosts;const o=t.limit*(t.currentPage-1),s=Math.min(e.filteredAndSortedPosts.length-1,t.limit*t.currentPage-1);return e.filteredAndSortedPosts.filter(((t,e)=>e>=o&&e<=s))}},mutations:{setPosts(t,e){t.posts=e},setCurrentPage(t,e){t.currentPage=e},setSearchText(t,e){t.searchText=e},setSelectedSort(t,e){t.selectedSort=e},setIsLoadingPost(t,e){t.isLoadingPost=e}},actions:{deletePost({state:t,commit:e},o){e("setPosts",t.posts.filter((t=>t.id!==o.id)))},async fetchAllPosts({commit:t}){try{t("isLoadingPost",!0);const e=await gt(),o=e.data,s=o.map((t=>({id:t.id,title:t.title,description:t.body})));t("setPosts",s)}catch(e){console.log(e),t("setPosts",[])}finally{t("isLoadingPost",!1)}}},namespaced:!0},Ht={state:()=>({isLoadingPost:!1,isLoadingPostComments:!1,post:null,comments:[]}),mutations:{setIsLoadingPost(t,e){t.isLoadingPost=e},setPost(t,e){t.post=e},setIsLoadingPostComments(t,e){t.isLoadingPostComments=e},setPostComments(t,e){t.comments=e}},actions:{async fetchPost({commit:t},e){try{t("setIsLoadingPost",!0);const o=await ft(e),{id:s,title:n,body:a}=o.data;t("setPost",{id:s,title:n,description:a})}catch(o){console.log(o),t("setPost",null)}finally{t("setIsLoadingPost",!1)}},async fetchPostComments({commit:t},e){try{t("setIsPostCommentsLoading",!0);const o=await Pt(e);t("setPostComments",o.data)}catch(o){console.log(o),t("setPostComments",[])}finally{t("setIsPostCommentsLoading",!1)}}},namespaced:!0},zt=(0,O.y$)({modules:{auth:Nt,posts:Mt,postItem:Ht}});var Gt=zt;function Qt(t,e,o,s,n,a){const l=(0,u.g2)("v-container");return(0,u.uX)(),(0,u.Wv)(l,{fluid:"",class:"viewport"},{default:(0,u.k6)((()=>[(0,u.RG)(t.$slots,"default",{},void 0,!0)])),_:3})}var Yt={name:"vue-viewport"};const Jt=(0,f.A)(Yt,[["render",Qt],["__scopeId","data-v-68050ef9"]]);var Zt=Jt,te=[Zt];const ee=(0,n.$N)({components:a,directives:l,icons:{defaultSet:"mdi",aliases:r.z,sets:{mdi:r.r}}}),oe=(0,s.Ef)(h);te.forEach((t=>{oe.component(t.name,t)})),oe.use(qt).use(Gt).use(ee).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var r=!0,u=0;u<s.length;u++)(!1&a||l>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[u])}))?s.splice(u--,1):(r=!1,a<l&&(l=a));if(r){t.splice(d--,1);var i=n();void 0!==i&&(e=i)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,l=s[0],r=s[1],u=s[2],i=0;if(l.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(u)var d=u(o)}for(e&&e(s);i<l.length;i++)a=l[i],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},s=self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(5228)}));s=o.O(s)})();
//# sourceMappingURL=app.6aa4ce7f.js.map