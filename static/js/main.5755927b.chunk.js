(this["webpackJsonpnoteful-app"]=this["webpackJsonpnoteful-app"]||[]).push([[0],{22:function(e,t,i){e.exports=i(46)},27:function(e,t,i){},28:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),u=i(19),o=i.n(u),s=i(7),r=(i(27),i(1)),m=i(2),l=i(4),d=i(3),c=i(5),f=i(11),p=(i(28),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Header"},n.a.createElement("h1",null,n.a.createElement(s.b,{to:"/"},"Noteful")))}}]),t}(a.Component)),b=(i(34),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(s.b,{to:"/"},n.a.createElement("button",{className:"SidebarNav",onClick:function(){return e.props.history.goBack()}},"Go Back"))}}]),t}(a.Component));b.defaultProps={history:{goBack:function(){}}};var q=b,v=(i(35),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{className:"Folder"},n.a.createElement(s.c,{to:"/folder/"+this.props.id},this.props.name,n.a.createElement("span",{className:"Folder-count"},this.props.count)))}}]),t}(a.Component)),h=(i(36),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(s.b,{to:"/add-folder"},n.a.createElement("button",{className:"AddFolder"},"Add Folder"))}}]),t}(a.Component)),O=(i(37),function(e){function t(){var e,i;Object(r.a)(this,t);for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).countFolderNotes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return e.folderId===t})).length},i}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Sidebar"},n.a.createElement(q,this.props.routeProps),n.a.createElement("h2",null,"Folders"),this.props.folders.map((function(t){return n.a.createElement(v,{id:t.id,key:t.id,name:t.name,count:e.countFolderNotes(e.props.notes,t.id)})})),n.a.createElement(h,null))}}]),t}(a.Component));O.defaultProps={folders:[]};var E=O,j=i(48),g=(i(38),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(s.b,{to:"/delete-note"},n.a.createElement("button",{className:"DeleteNote"},"Delete Note"))}}]),t}(a.Component)),N=(i(39),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(j.a)(new Date(Date.parse(this.props.modified)),"Pp");return n.a.createElement("div",{className:"Note"},n.a.createElement("h3",{className:"Note-name"},n.a.createElement(s.b,{to:"/note/"+this.props.id},this.props.name)),n.a.createElement(g,{id:this.props.id}),n.a.createElement("p",{className:"Note-modified"},"Modified ",e))}}]),t}(a.Component)),y=(i(40),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(s.b,{to:"/add-note"},n.a.createElement("button",{className:"AddNote"},"Add Note"))}}]),t}(a.Component)),k=(i(41),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"Main"},n.a.createElement("h2",null,"Notes",n.a.createElement("span",{className:"Notes-count"},this.props.notes.length)),n.a.createElement("div",{className:"Notes-wrapper"},this.props.notes.map((function(e){return n.a.createElement(N,Object.assign({},e,{key:e.id}))}))),n.a.createElement(y,null))}}]),t}(a.Component));k.defaultProps={notes:[]};var I=k,x=(i(42),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"Main"},n.a.createElement("h2",null,this.props.name),n.a.createElement("div",{className:"NoteDetails-content"},this.props.content.split(/\n \r|\n/).map((function(e,t){return n.a.createElement("p",{key:t},e)}))))}}]),t}(a.Component));x.defaultProps={content:""};var A=x,C=(i(43),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"Main"},n.a.createElement("h2",null,"Add Folder"))}}]),t}(a.Component)),D=(i(44),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"Main"},n.a.createElement("h2",null,"Add Note"))}}]),t}(a.Component)),Q=(i(45),{folders:[{id:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Important"},{id:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Super"},{id:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Spangley"}],notes:[{id:"cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Dogs",modified:"2019-01-03T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."},{id:"d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Cats",modified:"2018-08-15T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."},{id:"d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Pigs",modified:"2018-03-01T00:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum. Velit vel qui dolorem et.\n \rQui ut vel excepturi in at. Ut accusamus cumque quia sapiente ut ipsa nesciunt. Dolorum quod eligendi qui aliquid sint.\n \rAt id deserunt voluptatem et rerum. Voluptatem fuga tempora aut dignissimos est odio maiores illo. Fugiat in ad expedita voluptas voluptatum nihil."},{id:"d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Birds",modified:"2019-01-04T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis. Dolores reprehenderit et provident dolores possimus mollitia.\n \rAdipisci dolor necessitatibus nihil quod quia vel veniam. Placeat qui vero. Cum cum amet at nisi. Distinctio rerum similique explicabo atque ratione. Recusandae omnis earum est. Quas iusto nihil itaque architecto ea.\n \rPerferendis neque doloremque quibusdam accusantium ut dolor illum dolorum. Vero et similique nihil beatae. In repellendus dolores praesentium. Optio alias rerum culpa placeat maiores natus sed. Ipsa et qui cum ex maiores."},{id:"d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Bears",modified:"2018-07-12T23:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Distinctio dolor nihil ad iure quo tempore id ipsum. Doloremque sunt dicta odit. Id veritatis aut et doloremque natus.\n \rDeleniti temporibus repellendus molestias nemo. Cupiditate quae consectetur. Reiciendis corporis maxime consequatur qui quaerat cum aut. Quia officiis aut.\n \rAsperiores aut culpa voluptatem amet accusantium officia. Et et et adipisci ullam nesciunt eum magni totam. Quae repellendus suscipit animi vel laudantium sed enim nulla esse. Cupiditate quos minus laudantium autem eum quas tempore. Eos quibusdam quibusdam. Voluptatem molestiae qui accusamus blanditiis voluptates quia."},{id:"d26e0854-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Horses",modified:"2018-08-20T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Aliquid magnam ut quis quas impedit molestiae laudantium adipisci et. Officiis ut dolor rerum molestiae. Natus rerum libero aperiam. Rem aut consequatur. Quas soluta modi rerum id qui quis et voluptatem perferendis.\n \rIpsum quod sed minima rerum. Voluptatem pariatur voluptatem iure. Voluptatem perferendis qui doloremque distinctio nobis praesentium corrupti unde sed.\n \rPlaceat deleniti in praesentium aut tenetur. Recusandae debitis sint voluptates quam sed eum et quos qui. Atque esse nostrum et architecto qui perspiciatis odit aut. Aut quis corrupti ut. Maiores ratione sit dolor consectetur eius iusto illo sequi. Mollitia fugit dolores."},{id:"d26e0980-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Tigers",modified:"2018-03-03T00:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur quia consequuntur praesentium perferendis alias molestiae voluptatem qui temporibus.\n \rRerum tempore sed eum delectus excepturi odio. Ipsam omnis occaecati qui. Ut aspernatur et et est consequatur architecto laboriosam. Voluptates ullam beatae vero.\n \rAmet magnam neque temporibus totam aperiam aut dignissimos. Voluptas aut est ut quisquam totam. Dolor quibusdam nesciunt voluptatem cum sit harum in dicta. Sed nostrum et veniam id hic voluptatem inventore quo. Ipsam officiis unde dolor eum est dolores qui itaque aspernatur. Magnam aliquam qui qui."},{id:"d26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Wolves",modified:"2018-05-16T23:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et. Corrupti nam illum debitis ipsa excepturi neque rem totam. Repellendus consequatur qui itaque distinctio ut esse ut est.\n \rCulpa a impedit dignissimos. Eos nam totam delectus tempora autem nulla. Id nobis dolores. Minima autem vel provident quo temporibus.\n \rQuis modi eius voluptas fugit dolorem est reiciendis blanditiis. Labore minus qui ab dolorem eos repellat deleniti. Omnis assumenda non. Distinctio voluptas ea fugit corporis. Maiores et occaecati."},{id:"d26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Elephants",modified:"2018-04-11T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae. Enim et quibusdam harum ab velit ad occaecati. Incidunt repellendus quidem rem quia quasi veritatis reiciendis. Quas omnis nam. Quo quisquam occaecati deleniti reiciendis quo temporibus cupiditate consequatur.\n \rSit ullam aut harum sunt rerum error. Quod omnis asperiores sed illum molestiae. Doloremque perspiciatis voluptas vel. Vel esse architecto ut quibusdam laudantium ut et.\n \rRecusandae quo sed quis ratione voluptates nam dolorem consequatur id. Dolores nesciunt illo possimus impedit. Perferendis ea sequi pariatur cumque. Iste nisi perspiciatis. Cumque repellendus optio voluptas maiores nobis. Accusantium sit hic eius occaecati veritatis qui asperiores illum."},{id:"d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Lions",modified:"2018-04-26T23:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis.\n \rQuis magni quod iusto ipsum laboriosam suscipit excepturi. Dignissimos praesentium eum explicabo recusandae voluptates. Aliquid laboriosam aperiam sapiente aspernatur mollitia tempore deleniti.\n \rDolor ratione nam ut. Ad eum vel. Eos iusto modi praesentium. Nihil eos libero rerum expedita. Corrupti aut exercitationem eveniet sunt."},{id:"d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Monkeys",modified:"2018-02-05T00:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.\n \rQuos recusandae vitae earum minima quidem sapiente repellat. Veniam inventore ut. Ad quibusdam aliquam id in nihil iste qui nobis. Quidem distinctio eos explicabo.\n \rEa enim rerum deleniti quo earum. Provident fugit eum dolore sequi nobis. Architecto molestias odio et doloremque pariatur facere modi. Eum et est blanditiis delectus at est maiores vel velit. Eligendi velit dicta enim omnis."},{id:"d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Bats",modified:"2018-12-01T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet possimus non et mollitia non.\n \rNecessitatibus dolor eaque consectetur ullam quia ad vero. Dolores dolore minus consequatur itaque a corporis sit provident dicta. Ad in tempora ex consequuntur autem accusantium veritatis. Quia a odit qui autem repellendus et perspiciatis harum. Molestias iste at dicta optio vel nulla enim.\n \rAliquid recusandae optio numquam tempora totam voluptatum inventore. Minus ipsum vel officiis consectetur repudiandae unde necessitatibus in. Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid."},{id:"d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Turtles",modified:"2018-09-11T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis.\n \rTempore et vel ut maxime et reprehenderit deleniti esse officia. Laboriosam et reiciendis distinctio qui enim. Amet suscipit sit.\n \rVitae id impedit reprehenderit eveniet nesciunt et soluta. Labore aliquam sed dolores voluptatibus est omnis quo molestias aut. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo."},{id:"d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Zebras",modified:"2018-08-13T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam. Odit neque iusto cupiditate iste quam. Fuga itaque aut praesentium ullam saepe ut et vero.\n \rQuisquam doloremque molestiae. Enim rerum dolorem et velit itaque magnam laborum. Aut officiis porro.\n \rQuae eum eaque error. Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit."}]}),T=function(e){function t(){var e,i;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(u)))).state={folders:[],notes:[]},i.makeRoutes=function(){var e=i.state,t=e.notes,a=e.folders,u=[];return["/","/folder/:folderId"].map((function(e){return n.a.createElement(f.a,{exact:!0,key:e,path:e,render:function(e){var u=e.match.params.folderId,o=i.getFolderNotes(t,u);return n.a.createElement("div",{className:"Sidebar-NoteList_wrapper"},n.a.createElement(E,Object.assign({key:"Sidebar",folders:a,notes:t},e)),n.a.createElement(I,{key:"NoteList",notes:o}))}})})).map((function(e){return u.push(e)})),u.push(n.a.createElement(f.a,{key:"/note/:noteId",exact:!0,path:"/note/:noteId",render:function(e){var u=e.match.params.noteId,o=i.getNote(t,u)||{};return n.a.createElement("div",{className:"Sidebar-NoteList_wrapper"},n.a.createElement(E,{key:"Sidebar",folders:a,notes:t}),n.a.createElement(A,Object.assign({key:"NoteDetails"},o)))}})),u.push(n.a.createElement(f.a,{key:"/add-folder",path:"/add-folder",component:C}),n.a.createElement(f.a,{key:"/add-note",path:"/add-note",component:D})),u},i.getFolderNotes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter((function(e){return e.folderId===t})):e},i.getNote=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return e.id===t}))},i}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState(Q)}),500)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null),this.makeRoutes())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(s.a,{basename:"/noteful/"},n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5755927b.chunk.js.map