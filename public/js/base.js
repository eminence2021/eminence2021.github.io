
var pathname = window.location.pathname,
	m_index = {
	1: [
		"about/index",
		"about/culture",
		"about/history",
		"news/activity"
	],
	2: "industry",
	3: [
		"news/index",
		"about/video",
		"about/team"
	],
	4: "join",
	5: "contact"
}

var getMenuIndex = function() {
	var menuIndex = 0
	for(i in m_index) {
		if( typeof(m_index[i]) === 'string') {
			if(pathname.indexOf(m_index[i]) > -1 ){
				menuIndex = i
				break
			}
		} else {
			for(var j=0; j < m_index[i].length; j++){
				if(pathname.indexOf(m_index[i][j]) > -1 ){
					menuIndex = i
					break
				}
			}
		}
	}
	return parseInt(menuIndex)
}
var h_menu_index = getMenuIndex()

var $App = document.getElementById('app')

console.log($App.offsetHeight)
// console.log('availHeight:' + window.screen.availHeight)
// console.log('offsetHeight:' + document.body.offsetHeight)

// var getBrowserType = function() {
// 	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
// 		this.isPhone = false
// 	}
// }
