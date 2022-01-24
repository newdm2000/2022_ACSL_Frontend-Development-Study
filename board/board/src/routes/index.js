import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import About from '@/components/About'; //게시판 리스트 컴포넌트 호출\
import Blog from '@/components/Blog';
import People from '@/components/People';
import Teaching from '@/components/Teaching';
import Publications from '@/components/Publications';

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:HelloWorld
			,component:HelloWorld
		}
		,{
			path:'/about'
			,name:About
			,component:About
		},{
			path:'/blog'
			,name:Blog
			,component:Blog
		},{
			path:'/people'
			,name:People
			,component:People
		},{
			path:'/publications'
			,name:Publications
			,component:Publications
		},{
			path:'/teaching'
			,name:Teaching
			,component:Teaching
		}
		
	]
})