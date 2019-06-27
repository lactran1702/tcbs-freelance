THREE.DragControls=function(e,t,n){if(e instanceof THREE.Camera){console.warn("THREE.DragControls: Constructor now expects ( objects, camera, domElement )");var o=e;e=t,t=o}var r=new THREE.Plane,s=new THREE.Raycaster,a=new THREE.Vector2,i=new THREE.Vector3,c=new THREE.Vector3,l=null,d=null,v=this;function u(){n.addEventListener("mousemove",p,!1),n.addEventListener("mousedown",h,!1),n.addEventListener("mouseup",m,!1),n.addEventListener("mouseleave",m,!1),n.addEventListener("touchmove",f,!1),n.addEventListener("touchstart",y,!1),n.addEventListener("touchend",g,!1)}function E(){n.removeEventListener("mousemove",p,!1),n.removeEventListener("mousedown",h,!1),n.removeEventListener("mouseup",m,!1),n.removeEventListener("mouseleave",m,!1),n.removeEventListener("touchmove",f,!1),n.removeEventListener("touchstart",y,!1),n.removeEventListener("touchend",g,!1)}function p(o){o.preventDefault();var u=n.getBoundingClientRect();if(a.x=(o.clientX-u.left)/u.width*2-1,a.y=-(o.clientY-u.top)/u.height*2+1,s.setFromCamera(a,t),l&&v.enabled)return s.ray.intersectPlane(r,c)&&l.position.copy(c.sub(i)),void v.dispatchEvent({type:"drag",object:l});s.setFromCamera(a,t);var E=s.intersectObjects(e);if(E.length>0){var p=E[0].object;r.setFromNormalAndCoplanarPoint(t.getWorldDirection(r.normal),p.position),d!==p&&(v.dispatchEvent({type:"hoveron",object:p}),n.style.cursor="pointer",d=p)}else null!==d&&(v.dispatchEvent({type:"hoveroff",object:d}),n.style.cursor="auto",d=null)}function h(o){o.preventDefault(),s.setFromCamera(a,t);var d=s.intersectObjects(e);d.length>0&&(l=d[0].object,s.ray.intersectPlane(r,c)&&i.copy(c).sub(l.position),n.style.cursor="move",v.dispatchEvent({type:"dragstart",object:l}))}function m(e){e.preventDefault(),l&&(v.dispatchEvent({type:"dragend",object:l}),l=null),n.style.cursor=d?"pointer":"auto"}function f(e){e.preventDefault(),e=e.changedTouches[0];var o=n.getBoundingClientRect();if(a.x=(e.clientX-o.left)/o.width*2-1,a.y=-(e.clientY-o.top)/o.height*2+1,s.setFromCamera(a,t),l&&v.enabled)return s.ray.intersectPlane(r,c)&&l.position.copy(c.sub(i)),void v.dispatchEvent({type:"drag",object:l})}function y(o){o.preventDefault(),o=o.changedTouches[0];var d=n.getBoundingClientRect();a.x=(o.clientX-d.left)/d.width*2-1,a.y=-(o.clientY-d.top)/d.height*2+1,s.setFromCamera(a,t);var u=s.intersectObjects(e);u.length>0&&(l=u[0].object,r.setFromNormalAndCoplanarPoint(t.getWorldDirection(r.normal),l.position),s.ray.intersectPlane(r,c)&&i.copy(c).sub(l.position),n.style.cursor="move",v.dispatchEvent({type:"dragstart",object:l}))}function g(e){e.preventDefault(),l&&(v.dispatchEvent({type:"dragend",object:l}),l=null),n.style.cursor="auto"}u(),this.enabled=!0,this.activate=u,this.deactivate=E,this.dispose=function(){E()},this.setObjects=function(){console.error("THREE.DragControls: setObjects() has been removed.")},this.on=function(e,t){console.warn("THREE.DragControls: on() has been deprecated. Use addEventListener() instead."),v.addEventListener(e,t)},this.off=function(e,t){console.warn("THREE.DragControls: off() has been deprecated. Use removeEventListener() instead."),v.removeEventListener(e,t)},this.notify=function(e){console.error("THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead."),v.dispatchEvent({type:e})}},THREE.DragControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.DragControls.prototype.constructor=THREE.DragControls;