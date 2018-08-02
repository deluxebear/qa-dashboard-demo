import {JetView} from "webix-jet";
import {qateam} from "models/qateam";

export default class TopQAView extends JetView {
	config(){
		return {
			gravity:2,
			rows:[
				{
					type:"header", template:"Top QA"
				},
				{
					view:"scrollview",
					body:{
						view:"dataview",
						css:"qacards",
						xCount:3, yCount:3,
						type:{
							width:"auto", 
							height:85,
							template:(obj,common) => {
								return common.userPic(obj)
									+ common.money(obj)
									+ common.stars(obj)
									+ "<span class='qaname'>" + obj.name + "</span>"
									+ obj.category;
							},
							userPic:obj => {
								if (obj.photo)
									return "<image class='userphoto' src='data/photos/"
										+ obj.photo + ".jpg'>";
								else
									return "<span class='userpic'>"
										+ obj.name.charAt(0) + "</span>";
							},
							stars:obj => {
								return "<span title='"+obj.stars
								+"' class='star"+obj.stars+"'></span>";
							},
							money:obj => "<span class='money'>$" + obj.money + "</span>"
						}
					}
				}
			]
		};
	}
	init(view){
		view.queryView({ view:"dataview" }).parse(qateam);
	}
}
