// 工具函数
/**
 * 参数类型判断
 * @param {*} param 待判定参数
 */
function typeJudge(param) {
    let type = typeof param;
    if(typeof param === "object") {
        type = Object.prototype.toString.call(param);
        type = type.replace("object ", "").replace("[", "").replace("]", "").toLowerCase();
    }
    return type;
}

/**
 * 时间格式化
 * @param {*} sourceTime 需转换时间
 * @param {*} formatStr 转换格式
 */
function format(sourceTime, formatStr) {
    let time = new Date(sourceTime);
    formatHandler = {
        yy: function() {
            return formatCompletion(time.getFullYear())
        },
        mm: function() {
            return formatCompletion(time.getMonth()+1)
        },
        dd: function() {
            return formatCompletion(time.getDate())
        },
        h: function() {
            return formatCompletion(time.getHours())
        },
        m: function() {
            return formatCompletion(time.getMinutes())
        },
        s: function() {
            return formatCompletion(time.getSeconds())
        },
        "yy-mm-dd": function() {
            return `${this.yy()}-${this.mm()}-${this.dd()}`
        },
        "yy:mm:dd": function() {
            return `${this.yy()}:${this.mm()}:${this.dd()}`
        },
        "yy/mm/dd": function() {
            return `${this.yy()}/${this.mm()}/${this.dd()}`
        },
        "h-m-s": function() {
            return `${this.h()}-${this.m()}-${this.s()}`
        },
        "h:m:s": function() {
            return `${this.h()}:${this.m()}:${this.s()}`
        },
        "h/m/s": function() {
            return `${this.h()}/${this.m()}/${this.s()}`
        },
        "yy-mm-dd-h-m-s": function() {
            return `${this["yy-mm-dd"]()}-${this["h-m-s"]()}`
        },
        "yy:mm:dd:h:m:s": function() {
            return `${this["yy-mm-dd"]()}:${this["h-m-s"]()}`
        },
        "yy/mm/dd/h/m/s": function() {
            return `${this["yy-mm-dd"]()}/${this["h-m-s"]()}`
        },
        "yy-mm-dd-h:m:s": function() {
            return `${this["yy-mm-dd"]()}-${this["h:m:s"]()}`
        }
    }
    return formatHandler[formatStr]()
}

/**
 * 格式化小于10补0
 * @param {*} val 
 */
function formatCompletion(val) {
    let ret = val;
    (parseInt(val)<10)&&(ret = `0${ret}`)
    return ret
}

module.exports = {
    typeJudge,
    format
}