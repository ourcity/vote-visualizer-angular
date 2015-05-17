// Generated by CoffeeScript 1.6.1
/*!
  # Responsive Celendar widget script
  # by w3widgets
  #
  # Author: Lukasz Kokoszkiewicz
  #
  # Copyright © w3widgets 2013 All Rights Reserved
*/
(function(){!function(a){"use strict";var b,c,d;return b=function(a,b){var c;return this.$element=a,this.options=b,this.weekDays=["sun","mon","tue","wed","thu","fri","sat","sun"],this.time=new Date,this.currentYear=this.time.getFullYear(),this.currentMonth=this.time.getMonth(),this.options.time&&(c=this.splitDateString(this.options.time),this.currentYear=c.year,this.currentMonth=c.month),this.initialDraw(),null},b.prototype={addLeadingZero:function(a){return 10>a?"0"+a:""+a},applyTransition:function(a,b){return a.css("transition",b),a.css("-ms-transition","-ms-"+b),a.css("-moz-transition","-moz-"+b),a.css("-webkit-transition","-webkit-"+b)},applyBackfaceVisibility:function(a){return a.css("backface-visibility","hidden"),a.css("-ms-backface-visibility","hidden"),a.css("-moz-backface-visibility","hidden"),a.css("-webkit-backface-visibility","hidden")},applyTransform:function(a,b){return a.css("transform",b),a.css("-ms-transform",b),a.css("-moz-transform",b),a.css("-webkit-transform",b)},splitDateString:function(a){var b,c,d,e;return d=a.split("-"),e=parseInt(d[0]),c=parseInt(d[1]-1),b=parseInt(d[2]),d={year:e,month:c,day:b}},initialDraw:function(){return this.drawDays(this.currentYear,this.currentMonth)},editDays:function(a){var b,c,d,e,f;f=[];for(b in a)d=a[b],this.options.events[b]=a[b],e=this.splitDateString(b),c=this.$element.find('[data-year="'+e.year+'"][data-month="'+(e.month+1)+'"][data-day="'+e.day+'"]').parent(".day"),c.removeClass("active"),c.find(".badge").remove(),c.find("a").removeAttr("href"),f.push(this.currentMonth===e.month||this.options.activateNonCurrentMonths?this.makeActive(c,d):void 0);return f},clearDays:function(a){var b,c,d,e,f,g;for(g=[],e=0,f=a.length;f>e;e++)b=a[e],delete this.options.events[b],d=this.splitDateString(b),c=this.$element.find('[data-year="'+d.year+'"][data-month="'+(d.month+1)+'"][data-day="'+d.day+'"]').parent(".day"),c.removeClass("active"),c.find(".badge").remove(),g.push(c.find("a").removeAttr("href"));return g},clearAll:function(){var b,c,d,e,f,g;for(this.options.events={},c=this.$element.find('[data-group="days"] .day'),g=[],d=e=0,f=c.length;f>e;d=++e)b=c[d],a(b).removeClass("active"),a(b).find(".badge").remove(),g.push(a(b).find("a").removeAttr("href"));return g},setMonth:function(a){var b;return b=this.splitDateString(a),this.currentMonth=this.drawDays(b.year,b.month)},prev:function(){return this.currentMonth-1<0?(this.currentYear=this.currentYear-1,this.currentMonth=11):this.currentMonth=this.currentMonth-1,this.drawDays(this.currentYear,this.currentMonth),this.options.onMonthChange&&this.options.onMonthChange.call(this),null},next:function(){return this.currentMonth+1>11?(this.currentYear=this.currentYear+1,this.currentMonth=0):this.currentMonth=this.currentMonth+1,this.drawDays(this.currentYear,this.currentMonth),this.options.onMonthChange&&this.options.onMonthChange.call(this),null},curr:function(){return this.currentYear=this.time.getFullYear(),this.currentMonth=this.time.getMonth(),this.drawDays(this.currentYear,this.currentMonth),this.options.onMonthChange&&this.options.onMonthChange.call(this),null},addOthers:function(b,c){var d;return"object"==typeof c&&(null!=c.number&&(d=a("<span></span>").html(c.number).addClass("badge"),null!=c.badgeClass&&d.addClass(c.badgeClass),b.append(d)),c.url&&b.find("a").attr("href",c.url)),b},makeActive:function(a,b){var c,d,e,f,g;if(b){if(b["class"])for(c=b["class"].split(" "),e=f=0,g=c.length;g>f;e=++f)d=c[e],a.addClass(d);else a.addClass("active");a=this.addOthers(a,b)}return a},getDaysInMonth:function(a,b){return new Date(a,b+1,0).getDate()},drawDay:function(b,c,d,e,f){var g,h,i,j,k,l;return j=a("<div></div>").addClass("day"),h=new Date,h.setHours(0,0,0,0),k=new Date(c,d-1,e),l=k.getTime()<h.getTime()?"past":k.getTime()===h.getTime()?"today":"future",j.addClass(this.weekDays[f%7]),j.addClass(l),i=c+"-"+this.addLeadingZero(d)+"-"+this.addLeadingZero(e),(0>=e||e>b)&&(g=new Date(c,d-1,e),e=g.getDate(),d=g.getMonth()+1,c=g.getFullYear(),j.addClass("not-current").addClass(l),this.options.activateNonCurrentMonths&&(i=c+"-"+this.addLeadingZero(d)+"-"+this.addLeadingZero(e))),j.append(a("<a>"+e+"</a>").attr("data-day",e).attr("data-month",d).attr("data-year",c)),this.options.monthChangeAnimation&&(this.applyTransform(j,"rotateY(180deg)"),this.applyBackfaceVisibility(j)),j=this.makeActive(j,this.options.events[i]),this.$element.find('[data-group="days"]').append(j)},drawDays:function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(p=this,q=new Date(b,c),d=q.getMonth(),n=q.getMonth()+1,s=q.getFullYear(),q.setDate(1),j=this.options.startFromSunday?q.getDay()+1:q.getDay()||7,l=this.getDaysInMonth(b,c),r=0,this.options.monthChangeAnimation)for(g=this.$element.find('[data-group="days"] .day'),k=t=0,u=g.length;u>t;k=++t)e=g[k],h=.01*k,this.applyTransition(a(e),"transform .5s ease "+h+"s"),this.applyTransform(a(e),"rotateY(180deg)"),this.applyBackfaceVisibility(a(e)),r=1e3*(h+.1);return f=2,this.options.allRows?m=42:(o=Math.ceil((j-(f-1)+l)/7),m=7*o),this.$element.find("[data-head-year]").html(q.getFullYear()),this.$element.find("[data-head-month]").html(this.options.translateMonths[q.getMonth()]),i=function(){var b,c;for(p.$element.find('[data-group="days"]').empty(),b=f-j,k=p.options.startFromSunday?0:1;m-j+f>b;)p.drawDay(l,s,n,b,k),b+=1,k+=1;return c=function(){var b,c;for(g=p.$element.find('[data-group="days"] .day'),k=b=0,c=g.length;c>b;k=++b)e=g[k],p.applyTransition(a(e),"transform .5s ease "+.01*k+"s"),p.applyTransform(a(e),"rotateY(0deg)");return p.options.onDayClick&&p.$element.find('[data-group="days"] .day a').click(function(){return p.options.onDayClick.call(this,p.options.events)}),p.options.onDayHover&&p.$element.find('[data-group="days"] .day a').hover(function(){return p.options.onDayHover.call(this,p.options.events)}),p.options.onActiveDayClick&&p.$element.find('[data-group="days"] .day.active a').click(function(){return p.options.onActiveDayClick.call(this,p.options.events)}),p.options.onActiveDayHover?p.$element.find('[data-group="days"] .day.active a').hover(function(){return p.options.onActiveDayHover.call(this,p.options.events)}):void 0},setTimeout(c,0)},setTimeout(i,r),d}},a.fn.responsiveCalendar=function(c,d){var e,f,g;return f=a.extend({},a.fn.responsiveCalendar.defaults,"object"==typeof c&&c),g={next:"next",prev:"prev",edit:"editDays",clear:"clearDays",clearAll:"clearAll",getYearMonth:"getYearMonth",jump:"jump",curr:"curr"},e=function(c){var d;return f=a.metadata?a.extend({},f,c.metadata()):f,c.data("calendar",d=new b(c,f)),f.onInit&&f.onInit.call(d),c.find("[data-go]").click(function(){return"prev"===a(this).data("go")&&d.prev(),"next"===a(this).data("go")?d.next():void 0})},this.each(function(){var b,f;return b=a(this),f=b.data("calendar"),f?"string"==typeof c?null!=g[c]?f[g[c]](d):f.setMonth(c):"number"==typeof c&&f.jump(Math.abs(c)+1):e(b),null})},a.fn.responsiveCalendar.defaults={translateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],events:{},time:void 0,allRows:!0,startFromSunday:!1,activateNonCurrentMonths:!1,monthChangeAnimation:!0,onInit:void 0,onDayClick:void 0,onDayHover:void 0,onActiveDayClick:void 0,onActiveDayHover:void 0,onMonthChange:void 0},d=a('[data-spy="responsive-calendar"]'),d.length?(c={},null!=d.data("translate-months")&&(c.translateMonths=d.data("translate-months").split(",")),null!=d.data("time")&&(c.time=d.data("time")),null!=d.data("all-rows")&&(c.allRows=d.data("all-rows")),null!=d.data("start-from-sunday")&&(c.startFromSunday=d.data("start-from-sunday")),null!=d.data("activate-non-current-months")&&(c.activateNonCurrentMonths=d.data("activate-non-current-months")),null!=d.data("month-change-animation")&&(c.monthChangeAnimation=d.data("month-change-animation")),d.responsiveCalendar(c)):void 0}(jQuery)}).call(this);