!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,r)}}function r(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,n,i=function(){var t;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),this.initialState=t,this.state=this.initialState.map(function(t){return r(t)}),this.status=a.gameStatuses.idle,this.score=0}return t=[{key:"moveLeft",value:function(){var t=this;if(this.getStatus()===a.gameStatuses.playing){var e=this.state.map(function(e){return t.move(e)});JSON.stringify(this.getState())!==JSON.stringify(e)&&(this.updateGameState(e),this.addCells())}}},{key:"moveRight",value:function(){var t=this;if(this.getStatus()===a.gameStatuses.playing){var e=this.state.map(function(t){return r(t).reverse()}).map(function(e){return t.move(e).reverse()});JSON.stringify(this.getState())!==JSON.stringify(e)&&(this.updateGameState(e),this.addCells())}}},{key:"moveUp",value:function(){var t=this;if(this.getStatus()===a.gameStatuses.playing){var e=this.rotateMatrixCounteClockwise(this.getState()).map(function(e){return t.move(e)}),r=this.rotateMatrixClockwise(e);JSON.stringify(this.getState())!==JSON.stringify(r)&&(this.updateGameState(r),this.addCells())}}},{key:"moveDown",value:function(){var t=this;if(this.getStatus()===a.gameStatuses.playing){var e=this.rotateMatrixClockwise(this.getState()).map(function(e){return t.move(e)}),r=this.rotateMatrixCounteClockwise(e);JSON.stringify(this.getState())!==JSON.stringify(r)&&(this.updateGameState(r),this.addCells())}}},{key:"move",value:function(t){for(var e=[],r=0;r<t.length;){var a=t[r];if(a){for(var n=!1,i=r+1;i<t.length;i++){var s=t[i];if(s===a){e.push(2*a),this.updateGameScore(2*a),n=!0,r=i+1;break}if(s){e.push(a),n=!0,r=i;break}}!n&&(e.push(a),r++)}else r++}for(;e.length<t.length;)e.push(0);return e}},{key:"rotateMatrixClockwise",value:function(t){for(var e=t.length,r=[],a=0;a<e;a++){r.push([]);for(var n=0;n<e;n++)r[a].unshift(t[n][a])}return r}},{key:"rotateMatrixCounteClockwise",value:function(t){for(var e=t.length,r=[],a=0;a<e;a++){r.unshift([]);for(var n=0;n<e;n++)r[0].push(t[n][a])}return r}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status=a.gameStatuses.playing,this.addCells(2)}},{key:"restart",value:function(){this.status=a.gameStatuses.idle,this.resetState()}},{key:"getEmptyCells",value:function(){return this.state.flatMap(function(t,e){return t.map(function(t,r){return 0===t?[e,r]:null})}).filter(function(t){return null!==t})}},{key:"createNewTile",value:function(){var t=this.getEmptyCells();if(t.length){var r,a=function(t){if(Array.isArray(t))return t}(r=t[Math.trunc(Math.random()*t.length)])||function(t,e){var r,a,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),2!==i.length);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return i}}(r,2)||e(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=a[0],i=a[1];this.state[n][i]=.9>Math.random()?2:4}}},{key:"addCells",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e<t;e++)this.createNewTile();var r=this.getState();this.isVictory(r)?this.status=a.gameStatuses.win:this.isGameOver(r)&&(this.status=a.gameStatuses.lose)}},{key:"resetState",value:function(){this.state=this.initialState.map(function(t){return r(t)}),this.score=0}},{key:"isGameOver",value:function(t){if(this.status!==a.gameStatuses.playing)return!1;for(var e=0;e<t.length;e++)for(var r=0;r<t[e].length;r++)if(0===t[e][r]||r<t[e].length-1&&t[e][r]===t[e][r+1]||e<t.length-1&&t[e][r]===t[e+1][r])return!1;return!0}},{key:"updateGameState",value:function(t){this.state=t}},{key:"updateGameScore",value:function(t){this.score+=t}},{key:"isVictory",value:function(t){return t.flat().some(function(t){return 2048===t})}}],function(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(a.prototype,t),a}();n={idle:"idle",playing:"playing",lose:"lose",win:"win"},(a="gameStatuses")in i?Object.defineProperty(i,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[a]=n;var s=new i,o=document.querySelector(".container"),u=document.querySelector(".game-field"),l=o.querySelector(".button"),c=o.querySelector(".game-score"),f=r(u.querySelectorAll(".field-row")).map(function(t){return r(t.children)}),h={idle:o.querySelector(".message-start"),lose:o.querySelector(".message-lose"),win:o.querySelector(".message-win")};function v(t){t.forEach(function(t,e){t.forEach(function(t,r){var a=f[e][r];a.className=t?"field-cell field-cell--".concat(t):"field-cell",a.innerHTML=t||""})})}function y(){var t=s.getStatus();for(var e in h)if(Object.hasOwnProperty.call(h,e)){var r=h[e];r&&r.classList.toggle("hidden",e!==t)}}function g(t){c.innerHTML=t}l.addEventListener("click",function(){"Start"===l.textContent?(s.start(),l.textContent="Restart",l.classList.replace("start","restart")):(s.restart(),g(0),l.textContent="Start",l.classList.replace("restart","start")),v(s.getState()),y()}),document.addEventListener("keydown",function(t){if(t.preventDefault(),"playing"===s.getStatus()){var e={ArrowUp:s.moveUp,ArrowDown:s.moveDown,ArrowLeft:s.moveLeft,ArrowRight:s.moveRight}[t.key];e&&e.call(s),v(s.getState()),g(s.getScore()),y()}})}();
//# sourceMappingURL=index.29f20e13.js.map
