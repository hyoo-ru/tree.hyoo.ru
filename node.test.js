"use strict";
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || global || self || this
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $
$.$mol = $  // deprecated

;
"use strict";
Error.stackTraceLimit = Infinity;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mol.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = (owner === null || owner === void 0 ? void 0 : owner.$) || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    _a = $.$mol_ambient_ref;
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch (_a) { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 100% , 40% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    this.$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree(Object.assign({ baseUri: this.baseUri, row: this.row, col: this.col, length: this.length }, config));
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = Object.assign(Object.assign({}, json), { name, message, stack });
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = Object.assign({ time: new Date().toISOString() }, event);
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = tree.toString();
            if (process[output].isTTY) {
                str = $node.colorette[color + 'Bright'](str);
            }
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', 'blue');
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', 'green');
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', 'red');
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', 'yellow');
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', 'magenta');
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', 'cyan');
})($ || ($ = {}));
//log3.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', Object.assign({ 'vertical-align': '8%' }, style), ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.cursor = 0;
            this.masters = [];
            this._value = undefined;
            this._error = null;
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.logs = false;
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch (_a) { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.logs = false;
    $mol_atom2.cached = false;
    $mol_atom2.cached_next = undefined;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return Object.assign(Object.assign({}, descr || {}), { value: Object.assign(value, { orig }) });
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            const key_str = $.$mol_dict_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                var _a;
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = (_a = task.call(this, next)) !== null && _a !== void 0 ? _a : next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if ((name === null || name === void 0 ? void 0 : name.length) > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch (_a) { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgb(162, 90, 90),\n\t\trgb(162, 90, 90) 11px,\n\t\trgb(255,255,220) 10px,\n\t\trgb(255,255,220) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            var _a;
            let min = 0;
            try {
                for (const view of (_a = this.sub()) !== null && _a !== void 0 ? _a : []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, { minHeight: this.minimal_height() });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return Object.assign(Object.assign({}, super.field()), { scrollTop: this.scroll_top(), scrollLeft: this.scroll_left(), tabIndex: this.tabindex() });
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { scroll: (event) => this.event_scroll(event) });
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                var _a;
                (_a = this._event_scroll_timer()) === null || _a === void 0 ? void 0 : _a.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: auto;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n\tflex: none;\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page === null || page === void 0 ? void 0 : page.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                var _a;
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = (_a = $.$mol_mem_cached(() => this.sub())) !== null && _a !== void 0 ? _a : [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_span extends $.$mol_object2 {
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $mol_span.unknown = $mol_span.begin('unknown');
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//span.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends $.$mol_object2 {
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $.$mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $.$mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $.$mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                this.$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return this.$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return this.$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([])).insert(value, ...path.slice(1));
                return this.clone(sub);
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)));
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $.$mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree2_from_string')
    ], $mol_tree2, "fromString", null);
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $.$mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//tree2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = 'unknown') {
        const span = $.$mol_span.entire(uri, str);
        var root = $.$mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start, pos - error_start + 1);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $.$mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $.$mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 1, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Undexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//string.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//string.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $.$mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $.$mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $.$mol_tree2.data(json, [], span);
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $.$mol_tree2('/', '', sub, span);
        }
        if (json instanceof Date) {
            return new $.$mol_tree2('', json.toISOString(), [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = Object.assign(Object.assign({}, json), { name, message, stack });
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $.$mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($.$mol_tree2.data(key, [subsub], span));
            }
        }
        return new $.$mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));
//json.js.map
;
"use strict";
var $;
(function ($) {
    const keywords = new Set([
        '',
        '.byte',
        '.sequence',
        '.set_of',
        '.optional',
        '.list_of',
        '.any_of',
        '.except',
        '.with_delimiter',
    ]);
    function $mol_tree2_grammar_check(grammar) {
        function visit(node) {
            check: {
                if (keywords.has(node.type))
                    break check;
                if (grammar.select(node.type).kids.length)
                    break check;
                $.$mol_fail(node.error(`Wrong pattern name`));
            }
            for (const kid of node.kids) {
                visit(kid);
            }
        }
        visit(grammar);
        return grammar;
    }
    $.$mol_tree2_grammar_check = $mol_tree2_grammar_check;
})($ || ($ = {}));
//check.js.map
;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    function attrs_belt(separator) {
        return {
            '': (input) => [
                input.data(' '),
                input.data($.$mol_html_encode(input.type)),
                ...input.value ? [
                    input.data('"'),
                    input.data($.$mol_html_encode(input.value)),
                    input.data('"'),
                ] : [],
                ...input.hack({
                    '': (input) => {
                        if (!input.type)
                            return [
                                input.data(separator),
                                input.data('"'),
                                input.data($.$mol_html_encode(input.text())),
                                input.data('"'),
                            ];
                        $.$mol_fail(new SyntaxError('Wrong attribute value'));
                    },
                }),
            ],
        };
    }
    function $mol_tree2_xml_to_text(xml) {
        return xml.list(xml.hack({
            '@': (input, belt) => [],
            '--': (input, belt) => [
                xml.struct('line', [
                    input.data('<!-- '),
                    ...input.hack(belt),
                    input.data(' -->'),
                ]),
            ],
            '?': (input, belt) => [
                xml.struct('line', [
                    input.data('<?'),
                    input.kids[0].data(input.kids[0].type),
                    ...input.kids[0].hack(attrs_belt('=')),
                    input.data('?>'),
                ]),
            ],
            '!': (input, belt) => [
                xml.struct('line', [
                    input.data('<!'),
                    input.kids[0].data(input.kids[0].type),
                    ...input.kids[0].hack(attrs_belt(' ')),
                    input.data('>'),
                ]),
            ],
            '': (input, belt) => {
                if (!input.type)
                    return [
                        input.data($.$mol_html_encode(input.text())),
                    ];
                const attrs = input.select('@', '').hack(attrs_belt('='));
                const content = input.hack(belt);
                return [
                    input.struct('line', [
                        input.data(`<`),
                        input.data(input.type),
                        ...attrs,
                        ...content.length ? [
                            input.data(`>`),
                            input.struct('indent', content),
                            input.data(`</`),
                            input.data(input.type),
                            input.data(`>`),
                        ] : [
                            input.data(` />`),
                        ]
                    ]),
                ];
            },
        }));
    }
    $.$mol_tree2_xml_to_text = $mol_tree2_xml_to_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_js_to_text(js) {
        function sequence(open, separator, close) {
            return (input, belt) => [
                ...open ? [input.data(open)] : [],
                input.struct(separator && input.kids.length > 2 ? 'indent' : 'line', [].concat(...input.kids.map((kid, index) => [
                    kid.struct('line', [
                        ...kid.list([kid]).hack(belt),
                        ...(separator && index < input.kids.length - 1) ? [kid.data(separator)] : [],
                    ]),
                ]))),
                ...close ? [input.data(close)] : [],
            ];
        }
        function duplet(open, separator, close) {
            return (input, belt) => [
                ...open ? [input.data(open)] : [],
                ...input.list(input.kids.slice(0, 1)).hack(belt),
                ...(separator && input.kids.length > 1) ? [input.data(separator)] : [],
                ...input.list(input.kids.slice(1, 2)).hack(belt),
                ...close ? [input.data(close)] : [],
            ];
        }
        function triplet(open, separator12, separator23, close) {
            return (input, belt) => [
                ...open ? [input.data(open)] : [],
                ...input.list(input.kids.slice(0, 1)).hack(belt),
                ...(separator12 && input.kids.length > 1) ? [input.data(separator12)] : [],
                ...input.list(input.kids.slice(1, 2)).hack(belt),
                ...(separator23 && input.kids.length > 2) ? [input.data(separator23)] : [],
                ...input.list(input.kids.slice(2, 3)).hack(belt),
                ...close ? [input.data(close)] : [],
            ];
        }
        return js.list([js.struct('line', js.hack({
                '+': sequence('+'),
                '-': sequence('-'),
                '!': sequence('!'),
                '~': sequence('~'),
                'return': sequence('return '),
                'break': sequence('break '),
                'continue': sequence('continue '),
                'yield': sequence('yield '),
                'yield*': sequence('yield* '),
                'await': sequence('await '),
                'void': sequence('void '),
                'delete': sequence('delete '),
                'typeof': sequence('typeof '),
                'new': sequence('new '),
                '...': sequence('...'),
                '@++': sequence('', '', '++'),
                '@--': sequence('', '', '--'),
                '(in)': sequence('(', ' in ', ')'),
                '(instanceof)': sequence('(', ' instanceof ', ')'),
                '(+)': sequence('(', ' + ', ')'),
                '(-)': sequence('(', ' - ', ')'),
                '(*)': sequence('(', ' * ', ')'),
                '(/)': sequence('(', ' / ', ')'),
                '(%)': sequence('(', ' % ', ')'),
                '(**)': sequence('(', ' ** ', ')'),
                '(<)': sequence('(', ' < ', ')'),
                '(<=)': sequence('(', ' <= ', ')'),
                '(>)': sequence('(', ' > ', ')'),
                '(>=)': sequence('(', ' >= ', ')'),
                '(==)': sequence('(', ' == ', ')'),
                '(===)': sequence('(', ' === ', ')'),
                '(<<)': sequence('(', ' << ', ')'),
                '(>>)': sequence('(', ' >> ', ')'),
                '(>>>)': sequence('(', ' >>> ', ')'),
                '(&)': sequence('(', ' & ', ')'),
                '(|)': sequence('(', ' | ', ')'),
                '(^)': sequence('(', ' ^ ', ')'),
                '(&&)': sequence('(', ' && ', ')'),
                '(||)': sequence('(', ' || ', ')'),
                '(,)': sequence('(', ', ', ')'),
                '{;}': sequence('{', '; ', '}'),
                '[,]': sequence('[', ', ', ']'),
                '{,}': sequence('{', ', ', '}'),
                ':': duplet('[', ']: '),
                '()': sequence('(', '', ')'),
                '[]': sequence('[', '', ']'),
                '{}': sequence('{', '', '}'),
                'let': duplet('let ', ' = '),
                'const': duplet('const ', ' = '),
                'var': duplet('var ', ' = '),
                '=': duplet('', ' = '),
                '+=': duplet('', ' += '),
                '-=': duplet('', ' -= '),
                '*=': duplet('', ' *= '),
                '/=': duplet('', ' /= '),
                '%=': duplet('', ' %= '),
                '**=': duplet('', ' **= '),
                '<<=': duplet('', ' <<= '),
                '>>=': duplet('', ' >>= '),
                '>>>=': duplet('', ' >>>= '),
                '&=': duplet('', ' &= '),
                '|=': duplet('', ' |= '),
                '^=': duplet('', ' ^= '),
                '&&=': duplet('', ' &&= '),
                '||=': duplet('', ' ||= '),
                '=>': duplet('', ' => '),
                'async=>': duplet('async ', ' => '),
                'function': triplet('function '),
                'function*': triplet('function* '),
                'async': triplet('async function '),
                'async*': triplet('async function* '),
                'class': triplet('class '),
                'if': triplet('if', '', 'else'),
                '?:': triplet('', ' ? ', ' : '),
                '.': triplet('[', ']'),
                'get': triplet('get [', ']'),
                'set': triplet('set [', ']'),
                'static': triplet('static [', ']'),
                '/./': sequence(),
                '.global': sequence('g'),
                '.multiline': sequence('m'),
                '.ignoreCase': sequence('i'),
                '.source': (input, belt) => [
                    input.data('/'),
                    input.data(JSON.stringify(input.text()).slice(1, -1)),
                    input.data('/'),
                ],
                '``': (input, belt) => {
                    return [
                        input.data('`'),
                        ...[].concat(...input.kids.map(kid => {
                            if (kid.type) {
                                return [
                                    kid.data('${'),
                                    ...kid.list([kid]).hack(belt),
                                    kid.data('}'),
                                ];
                            }
                            else {
                                return [
                                    input.data(JSON.stringify(kid.text()).slice(1, -1)),
                                ];
                            }
                        })),
                        input.data('`'),
                    ];
                },
                '': (input, belt) => {
                    if (!input.type)
                        return [
                            input.data(JSON.stringify(input.text())),
                        ];
                    if (/^[\w$#][\w0-9$]*$/i.test(input.type))
                        return [
                            input.data(input.type),
                        ];
                    if (input.type === 'NaN' || !Number.isNaN(Number(input.type)))
                        return [
                            input.data(input.type)
                        ];
                    $.$mol_fail(new SyntaxError(`Wrong node type`));
                },
            }))]);
    }
    $.$mol_tree2_js_to_text = $mol_tree2_js_to_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_string(text) {
        let res = '';
        function visit(text, prefix, inline) {
            if (text.type === 'indent') {
                if (inline)
                    res += '\n';
                for (let kid of text.kids) {
                    visit(kid, prefix + '\t', false);
                }
                if (inline)
                    res += prefix;
            }
            else if (text.type === 'line') {
                if (!inline)
                    res += prefix;
                for (let kid of text.kids) {
                    visit(kid, prefix, true);
                }
                if (!inline)
                    res += '\n';
            }
            else {
                if (!inline)
                    res += prefix;
                res += text.text();
                if (!inline)
                    res += '\n';
            }
        }
        for (let kid of text.kids) {
            visit(kid, '', false);
        }
        return res;
    }
    $.$mol_tree2_text_to_string = $mol_tree2_text_to_string;
})($ || ($ = {}));
//string.js.map
;
"use strict";
var $;
(function ($) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    function $mol_vlq_encode(val) {
        const sign = val < 0 ? 1 : 0;
        if (sign)
            val = -val;
        let index = sign | ((val & 0b1111) << 1);
        val >>>= 4;
        let res = '';
        while (val) {
            index |= 1 << 5;
            res += alphabet[index];
            if (!val)
                break;
            index = val & 0b11111;
            val >>>= 5;
        }
        res += alphabet[index];
        return res;
    }
    $.$mol_vlq_encode = $mol_vlq_encode;
})($ || ($ = {}));
//vlq.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_sourcemap(tree) {
        let col = 1;
        let prev_span;
        let prev_index = 0;
        let prev_col = 1;
        let mappings = '';
        const file_indexes = new Map();
        const file_sources = new Map();
        function span2index(span) {
            if (file_indexes.has(span.uri))
                return file_indexes.get(span.uri);
            const index = file_indexes.size;
            file_indexes.set(span.uri, index);
            file_sources.set(span.uri, span.source);
            return index;
        }
        function next_line() {
            mappings += ';';
            col = 1;
            prev_col = 1;
        }
        function visit(text, prefix, inline) {
            var _a, _b;
            function indent() {
                col += prefix;
            }
            if (inline && text.type === 'indent')
                next_line();
            if (prev_span !== text.span || col === 1) {
                const index = span2index(text.span);
                mappings +=
                    $.$mol_vlq_encode(col - prev_col) +
                        $.$mol_vlq_encode(index - prev_index) +
                        $.$mol_vlq_encode(text.span.row - ((_a = prev_span === null || prev_span === void 0 ? void 0 : prev_span.row) !== null && _a !== void 0 ? _a : 1)) +
                        $.$mol_vlq_encode(text.span.col - ((_b = prev_span === null || prev_span === void 0 ? void 0 : prev_span.col) !== null && _b !== void 0 ? _b : 1)) +
                        ',';
                prev_col = col;
                prev_span = text.span;
                prev_index = index;
            }
            if (text.type === 'indent') {
                for (let kid of text.kids) {
                    visit(kid, prefix + 1, false);
                }
                if (inline)
                    indent();
            }
            else if (text.type === 'line') {
                if (!inline)
                    indent();
                for (let kid of text.kids) {
                    visit(kid, prefix, true);
                }
                if (!inline)
                    next_line();
            }
            else {
                if (!inline)
                    indent();
                col += text.text().length;
                if (!inline)
                    next_line();
            }
        }
        for (let kid of tree.kids) {
            visit(kid, 0, false);
        }
        const map = {
            version: 3,
            sources: [...file_sources.keys()],
            sourcesContent: [...file_sources.values()],
            mappings,
        };
        return map;
    }
    $.$mol_tree2_text_to_sourcemap = $mol_tree2_text_to_sourcemap;
})($ || ($ = {}));
//sourcemap.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_text_to_sourcemap_vis(text) {
        const code = this.$mol_tree2_text_to_string(text);
        const map = this.$mol_tree2_text_to_sourcemap(text);
        const uri = [
            'https://sokra.github.io/source-map-visualization/#base64',
            btoa(code),
            btoa(JSON.stringify(map)),
            ...map.sourcesContent.map(btoa),
        ].join(',');
        return uri;
    }
    $.$mol_tree2_text_to_sourcemap_vis = $mol_tree2_text_to_sourcemap_vis;
})($ || ($ = {}));
//vis.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_span_imprint(tree) {
        const sources = new Map();
        const res = tree.clone(tree.hack({
            '': (input, belt) => {
                if (!sources.has(input.span.uri)) {
                    sources.set(input.span.uri, tree.struct(input.span.uri, [
                        tree.data(input.span.source)
                    ]));
                }
                return [
                    input.clone([
                        input.data(input.span.toString()),
                        ...input.hack(belt),
                    ]),
                ];
            },
        }));
        return tree.clone([
            ...sources.values(),
            res,
        ]);
    }
    $.$mol_tree2_span_imprint = $mol_tree2_span_imprint;
})($ || ($ = {}));
//imprint.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_span_reuse(tree) {
        const sources = new Map();
        return tree.clone(tree.hack({
            '': (input, belt) => {
                if (input.type) {
                    sources.set(input.type, input.kids[0].text());
                    return [];
                }
                return input.hack({
                    '': (input, belt) => {
                        const kids = input.list(input.kids.slice(1)).hack(belt);
                        const [_, uri, row, col, length] = /^(.*)#(\d+):(\d+)\/(\d+)$/.exec(input.kids[0].text());
                        const span = new $.$mol_span(uri, sources.get(uri), Number(row), Number(col), Number(length));
                        return [
                            new $.$mol_tree2(input.type, input.value, kids, span),
                        ];
                    },
                });
            },
        }));
    }
    $.$mol_tree2_span_reuse = $mol_tree2_span_reuse;
})($ || ($ = {}));
//reuse.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span) {
        return $.$mol_tree2.list(Array.from(bytes, code => {
            return $.$mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));
//bin.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_leb128_encode(val) {
        const length = Math.max(1, Math.ceil(Math.log2(val) / 7));
        const bytes = new Uint8Array(length);
        for (let i = 0; i < bytes.length; ++i) {
            bytes[i] = ((val >> (7 * i)) & 0xFF) | (1 << 7);
        }
        bytes[bytes.length - 1] ^= (1 << 7);
        return bytes;
    }
    $.$mol_leb128_encode = $mol_leb128_encode;
    function $mol_leb128_decode(bytes) {
        let val = 0;
        for (let i = 0; i < bytes.length; ++i) {
            val |= (bytes[i] & ~(1 << 7)) << (7 * i);
        }
        return val;
    }
    $.$mol_leb128_decode = $mol_leb128_decode;
})($ || ($ = {}));
//leb128.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_wasm_section_types;
    (function ($mol_wasm_section_types) {
        $mol_wasm_section_types[$mol_wasm_section_types["custom"] = 0] = "custom";
        $mol_wasm_section_types[$mol_wasm_section_types["type"] = 1] = "type";
        $mol_wasm_section_types[$mol_wasm_section_types["import"] = 2] = "import";
        $mol_wasm_section_types[$mol_wasm_section_types["function"] = 3] = "function";
        $mol_wasm_section_types[$mol_wasm_section_types["table"] = 4] = "table";
        $mol_wasm_section_types[$mol_wasm_section_types["memory"] = 5] = "memory";
        $mol_wasm_section_types[$mol_wasm_section_types["global"] = 6] = "global";
        $mol_wasm_section_types[$mol_wasm_section_types["export"] = 7] = "export";
        $mol_wasm_section_types[$mol_wasm_section_types["start"] = 8] = "start";
        $mol_wasm_section_types[$mol_wasm_section_types["element"] = 9] = "element";
        $mol_wasm_section_types[$mol_wasm_section_types["code"] = 10] = "code";
        $mol_wasm_section_types[$mol_wasm_section_types["data"] = 11] = "data";
    })($mol_wasm_section_types = $.$mol_wasm_section_types || ($.$mol_wasm_section_types = {}));
})($ || ($ = {}));
//section.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_wasm_value_types;
    (function ($mol_wasm_value_types) {
        $mol_wasm_value_types[$mol_wasm_value_types["i32"] = 127] = "i32";
        $mol_wasm_value_types[$mol_wasm_value_types["i64"] = 126] = "i64";
        $mol_wasm_value_types[$mol_wasm_value_types["f32"] = 125] = "f32";
        $mol_wasm_value_types[$mol_wasm_value_types["f64"] = 124] = "f64";
    })($mol_wasm_value_types = $.$mol_wasm_value_types || ($.$mol_wasm_value_types = {}));
})($ || ($ = {}));
//value.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_wasm_import_types;
    (function ($mol_wasm_import_types) {
        $mol_wasm_import_types[$mol_wasm_import_types["func"] = 0] = "func";
        $mol_wasm_import_types[$mol_wasm_import_types["table"] = 1] = "table";
        $mol_wasm_import_types[$mol_wasm_import_types["mem"] = 2] = "mem";
        $mol_wasm_import_types[$mol_wasm_import_types["global"] = 3] = "global";
    })($mol_wasm_import_types = $.$mol_wasm_import_types || ($.$mol_wasm_import_types = {}));
})($ || ($ = {}));
//import.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_wasm_to_bin(code) {
        const bytes = (bytes, span) => $.$mol_tree2_bin_from_bytes(bytes, span).kids;
        const int = (int, span) => bytes($.$mol_leb128_encode(int), span);
        const dyn = (items, span) => [...int(items.length, span), ...items];
        const str = (str, span) => dyn($.$mol_tree2_bin_from_string(str, span).kids, span);
        const array_prolog = (input, span = input.span) => int(input.kids.length, span);
        const pending = (input) => $.$mol_fail(input.error('Pending implementation'));
        const prolog = this.$mol_tree2_from_string(`
			\\00
			\\61
			\\73
			\\6D
			\\01
			\\00
			\\00
			\\00
		`, '$mol_tree2_wasm_to_bin_prolog');
        const body = [];
        const types_mapping = new Map();
        customs: {
            const customs = code.select('custom');
            for (const custom of customs.kids) {
                const name = custom.kids[0];
                const section = [];
                section.push(...str(name.type, name.span));
                body.push(...bytes([$.$mol_wasm_section_types.custom], custom.span));
                body.push(...dyn(section, custom.span));
            }
        }
        types: {
            const types = code.select('type');
            if (types.kids.length === 0)
                break types;
            const section = [];
            for (const type of types.kids) {
                section.push(...bytes([0x60], type.span));
                const name = type.kids[0];
                types_mapping.set(name.type, types_mapping.size);
                const params = name.select('=>', '');
                section.push(...array_prolog(params));
                for (const param of params.kids) {
                    section.push(...bytes([$.$mol_wasm_value_types[param.type]], param.span));
                }
                const results = name.select('<=', '');
                section.push(...array_prolog(results));
                for (const result of results.kids) {
                    section.push(...bytes([$.$mol_wasm_value_types[result.type]], result.span));
                }
            }
            body.push(...bytes([$.$mol_wasm_section_types.type], prolog.span), ...dyn([
                ...array_prolog(types, prolog.span),
                ...section,
            ], prolog.span));
        }
        imports: {
            const imports = code.select('import');
            if (imports.kids.length === 0)
                break imports;
            const section = [];
            for (const import_ of imports.kids) {
                const path = import_.kids[0];
                const kind = path.kids[0];
                for (const name of path.type.split('.')) {
                    section.push(...str(name, path.span));
                }
                if (kind.type === 'func') {
                    const name = kind.kids[0];
                    const index = types_mapping.get(name.type);
                    if (index === undefined)
                        this.$mol_fail(name.error('Unknown type'));
                    section.push(...bytes([$.$mol_wasm_import_types.func], kind.span), ...int(index, name.span));
                }
            }
            body.push(...bytes([$.$mol_wasm_section_types.import], prolog.span), ...dyn([
                ...array_prolog(imports, prolog.span),
                ...section,
            ], prolog.span));
        }
        return code.list([
            ...prolog.kids,
            ...body,
        ]);
    }
    $.$mol_tree2_wasm_to_bin = $mol_tree2_wasm_to_bin;
})($ || ($ = {}));
//bin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree2_error extends Error {
        constructor(message, spans) {
            super(message);
            this.spans = spans;
        }
        toJSON() {
            return {
                message: this.message,
                spans: this.spans
            };
        }
    }
    $.$mol_view_tree2_error = $mol_view_tree2_error;
    class $mol_view_tree2_error_suggestions {
        constructor(suggestions) {
            this.suggestions = suggestions;
        }
        toString() {
            return this.suggestions.map(suggestion => `\`${suggestion}\``).join(', ');
        }
        toJSON() {
            return this.suggestions;
        }
    }
    $.$mol_view_tree2_error_suggestions = $mol_view_tree2_error_suggestions;
    function $mol_view_tree2_error_str(strings, ...parts) {
        const spans = [];
        for (const part of parts) {
            if (part instanceof $.$mol_span)
                spans.push(part);
            if (Array.isArray(part) && part.length > 0 && part[0] instanceof $.$mol_span)
                spans.push(...part);
        }
        return new $mol_view_tree2_error(join(strings, parts), spans);
    }
    $.$mol_view_tree2_error_str = $mol_view_tree2_error_str;
    function join(strings, objects) {
        let result = '';
        let obj_pos = 0;
        let obj_len = objects.length;
        for (const str of strings) {
            result += str;
            if (obj_pos < obj_len) {
                const obj = objects[obj_pos++];
                if (Array.isArray(obj))
                    result += obj.map(item => `\`${item}\``).join(', ');
                else
                    result += `\`${String(obj)}\``;
            }
        }
        return result;
    }
})($ || ($ = {}));
//error.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_child(tree) {
        if (tree.kids.length === 0) {
            return this.$mol_fail($.$mol_view_tree2_error_str `Required one child at ${tree.span}`);
        }
        if (tree.kids.length > 1) {
            return this.$mol_fail($.$mol_view_tree2_error_str `Should be only one child at ${tree.span}`);
        }
        return tree.kids[0];
    }
    $.$mol_view_tree2_child = $mol_view_tree2_child;
})($ || ($ = {}));
//child.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_classes(defs) {
        return defs.clone(defs.hack({
            '-': () => []
        }));
    }
    $.$mol_view_tree2_classes = $mol_view_tree2_classes;
})($ || ($ = {}));
//classes.js.map
;
"use strict";
var $;
(function ($_1) {
    class $mol_view_tree2_context extends $_1.$mol_object2 {
        constructor($, parents, locales, methods, types = true, added_nodes = new Map(), array) {
            super();
            this.parents = parents;
            this.locales = locales;
            this.methods = methods;
            this.types = types;
            this.added_nodes = added_nodes;
            this.array = array;
            this.locale_nodes = new Map();
            this.$ = $;
        }
        clone(prefixes, array) {
            return new this.$.$mol_view_tree2_context(this.$, prefixes, this.locales, this.methods, this.types, this.added_nodes, array);
        }
        parent(prefix) {
            const parents = this.parents.slice();
            parents.push(prefix);
            return this.clone(parents, this.array);
        }
        root() {
            return this.clone(this.parents.slice(0, 1));
        }
        locale_disable(array) {
            if (this.array)
                return this;
            return this.clone(this.parents, array);
        }
        get_method({ name, src, key, next }) {
            var _a, _b;
            const prev = this.added_nodes.get(name.value);
            if (!prev)
                return;
            if ((prev.key && !key) || (!prev.key && key) || (prev.next && !next) || (!prev.next && next))
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Method ${src.type} at ${src.span} is not same as ${prev.src.type} at ${prev.src.span}`);
            const current_default = src.kids.length > 0 ? src.kids[0] : undefined;
            const prev_default = prev.src.kids.length > 0 ? prev.src.kids[0] : undefined;
            if ((prev_default === null || prev_default === void 0 ? void 0 : prev_default.toString()) !== (current_default === null || current_default === void 0 ? void 0 : current_default.toString()))
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Method ${name.value} at ${(_a = current_default === null || current_default === void 0 ? void 0 : current_default.span) !== null && _a !== void 0 ? _a : name.span} already defined with another default value at ${(_b = prev_default === null || prev_default === void 0 ? void 0 : prev_default.span) !== null && _b !== void 0 ? _b : prev.name.span}`);
            return prev;
        }
        check_scope_vars({ name, key, next }) {
            var _a, _b;
            let finded_key;
            let finded_next;
            const parents = this.parents;
            for (let i = 1; i < parents.length; i++) {
                const parent = parents[i];
                if (key && key.value === ((_a = parent.key) === null || _a === void 0 ? void 0 : _a.value))
                    finded_key = parent.key;
                if (next && next.value === ((_b = parent.next) === null || _b === void 0 ? void 0 : _b.value))
                    finded_next = parent.next;
            }
            if (key && !finded_key)
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Key ${key.value} at ${key.span} not found at ${this.parents.map(parent => parent.src.span)}`);
            if (next && !finded_next)
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Next ${next.value} at ${next.span} not found at ${this.parents.map(parent => parent.src.span)}`);
            const first_method = parents.length > 1 ? parents[1] : undefined;
            if (name.value === (first_method === null || first_method === void 0 ? void 0 : first_method.name.value))
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Method ${name.value} at ${name.span} already defined at ${first_method.name.span}`);
        }
        index(owner) {
            this.added_nodes.set(owner.name.value, owner);
            const index = this.methods.length;
            return index;
        }
        method(index, method) {
            this.methods.push(...method);
        }
        locale(operator) {
            const parents = this.parents;
            const val = operator.kids.length === 1 ? operator.kids[0] : undefined;
            if (!val)
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Need a one child at ${operator.span}, use \`some @ \\localized value\``);
            if (this.array)
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Can\'t use \`@\` at ${operator.span} inside array at ${this.array.span}`);
            let key = '';
            const body = [];
            const last = parents.length > 0 ? parents[parents.length - 1] : undefined;
            for (const parent of parents) {
                body.push(parent.name);
                key += parent.name.value;
                if (parent === last)
                    break;
                body.push(parent.name.data('_'));
                key += '_';
            }
            const prev = this.locale_nodes.get(key);
            if (prev)
                return this.$.$mol_fail($_1.$mol_view_tree2_error_str `Locale key \`${key}\` at ${operator.span} conflicts with same at ${prev.span}`);
            this.locale_nodes.set(key, val);
            this.locales[key] = val.value;
            return operator.struct('line', body);
        }
    }
    $_1.$mol_view_tree2_context = $mol_view_tree2_context;
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_class_super(klass) {
        if (!class_regex.test(klass.type))
            return this.$mol_fail(err `Wrong class name at ${klass.span}`);
        const superclass = klass.kids.length === 1 ? klass.kids[0] : undefined;
        if (!superclass)
            return this.$mol_fail(err `No subclass at ${klass.span}`);
        if (!class_regex.test(superclass.type))
            return this.$mol_fail(err `Wrong subclass name at ${superclass.span}`);
        return superclass;
    }
    $.$mol_view_tree2_class_super = $mol_view_tree2_class_super;
    const class_regex = /^\$\w+$/;
})($ || ($ = {}));
//super.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_class_props(klass) {
        const props = this.$mol_view_tree2_class_super(klass);
        const props_inner = [];
        const props_root = props.hack({
            '<=': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
            '<=>': (operator, belt) => {
                const prop = this.$mol_view_tree2_child(operator);
                const defs = prop.hack(belt);
                if (defs.length)
                    props_inner.push(prop.clone(defs));
                return [operator.clone([prop.clone([])])];
            },
        });
        return [...props_root, ...props_inner];
    }
    $.$mol_view_tree2_class_props = $mol_view_tree2_class_props;
})($ || ($ = {}));
//props.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_prop_split(src) {
        const prop_name = src.type;
        let key_pos = prop_name.indexOf('!');
        let next_pos = prop_name.indexOf('?');
        if (next_pos === -1)
            next_pos = prop_name.length;
        if (key_pos === -1)
            key_pos = next_pos;
        if (key_pos > next_pos)
            return this.$mol_fail(err `Index argument must be before next argument at ${src.span}, use ${example1}`);
        const name = prop_name.substring(0, key_pos);
        const key = key_pos === next_pos ? '' : prop_name.substring(key_pos + 1, next_pos);
        const next = prop_name.substring(next_pos + 1);
        if ((key && !regular_regex.test(key))
            || (next && !regular_regex.test(name)))
            return this.$mol_fail(err `Only regular chars and digits allowed at ${src.span}, use ${example2}`);
        return {
            src,
            name: $.$mol_tree2.data(name, [], src.span.slice(0, name.length)),
            key: key ? $.$mol_tree2.data(key, [], src.span.slice(key_pos, key_pos + key.length)) : undefined,
            next: next ? $.$mol_tree2.data(next, [], src.span.slice(next_pos, next_pos + next.length)) : undefined
        };
    }
    $.$mol_view_tree2_prop_split = $mol_view_tree2_prop_split;
    const regular_regex = /^\w+$/;
    const example1 = new $.$mol_view_tree2_error_suggestions([
        'having!key?next <= owner!key?next'
    ]);
    const example2 = new $.$mol_view_tree2_error_suggestions([
        'having!key',
        'having!key?next',
        'having',
    ]);
})($ || ($ = {}));
//split.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_prop_name(prop) {
        return this.$mol_view_tree2_prop_split(prop).name.value;
    }
    $.$mol_view_tree2_prop_name = $mol_view_tree2_prop_name;
    function $mol_view_tree2_prop_key(prop) {
        var _a;
        return (_a = this.$mol_view_tree2_prop_split(prop).key) === null || _a === void 0 ? void 0 : _a.value;
    }
    $.$mol_view_tree2_prop_key = $mol_view_tree2_prop_key;
    function $mol_view_tree2_prop_next(prop) {
        var _a;
        return (_a = this.$mol_view_tree2_prop_split(prop).next) === null || _a === void 0 ? void 0 : _a.value;
    }
    $.$mol_view_tree2_prop_next = $mol_view_tree2_prop_next;
})($ || ($ = {}));
//prop.js.map
;
"use strict";
var $;
(function ($) {
    const regular_regex = /^\w+$/;
    function $mol_view_tree2_prop_quote(name) {
        if (regular_regex.test(name.value))
            return name;
        return name.data(JSON.stringify(name.value));
    }
    $.$mol_view_tree2_prop_quote = $mol_view_tree2_prop_quote;
})($ || ($ = {}));
//quote.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_bind_both_parts(operator) {
        if (operator.type !== '<=>')
            return this.$mol_fail(err `Need an \`<=>\` at ${operator.span}, use ${example}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}, use ${example}`);
        if (owner.kids.length > 1)
            return this.$mol_fail(err `Only one sub allowed at ${owner.span}, use ${example}`);
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        if (!owner_parts.next)
            return this.$mol_fail(err `Next argument required at ${owner.span}, use ${example}`);
        const default_value = owner.kids.length === 1 ? owner.kids[0] : undefined;
        return {
            owner_parts,
            default_value
        };
    }
    $.$mol_view_tree2_bind_both_parts = $mol_view_tree2_bind_both_parts;
    const example = new $.$mol_view_tree2_error_suggestions([
        'having?next <=> owner?next',
        'having?next <=> owner?next \\default',
        'having!key?next <=> owner!key?next',
    ]);
})($ || ($ = {}));
//both_parts.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_bind_left_parts(operator, having_parts) {
        if (operator.type !== '<=')
            return this.$mol_fail(err `Need an \`<=\` at ${operator.span}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}`);
        if (owner.kids.length > 1)
            return this.$mol_fail(err `Owner at ${owner.span} can't have more that 1 value, given ${owner.kids.map(node => node.span)}`);
        const default_value = owner.kids.length === 1 ? owner.kids[0] : undefined;
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        const owner_call_parts = owner_parts.next
            ? Object.assign(Object.assign({}, owner_parts), { next: undefined }) : owner_parts;
        return {
            default_value,
            owner_call_parts,
            owner_parts
        };
    }
    $.$mol_view_tree2_bind_left_parts = $mol_view_tree2_bind_left_parts;
})($ || ($ = {}));
//left_parts.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_bind_right_parts(operator, having_parts, factory) {
        if (operator.type !== '=>')
            return this.$mol_fail(err `Need an \`=>\` at ${operator.span}, use ${example}`);
        const owner = operator.kids.length === 1 ? operator.kids[0] : undefined;
        if (!owner)
            return this.$mol_fail(err `Need an owner part at ${operator.span}, use ${example}`);
        if (owner.kids.length !== 0)
            return this.$mol_fail(err `Owner at ${owner.span} can\'t have values at ${owner.kids.map(node => node.span)}, use ${example}`);
        const owner_parts = this.$mol_view_tree2_prop_split(owner);
        const owner_key = owner_parts.key;
        const having_key = having_parts.key;
        if (owner_key && having_key && having_key.data !== owner_key.data)
            return this.$mol_fail(err `Key ${owner_key.value} at ${owner_key.span} must be equal to key ${having_key.span} at ${having_key.span}, ${example}`);
        if (!owner_key && having_key)
            return this.$mol_fail(err `Name ${owner_parts.name.value} at ${owner_parts.name.span} need a key like ${having_key.value} at ${having_key.span}, ${example}`);
        if (owner_key && (!having_key && !factory.key))
            return this.$mol_fail(err `Can't use key ${owner_key.value} at ${owner_key.span} without key at ${having_parts.name.span} or at ${factory.src.span}, ${example}`);
        const owner_next = owner_parts.next;
        const having_next = having_parts.next;
        if (owner_next && !having_next)
            return this.$mol_fail(err `Can't use next ${owner_next.value} at ${owner_next.span} without next at ${having_parts.name.span}, ${example}`);
        return {
            owner_parts
        };
    }
    $.$mol_view_tree2_bind_right_parts = $mol_view_tree2_bind_right_parts;
    const example = new $.$mol_view_tree2_error_suggestions([
        'having => owner',
        'having?next => owner?next',
        'having!key => owner!key',
        'having!key?next => owner!key?next'
    ]);
})($ || ($ = {}));
//right_parts.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_both(operator, context) {
        const { owner_parts, default_value } = this.$mol_view_tree2_bind_both_parts(operator);
        context.check_scope_vars(owner_parts);
        if (default_value && !context.get_method(owner_parts)) {
            this.$mol_view_tree2_ts_method_body(owner_parts, context.root());
        }
        return [operator.struct('line', [
                owner_parts.name.data('this.'),
                this.$mol_view_tree2_ts_function_call(owner_parts),
            ])];
    }
    $.$mol_view_tree2_ts_bind_both = $mol_view_tree2_ts_bind_both;
    const example = new $.$mol_view_tree2_error_suggestions([
        'having?next <=> owner?next',
        'having?next <=> owner?next \\default',
        'having!key?next <=> owner!key?next',
    ]);
})($ || ($ = {}));
//both.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_left(operator, context, having_parts) {
        const { default_value, owner_parts, owner_call_parts } = this.$mol_view_tree2_bind_left_parts(operator, having_parts);
        context.check_scope_vars(owner_call_parts);
        if (default_value && !context.get_method(owner_parts)) {
            this.$mol_view_tree2_ts_method_body(owner_parts, context.root());
        }
        return [operator.struct('line', [
                owner_parts.name.data('this.'),
                this.$mol_view_tree2_ts_function_call(owner_call_parts),
            ])];
    }
    $.$mol_view_tree2_ts_bind_left = $mol_view_tree2_ts_bind_left;
})($ || ($ = {}));
//left.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_bind_right(operator, having_parts, factory, context) {
        const { owner_parts } = this.$mol_view_tree2_bind_right_parts(operator, having_parts, factory);
        const prev = context.get_method(owner_parts);
        if (prev)
            return this.$mol_fail(err `Method ${owner_parts.name.value} at ${owner_parts.name.span} already defined at ${prev.src.span}, ${example}`);
        const index = context.index(owner_parts);
        const body = operator.struct('indent', [
            operator.struct('line', [
                owner_parts.name.data('return this.'),
                this.$mol_view_tree2_ts_function_call(factory),
                owner_parts.name.data('.'),
                this.$mol_view_tree2_ts_function_call(having_parts),
            ])
        ]);
        const method = [
            ...this.$mol_view_tree2_ts_comment_doc(owner_parts.src),
            operator.struct('line', [
                owner_parts.name,
                $.$mol_view_tree2_ts_function_declaration(owner_parts, context.types),
                owner_parts.name.data(' {'),
            ]),
            body,
            owner_parts.name.data('}'),
        ];
        context.method(index, method);
    }
    $.$mol_view_tree2_ts_bind_right = $mol_view_tree2_ts_bind_right;
    const example = new $.$mol_view_tree2_error_suggestions([
        'having => owner',
        'having?next => owner?next',
        'having!key => owner!key',
        'having!key?next => owner!key?next'
    ]);
})($ || ($ = {}));
//right.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextDecoder = (_a = globalThis.TextDecoder) !== null && _a !== void 0 ? _a : $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextEncoder = (_a = globalThis.TextEncoder) !== null && _a !== void 0 ? _a : $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $.$mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $.$mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    file.buffer(undefined, $.$mol_mem_force_update);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', (error) => {
                this.stat(error, $.$mol_mem_force_fail);
            });
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, force) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            try {
                stat = next !== null && next !== void 0 ? next : stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $.$mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure(next) {
            const path = this.path();
            try {
                if (next)
                    $node.fs.mkdirSync(path);
                else
                    $node.fs.unlinkSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
            return true;
        }
        buffer(next, force) {
            const path = this.path();
            if (next === undefined) {
                this.stat();
                try {
                    const prev = $.$mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$.$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        const first_char = val.type && val.type[0];
        if (first_char === '/')
            return 'list';
        if (first_char === '$')
            return 'object';
        if (Number(val.type).toString() == val.type)
            return 'number';
        return this.$mol_fail(err `Unknown value type ${val.type} at ${val.span}`);
    }
    $.$mol_view_tree2_value_type = $mol_view_tree2_value_type;
})($ || ($ = {}));
//type.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_value(value) {
        const type = value.type;
        const kids = value.kids;
        if (type === '') {
            if (kids.length === 0)
                return value.data(JSON.stringify(value.value));
            return value.data(JSON.stringify(kids.map(node => node.value).join('\n')));
        }
        if (kids.length !== 0)
            return this.$mol_fail(err `Childs not allowed at ${value.span}, use ${example}`);
        if (type === 'false' || type === 'true')
            return value.data(type);
        if (type === 'null')
            return value.data(type);
        if (Number(type).toString() === type)
            return value.data(type);
        return this.$mol_fail(err `Value ${value.value} not allowed at ${value.span}, use ${example}`);
    }
    $.$mol_view_tree2_value = $mol_view_tree2_value;
    const example = new $.$mol_view_tree2_error_suggestions([
        'fales',
        'true',
        '123',
        'null',
        '\\some'
    ]);
})($ || ($ = {}));
//value.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_class(klass, locales) {
        const superclass = this.$mol_view_tree2_class_super(klass);
        const body = [];
        const class_parts = this.$mol_view_tree2_prop_split(klass);
        const context = new $.$mol_view_tree2_context(this, [class_parts], locales, body);
        const props = this.$mol_view_tree2_class_props(klass);
        for (const having of props) {
            const having_parts = this.$mol_view_tree2_prop_split(having);
            if (context.get_method(having_parts))
                continue;
            this.$mol_view_tree2_ts_method_body(having_parts, context);
        }
        return klass.struct('indent', [
            klass.struct('line', [
                klass.data('export class '),
                klass.data(klass.type),
                klass.data(' extends '),
                superclass.data(superclass.type),
                klass.data(' {'),
            ]),
            klass.struct('indent', body),
            klass.data('}'),
            klass.data(''),
        ]);
    }
    $.$mol_view_tree2_ts_class = $mol_view_tree2_ts_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_comment(item) {
        return item.kids.map(chunk => item.data('// ' + chunk.type));
    }
    $.$mol_view_tree2_ts_comment = $mol_view_tree2_ts_comment;
    function $mol_view_tree2_ts_comment_doc(item) {
        const chunks = item.toString().trim().split('\n');
        return [
            item.data(''),
            item.data('/**'),
            item.data(' * ```tree'),
            ...chunks.map(chunk => item.data(' * ' + chunk)),
            item.data(' * ```'),
            item.data(' */'),
        ];
    }
    $.$mol_view_tree2_ts_comment_doc = $mol_view_tree2_ts_comment_doc;
})($ || ($ = {}));
//comment.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_module(tree2_module, locales) {
        tree2_module = $.$mol_view_tree2_classes(tree2_module);
        const classes = [
            tree2_module.data('namespace $ {')
        ];
        let has_data = false;
        for (const item of tree2_module.kids) {
            const class_node = this.$mol_view_tree2_ts_class(item, locales);
            classes.push(class_node);
            has_data = true;
        }
        classes.push(tree2_module.data('}'), tree2_module.data(''));
        return tree2_module.list(has_data ? classes : []);
    }
    $.$mol_view_tree2_ts_module = $mol_view_tree2_ts_module;
})($ || ($ = {}));
//module.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_compile(tree2_module) {
        const locales = {};
        const ts_module = this.$mol_view_tree2_ts_module(tree2_module, locales);
        const script = this.$mol_tree2_text_to_string(ts_module);
        return { script, locales };
    }
    $.$mol_view_tree2_ts_compile = $mol_view_tree2_ts_compile;
})($ || ($ = {}));
//compile.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_function_declaration({ name, key, next }, types = false) {
        const sub = [name.data('(')];
        if (key)
            sub.push(key);
        if (types && key)
            sub.push(key.data(': any'));
        if (key && next)
            sub.push(name.data(', '));
        if (next)
            sub.push(next);
        if (types && next)
            sub.push(next.data('?: any'));
        sub.push(name.data(')'));
        return name.struct('line', sub);
    }
    $.$mol_view_tree2_ts_function_declaration = $mol_view_tree2_ts_function_declaration;
    function $mol_view_tree2_ts_function_call({ name, key, next }) {
        const sub = [
            name,
            name.data('('),
        ];
        if (key)
            sub.push(key);
        if (next && key)
            sub.push(key.data(', '));
        if (next)
            sub.push(next);
        sub.push(name.data(')'));
        return name.struct('line', sub);
    }
    $.$mol_view_tree2_ts_function_call = $mol_view_tree2_ts_function_call;
})($ || ($ = {}));
//function.js.map
;
"use strict";
var $;
(function ($_1) {
    const err = $_1.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_spread(spread_prop) {
        const spread_prop_parts = this.$mol_view_tree2_prop_split(spread_prop);
        return spread_prop.struct('line', [
            spread_prop.data('...this.'),
            this.$mol_view_tree2_ts_function_call(spread_prop_parts)
        ]);
    }
    $_1.$mol_view_tree2_ts_spread = $mol_view_tree2_ts_spread;
    class $mol_view_tree2_ts_spread_factory extends $_1.$mol_object2 {
        constructor($, prop_parts) {
            super();
            this.prop_parts = prop_parts;
            this.super_spread = undefined;
            this.$ = $;
        }
        create(prop) {
            const spread_prop = prop.kids.length === 1 ? prop.kids[0] : undefined;
            if (spread_prop)
                return this.$.$mol_view_tree2_ts_spread(spread_prop);
            const super_spread = this.super_spread;
            if (super_spread)
                return this.$.$mol_fail(err `Only one \`^\` operator allowed at ${prop.span}, first was at ${super_spread.span}`);
            if (!this.prop_parts)
                return this.$.$mol_fail(err `Operator \`^\` not allowed at ${prop.span}`);
            this.super_spread = prop.struct('line', [
                prop.data('...super.'),
                this.$.$mol_view_tree2_ts_function_call(this.prop_parts)
            ]);
            return this.super_spread;
        }
    }
    $_1.$mol_view_tree2_ts_spread_factory = $mol_view_tree2_ts_spread_factory;
})($ || ($ = {}));
//spread.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_locale(operator, context) {
        return [operator.struct('line', [
                operator.data('this.$.$mol_locale.text( \''),
                context.locale(operator),
                operator.data('\' )'),
            ])];
    }
    $.$mol_view_tree2_ts_locale = $mol_view_tree2_ts_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_value(src) {
        const converted = this.$mol_view_tree2_value(src);
        if (src.type === 'null')
            return [converted.struct('line', [
                    converted.data(converted.value),
                    converted.data(' as any'),
                ])];
        return [converted];
    }
    $.$mol_view_tree2_ts_value = $mol_view_tree2_ts_value;
})($ || ($ = {}));
//value.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_dictionary(dictionary, dictionary_context, super_method) {
        if (dictionary.type !== '*')
            return this.$mol_fail(err `Need a \`*\` operator at ${dictionary.span}`);
        const sub = [];
        const kids = dictionary.kids;
        const last = kids.length > 0 ? kids[kids.length - 1] : undefined;
        const spread_factory = new this.$mol_view_tree2_ts_spread_factory(this, super_method);
        for (const opt of kids) {
            let value;
            const info = this.$mol_view_tree2_prop_split(opt);
            if (opt.type === '^') {
                const child_sub = [spread_factory.create(opt)];
                if (opt !== last)
                    child_sub.push(opt.data(','));
                sub.push(opt.struct('line', child_sub));
                continue;
            }
            const context = dictionary_context.parent(info);
            const operator = opt.kids.length > 0 ? opt.kids[0] : undefined;
            if (!operator)
                return this.$mol_fail(err `Need an operator at ${opt.span}`);
            const type = operator.type;
            if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(operator, context);
            else if (type === '*')
                value = this.$mol_view_tree2_ts_dictionary(operator, context);
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(operator, context);
            else if (type === '<=>')
                value = this.$mol_view_tree2_ts_bind_both(operator, context);
            else if (type === '@')
                value = this.$mol_view_tree2_ts_locale(operator, context);
            else
                value = this.$mol_view_tree2_ts_value(operator);
            const child_sub = [
                $.$mol_view_tree2_prop_quote(info.name),
                info.name.data(': '),
            ];
            if (info.next || info.key)
                child_sub.push($.$mol_view_tree2_ts_function_declaration(info, context.types), opt.data(' => '));
            child_sub.push(...value);
            if (opt !== last)
                child_sub.push(opt.data(','));
            sub.push(opt.struct('line', child_sub));
        }
        return [
            dictionary.data('{'),
            dictionary.struct('indent', sub),
            dictionary.data('}'),
        ];
    }
    $.$mol_view_tree2_ts_dictionary = $mol_view_tree2_ts_dictionary;
})($ || ($ = {}));
//dictionary.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_factory(klass, factory, factory_context) {
        if (klass.type[0] !== '$')
            return this.$mol_fail(err `Need a valid class name at ${klass.span}, use ${example}`);
        const obj_node = klass.data('obj');
        const body = [];
        let last_array;
        let constructor_args;
        for (const child of klass.kids) {
            const child_parts = this.$mol_view_tree2_prop_split(child);
            const context = factory_context.parent(child_parts);
            if (child.type[0] === '/') {
                if (last_array)
                    return this.$mol_fail(err `Only one \`/\` operator allowed in factory at ${child.span}, prev at ${last_array.span}`);
                last_array = child;
                constructor_args = this.$mol_view_tree2_ts_array_body(child, context);
                continue;
            }
            const operator = this.$mol_view_tree2_child(child);
            const type = operator.type;
            let value;
            if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(operator, context, child_parts);
            else if (type === '<=>')
                value = this.$mol_view_tree2_ts_bind_both(operator, context);
            else if (type === '=>') {
                this.$mol_view_tree2_ts_bind_right(operator, child_parts, factory, factory_context);
                continue;
            }
            else if (type === '@')
                value = this.$mol_view_tree2_ts_locale(operator, context);
            else if (type === '*')
                value = [child.struct('line', [
                        child.data('('),
                        ...this.$mol_view_tree2_ts_dictionary(operator, context),
                        child.data(')'),
                    ])];
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(operator, context);
            else
                value = this.$mol_view_tree2_ts_value(operator);
            const call = child.struct('line', [
                obj_node,
                child.data('.'),
                child_parts.name,
                child_parts.name.data(' = '),
                $.$mol_view_tree2_ts_function_declaration(child_parts, context.types),
                child.data(' => '),
                ...value,
            ]);
            body.push(call);
        }
        const init = [
            klass.data('const '),
            obj_node,
            klass.data(' = new this.$.'),
            klass.data(klass.type),
        ];
        if (constructor_args)
            init.push(klass.data('('), constructor_args, klass.data(')'));
        else
            init.push(klass.data('()'));
        const sub = [
            klass.struct('line', init),
            klass.data(''),
        ];
        if (body.length > 0)
            sub.push(...body);
        if (body.length > 0 && !constructor_args)
            sub.push(klass.data(''));
        sub.push(obj_node.struct('line', [
            klass.data('return '),
            obj_node
        ]));
        return klass.struct('indent', sub);
    }
    $.$mol_view_tree2_ts_factory = $mol_view_tree2_ts_factory;
    const example = new $.$mol_view_tree2_error_suggestions([
        'Factory_name!key?next $' + 'my_class'
    ]);
})($ || ($ = {}));
//factory.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_to_text(tree2_module) {
        const locales = {};
        const ts_module = this.$mol_view_tree2_ts_module(tree2_module, locales);
        return ts_module;
    }
    $.$mol_view_tree2_to_text = $mol_view_tree2_to_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        constructor(source, flags = '', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        get parse() {
            const self = this;
            return function* parsing(str, from = 0) {
                while (from < str.length) {
                    self.lastIndex = from;
                    const res = self.exec(str);
                    if (res === null) {
                        yield { 0: str.substring(from) };
                        return null;
                    }
                    if (from === self.lastIndex) {
                        $.$mol_fail(new Error('Captured empty substring'));
                    }
                    const found = {};
                    const skipped = str.slice(from, self.lastIndex - res[0].length);
                    if (skipped)
                        yield { 0: skipped };
                    from = self.lastIndex;
                    for (let i = 0; i < self.groups.length; ++i) {
                        const group = self.groups[i];
                        found[group] = found[group] || res[i + 1] || '';
                    }
                    yield found;
                }
            };
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            return new $mol_regexp(`(?:${regexp.source}){${min},${upper}}?`, regexp.flags, regexp.groups);
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            return new $mol_regexp(`(?:${regexp.source}){${min},${upper}}`, regexp.flags, regexp.groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'string') {
                return new $mol_regexp(source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            else if (source instanceof RegExp) {
                if (source instanceof $mol_regexp)
                    return source;
                const test = new $mol_regexp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                return new $mol_regexp(source.source, source.flags, groups);
            }
            if (Array.isArray(source)) {
                const sources = [];
                const groups = [];
                let index = 0;
                for (const item of source) {
                    const regexp = $mol_regexp.from(item);
                    sources.push(regexp.source);
                    for (let group of regexp.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                return new $mol_regexp(sources.join(''), flags, groups);
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                return new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
            }
        }
        static char_code(code) {
            return new $mol_regexp(`\\u${code.toString(16).padStart(4, '0')}`);
        }
        static byte_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
    }
    $mol_regexp.byte = $mol_regexp.from(/[\s\S]/);
    $mol_regexp.digit = $mol_regexp.from(/\d/);
    $mol_regexp.letter = $mol_regexp.from(/\w/);
    $mol_regexp.space = $mol_regexp.from(/\s/);
    $mol_regexp.tab = $mol_regexp.from(/\t/);
    $mol_regexp.slash_back = $mol_regexp.from(/\\/);
    $mol_regexp.word_break = $mol_regexp.from(/\b/);
    $mol_regexp.line_end = $mol_regexp.from(/\r?\n/);
    $mol_regexp.begin = $mol_regexp.from(/^/);
    $mol_regexp.end = $mol_regexp.from(/$/);
    $mol_regexp.or = $mol_regexp.from(/|/);
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));
//defined.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//guid.js.map
;
"use strict";
//enforce.js.map
;
"use strict";
var $;
(function ($) {
    const { begin, end, letter, optional, repeat_greedy } = $.$mol_regexp;
    const prop_signature = $.$mol_regexp.from([
        begin,
        { name: repeat_greedy(letter, 1) },
        { key: optional(['!', repeat_greedy(letter, 0)]) },
        { next: optional(['?', repeat_greedy(letter, 0)]) },
        end,
    ]);
    function name_of(prop) {
        return prop_signature.parse(prop.type).next().value.name;
    }
    function params_of(prop, ...val) {
        const { key, next } = prop_signature.parse(prop.type).next().value;
        return prop.struct('line', [
            prop.data('( '),
            ...key ? [
                prop.data(key.slice(1) || 'key'),
                prop.data(': any, '),
            ] : [],
            ...next ? [
                prop.data(next.slice(1) || 'next'),
                prop.data('?: '),
                ...val,
                prop.data(' '),
            ] : [],
            prop.data(')'),
        ]);
    }
    function $mol_view_tree2_to_dts(descr) {
        descr = $.$mol_view_tree2_classes(descr);
        const types = [];
        for (const klass of descr.kids) {
            const parent = klass.kids[0];
            const props = this.$mol_view_tree2_class_props(klass);
            const aliases = [];
            types.push(klass.struct('line', [
                klass.data('export class '),
                klass.data(klass.type),
                parent.data(' extends '),
                parent.data(parent.type),
                klass.data(' {'),
            ]), ...props.map(prop => {
                const { name, key, next } = prop_signature.parse(prop.type).next().value;
                const bind_res = (bind) => [
                    bind.data('ReturnType< '),
                    klass.data(klass.type),
                    bind.data('["'),
                    bind.kids[0].data(name_of(bind.kids[0])),
                    bind.data('"] >'),
                ];
                const val = prop.hack({
                    'null': (val, belt) => [val.data('any')],
                    'true': (val, belt) => [val.data('boolean')],
                    'false': (val, belt) => [val.data('boolean')],
                    '@': (locale, belt) => locale.hack(belt),
                    '<=>': bind_res,
                    '<=': bind_res,
                    '=>': bind_res,
                    '*': (obj, belt) => [
                        ...obj.select('^').kids.map(inherit => inherit.struct('line', [
                            inherit.data('ReturnType< '),
                            parent.data(parent.type),
                            inherit.data('["'),
                            prop.data(name),
                            inherit.data('"] > & '),
                        ])),
                        obj.data('({ '),
                        obj.struct('indent', obj.kids.map(field => {
                            if (field.type === '^')
                                return null;
                            return field.struct('line', [
                                field.data(field.type),
                                field.data(': '),
                                ...field.hack(belt),
                                field.data(','),
                            ]);
                        }).filter(this.$mol_guard_defined)),
                        obj.data('})'),
                    ],
                    '': (input, belt) => {
                        if (input.type[0] === '/')
                            return [
                                input.data('readonly '),
                                input.data(input.type.slice(1)),
                                input.data('[]'),
                            ];
                        if (input.type[0] === '$') {
                            const first = input.kids[0];
                            if (first && first.type === '/') {
                                types.push(first.data(`type ${input.type}__${this.$mol_guid()} = $mol_type_enforce< `), first.struct('indent', [
                                    first.struct('line', [
                                        ...input.hack(belt),
                                        input.data(','),
                                    ]),
                                    input.data(`Parameters< ${input.type} >`),
                                ]), input.data('>'));
                            }
                            else {
                                for (const over of input.kids) {
                                    const name = name_of(over);
                                    const bind = over.kids[0];
                                    if (bind.type === '=>') {
                                        const pr = bind.kids[0];
                                        const res = [
                                            bind.data('ReturnType< '),
                                            klass.data(input.type),
                                            bind.data('["'),
                                            over.data(name),
                                            bind.data('"] >'),
                                        ];
                                        aliases.push(pr.struct('indent', [
                                            pr.struct('line', [
                                                pr.data(name_of(pr)),
                                                bind.data(': '),
                                                params_of(pr, ...res),
                                                bind.data('=> '),
                                                ...res,
                                            ]),
                                        ]));
                                    }
                                    types.push(over.data(`type ${input.type}__${name}_${this.$mol_guid()} = $mol_type_enforce< `), over.struct('indent', [
                                        over.struct('line', [
                                            ...over.hack(belt),
                                            input.data(','),
                                        ]),
                                        over.struct('line', [
                                            input.data('ReturnType< '),
                                            input.data(input.type),
                                            input.data('["'),
                                            over.data(name),
                                            input.data('"] >'),
                                        ]),
                                    ]), input.data('>'));
                                }
                            }
                            return [
                                input.data(input.type),
                            ];
                        }
                        if (Number(input.type).toString() === input.type)
                            return [
                                input.data('number'),
                            ];
                        return [
                            input.data(input.type || 'string'),
                        ];
                    },
                });
                return prop.struct('indent', [
                    prop.struct('line', [
                        prop.data(name),
                        params_of(prop, ...val),
                        prop.data(': '),
                        ...val,
                    ])
                ]);
            }), ...aliases, klass.data('}'), descr.data(''));
        }
        return descr.list([
            descr.data('declare namespace $ {'),
            descr.data(''),
            descr.struct('indent', types),
            descr.data('}'),
        ]);
    }
    $.$mol_view_tree2_to_dts = $mol_view_tree2_to_dts;
})($ || ($ = {}));
//dts.js.map
;
"use strict";
var $;
(function ($) {
    const { optional, slash_back, byte, byte_except, repeat } = $.$mol_regexp;
    $.$hyoo_marked_line_content = repeat(byte, 1);
    const uri = repeat(byte_except(slash_back));
    function with_marker(marker, content = $.$mol_regexp.from({
        content: $.$hyoo_marked_line_content
    })) {
        return $.$mol_regexp.from([{ marker }, content, marker]);
    }
    const strong = with_marker('**');
    const emphasis = with_marker('//');
    const insertion = with_marker('++');
    const deletion = with_marker('--');
    const code = with_marker(';;');
    const with_uri = $.$mol_regexp.from([
        optional([
            { content: $.$hyoo_marked_line_content },
            slash_back
        ]),
        { uri },
    ]);
    const link = with_marker('\\\\', with_uri);
    const embed = with_marker('""', with_uri);
    const inline = $.$mol_regexp.from({ strong, emphasis, insertion, deletion, code, link, embed });
    $.$hyoo_marked_line = $.$mol_regexp.from({ inline });
})($ || ($ = {}));
//line.js.map
;
"use strict";
var $;
(function ($) {
    const marker2name = {
        '**': 'strong',
        '//': 'emphasis',
        '++': 'insertion',
        '--': 'deletion',
        ';;': 'code',
        '\\\\': 'link',
        '""': 'embed',
    };
    function $hyoo_marked_tree_from_line(code, span_entire = $.$mol_span.entire('unknown', code)) {
        let span = span_entire.slice(0, 0);
        const nodes = [];
        for (const token of $.$hyoo_marked_line.parse(code)) {
            if (token.inline) {
                const uri_sep_length = token.uri.length + (token.uri && token.content ? 1 : 0);
                span = span.after(token.marker.length * 2 + token.content.length + uri_sep_length);
                const span_content = span.slice(token.marker.length, -token.marker.length);
                const content = token.code
                    ? [$.$mol_tree2.data(token.content, [], span_content)]
                    : [
                        ...token.uri ? [
                            $.$mol_tree2.data(token.uri, [], span_content.slice(-uri_sep_length))
                        ] : [],
                        ...token.content ? this.$hyoo_marked_tree_from_line(token.content, span_content.slice(0, -uri_sep_length)).kids : [],
                    ];
                const name = marker2name[token.marker];
                if (!name)
                    this.$mol_fail(`Undefined name for marker ${token.marker}`);
                nodes.push($.$mol_tree2.struct(name, content, span));
            }
            else {
                span = span.after(token[0].length);
                nodes.push($.$mol_tree2.data(token[0], [], span));
            }
        }
        return $.$mol_tree2.list(nodes, span_entire);
    }
    $.$hyoo_marked_tree_from_line = $hyoo_marked_tree_from_line;
})($ || ($ = {}));
//line.js.map
;
"use strict";
var $;
(function ($) {
    const templates = $.$$.$mol_tree2_from_string(`
		body function
			make_dom
			(,) parent
			{;} %body
		element const
			child
			()
				document
				[] \\createElement
				(,) %name
		attr ()
			child
			[] \\setAttribute
			(,)
				%name
				%value
		text const
			child
			()
				document
				[] \\createTextNode
				(,) %text
		content ()
			(,) =>
				parent
				%content
			(,) child
		append ()
			parent
			[] \\appendChild
			(,) child
	`, '$hyoo_marked_tree_to_js_templates');
    const wrap_body = templates.select('body', '');
    const wrap_element = templates.select('element', '');
    const wrap_attr = templates.select('attr', '');
    const wrap_text = templates.select('text', '');
    const wrap_content = templates.select('content', '');
    const append_child = templates.select('append', '');
    function hack_inline(name, link_attr) {
        return (input, belt, context) => {
            const uri = link_attr ? input.kids[0] : null;
            const content = link_attr ? input.kids.slice(1) : input.kids;
            return [
                input.struct('{;}', [
                    ...wrap_element.hack({ '%name': () => [input.data(name)] }, Object.assign(Object.assign({}, context), { span: input.span })),
                    ...uri ? [
                        ...wrap_attr.hack({
                            '%name': () => [uri.data(link_attr)],
                            '%value': () => [uri],
                        }, Object.assign(Object.assign({}, context), { span: input.span })),
                    ] : [],
                    ...content.length ? [
                        ...wrap_content.hack({ '%content': () => input.list(content).hack(belt, context) }, Object.assign(Object.assign({}, context), { span: input.span })),
                    ] : [],
                    ...append_child.hack({}, Object.assign(Object.assign({}, context), { span: input.span.slice(-2, -1) })),
                ])
            ];
        };
    }
    function hack_text(input, belt, context) {
        return [
            input.struct('{;}', [
                ...wrap_text.hack({ '%text': () => [input] }, Object.assign(Object.assign({}, context), { span: input.span })),
                ...append_child.hack({}, Object.assign(Object.assign({}, context), { span: input.span })),
            ]),
        ];
    }
    function $hyoo_marked_tree_to_js(mt) {
        return mt.list(wrap_body.hack({
            '%body': () => mt.hack({
                'strong': hack_inline('strong'),
                'emphasis': hack_inline('em'),
                'insertion': hack_inline('ins'),
                'deletion': hack_inline('del'),
                'code': hack_inline('code'),
                'link': hack_inline('a', 'href'),
                'embed': hack_inline('object', 'data'),
                '': hack_text,
            }),
        }));
    }
    $.$hyoo_marked_tree_to_js = $hyoo_marked_tree_to_js;
})($ || ($ = {}));
//js.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_json_from_string(str) {
        return JSON.parse(str);
    }
    $.$mol_json_from_string = $mol_json_from_string;
    function $mol_json_to_string(str) {
        return JSON.stringify(str, null, '\t');
    }
    $.$mol_json_to_string = $mol_json_to_string;
})($ || ($ = {}));
//json.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.message), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    const a_stack = [];
    const b_stack = [];
    let cache = null;
    function $mol_compare_deep(a, b) {
        if (Object.is(a, b))
            return true;
        const a_type = typeof a;
        const b_type = typeof b;
        if (a_type !== b_type)
            return false;
        if (a_type === 'function')
            return String(a) === String(b);
        if (a_type !== 'object')
            return false;
        if (!a || !b)
            return false;
        if (a instanceof Error)
            return false;
        if (a['constructor'] !== b['constructor'])
            return false;
        if (a instanceof RegExp)
            return Object.is(String(a), String(b));
        const ref = a_stack.indexOf(a);
        if (ref >= 0) {
            return Object.is(b_stack[ref], b);
        }
        if (!cache)
            cache = new WeakMap;
        let a_cache = cache.get(a);
        if (a_cache) {
            const b_cache = a_cache.get(b);
            if (typeof b_cache === 'boolean')
                return b_cache;
        }
        else {
            a_cache = new WeakMap();
            cache.set(a, a_cache);
        }
        a_stack.push(a);
        b_stack.push(b);
        let result;
        try {
            if (a[Symbol.iterator]) {
                const a_iter = a[Symbol.iterator]();
                const b_iter = b[Symbol.iterator]();
                while (true) {
                    const a_next = a_iter.next();
                    const b_next = b_iter.next();
                    if (a_next.done !== b_next.done)
                        return result = false;
                    if (a_next.done)
                        break;
                    if (!$mol_compare_deep(a_next.value, b_next.value))
                        return result = false;
                }
                return result = true;
            }
            let count = 0;
            for (let key in a) {
                try {
                    if (!$mol_compare_deep(a[key], b[key]))
                        return result = false;
                }
                catch (error) {
                    $.$mol_fail_hidden(new $.$mol_error_mix(`Failed ${JSON.stringify(key)} fields comparison of ${a} and ${b}`, error));
                }
                ++count;
            }
            for (let key in b) {
                --count;
                if (count < 0)
                    return result = false;
            }
            const a_val = a['valueOf']();
            if (Object.is(a_val, a))
                return result = true;
            const b_val = b['valueOf']();
            if (!Object.is(a_val, b_val))
                return result = false;
            return result = true;
        }
        finally {
            a_stack.pop();
            b_stack.pop();
            if (a_stack.length === 0) {
                cache = null;
            }
            else {
                a_cache.set(b, result);
            }
        }
    }
    $.$mol_compare_deep = $mol_compare_deep;
})($ || ($ = {}));
//deep.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message, ErrorRight);
            }
            else {
                $mol_assert_ok(error instanceof ErrorRight);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal (${i + 1}:${j + 1})\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let [index, value] of Object.entries(tail)) {
            if (!$.$mol_compare_deep(value, head)) {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    return JSON.stringify(val);
                };
                return $.$mol_fail(new Error(`Not like (1:${+index + 2})\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jack = {
        no: (input, belt) => [],
        list: (input, belt) => input.hack(belt),
        tree: input => input.kids,
        type: (input, belt) => input.hack(belt).map(kid => kid.data(kid.type)),
        kids: (input, belt) => [].concat(...input.hack(belt).map(kid => kid.kids)),
        head: (input, belt) => input.hack(belt).slice(0, 1),
        headless: (input, belt) => input.hack(belt).slice(1),
        reversed: (input, belt) => input.hack(belt).reverse(),
        count: (input, belt) => [input.struct(input.hack(belt).length.toString())],
        struct: (input, belt) => {
            const res = input.hack(belt);
            return [res[0].struct(res[0].value, res.slice(1))];
        },
        data: (input, belt) => {
            const res = input.hack(belt);
            return [res[0].data(res[0].value, res.slice(1))];
        },
        jack: (input, belt) => input.hack(Object.create(belt)),
        hack: (input, belt) => {
            const def = input.kids[0];
            if (Reflect.getOwnPropertyDescriptor(belt, def.type)) {
                $.$mol_fail(def.error('Already hacked'));
            }
            belt[def.type] = (arg, belt_inner, context) => {
                return def.hack(Object.create(Object.assign(Object.create(belt), {
                    from: (input, b, c) => {
                        return arg.hack(Object.assign(Object.create(belt_inner), b), c);
                    }
                })), context);
            };
            return [];
        },
        test: (input, belt) => {
            const cases = input.select('case').kids;
            const results = cases.map(Case => Case.hack(belt));
            $.$mol_assert_equal(...results.map(String));
            return [input];
        },
        '+math': (input, belt, context) => input.hack(Object.assign(Object.create(belt), Object.assign(Object.assign({}, belt), { sum: (input, belt) => [
                input.struct(input.hack(belt, context)
                    .reduce((s, k) => s + Number(k.type), 0)
                    .toString())
            ] })), context),
    };
    function $mol_jack_transform(code) {
        return code.list(code.hack(Object.create($.$mol_jack)));
    }
    $.$mol_jack_transform = $mol_jack_transform;
})($ || ($ = {}));
//jack.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wasm_instance extends $.$mol_object2 {
        constructor(module, imports) {
            super();
            this.module = module;
            this.imports = imports;
            this.native = new WebAssembly.Instance(module, imports);
        }
        memory(offset, length) {
            const memory = this.native['exports'].memory;
            return new Uint8Array(memory.buffer, offset, length);
        }
        string(offset, length, encoding = 'utf-8') {
            return new TextDecoder(encoding).decode(this.memory(offset, length));
        }
        get(name) {
            return this.native.exports[name];
        }
    }
    $.$mol_wasm_instance = $mol_wasm_instance;
})($ || ($ = {}));
//instance.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wasm_module extends $.$mol_object2 {
        constructor(buffer) {
            super();
            this.buffer = buffer;
            this.native = new WebAssembly.Module(buffer);
        }
        instance(imports) {
            return new $.$mol_wasm_instance(this.native, imports);
        }
    }
    $.$mol_wasm_module = $mol_wasm_module;
})($ || ($ = {}));
//module.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_js_eval(code) {
        return new Function('', code)();
    }
    $.$mol_js_eval = $mol_js_eval;
})($ || ($ = {}));
//eval.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_lights(next) {
        var _a;
        return (_a = this.$mol_state_local.value('$mol_lights', next)) !== null && _a !== void 0 ? _a : $.$mol_dom_context.matchMedia('(prefers-color-scheme: light)').matches;
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_theme: "$mol_theme_accent" });
        }
        style() {
            return Object.assign(Object.assign({}, super.style()), { minHeight: "1em" });
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { click: (event) => this.event_activate(event), keydown: (event) => this.event_key_press(event) });
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { disabled: this.disabled(), role: "button", tabindex: this.tab_index(), title: this.hint_or_error() });
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tmin-width: 2.5rem;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                var _a, _b;
                try {
                    (_a = this.fiber()) === null || _a === void 0 ? void 0 : _a.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String((_b = error.message) !== null && _b !== void 0 ? _b : error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_check_checked: this.checked(), "aria-checked": this.checked(), role: "checkbox" });
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_after_timeout {
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { viewBox: this.view_box(), preserveAspectRatio: this.aspect() });
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { d: this.geometry() });
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $.$mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//6.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $.$mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//toggle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/lights/toggle/toggle.view.css", "[mol_lights_toggle] {\n\ttransform: rotate(-90deg);\n}\n");
})($ || ($ = {}));
//toggle.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toggle.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { href: this.uri(), title: this.hint(), target: this.target(), download: this.file_name(), mol_link_current: this.current() });
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { click: (event) => this.click(event) });
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    background: {
                        color: $.$mol_theme.back,
                    },
                    color: $.$mol_theme.text,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $.$mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//circle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $.$mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        var _a, _b;
        return (_b = (_a = this.$mol_dom_context.CSS) === null || _a === void 0 ? void 0 : _a.supports('overflow-anchor:auto')) !== null && _b !== void 0 ? _b : false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                var _a, _b, _c, _d, _e, _f;
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = (_a = $.$mol_mem_cached(() => this.view_window())) !== null && _a !== void 0 ? _a : [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = (_b = $.$mol_mem_cached(() => this.gap_before())) !== null && _b !== void 0 ? _b : 0;
                const gap_after = (_c = $.$mol_mem_cached(() => this.gap_after())) !== null && _c !== void 0 ? _c : 0;
                let top = Math.ceil((_d = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _d !== void 0 ? _d : 0) + gap_before;
                let bottom = Math.ceil((_e = rect === null || rect === void 0 ? void 0 : rect.bottom) !== null && _e !== void 0 ? _e : 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil((_f = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _f !== void 0 ? _f : 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                var sub = this.sub();
                const next = sub.slice(...this.view_window());
                if (this.gap_before())
                    next.unshift(this.Gap_before());
                if (this.gap_after())
                    next.push(this.Gap_after());
                return next;
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(50),
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                margin: 0,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $.$mol_plugin {
        event() {
            return Object.assign(Object.assign({}, super.event()), { keydown: (event) => this.keydown(event) });
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//hotkey.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $.$mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hotkey.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        field() {
            return Object.assign(Object.assign({}, super.field()), { disabled: this.disabled(), value: this.value_changed(), placeholder: this.hint(), spellcheck: this.spellcheck(), autocomplete: this.autocomplete_native() });
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { maxlength: this.length_max(), type: this.type() });
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { input: (event) => this.event_change(event), keydown: (event) => this.event_key_press(event) });
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 0 1 auto;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
        }
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return Object.assign(Object.assign({}, super.style()), { minHeight: "auto" });
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return Object.assign(Object.assign({}, super.style()), { paddingLeft: this.level_style() });
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 8;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.minimal_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const regexp = $.$mol_regexp.from({ needle: this.needle() }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return Object.assign(Object.assign({}, super.field()), { src: this.uri(), alt: this.title() });
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: -.25rem .25rem 0 0;\n\tvertical-align: middle;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const url = new URL(this.uri());
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_type: this.type() });
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_header_level: this.level() });
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_type: this.type() });
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_type: this.type() });
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { allowfullscreen: true, mol_text_type: this.type(), data: this.link() });
        }
        sub() {
            return [
                this.title()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        constructor(lexems) {
            this.lexems = lexems;
            this.rules = [];
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tpadding: var(--mol_gap_block);\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\tfont-weight: 500;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    const span = this.Span(id);
                    span.type(name);
                    span.content(name
                        ? [].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [found]);
                    spans.push(span);
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $.$mol_dimmer {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_code_token_type: this.type() });
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { href: this.haystack(), target: "_blank" });
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//token.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $.$mol_style_func;
        $.$mol_style_define($.$mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 60, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 60, 1),
                    },
                    'code-global': {
                        color: hsla(210, 80, 60, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 60, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 30, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 60, 1),
                    },
                    'code-link': {
                        color: hsla(240, 60, 60, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//token.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $.$mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code_row, {
            display: 'block',
            Numb: {
                textAlign: 'right',
                color: $.$mol_theme.shade,
                width: rem(3),
                padding: {
                    right: rem(1.5),
                },
                margin: {
                    left: rem(-3),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $.$mol_list {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_text_code_sidebar_showed: this.sidebar_showed() });
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        sidebar_showed() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code, {
            padding: $.$mol_gap.text,
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        margin: {
                            left: rem(3),
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_textarea_clickable: this.clickable(), mol_textarea_sidebar_showed: this.sidebar_showed() });
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        Edit() {
            const obj = new this.$.$mol_string();
            obj.dom_name = () => "textarea";
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            return obj;
        }
        row_numb(index) {
            return 0;
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (index) => this.row_numb(index);
            obj.sidebar_showed = () => this.sidebar_showed();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 0;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\tz-index: 1;\n\twhite-space: inherit;\n}\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: monospace;\n\tz-index: -1 !important;\n\tpadding: var(--mol_gap_text);\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\twhite-space: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 3rem;\n\twidth: calc( 100% - 3rem );\n}\n");
})($ || ($ = {}));
//textarea.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        event() {
            return {
                keydown: (event) => this.keydown(event)
            };
        }
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sub() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $.$mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return Object.assign(Object.assign({}, super.style()), { maxHeight: this.height_max() });
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_pop_align: this.align(), tabindex: 0 });
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_skin_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: auto;\n\tword-break: normal;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//pop.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            sub() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                return this.$.$mol_window.size().height * 0.33;
            }
            align() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                const vert = rect_bubble.top > (viewport.height - rect_bubble.bottom) ? 'top' : 'bottom';
                const hor = rect_bubble.left > (viewport.width - rect_bubble.right) ? 'left' : 'right';
                return `${vert}_${hor}`;
            }
            keydown(event) {
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $.$mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $.$mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//vertical.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { keydown: (event) => this.event_key(event) });
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $.$mol_pop {
        dictionary() {
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.options_showed(val);
        }
        Anchor() {
            return this.Trigger();
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        options_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        open(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        Trigger() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.open(event);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "options_showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "open", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_anchor] {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tjustify-content: space-between;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tz-index: 2;\n\topacity: 1 !important;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -.75rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//select.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.options_showed(true);
            }
            options_showed(next = false) {
                this.focused();
                return next;
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($.$mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return value == null ? id : value;
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.options_showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.focused(false);
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_list extends $.$mol_view {
        value(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        dictionary() {
            return {};
        }
        Badge(index) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.badge_title(index);
            obj.click = (event) => this.remove(index, event);
            obj.hint = () => this.badge_hint();
            obj.enabled = () => this.enabled();
            return obj;
        }
        Pick() {
            const obj = new this.$.$mol_select();
            obj.options = () => this.options_pickable();
            obj.value = (val) => this.pick(val);
            obj.option_label = (key) => this.option_title(key);
            obj.hint = () => this.pick_hint();
            obj.Trigger_icon = () => this.Pick_icon();
            return obj;
        }
        badge_title(index) {
            return "badge";
        }
        remove(index, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        badge_hint() {
            return this.$.$mol_locale.text('$mol_select_list_badge_hint');
        }
        enabled() {
            return true;
        }
        options() {
            return [];
        }
        options_pickable() {
            return this.options();
        }
        pick(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_title(key) {
            return "";
        }
        pick_hint() {
            return this.$.$mol_locale.text('$mol_select_list_pick_hint');
        }
        Pick_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_list.prototype, "Badge", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "Pick", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_list.prototype, "remove", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "pick", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "Pick_icon", null);
    $.$mol_select_list = $mol_select_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                $.$mol_fiber_defer(() => {
                    this.Pick().Trigger().focused(true);
                    this.Pick().open();
                });
                return '';
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(index) {
                return this.option_title(this.value()[index]);
            }
            sub() {
                return [
                    ...this.value().map((_, index) => this.Badge(index)),
                    ...this.options_pickable().length ? [this.Pick()] : [],
                ];
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(index) {
                const value = this.value();
                this.value([
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "title", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_tree extends $.$mol_book2 {
        transform_map() {
            return {
                "$mol_tree2_from_string": {
                    input: "text",
                    output: "tree"
                },
                "$mol_tree2_to_string": {
                    input: "tree",
                    output: "text"
                },
                "$mol_tree2_from_json": {
                    input: "json",
                    output: "tree"
                },
                "$mol_tree2_grammar_check": {
                    input: "grammar.tree",
                    output: "grammar.tree"
                },
                "$mol_tree2_xml_to_text": {
                    input: "xml.tree",
                    output: "text.tree"
                },
                "$mol_tree2_js_to_text": {
                    input: "js.tree",
                    output: "text.tree"
                },
                "$mol_tree2_text_to_string": {
                    input: "text.tree",
                    output: "text"
                },
                "$mol_tree2_text_to_sourcemap": {
                    input: "text.tree",
                    output: "map.json"
                },
                "$mol_tree2_text_to_sourcemap_vis": {
                    input: "text.tree",
                    output: "map.vis.url"
                },
                "$mol_tree2_span_imprint": {
                    input: "tree",
                    output: "span.tree"
                },
                "$mol_tree2_span_reuse": {
                    input: "span.tree",
                    output: "tree"
                },
                "$mol_tree2_wasm_to_bin": {
                    input: "wasm.tree",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_from_string": {
                    input: "text",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_from_bytes": {
                    input: "bytes.json",
                    output: "bin.tree"
                },
                "$mol_tree2_bin_to_bytes": {
                    input: "bin.tree",
                    output: "bin"
                },
                "$mol_view_tree2_to_text": {
                    input: "view.tree",
                    output: "text.tree"
                },
                "$mol_view_tree2_to_dts": {
                    input: "view.tree",
                    output: "text.tree"
                },
                "$hyoo_marked_tree_from_line": {
                    input: "text",
                    output: "marked.tree"
                },
                "$hyoo_marked_tree_to_js": {
                    input: "marked.tree",
                    output: "js.tree"
                },
                "$mol_json_from_string": {
                    input: "text",
                    output: "json"
                },
                "$mol_json_to_string": {
                    input: "json",
                    output: "text"
                },
                "$mol_jack_transform": {
                    input: "jack.tree",
                    output: "tree"
                },
                "$mol_wasm_module": {
                    input: "wasm.bin",
                    output: "wasm.module"
                },
                "$mol_js_eval": {
                    input: "text",
                    output: "any"
                }
            };
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        pipeline(val) {
            return this.pipeline_default();
        }
        Placeholder() {
            return null;
        }
        pages() {
            return [
                this.Presets(),
                this.Source(),
                this.Result()
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        pipeline_default() {
            return [];
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Github() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/tree.hyoo.ru/";
            return obj;
        }
        View() {
            const obj = new this.$.$mol_link();
            obj.title = () => "view.tree ⇒ TS";
            obj.uri = () => "#source=%24my_app%20%24mol_page%0A%09spec%20%5Chttps%3A%2F%2Fgithub.com%2Fhyoo-ru%2Fmam_mol%2Ftree%2Fmaster%2Fview%23viewtree%0A%09params%20*%20foo%20<%3D%20changable%3Fval%20%2Fstring%0A%09body%20%2F%0A%09%09<%3D%20Info%20%24my_widget%0A%09%09%09empty%20%40%20%5CNo%20content%0A%09%09%09value%3Fval%20<%3D>%20info_value%3Fval%20NaN%0A%09%09%09kids%20<%3D%20info_kids%20%2F%24mol_view_content%0A/pipeline=%24mol_tree2_from_string~%24mol_view_tree2_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Json() {
            const obj = new this.$.$mol_link();
            obj.title = () => "JSON ⇒ json.tree";
            obj.uri = () => "#source=%7B%0A%09\"primitives\"%3A%20%5B%0A%09%09\"https%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fjson.tree\"%2C%0A%09%09true%2C%0A%09%09777%2C%0A%09%09null%0A%09%5D%2C%0A%09\"foo%5Cnbar\"%3A\"xxx%5Cnyyy\"%0A%7D/pipeline=%24mol_json_from_string~%24mol_tree2_from_json";
            return obj;
        }
        Xml() {
            const obj = new this.$.$mol_link();
            obj.title = () => "xml.tree ⇒ XML";
            obj.uri = () => "#source=!%20doctype%20html%0A%3F%20xml%20version%20%5C1.0%0A--%20%5Centry%20point%0Ahtml%0A%09meta%20%40%20charset%20%5Cutf-8%0A%09body%0A%09%09a%0A%09%09%09%40%20href%20%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fxml.tree%0A%09%09%09%5Cxml.tree%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_xml_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Js() {
            const obj = new this.$.$mol_link();
            obj.title = () => "js.tree ⇒ JS";
            obj.uri = () => "#source=function%0A%09main%0A%09%28%2C%29%0A%09%09one%0A%09%09%3D%0A%09%09%09two%0A%09%09%092%0A%09%7B%3B%7D%0A%09%09const%0A%09%09%09%5B%2C%5D%0A%09%09%09%09self%0A%09%09%09%09samples%0A%09%09%09%5B%2C%5D%0A%09%09%09%09this%0A%09%09%09%09%7B%2C%7D%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cvoid%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%09null%0A%09%09%09%09%09%09%09undefined%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cboolean%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%09true%0A%09%09%09%09%09%09%09false%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09777%0A%09%09%09%09%09%09%5B%2C%5D%0A%09%09%09%09%09%09%091e%2B5%0A%09%09%09%09%09%09%09NaN%0A%09%09%09%09%09%09%09Infinity%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%28%29%0A%09%09%09%09%09%09%09Symbol%0A%09%09%09%09%09%09%09%5B%5D%20%5CtoStringTag%0A%09%09%09%09%09%09%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fjs.tree%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Ctemplate%0A%09%09%09%09%09%09%60%60%0A%09%09%09%09%09%09%09%5Cfoo%3D%20%0A%09%09%09%09%09%09%09foo%0A%09%09%09%09%09%09%09%5C!%0A%09%09%09%09%09%3A%0A%09%09%09%09%09%09%5Cregexp%0A%09%09%09%09%09%09%2F.%2F%0A%09%09%09%09%09%09%09.source%20%5C%5Ct%0A%09%09%09%09%09%09%09.multiline%0A%09%09%09%09%09%09%09.ignoreCase%0A%09%09%09%09%09%09%09.global%0A%09%09%09%09%09...%20foo%0A%09%09%2B%3D%0A%09%09%09two%0A%09%09%09%28*%29%0A%09%09%09%092%0A%09%09%09%093%0A%09%09%09%09%28%29%0A%09%09%09%09%09Math%0A%09%09%09%09%09%5B%5D%20%5Csin%0A%09%09%09%09%09%28%2C%29%200%0A%09%09delete%20samples%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_js_to_text~%24mol_tree2_text_to_string";
            return obj;
        }
        Wasm() {
            const obj = new this.$.$mol_link();
            obj.title = () => "wasm.tree ⇒ WASM";
            obj.uri = () => "#source=custom%20xxx%0A%0Atype%20xxx%0A%09%3D>%20i32%0A%09%3D>%20i64%0A%09%3D>%20f32%0A%09<%3D%20f64%0A%0Aimport%20foo.bar%20func%20xxx%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_wasm_to_bin~%24mol_tree2_bin_to_bytes~%24mol_wasm_module";
            return obj;
        }
        jack() {
            const obj = new this.$.$mol_link();
            obj.title = () => "jack.tree ⇒ JS eval";
            obj.uri = () => "#pipeline=%24mol_tree2_from_string~%24mol_jack_transform~%24mol_tree2_js_to_text~%24mol_tree2_text_to_string~%24mol_js_eval/source=hack%20%2Bpipe%0A%09hack%20%7C>%20var%0A%09%09pipe%0A%09%09from%0A%09hack%20<%7C%20pipe%0A%09from%0A%0Ahack%20%2Bmath%20%2Bpipe%0A%09hack%20square%20%28**%29%0A%09%09<%7C%0A%09%092%0A%09hack%20next%20%28%2B%29%0A%09%09<%7C%0A%09%091%0A%09from%0A%0Ahack%20%2Bdebug%0A%09hack%20log%20%28%29%0A%09%09console%0A%09%09%5B%5D%20%5Clog%0A%09%09%28%2C%29%20from%0A%09from%0A%0A%2Bmath%20%2Bdebug%20%7B%3B%7D%0A%09%7C>%203%0A%09%7C>%20square%0A%09%7C>%20next%0A%09log%20<%7C%0A%09return%20<%7C%0A";
            return obj;
        }
        Mt() {
            const obj = new this.$.$mol_link();
            obj.title = () => "MarkedText ⇒ JS + SM";
            obj.uri = () => "#source=%5C%5C**MarkedText**%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2FHabHub%2Fissues%2F39%5C%5C/pipeline=%24hyoo_marked_tree_from_line~%24hyoo_marked_tree_to_js~%24mol_tree2_js_to_text~%24mol_tree2_text_to_sourcemap_vis";
            return obj;
        }
        Grammar() {
            const obj = new this.$.$mol_link();
            obj.title = () => "grammar.tree check";
            obj.uri = () => "#source=%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fgrammar.tree%0A%0Atree%20.optional%20.list_of%20line%0A%0Aline%20.sequence%0A%09.optional%20indent%0A%09.optional%20nodes%0A%09new_line%0A%0Anodes%20.sequence%0A%09.optional%20.list_of%20struct%0A%09.optional%20data%0A%09.with_delimiter%20space%0A%0Astruct%20.list_of%20.byte%0A%09.except%20special%0A%0Adata%20.sequence%0A%09data_prefix%0A%09.optional%20.list_of%20.byte%0A%09%09.except%20new_line%0A%0Aspecial%20.any_of%0A%09new_line%0A%09data_prefix%0A%09indent%0A%09space%0A%0Anew_line%20.byte%20%5C0A%0Aindent%20.list_of%20.byte%20%5C09%0Adata_prefix%20.byte%20%5C5C%0Aspace%20.byte%20%5C20%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_grammar_check";
            return obj;
        }
        Span() {
            const obj = new this.$.$mol_link();
            obj.title = () => "span.tree imprint/reuse";
            obj.uri = () => "#source=foo%0A%09bar%0A%09%09%5Chttps%3A%2F%2Fgithub.com%2Fnin-jin%2Ftree.d%2Fwiki%2Fspan.tree%0A/pipeline=%24mol_tree2_from_string~%24mol_tree2_span_imprint~%24mol_tree2_span_reuse~%24mol_tree2_span_imprint";
            return obj;
        }
        Presets_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.View(),
                this.Json(),
                this.Xml(),
                this.Js(),
                this.Wasm(),
                this.jack(),
                this.Mt(),
                this.Grammar(),
                this.Span()
            ];
            return obj;
        }
        Presets() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_tree_Presets_title');
            obj.tools = () => [
                this.Lights(),
                this.Github()
            ];
            obj.body = () => [
                this.Presets_list()
            ];
            return obj;
        }
        source_tools() {
            return [];
        }
        source_default() {
            return "";
        }
        source(val) {
            return this.source_default();
        }
        source_hint() {
            return this.$.$mol_locale.text('$hyoo_tree_source_hint');
        }
        Source_text() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.source(val);
            obj.hint = () => this.source_hint();
            obj.sidebar_showed = () => true;
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_tree_Source_title');
            obj.tools = () => this.source_tools();
            obj.body = () => [
                this.Source_text()
            ];
            return obj;
        }
        transform_options() {
            return [];
        }
        add_hint() {
            return this.$.$mol_locale.text('$hyoo_tree_add_hint');
        }
        result_title() {
            return this.Pipeline().title();
        }
        Pipeline() {
            const obj = new this.$.$mol_select_list();
            obj.value = (val) => this.pipeline(val);
            obj.options_pickable = () => this.transform_options();
            obj.pick_hint = () => this.add_hint();
            return obj;
        }
        result_text() {
            return null;
        }
        Result_text() {
            const obj = new this.$.$mol_text_code();
            obj.render_visible_only = () => false;
            obj.text = () => this.result_text();
            return obj;
        }
        Result() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.result_title();
            obj.head = () => [
                this.Pipeline()
            ];
            obj.body = () => [
                this.Result_text()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Github", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "View", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Json", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Xml", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Js", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Wasm", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "jack", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Mt", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Grammar", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Span", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Presets_list", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Presets", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Source_text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Source", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Pipeline", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Result_text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_tree.prototype, "Result", null);
    $.$hyoo_tree = $hyoo_tree;
})($ || ($ = {}));
//tree.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        var _a;
        return ((_a = Object.getOwnPropertyDescriptor(func, 'prototype')) === null || _a === void 0 ? void 0 : _a.writable) === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));
//try.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        if (Buffer.isBuffer(str))
            return str.toString('base64');
        return Buffer.from(str).toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    $.$mol_base64_encode = $mol_base64_encode_node;
})($ || ($ = {}));
//encode.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/tree/tree.view.css", "[hyoo_tree_body] {\n\tdisplay: flex;\n}\n\n[hyoo_tree_presets_list] {\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_tree_source] {\n\tflex: 1 0 30rem;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[hyoo_tree_source_body] {\n\tpadding: var(--mol_gap_block);\n}\n\n[hyoo_tree_result] {\n\tflex: 1 0 30rem;\n\toutline: 0 0 0 1px var(--mol_theme_line);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[hyoo_tree_result_body] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//tree.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_tree extends $.$hyoo_tree {
            pipeline(next) {
                const str = this.$.$mol_state_arg.value('pipeline', next && next.join('~'));
                return str && str.split('~').filter(Boolean) || super.pipeline();
            }
            add(index, next) {
                if (next) {
                    this.pipeline([
                        ...this.pipeline().slice(0, index + 1),
                        next,
                    ]);
                }
                return '';
            }
            source(next) {
                var _a;
                return (_a = this.$.$mol_state_arg.value('source', next)) !== null && _a !== void 0 ? _a : super.source();
            }
            transform(index, next) {
                var _a;
                let pipeline = this.pipeline();
                if (next)
                    pipeline = this.pipeline([
                        ...pipeline.slice(0, index),
                        next,
                        ...pipeline.slice(index + 1),
                    ]);
                return (_a = pipeline[index]) !== null && _a !== void 0 ? _a : null;
            }
            transform_options() {
                const map = this.transform_map();
                const pipeline = this.pipeline();
                const last = pipeline[pipeline.length - 1];
                const type = last ? map[last].output.split('.').reverse() : ['text'];
                return Object.keys(map).filter(id => {
                    const diff = $.$mol_diff_path(type, map[id].input.split('.').reverse());
                    if (!diff.prefix.length)
                        return false;
                    if (diff.suffix.every(s => s.length))
                        return false;
                    return true;
                });
            }
            result(index) {
                var _a, _b;
                const func = this.pipeline()[index];
                if (!func)
                    return '';
                const arg = index ? this.result(index - 1) : this.source();
                if ($.$mol_func_is_class(this.$[func])) {
                    return (_a = new this.$[func](arg)) !== null && _a !== void 0 ? _a : null;
                }
                else {
                    return (_b = this.$[func](arg)) !== null && _b !== void 0 ? _b : null;
                }
            }
            result_text() {
                let res = $.$mol_try(() => this.result(this.pipeline().length - 1));
                if (res instanceof Promise)
                    $.$mol_fail_hidden(res);
                if (typeof res === 'string')
                    return res;
                if (Object(res) !== res)
                    return String(res);
                if (!Reflect.getPrototypeOf(Reflect.getPrototypeOf(res)))
                    return JSON.stringify(res, null, '\t');
                if (Array.isArray(res))
                    return JSON.stringify(res, null, '\t');
                let mime = 'application/octet-stream';
                if (res instanceof $.$mol_wasm_module) {
                    res = new Uint8Array(res.buffer);
                    mime = 'application/wasm';
                }
                if (res instanceof Uint8Array) {
                    return `data:${mime};base64,${$.$mol_base64_encode(res)}`;
                }
                return String(res);
            }
            close(index) {
                this.pipeline([
                    ...this.pipeline().slice(0, index),
                    ...this.pipeline().slice(index + 1),
                ]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_tree.prototype, "pipeline", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_tree.prototype, "source", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_tree.prototype, "transform", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_tree.prototype, "transform_options", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_tree.prototype, "result", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_tree.prototype, "result_text", null);
        $$.$hyoo_tree = $hyoo_tree;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tree.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//env.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//env.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $.$mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return Object.assign(Object.assign({}, super.some()), { a: 1 });
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//attributes.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $.$mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//binding.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $.$mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $.$mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//binding_right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $.$mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $.$mol_view {
        Page(index) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(index);
            return obj;
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $.$mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//subcomponent.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_array_body(operator, parent_context, super_method) {
        if (operator.type[0] !== '/')
            return this.$mol_fail(err `Need a \`/\` at ${operator.span}`);
        const spread = new this.$mol_view_tree2_ts_spread_factory(this, super_method);
        const context = parent_context.locale_disable(operator);
        const kids = operator.kids;
        const last = kids.length > 0 ? kids[kids.length - 1] : undefined;
        const sub = [];
        for (const opt of kids) {
            const type = opt.type;
            let value;
            if (type === '^')
                value = [spread.create(opt)];
            else if (type === '<=')
                value = this.$mol_view_tree2_ts_bind_left(opt, context);
            else if (type === '*')
                value = this.$mol_view_tree2_ts_dictionary(opt, context);
            else if (type[0] === '/')
                value = this.$mol_view_tree2_ts_array(opt, context);
            else
                value = this.$mol_view_tree2_ts_value(opt);
            const child_sub = value;
            if (opt !== last)
                child_sub.push(operator.data(','));
            sub.push(opt.struct('line', child_sub));
        }
        return operator.struct('indent', sub);
    }
    $.$mol_view_tree2_ts_array_body = $mol_view_tree2_ts_array_body;
})($ || ($ = {}));
//body.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_array(operator, context, super_method) {
        if (operator.type[0] !== '/')
            return this.$mol_fail(err `Need a \`/\` at ${operator.span}`);
        const type_str = operator.type.substring(1);
        const type_body = [
            operator.data('] as '),
        ];
        if (type_str === '') {
            type_body.push(operator.data('readonly any[]'));
        }
        else if (type_str === 'const') {
            type_body.push(operator.data('const'));
        }
        else {
            const type = $.$mol_tree2.data(type_str, [], operator.span.slice(1, type_str.length));
            const is_array = type.value.indexOf('[') !== -1;
            type_body.push(operator.data('readonly '));
            if (is_array)
                type_body.push(operator.data('('));
            type_body.push(type);
            if (is_array)
                type_body.push(operator.data(')'));
            type_body.push(operator.data('[]'));
        }
        const body = this.$mol_view_tree2_ts_array_body(operator, context, super_method);
        return [
            operator.data('['),
            body,
            operator.struct('line', type_body)
        ];
    }
    $.$mol_view_tree2_ts_array = $mol_view_tree2_ts_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    const err = $.$mol_view_tree2_error_str;
    function $mol_view_tree2_ts_method_body(having_parts, parent_context) {
        const context = parent_context.parent(having_parts);
        const having = having_parts.src;
        const operator = having.kids.length === 1 ? having.kids[0] : undefined;
        if (!operator)
            return this.$mol_fail(err `Need an child part in a class body at ${having.span}`);
        const type = operator.type;
        const index = context.index(having_parts);
        let body;
        if (type === '<=')
            body = add_return(operator, this.$mol_view_tree2_ts_bind_left(operator, context, having_parts));
        else if (type === '<=>')
            body = add_return(operator, this.$mol_view_tree2_ts_bind_both(operator, context));
        else if (type === '@')
            body = add_return(operator, this.$mol_view_tree2_ts_locale(operator, context));
        else if (type === '*')
            body = add_return(operator, this.$mol_view_tree2_ts_dictionary(operator, context, having_parts));
        else if (type[0] === '/')
            body = add_return(operator, this.$mol_view_tree2_ts_array(operator, context, having_parts));
        else if (type[0] === '$')
            body = this.$mol_view_tree2_ts_factory(operator, having_parts, context);
        else
            body = add_return(operator, this.$mol_view_tree2_ts_value(operator));
        const method = this.$mol_view_tree2_ts_method(having_parts, body, context.types);
        context.method(index, method);
    }
    $.$mol_view_tree2_ts_method_body = $mol_view_tree2_ts_method_body;
    function add_return(op, value) {
        return op.struct('indent', [
            op.struct('line', [
                op.data('return '),
                ...value
            ])
        ]);
    }
})($ || ($ = {}));
//body.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree2_ts_method(owner_parts, body, types = false) {
        const { name, key, next, src } = owner_parts;
        const operator = src.kids.length === 1 ? src.kids[0] : undefined;
        const type = operator === null || operator === void 0 ? void 0 : operator.type;
        const is_class = type && type[0] === '$';
        const is_delegate = type === '<=' || type === '<=>';
        let need_cache = false;
        if (is_delegate)
            need_cache = false;
        else if (next !== undefined)
            need_cache = true;
        else if (is_class)
            need_cache = true;
        const sub = this.$mol_view_tree2_ts_comment_doc(src);
        if (need_cache && key)
            sub.push(name.data(`@ $${''}mol_mem_key`));
        if (need_cache && !key)
            sub.push(name.data(`@ $${''}mol_mem`));
        sub.push(name.struct('line', [
            name,
            $.$mol_view_tree2_ts_function_declaration(owner_parts, types),
            name.data(' {'),
        ]));
        if (next && need_cache)
            sub.push(next.struct('indent', [
                next.struct('line', [
                    next.data('if ( '),
                    next,
                    next.data(' !== undefined ) return '),
                    next,
                ])
            ]));
        sub.push(body, name.data('}'));
        return sub;
    }
    $.$mol_view_tree2_ts_method = $mol_view_tree2_ts_method;
})($ || ($ = {}));
//method.js.map
;
"use strict";
var $;
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($_1.$$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        $_1.$mol_ambient({}).$mol_log3_done({
            place: '$mol_test',
            message: 'Completed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(() => {
            scheduled = false;
            $mol_test_run();
        }, 0);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
//assert.test.js.map
;
"use strict";
//assert.js.map
;
"use strict";
//deep.test.js.map
;
"use strict";
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx("div", { classList: ['foo bar'] });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx("div", { lang: "ru", hidden: true });
            $.$mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx("div", null,
                "hello",
                $.$mol_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx(Bar, { id: "/bar" },
                        $.$mol_jsx("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx("span", null, icon);
            };
            const dom = $.$mol_jsx(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx("div", null,
                    $.$mol_jsx("span", { id: "/bar" }),
                    $.$mol_jsx("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if (Elem.prototype) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] && props[key]['constructor'] === Object) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'nulls & undefineds'() {
            $.$mol_assert_ok($.$mol_compare_deep(null, null));
            $.$mol_assert_ok($.$mol_compare_deep(undefined, undefined));
            $.$mol_assert_not($.$mol_compare_deep(undefined, null));
            $.$mol_assert_not($.$mol_compare_deep({}, null));
        },
        'number'() {
            $.$mol_assert_ok($.$mol_compare_deep(1, 1));
            $.$mol_assert_ok($.$mol_compare_deep(Number.NaN, Number.NaN));
            $.$mol_assert_not($.$mol_compare_deep(1, 2));
        },
        'Number'() {
            $.$mol_assert_ok($.$mol_compare_deep(Object(1), Object(1)));
            $.$mol_assert_ok($.$mol_compare_deep(Object(Number.NaN), Object(Number.NaN)));
            $.$mol_assert_not($.$mol_compare_deep(Object(1), Object(2)));
        },
        'empty POJOs'() {
            $.$mol_assert_ok($.$mol_compare_deep({}, {}));
        },
        'different POJOs'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { b: 2 }));
        },
        'different POJOs with same keys but different values'() {
            $.$mol_assert_not($.$mol_compare_deep({ a: 1 }, { a: 2 }));
        },
        'different POJOs with different keys but same values'() {
            $.$mol_assert_not($.$mol_compare_deep({}, { a: undefined }));
        },
        'Array'() {
            $.$mol_assert_ok($.$mol_compare_deep([], []));
            $.$mol_assert_ok($.$mol_compare_deep([1, [2]], [1, [2]]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2], [1, 3]));
            $.$mol_assert_not($.$mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'same POJO trees'() {
            $.$mol_assert_ok($.$mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
        },
        'different classes with same values'() {
            class Obj {
                constructor() {
                    this.foo = 1;
                }
            }
            const a = new Obj;
            const b = new class extends Obj {
            };
            $.$mol_assert_not($.$mol_compare_deep(a, b));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $.$mol_assert_ok($.$mol_compare_deep(a, b));
        },
        'empty Element'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null), $.$mol_jsx("span", null)));
        },
        'Element with attributes'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "rtl" })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", null)));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { dir: "rtl" }), $.$mol_jsx("div", { dir: "ltr" })));
        },
        'Element with styles'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'red' } })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: {} })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { style: { color: 'red' } }), $.$mol_jsx("div", { style: { color: 'blue' } })));
        },
        'Element with content'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "bar",
                $.$mol_jsx("br", null))));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("br", null)), $.$mol_jsx("div", null,
                "foo",
                $.$mol_jsx("hr", null))));
        },
        'Element with handlers'() {
            $.$mol_assert_ok($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 1 })));
            $.$mol_assert_not($.$mol_compare_deep($.$mol_jsx("div", { onclick: () => 1 }), $.$mol_jsx("div", { onclick: () => 2 })));
        },
        'Date'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Date(12345), new Date(12345)));
            $.$mol_assert_not($.$mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $.$mol_assert_ok($.$mol_compare_deep(/\x22/mig, /\x22/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x21/mig));
            $.$mol_assert_not($.$mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Map'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Map, new Map));
            $.$mol_assert_ok($.$mol_compare_deep(new Map([[[1], [2]]]), new Map([[[1], [2]]])));
            $.$mol_assert_not($.$mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
        },
        'Set'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Set, new Set));
            $.$mol_assert_ok($.$mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $.$mol_assert_not($.$mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
    });
})($ || ($ = {}));
//deep.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'get'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $.$mol_delegate({}, () => target);
            proxy.foo = 123;
            $.$mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777 }));
            $.$mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $.$mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $.$mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $.$mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $.$mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy instanceof Foo);
            $.$mol_assert_ok(proxy instanceof $.$mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $.$mol_delegate({}, () => new Foo);
            $.$mol_assert_ok(proxy.valueOf() instanceof Foo);
            $.$mol_assert_not(proxy.valueOf() instanceof $.$mol_delegate);
        },
    });
})($ || ($ = {}));
//delegate.test.js.map
;
"use strict";
//writable.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_tick = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//tick.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//log3.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'run callback'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            Plus1.last = 0;
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Plus1.last, 2);
            $.$mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            }
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
    $_1.$mol_test({
        'sync to async': async ($) => {
            const sum = $_1.$mol_fiber_async((a, b) => a + b);
            const res = await sum(1, 2);
            $_1.$mol_assert_equal(res, 3);
        },
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Value has js-path name'() {
            class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'($) {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
                get $() { return $; }
                destructor() { }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get source() { return Source.create(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'($) {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get having() { return Having.create(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'($) {
            class App extends $_1.$mol_object2 {
                static get $() { return $; }
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.$ = $;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
//param.test.js.map
;
"use strict";
//result.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Property method'($) {
            class App extends $_1.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            App.$ = $;
            __decorate([
                $_1.$mol_mem
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $_1.$mol_assert_equal(App.value(), 3);
        },
        'auto sync of properties'($) {
            class X extends $_1.$mol_object2 {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $_1.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.bar(), 2);
            $_1.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $_1.$mol_assert_equal(x.xxx(), 7);
        },
        async 'must be deferred destroyed when no longer referenced'($) {
            let foo;
            let foo_destroyed = false;
            class B extends $_1.$mol_object2 {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $_1.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $_1.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            b.$ = $;
            var bar = b.bar();
            $_1.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_ok(foo_destroyed);
            $_1.$mol_assert_not(b.bar());
            b.showing(true);
            $_1.$mol_defer.run();
            $_1.$mol_assert_unique(b.bar(), bar);
        },
        async 'wait for data'($) {
            class Test extends $_1.$mol_object2 {
                source() {
                    return $_1.$mol_fiber_sync(() => new Promise(done => done('Jin')))();
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $_1.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            t.$ = $;
            $_1.$mol_assert_fail(() => t.target().valueOf(), Promise);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'keyed reactive properties'($) {
            $_1.$mol_fiber_warp();
            class Fib extends $_1.$mol_object2 {
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            Fib.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], Fib, "value", null);
            $_1.$mol_assert_equal(Fib.value(10), 89);
            Fib.value(1, 2);
            $_1.$mol_assert_equal(Fib.value(10), 144);
        },
        'cached property with simple key'($) {
            class X extends $_1.$mol_object2 {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $_1.$mol_assert_equal(x.foo(0), x.foo(0));
            $_1.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $_1.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'($) {
            class X extends $_1.$mol_object2 {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            x.$ = $;
            $_1.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $_1.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
    });
})($ || ($ = {}));
//key.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                $.$mol_owning_catch(host, cache);
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        async 'Autorun'($) {
            class App extends $_1.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.$ = $;
            App.state = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "init", null);
            const autorun = $_1.$mol_atom2_autorun(() => App.init);
            autorun.$ = $;
            try {
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $_1.$mol_assert_equal(App.counter, 1);
                await $_1.$mol_fiber_warp();
                $_1.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'memoize field'() {
            class Foo {
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            Foo.one = 1;
            __decorate([
                $.$mol_memo.field
            ], Foo, "two", null);
            $.$mol_assert_equal(Foo.two, 2);
            $.$mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $.$mol_assert_equal(Foo.two, 3);
            $.$mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//memo.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '');
            $_1.$mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $_1.$mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//name.test.js.map
;
"use strict";
//extract.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            $mol_view_test_block.$ = $;
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $_1.$mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $_1.$mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $_1.$mol_view {
            };
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $_1.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $_1.$mol_view {
            }
            class $mol_view_test_block extends $_1.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $_1.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $_1.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $_1.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $_1.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $_1.$mol_assert_equal(node.getAttribute('required'), 'true');
            $_1.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $_1.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $_1.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $_1.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $_1.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $.$mol_view {
        Item() { return new $.$mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $.$mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $.$mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { calc } = $.$mol_style_func;
            const { px, per } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { px } = $.$mol_style_unit;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { url } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const { rem } = $.$mol_style_unit;
            const { hsla } = $.$mol_style_func;
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $.$mol_view {
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $.$mol_view {
                Item() { return new $.$mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $.$mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test][mol_theme="$mol_theme_dark"] [mol_style_sheet_test_item] {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $.$mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $.$mol_assert_equal(sheet, '[mol_style_sheet_test2] > [mol_style_sheet_test1] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//sheet.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'null by default'() {
            const key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'span for same uri'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $_1.$mol_assert_equal(child.uri, 'test.ts');
            $_1.$mol_assert_equal(child.row, 4);
            $_1.$mol_assert_equal(child.col, 5);
            $_1.$mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 4);
            const child = span.after(11);
            $_1.$mol_assert_equal(child.uri, 'test.ts');
            $_1.$mol_assert_equal(child.row, 1);
            $_1.$mol_assert_equal(child.col, 7);
            $_1.$mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(1, 4);
            $_1.$mol_assert_equal(child.row, 1);
            $_1.$mol_assert_equal(child.col, 4);
            $_1.$mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $_1.$mol_assert_equal(child2.col, 5);
            $_1.$mol_assert_equal(child2.length, 0);
        },
        'slice span - negative'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(-3, -1);
            $_1.$mol_assert_equal(child.row, 1);
            $_1.$mol_assert_equal(child.col, 5);
            $_1.$mol_assert_equal(child.length, 2);
        },
        'slice span - out of range'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 5);
            $_1.$mol_assert_fail(() => span.slice(-1, 3));
            $_1.$mol_assert_fail(() => span.slice(1, 6));
            $_1.$mol_assert_fail(() => span.slice(1, 10));
        },
        'error handling'($) {
            const span = new $_1.$mol_span('test.ts', '', 1, 3, 4);
            const error = span.error('Some error\n');
            $_1.$mol_assert_equal(error.message, 'Some error\ntest.ts#1:3/4');
        }
    });
})($ || ($ = {}));
//span.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'inserting'($) {
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($_1.$mol_tree2.struct('x'), 'a', 'b', 'c')
                .toString(), 'a b x\n');
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($_1.$mol_tree2.struct('x'), 'a', 'b', 'c', 'd')
                .toString(), 'a b c x\n');
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($_1.$mol_tree2.struct('x'), 0, 0, 0)
                .toString(), 'a b x\n');
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($_1.$mol_tree2.struct('x'), 0, 0, 0, 0)
                .toString(), 'a b \\\n\tx\n');
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($_1.$mol_tree2.struct('x'), null, null, null)
                .toString(), 'a b x\n');
            $_1.$mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($_1.$mol_tree2.struct('x'), null, null, null, null)
                .toString(), 'a b \\\n\tx\n');
        },
        'hack'($) {
            const res = $.$mol_tree2_from_string(`foo bar xxx\n`)
                .hack({
                'bar': (input, belt) => [input.struct('777', input.hack(belt))],
            });
            $_1.$mol_assert_equal(res.toString(), 'foo 777 xxx\n');
        },
    });
})($ || ($ = {}));
//tree2.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'tree parsing'($) {
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $_1.$mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $_1.$mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $_1.$mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator'($) {
            const tree = `foo  bar\n`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar');
        },
        'Undexpected EOF, LF required'($) {
            const tree = `	foo`;
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Undexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
        },
        'Errors skip and collect'($) {
            const tree = `foo  bar`;
            const errors = [];
            const $$ = $.$mol_ambient({
                $mol_fail: (error) => {
                    errors.push(error.message);
                    return null;
                }
            });
            const res = $$.$mol_tree2_from_string(tree, 'test');
            $_1.$mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar',
                'Undexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $_1.$mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));
//string.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'fromJSON'() {
            $.$mol_assert_equal($.$mol_tree2_from_json([]).toString(), '/\n');
            $.$mol_assert_equal($.$mol_tree2_from_json([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $.$mol_assert_equal($.$mol_tree2_from_json([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $.$mol_assert_equal($.$mol_tree2_from_json(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $.$mol_assert_equal($.$mol_tree2_from_json({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
    });
})($ || ($ = {}));
//json.test.js.map
;
"use strict";
//unary.js.map
;
"use strict";
//tail.test.js.map
;
"use strict";
//tail.js.map
;
"use strict";
//value.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'config by value'() {
            const N = $.$mol_data_setup((a) => a, 5);
            $.$mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//setup.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//setup.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'function'() {
            $.$mol_assert_not($.$mol_func_is_class(function () { }));
        },
        'generator'() {
            $.$mol_assert_not($.$mol_func_is_class(function* () { }));
        },
        'async'() {
            $.$mol_assert_not($.$mol_func_is_class(async function () { }));
        },
        'arrow'() {
            $.$mol_assert_not($.$mol_func_is_class(() => null));
        },
        'named class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class Foo {
            }));
        },
        'unnamed class'() {
            $.$mol_assert_ok($.$mol_func_is_class(class {
            }));
        },
    });
})($ || ($ = {}));
//class.test.js.map
;
"use strict";
//foot.test.js.map
;
"use strict";
//foot.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'single function'() {
            const stringify = $.$mol_data_pipe((input) => input.toString());
            $.$mol_assert_equal(stringify(5), '5');
        },
        'two functions'() {
            const isLong = $.$mol_data_pipe((input) => input.toString(), (input) => input.length > 2);
            $.$mol_assert_equal(isLong(5.0), false);
            $.$mol_assert_equal(isLong(5.1), true);
        },
        'three functions'() {
            const pattern = $.$mol_data_pipe((input) => input.toString(), (input) => new RegExp(input), (input) => input.toString());
            $.$mol_assert_equal(pattern(5), '/5/');
        },
        'classes'() {
            class Box {
                constructor(value) {
                    this.value = value;
                }
            }
            const boxify = $.$mol_data_pipe((input) => input.toString(), Box);
            $.$mol_assert_like(boxify(5), new Box('5'));
        },
    });
})($ || ($ = {}));
//pipe.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $.$mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $.$mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//pipe.js.map
;
"use strict";
var $;
(function ($) {
    const convert = $.$mol_data_pipe($.$mol_tree2_from_string, $.$mol_tree2_js_to_text, $.$mol_tree2_text_to_string);
    $.$mol_test({
        'boolean'() {
            $.$mol_assert_equal(convert(`
					true
				`), 'true\n');
        },
        'number'() {
            $.$mol_assert_equal(convert(`
					1.2
				`), '1.2\n');
            $.$mol_assert_equal(convert(`
					1e+2
				`), '1e+2\n');
            $.$mol_assert_equal(convert(`
					-Infinity
				`), '-Infinity\n');
            $.$mol_assert_equal(convert(`
					NaN
				`), 'NaN\n');
        },
        'variable'() {
            $.$mol_assert_equal(convert(`
					a
				`), 'a\n');
            $.$mol_assert_equal(convert(`
					$
				`), '$\n');
            $.$mol_assert_equal(convert(`
					a0
				`), 'a0\n');
        },
        'string'() {
            $.$mol_assert_equal(convert(`
					\\
						\\foo
						\\bar
				`), '"foo\\nbar"\n');
            $.$mol_assert_equal(convert(`
					\`\`
						\\foo
						bar
				`), '`foo${bar}`\n');
        },
        'wrong name'() {
            $.$mol_assert_fail(() => convert(`
					foo+bar
				`), 'Wrong node type\nfoo+bar\nunknown#2:6/7');
        },
        'array'() {
            $.$mol_assert_equal(convert(`
					[,]
				`), '[]\n');
            $.$mol_assert_equal(convert(`
					[,]
						1
						2
				`), '[1, 2]\n');
        },
        'last'() {
            $.$mol_assert_equal(convert(`
					(,)
						1
						2
				`), '(1, 2)\n');
        },
        'scope'() {
            $.$mol_assert_equal(convert(`
					{;}
						1
						2
				`), '{1; 2}\n');
        },
        'object'() {
            $.$mol_assert_equal(convert(`
					{,}
				`), '{}\n');
            $.$mol_assert_equal(convert(`
					{,}
						foo
						bar
				`), '{foo, bar}\n');
            $.$mol_assert_equal(convert(`
					{,}
						:
							\\foo
							1
						:
							bar
							2
				`), '{["foo"]: 1, [bar]: 2}\n');
        },
        'regexp'() {
            $.$mol_assert_equal(convert(`
					/./
						.source \\foo\\n
						.multiline
						.ignoreCase
						.global
				`), '/foo\\\\n/mig\n');
        },
        'unary'() {
            $.$mol_assert_equal(convert(`
					void yield* yield await ~ ! - + 1
				`), 'void yield* yield await ~!-+1\n');
        },
        'binary'() {
            $.$mol_assert_equal(convert(`
					(+)
						1
						2
						3
				`), '(\n\t1 + \n\t2 + \n\t3\n)\n');
            $.$mol_assert_equal(convert(`
					@++ foo
				`), 'foo++\n');
        },
        'chain'() {
            $.$mol_assert_equal(convert(`
					()
						foo
						[,] \\bar
						[,] 1
				`), '(foo["bar"][1])\n');
            $.$mol_assert_equal(convert(`
					()
						foo
						[,] 1
						(,)
				`), '(foo[1]())\n');
            $.$mol_assert_equal(convert(`
					()
						[,] 0
						[,] 1
						(,)
							2
							3
				`), '([0][1](2, 3))\n');
        },
        'function'() {
            $.$mol_assert_equal(convert(`
					=>
						(,)
						1
				`), '() => 1\n');
            $.$mol_assert_equal(convert(`
					async=>
						(,)
						1
				`), 'async () => 1\n');
            $.$mol_assert_equal(convert(`
					function
						foo
						(,)
						{;}
				`), 'function foo(){}\n');
            $.$mol_assert_equal(convert(`
					function
						(,) foo
						{;} debugger
				`), 'function (foo){debugger}\n');
            $.$mol_assert_equal(convert(`
					function*
						(,)
						{;}
				`), 'function* (){}\n');
            $.$mol_assert_equal(convert(`
					async
						(,)
						{;}
				`), 'async function (){}\n');
            $.$mol_assert_equal(convert(`
					async*
						(,) foo
						{;} debugger
				`), 'async function* (foo){debugger}\n');
        },
        'class'() {
            $.$mol_assert_equal(convert(`
					class {}
						.
							\\foo
							(,)
							{;}
				`), 'class {["foo"](){}}\n');
            $.$mol_assert_equal(convert(`
					class {}
						static
							\\foo
							(,)
							{;}
				`), 'class {static ["foo"](){}}\n');
            $.$mol_assert_equal(convert(`
					class {}
						get
							\\foo
							(,)
							{;}
				`), 'class {get ["foo"](){}}\n');
            $.$mol_assert_equal(convert(`
					class {}
						set
							\\foo
							(,) bar
							{;}
				`), 'class {set ["foo"](bar){}}\n');
        },
        'if'() {
            $.$mol_assert_equal(convert(`
					?:
						1
						2
						3
				`), '1 ? 2 : 3\n');
            $.$mol_assert_equal(convert(`
					if
						() 1
						{;} 2
				`), 'if(1){2}\n');
            $.$mol_assert_equal(convert(`
					if
						() 1
						{;} 2
						{;} 3
				`), 'if(1){2}else{3}\n');
        },
        'assign'() {
            $.$mol_assert_equal(convert(`
					=
						foo
						bar
				`), 'foo = bar\n');
            $.$mol_assert_equal(convert(`
					=
						[,]
							foo
							bar
						[,]
							1
							2
				`), '[foo, bar] = [1, 2]\n');
            $.$mol_assert_equal(convert(`
					let foo
				`), 'let foo\n');
            $.$mol_assert_equal(convert(`
					let
						foo
						bar
				`), 'let foo = bar\n');
            $.$mol_assert_equal(convert(`
					+=
						foo
						bar
				`), 'foo += bar\n');
        },
    });
})($ || ($ = {}));
//text.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'min'() {
            $.$mol_assert_equal($.$mol_vlq_encode(Number.MIN_SAFE_INTEGER), '//////H');
        },
        'negative'() {
            $.$mol_assert_equal($.$mol_vlq_encode(-1), 'D');
        },
        'zero'() {
            $.$mol_assert_equal($.$mol_vlq_encode(0), 'A');
        },
        'binom'() {
            $.$mol_assert_equal($.$mol_vlq_encode(67), 'mE');
        },
        'max'() {
            $.$mol_assert_equal($.$mol_vlq_encode(Number.MAX_SAFE_INTEGER), '+/////H');
        },
    });
})($ || ($ = {}));
//vlq.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'sample source mapped lang'($) {
            const source = {
                script1: `1@\n2`,
                script2: `***`
            };
            const span = {
                script1: $_1.$mol_span.entire('script1', source.script1),
                script2: $_1.$mol_span.entire('script2', source.script2),
            };
            const tree = $_1.$mol_tree2.list([
                $_1.$mol_tree2.struct('line', [
                    $_1.$mol_tree2.data('"use strict";', [], span.script1.after()),
                    $_1.$mol_tree2.data('console.log(11);', [], span.script1.slice(0, 1)),
                    $_1.$mol_tree2.data('console.log(21);', [], span.script2),
                    $_1.$mol_tree2.data('console.log(12);', [], span.script1.span(2, 1, 1)),
                ], span.script1),
            ], span.script1);
            $_1.$mol_assert_like($.$mol_tree2_text_to_string(tree), '"use strict";console.log(11);console.log(21);console.log(12);\n');
            $_1.$mol_assert_like($.$mol_tree2_text_to_sourcemap(tree), {
                "version": 3,
                "sources": [
                    "script1",
                    "script2"
                ],
                "sourcesContent": [source.script1, source.script2],
                "mappings": "AAAA,AAAI,aAAJ,gBCAA,gBDCA,;"
            });
        }
    });
})($ || ($ = {}));
//sourcemap.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        '$mol_leb128'() {
            $.$mol_assert_like($.$mol_leb128_encode(0), new Uint8Array([0]));
            $.$mol_assert_like($.$mol_leb128_encode(624485), new Uint8Array([0xE5, 0x8E, 0x26]));
            $.$mol_assert_equal($.$mol_leb128_decode(new Uint8Array([0xE5, 0x8E, 0x26])), 624485);
        },
    });
})($ || ($ = {}));
//leb128.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'hello world'() {
            const buffer = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 146, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 5, 104, 101, 108, 108, 111, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 16, 11, 11, 146, 128, 128, 128, 0, 1, 0, 65, 16, 11, 12, 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 0]);
            const wasm = new $.$mol_wasm_module(buffer).instance();
            const hello = wasm.get('hello');
            $.$mol_assert_equal(wasm.string(hello(), 11), 'Hello World');
        },
    });
})($ || ($ = {}));
//wasm.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'module'($) {
            const code = $.$mol_tree2_from_string(``);
            $_1.$mol_assert_like(new Uint8Array($_1.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([0, 0x61, 0x73, 0x6d, 0x1, 0, 0, 0]));
        },
        'custom section'($) {
            const code = $.$mol_tree2_from_string(`
				custom xxx
			`);
            $_1.$mol_assert_like(new Uint8Array($_1.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([0, 0x61, 0x73, 0x6d, 0x1, 0, 0, 0, 0, 0x4, 0x3, 0x78, 0x78, 0x78]));
        },
        'type section with value types'($) {
            const code = $.$mol_tree2_from_string(`
				type xxx
					=> i32
					=> i64
					=> f32
					<= f64
			`);
            $_1.$mol_assert_like(new Uint8Array($_1.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([0, 0x61, 0x73, 0x6d, 0x01, 0, 0, 0, 0x01, 0x08, 0x01, 0x60, 0x03, 0x7f, 0x7e, 0x7d, 0x01, 0x7c]));
        },
        'import section'($) {
            const code = $.$mol_tree2_from_string(`
				type xxx
				import foo.bar func xxx
			`);
            $_1.$mol_assert_like(new Uint8Array($_1.$mol_tree2_wasm_to_module(code).buffer), new Uint8Array([
                0, 0x61, 0x73, 0x6d, 0x01, 0, 0, 0,
                0x01, 0x04, 0x01, 0x60, 0, 0,
                0x02, 0x0b, 0x01, 0x03, 0x66, 0x6f, 0x6f, 0x03, 0x62, 0x61, 0x72, 0, 0
            ]));
        },
    });
})($ || ($ = {}));
//bin.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        const src = `
		$${''}my_test $${''}my_super
			title @ \\title
			sub /
				<= Title $${''}mol_view
					sub /
						<= title
				<= Close $${''}mol_button
					title \close
					click?event <=> close?event null
			plugins /
				<= Speech $${''}mol_speech
					text => speech
	`;
        const dest = $$.$mol_tree2_from_string(`
		title @ \\title
		sub /
			<= Title
			<= Close
		plugins / <= Speech
		Title $${''}mol_view sub / <= title
		close?event null
		Close $${''}mol_button
			title \close
			click?event <=> close?event
		Speech $${''}mol_speech text => speech
	`, 'reference');
        $_1.$mol_test({
            'props'($) {
                const mod = $.$mol_tree2_from_string(src, '/mol/view/tree2/class/props.test.ts');
                const result = $.$mol_view_tree2_class_props(mod.kids[0]).join('');
                $_1.$mol_assert_equal(result, dest.toString());
            }
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//props.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $.$mol_state_local {
            static value(key, next = this.state[key], force) {
                return this.state[key] = (next || null);
            }
        }
        $mol_state_local_mock.state = {};
        __decorate([
            $.$mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//local.mock.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), str);
            $.$mol_assert_equal($.$mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $.$mol_assert_equal($.$mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//decode.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $.$mol_assert_like($.$mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//encode.test.js.map
;
"use strict";
var $;
(function ($) {
    class TestClass extends Uint8Array {
    }
    $.$mol_test({
        'Uint8Array vs itself'() {
            $.$mol_assert_ok($.$mol_compare_array(new Uint8Array, new Uint8Array));
            $.$mol_assert_ok($.$mol_compare_array(new Uint8Array([0]), new Uint8Array([0])));
            $.$mol_assert_not($.$mol_compare_array(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Uint8Array vs subclassed array'() {
            $.$mol_assert_not($.$mol_compare_array(new Uint8Array, new TestClass));
        },
    });
})($ || ($ = {}));
//array.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    $.$mol_base64_decode = $mol_base64_decode_node;
})($ || ($ = {}));
//decode.node.js.map
;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $.$mol_test({
        'base64 decode string'() {
            $.$mol_assert_like($.$mol_base64_decode('SGVsbG8sIM6nzqjOqdCr'), new TextEncoder().encode('Hello, ΧΨΩЫ'));
        },
        'base64 decode binary'() {
            $.$mol_assert_like($.$mol_base64_decode('GgoASUh42g=='), png);
        },
    });
})($ || ($ = {}));
//decode.test.js.map
;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3Rfc2ltcGxlICRtb2xfdmlldwoJc3RyIFxzb21lCgludW0gMTIzMTcKCWJvb2wgdHJ1ZQoJbnVsIG51bGwKCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCW11bHRpX3N0ciBcCgkJXG9uZQoJCVx0d28KCXNhbWU/dmFsIFwKCS0gY29tbWVudGVkX25vZGUgLwoJCTw9IE5vdGVzX3BhZ2VfdGl0bGUhdGFnCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/simple.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X3NpbXBsZSBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHN0ciBcc29tZQoJCSAqIGBgYAoJCSAqLwoJCXN0cigpIHsKCQkJcmV0dXJuICJzb21lIgoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbnVtIDEyMzE3CgkJICogYGBgCgkJICovCgkJbnVtKCkgewoJCQlyZXR1cm4gMTIzMTcKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGJvb2wgdHJ1ZQoJCSAqIGBgYAoJCSAqLwoJCWJvb2woKSB7CgkJCXJldHVybiB0cnVlCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBudWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCW51bCgpIHsKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlCgkJICogYGBgCgkJICovCgkJbG9jYWxpemVkKCkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9zaW1wbGVfbG9jYWxpemVkJyApCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBtdWx0aV9zdHIgXAoJCSAqIAlcb25lCgkJICogCVx0d28KCQkgKiBgYGAKCQkgKi8KCQltdWx0aV9zdHIoKSB7CgkJCXJldHVybiAib25lXG50d28iCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzYW1lP3ZhbCBcCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXNhbWUodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCXJldHVybiAiIgoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYXJyYXkgJG1vbF92aWV3Cgl0eXBlZCAvc3RyaW5nCgkJXHNvbWUxCgkJXHNvbWUyCgljb25zdCAvY29uc3QKCQlcc29tZTEKCQlcc29tZTIKCXN1cGVyX3Byb3AgLwoJCVxzb21lMQoJCV4KCQlcc29tZTIKCQleIHRlc3QKCXNpbXBsZSAvCgkJXHNvbWUKCQkxMjMxNwoJCXRydWUKCQludWxsCglhcnIgL3JlYWRvbmx5KG51bWJlcilbXQoJY29tcGxleCAvCgkJLwoJCQlcdGVzdDEKCQkJXHRlc3QyCgkJKgoJCQlzdHIgXHNvbWUKCQkJbnVsIG51bGwK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/array.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2FycmF5IGV4dGVuZHMgJG1vbF92aWV3IHsKCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogdHlwZWQgL3N0cmluZwoJCSAqIAlcc29tZTEKCQkgKiAJXHNvbWUyCgkJICogYGBgCgkJICovCgkJdHlwZWQoKSB7CgkJCXJldHVybiBbCgkJCQkic29tZTEiLAoJCQkJInNvbWUyIgoJCQldIGFzIHJlYWRvbmx5IHN0cmluZ1tdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjb25zdCAvY29uc3QKCQkgKiAJXHNvbWUxCgkJICogCVxzb21lMgoJCSAqIGBgYAoJCSAqLwoJCWNvbnN0KCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCSJzb21lMiIKCQkJXSBhcyBjb25zdAoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc3VwZXJfcHJvcCAvCgkJICogCVxzb21lMQoJCSAqIAleCgkJICogCVxzb21lMgoJCSAqIAleIHRlc3QKCQkgKiBgYGAKCQkgKi8KCQlzdXBlcl9wcm9wKCkgewoJCQlyZXR1cm4gWwoJCQkJInNvbWUxIiwKCQkJCS4uLnN1cGVyLnN1cGVyX3Byb3AoKSwKCQkJCSJzb21lMiIsCgkJCQkuLi50aGlzLnRlc3QoKQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzaW1wbGUgLwoJCSAqIAlcc29tZQoJCSAqIAkxMjMxNwoJCSAqIAl0cnVlCgkJICogCW51bGwKCQkgKiBgYGAKCQkgKi8KCQlzaW1wbGUoKSB7CgkJCXJldHVybiBbCgkJCQkic29tZSIsCgkJCQkxMjMxNywKCQkJCXRydWUsCgkJCQludWxsIGFzIGFueQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBhcnIgL3JlYWRvbmx5KG51bWJlcilbXQoJCSAqIGBgYAoJCSAqLwoJCWFycigpIHsKCQkJcmV0dXJuIFsKCQkJXSBhcyByZWFkb25seSAocmVhZG9ubHkobnVtYmVyKVtdKVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjb21wbGV4IC8KCQkgKiAJLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJKgoJCSAqIAkJc3RyIFxzb21lCgkJICogCQludWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCWNvbXBsZXgoKSB7CgkJCXJldHVybiBbCgkJCQlbCgkJCQkJInRlc3QxIiwKCQkJCQkidGVzdDIiCgkJCQldIGFzIHJlYWRvbmx5IGFueVtdLAoJCQkJewoJCQkJCXN0cjogInNvbWUiLAoJCQkJCW51bDogbnVsbCBhcyBhbnkKCQkJCX0KCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZGljdGlvbmFyeSAkbW9sX3ZpZXcKCXN1cGVyX3Byb3AgKgoJCXN0ciBcc29tZQoJCV4KCQlzdHIyIFxzb21lCgkJXiB0ZXN0CglzaW1wbGUgKgoJCSRzdHIgXHNvbWUKCQluLXVtIDEyMzE3CgkJYm9vbCB0cnVlCgkJbnVsIG51bGwKCQlsb2NhbGl6ZWQgQCBcbG9jYWxpemVkIHZhbHVlMQoJY29tcGxleCAqCgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWNoaWxkICoKCQkJc3RyIFxzb21lCgkJCW51bSAxMjMxNwoJCQlib29sIHRydWUKCQkJbnVsIG51bGwKCQkJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZTIK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/dictionary.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdXBlcl9wcm9wICoKCQkgKiAJc3RyIFxzb21lCgkJICogCV4KCQkgKiAJc3RyMiBcc29tZQoJCSAqIAleIHRlc3QKCQkgKiBgYGAKCQkgKi8KCQlzdXBlcl9wcm9wKCkgewoJCQlyZXR1cm4gewoJCQkJc3RyOiAic29tZSIsCgkJCQkuLi5zdXBlci5zdXBlcl9wcm9wKCksCgkJCQlzdHIyOiAic29tZSIsCgkJCQkuLi50aGlzLnRlc3QoKQoJCQl9CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzaW1wbGUgKgoJCSAqIAkkc3RyIFxzb21lCgkJICogCW4tdW0gMTIzMTcKCQkgKiAJYm9vbCB0cnVlCgkJICogCW51bCBudWxsCgkJICogCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUxCgkJICogYGBgCgkJICovCgkJc2ltcGxlKCkgewoJCQlyZXR1cm4gewoJCQkJIiRzdHIiOiAic29tZSIsCgkJCQkibi11bSI6IDEyMzE3LAoJCQkJYm9vbDogdHJ1ZSwKCQkJCW51bDogbnVsbCBhcyBhbnksCgkJCQlsb2NhbGl6ZWQ6IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZGljdGlvbmFyeV9zaW1wbGVfbG9jYWxpemVkJyApCgkJCX0KCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNvbXBsZXggKgoJCSAqIAlhcnIgLwoJCSAqIAkJXHRlc3QxCgkJICogCQlcdGVzdDIKCQkgKiAJY2hpbGQgKgoJCSAqIAkJc3RyIFxzb21lCgkJICogCQludW0gMTIzMTcKCQkgKiAJCWJvb2wgdHJ1ZQoJCSAqIAkJbnVsIG51bGwKCQkgKiAJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUyCgkJICogYGBgCgkJICovCgkJY29tcGxleCgpIHsKCQkJcmV0dXJuIHsKCQkJCWFycjogWwoJCQkJCSJ0ZXN0MSIsCgkJCQkJInRlc3QyIgoJCQkJXSBhcyByZWFkb25seSBhbnlbXSwKCQkJCWNoaWxkOiB7CgkJCQkJc3RyOiAic29tZSIsCgkJCQkJbnVtOiAxMjMxNywKCQkJCQlib29sOiB0cnVlLAoJCQkJCW51bDogbnVsbCBhcyBhbnksCgkJCQkJbG9jYWxpemVkOiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2RpY3Rpb25hcnlfY29tcGxleF9jaGlsZF9sb2NhbGl6ZWQnICkKCQkJCX0KCQkJfQoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZmFjdG9yeSAkbW9sX3ZpZXcKCVNpbXBsZSAkbW9sX3ZpZXcKCQlzdHIgXHNvbWUKCQludW0gMTIzMTcKCQlib29sIHRydWUKCQludWwgbnVsbAoJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUNvbXBsZXggJG1vbF92aWV3CgkJYXJyIC8KCQkJXHRlc3QxCgkJCVx0ZXN0MgoJCWRpY3QgKgoJCQlzdHIgXHNvbWUyCgkJCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCUFyciAkbW9sX3ZlY3Rvcl8yZCAvCgkJPD0gdmlld3BvcnRfeCAkbW9sX3ZlY3Rvcl9yYW5nZSAvCgkJCUluZmluaXR5CgkJCS1JbmZpbml0eQoJCTw9IHZpZXdwb3J0X3kgJG1vbF92ZWN0b3JfcmFuZ2UgLwoJCQlJbmZpbml0eQoJCQktSW5maW5pdHkK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/factory.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2ZhY3RvcnkgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBTaW1wbGUgJG1vbF92aWV3CgkJICogCXN0ciBcc29tZQoJCSAqIAludW0gMTIzMTcKCQkgKiAJYm9vbCB0cnVlCgkJICogCW51bCBudWxsCgkJICogCWxvY2FsaXplZCBAIFxsb2NhbGl6ZWQgdmFsdWUKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJU2ltcGxlKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouc3RyID0gKCkgPT4gInNvbWUiCgkJCW9iai5udW0gPSAoKSA9PiAxMjMxNwoJCQlvYmouYm9vbCA9ICgpID0+IHRydWUKCQkJb2JqLm51bCA9ICgpID0+IG51bGwgYXMgYW55CgkJCW9iai5sb2NhbGl6ZWQgPSAoKSA9PiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2ZhY3RvcnlfU2ltcGxlX2xvY2FsaXplZCcgKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogQ29tcGxleCAkbW9sX3ZpZXcKCQkgKiAJYXJyIC8KCQkgKiAJCVx0ZXN0MQoJCSAqIAkJXHRlc3QyCgkJICogCWRpY3QgKgoJCSAqIAkJc3RyIFxzb21lMgoJCSAqIAkJbG9jYWxpemVkIEAgXGxvY2FsaXplZCB2YWx1ZQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlDb21wbGV4KCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouYXJyID0gKCkgPT4gWwoJCQkJInRlc3QxIiwKCQkJCSJ0ZXN0MiIKCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCQlvYmouZGljdCA9ICgpID0+ICh7CgkJCQlzdHI6ICJzb21lMiIsCgkJCQlsb2NhbGl6ZWQ6IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfZmFjdG9yeV9Db21wbGV4X2RpY3RfbG9jYWxpemVkJyApCgkJCX0pCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBBcnIgJG1vbF92ZWN0b3JfMmQgLwoJCSAqIAk8PSB2aWV3cG9ydF94CgkJICogCTw9IHZpZXdwb3J0X3kKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJQXJyKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmVjdG9yXzJkKAoJCQkJdGhpcy52aWV3cG9ydF94KCksCgkJCQl0aGlzLnZpZXdwb3J0X3koKQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB2aWV3cG9ydF94ICRtb2xfdmVjdG9yX3JhbmdlIC8KCQkgKiAJSW5maW5pdHkKCQkgKiAJLUluZmluaXR5CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXZpZXdwb3J0X3goKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92ZWN0b3JfcmFuZ2UoCgkJCQlJbmZpbml0eSwKCQkJCS1JbmZpbml0eQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB2aWV3cG9ydF95ICRtb2xfdmVjdG9yX3JhbmdlIC8KCQkgKiAJSW5maW5pdHkKCQkgKiAJLUluZmluaXR5CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCXZpZXdwb3J0X3koKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92ZWN0b3JfcmFuZ2UoCgkJCQlJbmZpbml0eSwKCQkJCS1JbmZpbml0eQoJCQkpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJfQoJCn0KCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSAkbW9sX3ZpZXcKCXN0ciBcc29tZQoKJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYiAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19hCglzdHIgXHNvbWUyCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/multiple_class.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X211bHRpcGxlX2NsYXNzX2EgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzdHIgXHNvbWUKCQkgKiBgYGAKCQkgKi8KCQlzdHIoKSB7CgkJCXJldHVybiAic29tZSIKCQl9Cgl9CgkKCWV4cG9ydCBjbGFzcyAkbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9tdWx0aXBsZV9jbGFzc19iIGV4dGVuZHMgJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfbXVsdGlwbGVfY2xhc3NfYSB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHN0ciBcc29tZTIKCQkgKiBgYGAKCQkgKi8KCQlzdHIoKSB7CgkJCXJldHVybiAic29tZTIiCgkJfQoJfQoJCn0KCg=="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0ICRtb2xfdmlldwoJZGVmYXVsdCA8PSBkZWZhdWx0X293bmVyIFx0ZXN0CgllbXB0eSA8PSBlbXB0eV9vd25lcgoJaW5kZXhlZCFrZXkgPD0gaW5kZXhlZF9vd25lciFrZXkKCWluZGV4ZWRfZGVmYXVsdCFrZXkgPD0gaW5kZXhlZF9kZWZhdWx0X293bmVyIWtleSBudWxsCgljbGFzcyA8PSBjbGFzc19vd25lciAkbW9sX3ZpZXcKCXR3aWNlIG51bGwKCXdyaXRhYmxlIDw9IHdyaXRhYmxlX293bmVyP3ZhbCBcCgljbGFzc19pbmRleGVkIWtleSA8PSBjbGFzc19pbmRleGVkX293bmVyIWtleSAkbW9sX3ZpZXcKCQl0aXRsZSBAIFxzb21lMQoJCXNhbWUgPD0gc2FtZT92YWwgXAoJCXNvbWUgPD0gdHdpY2UKCQlsb2NhbGl6ZWQgPD0gbG9jYWxpemVkX293bmVyIWtleSBAIFxzb21lMQoJCWNoYWluIDw9IGNoYWluMSA8PSBjaGFpbjIgbnVsbAoJYXJyIC8KCQk8PSBEZXRhaWxfbGlzdCAkbW9sX2xpc3QKCQkJcm93cyA8PSBtYWluX2NvbnRlbnQgLwoJCSoKCQkJbG9jIDw9IGxvY19vdXRlciBAIFx0ZXN0IGxvY2FsaXplCgkJKgoJCQlsb2MgPD0gbG9jX291dGVyIEAgXHRlc3QgbG9jYWxpemUKCXNhbWUyIEAgXFNvbWUKCVNhbWUKCQk8PSBTdWIgJG1vbF92aWV3CgkJCXNhbWUgPD0gc2FtZTIgLQo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/left.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdCBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGRlZmF1bHQgPD0gZGVmYXVsdF9vd25lcgoJCSAqIGBgYAoJCSAqLwoJCWRlZmF1bHQoKSB7CgkJCXJldHVybiB0aGlzLmRlZmF1bHRfb3duZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZW1wdHkgPD0gZW1wdHlfb3duZXIKCQkgKiBgYGAKCQkgKi8KCQllbXB0eSgpIHsKCQkJcmV0dXJuIHRoaXMuZW1wdHlfb3duZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZCFrZXkgPD0gaW5kZXhlZF9vd25lciFrZXkKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkKGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLmluZGV4ZWRfb3duZXIoa2V5KQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF9kZWZhdWx0IWtleSA8PSBpbmRleGVkX2RlZmF1bHRfb3duZXIha2V5CgkJICogYGBgCgkJICovCgkJaW5kZXhlZF9kZWZhdWx0KGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLmluZGV4ZWRfZGVmYXVsdF9vd25lcihrZXkpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzcyA8PSBjbGFzc19vd25lcgoJCSAqIGBgYAoJCSAqLwoJCWNsYXNzKCkgewoJCQlyZXR1cm4gdGhpcy5jbGFzc19vd25lcigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB0d2ljZSBudWxsCgkJICogYGBgCgkJICovCgkJdHdpY2UoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGUgPD0gd3JpdGFibGVfb3duZXI/dmFsCgkJICogYGBgCgkJICovCgkJd3JpdGFibGUoKSB7CgkJCXJldHVybiB0aGlzLndyaXRhYmxlX293bmVyKCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX2luZGV4ZWQha2V5IDw9IGNsYXNzX2luZGV4ZWRfb3duZXIha2V5CgkJICogYGBgCgkJICovCgkJY2xhc3NfaW5kZXhlZChrZXk6IGFueSkgewoJCQlyZXR1cm4gdGhpcy5jbGFzc19pbmRleGVkX293bmVyKGtleSkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGFyciAvCgkJICogCTw9IERldGFpbF9saXN0CgkJICogCSogbG9jIDw9IGxvY19vdXRlcgoJCSAqIAkqIGxvYyA8PSBsb2Nfb3V0ZXIKCQkgKiBgYGAKCQkgKi8KCQlhcnIoKSB7CgkJCXJldHVybiBbCgkJCQl0aGlzLkRldGFpbF9saXN0KCksCgkJCQl7CgkJCQkJbG9jOiB0aGlzLmxvY19vdXRlcigpCgkJCQl9LAoJCQkJewoJCQkJCWxvYzogdGhpcy5sb2Nfb3V0ZXIoKQoJCQkJfQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzYW1lMiBAIFxTb21lCgkJICogYGBgCgkJICovCgkJc2FtZTIoKSB7CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfbGVmdF9zYW1lMicgKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogU2FtZSA8PSBTdWIKCQkgKiBgYGAKCQkgKi8KCQlTYW1lKCkgewoJCQlyZXR1cm4gdGhpcy5TdWIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZGVmYXVsdF9vd25lciBcdGVzdAoJCSAqIGBgYAoJCSAqLwoJCWRlZmF1bHRfb3duZXIoKSB7CgkJCXJldHVybiAidGVzdCIKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGluZGV4ZWRfZGVmYXVsdF9vd25lciFrZXkgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCWluZGV4ZWRfZGVmYXVsdF9vd25lcihrZXk6IGFueSkgewoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX293bmVyICRtb2xfdmlldwoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQljbGFzc19vd25lcigpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogd3JpdGFibGVfb3duZXI/dmFsIFwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJd3JpdGFibGVfb3duZXIodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCXJldHVybiAiIgoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogc2FtZT92YWwgXAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlzYW1lKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQlyZXR1cm4gIiIKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY2FsaXplZF9vd25lciFrZXkgQCBcc29tZTEKCQkgKiBgYGAKCQkgKi8KCQlsb2NhbGl6ZWRfb3duZXIoa2V5OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0X2xvY2FsaXplZF9vd25lcicgKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2hhaW4yIG51bGwKCQkgKiBgYGAKCQkgKi8KCQljaGFpbjIoKSB7CgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2hhaW4xIDw9IGNoYWluMgoJCSAqIGBgYAoJCSAqLwoJCWNoYWluMSgpIHsKCQkJcmV0dXJuIHRoaXMuY2hhaW4yKCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNsYXNzX2luZGV4ZWRfb3duZXIha2V5ICRtb2xfdmlldwoJCSAqIAl0aXRsZSBAIFxzb21lMQoJCSAqIAlzYW1lIDw9IHNhbWU/dmFsCgkJICogCXNvbWUgPD0gdHdpY2UKCQkgKiAJbG9jYWxpemVkIDw9IGxvY2FsaXplZF9vd25lciFrZXkKCQkgKiAJY2hhaW4gPD0gY2hhaW4xCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbV9rZXkKCQljbGFzc19pbmRleGVkX293bmVyKGtleTogYW55KSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCW9iai50aXRsZSA9ICgpID0+IHRoaXMuJC4kbW9sX2xvY2FsZS50ZXh0KCAnJG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9sZWZ0X2NsYXNzX2luZGV4ZWRfb3duZXJfdGl0bGUnICkKCQkJb2JqLnNhbWUgPSAoKSA9PiB0aGlzLnNhbWUoKQoJCQlvYmouc29tZSA9ICgpID0+IHRoaXMudHdpY2UoKQoJCQlvYmoubG9jYWxpemVkID0gKCkgPT4gdGhpcy5sb2NhbGl6ZWRfb3duZXIoa2V5KQoJCQlvYmouY2hhaW4gPSAoKSA9PiB0aGlzLmNoYWluMSgpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBtYWluX2NvbnRlbnQgLwoJCSAqIGBgYAoJCSAqLwoJCW1haW5fY29udGVudCgpIHsKCQkJcmV0dXJuIFsKCQkJXSBhcyByZWFkb25seSBhbnlbXQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogRGV0YWlsX2xpc3QgJG1vbF9saXN0IHJvd3MgPD0gbWFpbl9jb250ZW50CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCURldGFpbF9saXN0KCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfbGlzdCgpCgkJCQoJCQlvYmoucm93cyA9ICgpID0+IHRoaXMubWFpbl9jb250ZW50KCkKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGxvY19vdXRlciBAIFx0ZXN0IGxvY2FsaXplCgkJICogYGBgCgkJICovCgkJbG9jX291dGVyKCkgewoJCQlyZXR1cm4gdGhpcy4kLiRtb2xfbG9jYWxlLnRleHQoICckbW9sX3ZpZXdfdHJlZTJfdHNfdGVzdF9iaW5kX2xlZnRfbG9jX291dGVyJyApCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBTdWIgJG1vbF92aWV3IHNhbWUgPD0gc2FtZTIKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJU3ViKCkgewoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouc2FtZSA9ICgpID0+IHRoaXMuc2FtZTIoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCX0KCQp9Cgo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9yaWdodCAkbW9sX3ZpZXcKCUNscyAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlcgoJCXdyaXRhYmxlP3ZhbCA9PiB3cml0YWJsZV9vdXRlcj92YWwKCQlpbmRleGVkIWtleSA9PiBpbmRleGVkX291dGVyIWtleQoJCWluZGV4ZWRfd3JpdGFibGUha2V5P3ZhbCA9PiBpbmRleGVkX3dyaXRhYmxlX291dGVyIWtleT92YWwKCXEgPD0gQ2xzMiAkbW9sX3ZpZXcKCQlpbm5lciA9PiBvdXRlclEKCUluZGV4ZWQhaW5kZXggJG1vbF92aWV3CgkJVGl0bGUgPT4gT3V0ZXJfdGl0bGUhaW5kZXgK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/right.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfcmlnaHQgZXh0ZW5kcyAkbW9sX3ZpZXcgewoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBvdXRlcgoJCSAqIGBgYAoJCSAqLwoJCW91dGVyKCkgewoJCQlyZXR1cm4gdGhpcy5DbHMoKS5pbm5lcigpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiB3cml0YWJsZV9vdXRlcj92YWwKCQkgKiBgYGAKCQkgKi8KCQl3cml0YWJsZV9vdXRlcih2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuQ2xzKCkud3JpdGFibGUodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF9vdXRlciFrZXkKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkX291dGVyKGtleTogYW55KSB7CgkJCXJldHVybiB0aGlzLkNscygpLmluZGV4ZWQoa2V5KQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZF93cml0YWJsZV9vdXRlciFrZXk/dmFsCgkJICogYGBgCgkJICovCgkJaW5kZXhlZF93cml0YWJsZV9vdXRlcihrZXk6IGFueSwgdmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLkNscygpLmluZGV4ZWRfd3JpdGFibGUoa2V5LCB2YWwpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBDbHMgJG1vbF92aWV3CgkJICogCWlubmVyID0+IG91dGVyCgkJICogCXdyaXRhYmxlP3ZhbCA9PiB3cml0YWJsZV9vdXRlcj92YWwKCQkgKiAJaW5kZXhlZCFrZXkgPT4gaW5kZXhlZF9vdXRlciFrZXkKCQkgKiAJaW5kZXhlZF93cml0YWJsZSFrZXk/dmFsID0+IGluZGV4ZWRfd3JpdGFibGVfb3V0ZXIha2V5P3ZhbAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlDbHMoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCXJldHVybiBvYmoKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHEgPD0gQ2xzMgoJCSAqIGBgYAoJCSAqLwoJCXEoKSB7CgkJCXJldHVybiB0aGlzLkNsczIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogT3V0ZXJfdGl0bGUhaW5kZXgKCQkgKiBgYGAKCQkgKi8KCQlPdXRlcl90aXRsZShpbmRleDogYW55KSB7CgkJCXJldHVybiB0aGlzLkluZGV4ZWQoaW5kZXgpLlRpdGxlKCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIEluZGV4ZWQhaW5kZXggJG1vbF92aWV3IFRpdGxlID0+IE91dGVyX3RpdGxlIWluZGV4CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbV9rZXkKCQlJbmRleGVkKGluZGV4OiBhbnkpIHsKCQkJY29uc3Qgb2JqID0gbmV3IHRoaXMuJC4kbW9sX3ZpZXcoKQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogb3V0ZXJRCgkJICogYGBgCgkJICovCgkJb3V0ZXJRKCkgewoJCQlyZXR1cm4gdGhpcy5DbHMyKCkuaW5uZXIoKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogQ2xzMiAkbW9sX3ZpZXcgaW5uZXIgPT4gb3V0ZXJRCgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCUNsczIoKSB7CgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCXJldHVybiBvYmoKCQl9Cgl9CgkKfQoK"

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.tree.bin" ] = "data:application/octet-stream;base64,JG1vbF92aWV3X3RyZWUyX3RzX3Rlc3RfYmluZF9ib3RoICRtb2xfdmlldwoJd3JpdGFibGU/dmFsIDw9PiB3cml0YWJsZV9vd25lcj92YWwKCXdyaXRhYmxlX2RlZmF1bHQ/dmFsIDw9PiB3cml0YWJsZV9kZWZhdWx0X293bmVyP3ZhbCBudWxsCgljbGFzcz92YWwgPD0+IGNsYXNzX293bmVyP3ZhbCAkbW9sX3ZpZXcKCWluZGV4ZWQha2V5P3ZhbCA8PT4gaW5kZXhlZF9vd25lciFrZXk/dmFsIG51bGwKCXR3aWNlIG51bGwKCWNsYXNzX2luZGV4ZWQha2V5P3ZhbCAkbW9sX3ZpZXcKCQlleHBhbmRlZCA8PT4gY2VsbF9leHBhbmRlZCFrZXk/dmFsCgljbGFzc193cml0YWJsZT92YWwgPD0+IGNsYXNzX3dyaXRhYmxlX293bmVyP3ZhbCAkbW9sX3ZpZXcKCQlzb21lP3ZhbCA8PT4gdHdpY2U/dmFsCgkJbG9jYWxpemVkP3ZhbCA8PT4gbG9jYWxpemVkX293bmVyP3ZhbCBAIFxzb21lMQoJCWNoYWluP3YgPD0+IGNoYWluMT92IDw9PiBjaGFpbjI/diBudWxsCglhcnIgLwoJCSoKCQkJbG9jP3YgPD0+IGxvY19vdXRlcj92IEAgXHRlc3QgbG9jYWxpemUKCQkqCgkJCWxvYz92IDw9PiBsb2Nfb3V0ZXI/diBAIFx0ZXN0IGxvY2FsaXplCglzd2lwZV90b19sZWZ0P2V2ZW50IDw9PiBldmVudF9uZXh0P2V2ZW50IG51bGwKCWV2ZW50X2NhdGNoP3ZhbCA8PT4gZXZlbnRfbmV4dD92YWwgbnVsbAo="

;
var $node = $node || {} ; $node[ "/mol/view/tree2/ts/test/bind/both.view.ts.bin" ] = "data:application/octet-stream;base64,bmFtZXNwYWNlICQgewoJZXhwb3J0IGNsYXNzICRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aCBleHRlbmRzICRtb2xfdmlldyB7CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlP3ZhbCA8PT4gd3JpdGFibGVfb3duZXI/dmFsCgkJICogYGBgCgkJICovCgkJd3JpdGFibGUodmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLndyaXRhYmxlX293bmVyKHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlX2RlZmF1bHQ/dmFsIDw9PiB3cml0YWJsZV9kZWZhdWx0X293bmVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCXdyaXRhYmxlX2RlZmF1bHQodmFsPzogYW55KSB7CgkJCXJldHVybiB0aGlzLndyaXRhYmxlX2RlZmF1bHRfb3duZXIodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3M/dmFsIDw9PiBjbGFzc19vd25lcj92YWwKCQkgKiBgYGAKCQkgKi8KCQljbGFzcyh2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuY2xhc3Nfb3duZXIodmFsKQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogaW5kZXhlZCFrZXk/dmFsIDw9PiBpbmRleGVkX293bmVyIWtleT92YWwKCQkgKiBgYGAKCQkgKi8KCQlpbmRleGVkKGtleTogYW55LCB2YWw/OiBhbnkpIHsKCQkJcmV0dXJuIHRoaXMuaW5kZXhlZF9vd25lcihrZXksIHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHR3aWNlIG51bGwKCQkgKiBgYGAKCQkgKi8KCQl0d2ljZSgpIHsKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc19pbmRleGVkIWtleT92YWwgJG1vbF92aWV3IGV4cGFuZGVkIDw9PiBjZWxsX2V4cGFuZGVkIWtleT92YWwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtX2tleQoJCWNsYXNzX2luZGV4ZWQoa2V5OiBhbnksIHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlvYmouZXhwYW5kZWQgPSAoKSA9PiB0aGlzLmNlbGxfZXhwYW5kZWQoa2V5LCB2YWwpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc193cml0YWJsZT92YWwgPD0+IGNsYXNzX3dyaXRhYmxlX293bmVyP3ZhbAoJCSAqIGBgYAoJCSAqLwoJCWNsYXNzX3dyaXRhYmxlKHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5jbGFzc193cml0YWJsZV9vd25lcih2YWwpCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBhcnIgLwoJCSAqIAkqIGxvYz92IDw9PiBsb2Nfb3V0ZXI/dgoJCSAqIAkqIGxvYz92IDw9PiBsb2Nfb3V0ZXI/dgoJCSAqIGBgYAoJCSAqLwoJCWFycigpIHsKCQkJcmV0dXJuIFsKCQkJCXsKCQkJCQlsb2M6ICh2PzogYW55KSA9PiB0aGlzLmxvY19vdXRlcih2KQoJCQkJfSwKCQkJCXsKCQkJCQlsb2M6ICh2PzogYW55KSA9PiB0aGlzLmxvY19vdXRlcih2KQoJCQkJfQoJCQldIGFzIHJlYWRvbmx5IGFueVtdCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBzd2lwZV90b19sZWZ0P2V2ZW50IDw9PiBldmVudF9uZXh0P2V2ZW50CgkJICogYGBgCgkJICovCgkJc3dpcGVfdG9fbGVmdChldmVudD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5ldmVudF9uZXh0KGV2ZW50KQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogZXZlbnRfY2F0Y2g/dmFsIDw9PiBldmVudF9uZXh0P3ZhbAoJCSAqIGBgYAoJCSAqLwoJCWV2ZW50X2NhdGNoKHZhbD86IGFueSkgewoJCQlyZXR1cm4gdGhpcy5ldmVudF9uZXh0KHZhbCkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIHdyaXRhYmxlX2RlZmF1bHRfb3duZXI/dmFsIG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJd3JpdGFibGVfZGVmYXVsdF9vd25lcih2YWw/OiBhbnkpIHsKCQkJaWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHJldHVybiB2YWwKCQkJcmV0dXJuIG51bGwgYXMgYW55CgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBjbGFzc19vd25lcj92YWwgJG1vbF92aWV3CgkJICogYGBgCgkJICovCgkJQCAkbW9sX21lbQoJCWNsYXNzX293bmVyKHZhbD86IGFueSkgewoJCQlpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkgcmV0dXJuIHZhbAoJCQljb25zdCBvYmogPSBuZXcgdGhpcy4kLiRtb2xfdmlldygpCgkJCQoJCQlyZXR1cm4gb2JqCgkJfQoJCQoJCS8qKgoJCSAqIGBgYHRyZWUKCQkgKiBpbmRleGVkX293bmVyIWtleT92YWwgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW1fa2V5CgkJaW5kZXhlZF9vd25lcihrZXk6IGFueSwgdmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCXJldHVybiBudWxsIGFzIGFueQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jYWxpemVkX293bmVyP3ZhbCBAIFxzb21lMQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlsb2NhbGl6ZWRfb3duZXIodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aF9sb2NhbGl6ZWRfb3duZXInICkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMj92IG51bGwKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJY2hhaW4yKHY/OiBhbnkpIHsKCQkJaWYgKCB2ICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdgoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGNoYWluMT92IDw9PiBjaGFpbjI/dgoJCSAqIGBgYAoJCSAqLwoJCWNoYWluMSh2PzogYW55KSB7CgkJCXJldHVybiB0aGlzLmNoYWluMih2KQoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogY2xhc3Nfd3JpdGFibGVfb3duZXI/dmFsICRtb2xfdmlldwoJCSAqIAlzb21lP3ZhbCA8PT4gdHdpY2U/dmFsCgkJICogCWxvY2FsaXplZD92YWwgPD0+IGxvY2FsaXplZF9vd25lcj92YWwKCQkgKiAJY2hhaW4/diA8PT4gY2hhaW4xP3YKCQkgKiBgYGAKCQkgKi8KCQlAICRtb2xfbWVtCgkJY2xhc3Nfd3JpdGFibGVfb3duZXIodmFsPzogYW55KSB7CgkJCWlmICggdmFsICE9PSB1bmRlZmluZWQgKSByZXR1cm4gdmFsCgkJCWNvbnN0IG9iaiA9IG5ldyB0aGlzLiQuJG1vbF92aWV3KCkKCQkJCgkJCW9iai5zb21lID0gKHZhbD86IGFueSkgPT4gdGhpcy50d2ljZSh2YWwpCgkJCW9iai5sb2NhbGl6ZWQgPSAodmFsPzogYW55KSA9PiB0aGlzLmxvY2FsaXplZF9vd25lcih2YWwpCgkJCW9iai5jaGFpbiA9ICh2PzogYW55KSA9PiB0aGlzLmNoYWluMSh2KQoJCQkKCQkJcmV0dXJuIG9iagoJCX0KCQkKCQkvKioKCQkgKiBgYGB0cmVlCgkJICogbG9jX291dGVyP3YgQCBcdGVzdCBsb2NhbGl6ZQoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlsb2Nfb3V0ZXIodj86IGFueSkgewoJCQlpZiAoIHYgIT09IHVuZGVmaW5lZCApIHJldHVybiB2CgkJCXJldHVybiB0aGlzLiQuJG1vbF9sb2NhbGUudGV4dCggJyRtb2xfdmlld190cmVlMl90c190ZXN0X2JpbmRfYm90aF9sb2Nfb3V0ZXInICkKCQl9CgkJCgkJLyoqCgkJICogYGBgdHJlZQoJCSAqIGV2ZW50X25leHQ/ZXZlbnQgbnVsbAoJCSAqIGBgYAoJCSAqLwoJCUAgJG1vbF9tZW0KCQlldmVudF9uZXh0KGV2ZW50PzogYW55KSB7CgkJCWlmICggZXZlbnQgIT09IHVuZGVmaW5lZCApIHJldHVybiBldmVudAoJCQlyZXR1cm4gbnVsbCBhcyBhbnkKCQl9Cgl9CgkKfQoK"

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        function text(uri) {
            return $_1.$mol_charset_decode($_1.$mol_base64_decode(uri.replace(/^.*,/, '')));
        }
        $_1.$mol_test({
            async 'localized - simple'($) {
                const view = text(require('/mol/view/tree2/ts/test/simple.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/simple.view.ts.bin'));
                const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                const res = $.$mol_view_tree2_ts_compile(tree);
                $_1.$mol_assert_equal(res.locales['$mol_view_tree2_ts_test_simple_localized'], 'localized value');
                $_1.$mol_assert_equal(res.script, ts);
            },
            async 'localized - factory'($) {
                const view = text(require('/mol/view/tree2/ts/test/factory.view.tree.bin'));
                const ts = text(require('/mol/view/tree2/ts/test/factory.view.ts.bin'));
                const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                const res = $.$mol_view_tree2_ts_compile(tree);
                $_1.$mol_assert_equal(res.locales['$mol_view_tree2_ts_test_factory_Simple_localized'], 'localized value');
                $_1.$mol_assert_equal(res.script, ts);
            },
            async 'compiled'($) {
                const samples = new Map([
                    [
                        '',
                        '',
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/simple.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/simple.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/factory.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/factory.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/array.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/array.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/dictionary.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/dictionary.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/multiple_class.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/multiple_class.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/left.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/left.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/right.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/right.view.ts.bin')),
                    ],
                    [
                        text(require('/mol/view/tree2/ts/test/bind/both.view.tree.bin')),
                        text(require('/mol/view/tree2/ts/test/bind/both.view.ts.bin')),
                    ],
                ]);
                for (const [view, ts] of samples) {
                    const tree = $.$mol_tree2_from_string(view, 'factory.view.tree');
                    const res = $.$mol_view_tree2_ts_compile(tree);
                    $_1.$mol_assert_equal(res.script, ts);
                }
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//ts.test.js.map
;
"use strict";
//intersect.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'escape'() {
            const specials = $.$mol_regexp.from('.*+?^${}()|[]\\');
            $.$mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $.$mol_regexp.char_code(32);
            $.$mol_assert_equal(space.exec(' ')[0], ' ');
        },
        'repeat fixed'() {
            const { repeat, digit } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            $.$mol_assert_equal(year.exec('#2020#')[0], '2020');
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, letter } = $.$mol_regexp;
            $.$mol_assert_equal(repeat(letter).exec('abc')[0], '');
            $.$mol_assert_equal(repeat_greedy(letter).exec('abc')[0], 'abc');
        },
        'repeat range'() {
            const { repeat_greedy, digit } = $.$mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $.$mol_assert_equal(year.exec('#2#'), null);
            $.$mol_assert_equal(year.exec('#20#')[0], '20');
            $.$mol_assert_equal(year.exec('#2020#')[0], '2020');
            $.$mol_assert_equal(year.exec('#20201#')[0], '2020');
        },
        'repeat from'() {
            const { repeat_greedy, letter } = $.$mol_regexp;
            const name = repeat_greedy(letter, 2);
            $.$mol_assert_equal(name.exec('##'), null);
            $.$mol_assert_equal(name.exec('#a#'), null);
            $.$mol_assert_equal(name.exec('#ab#')[0], 'ab');
            $.$mol_assert_equal(name.exec('#abc#')[0], 'abc');
        },
        'optional'() {
            const { optional, letter } = $.$mol_regexp;
            const name = optional(letter);
            $.$mol_assert_equal(name.exec('')[0], '');
            $.$mol_assert_equal(name.exec('a')[0], 'a');
            $.$mol_assert_equal(name.exec('ab')[0], 'a');
        },
        'from string'() {
            const regexp = $.$mol_regexp.from('[\\d]');
            $.$mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $.$mol_assert_equal(regexp.flags, 'gu');
        },
        'from regexp'() {
            const regexp = $.$mol_regexp.from(/[\d]/i);
            $.$mol_assert_equal(regexp.source, '[\\d]');
            $.$mol_assert_equal(regexp.flags, 'i');
        },
        'case ignoring'() {
            const xxx = $.$mol_regexp.from('x', { ignoreCase: true });
            $.$mol_assert_like(xxx.flags, 'giu');
            $.$mol_assert_like(xxx.exec('xx')[0], 'x');
            $.$mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end } = $.$mol_regexp;
            const xxx = $.$mol_regexp.from(['x', end], { multiline: true });
            $.$mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $.$mol_assert_like(xxx.flags, 'gmu');
        },
        'sequence'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = $.$mol_regexp.from([begin, year, dash, month, dash, day, end], { ignoreCase: true });
            $.$mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
            $.$mol_assert_like(date.ignoreCase, true);
        },
        'only groups'() {
            const regexp = $.$mol_regexp.from({ dog: '@' });
            $.$mol_assert_like([...regexp.parse('#')], [{ 0: '#' }]);
            $.$mol_assert_like([...regexp.parse('@')], [{ dog: '@' }]);
        },
        'catch skipped'() {
            const regexp = $.$mol_regexp.from(/(@)(\d?)/g);
            $.$mol_assert_like([...regexp.parse('[[@]]')], [
                { 0: '[[' },
                { 1: '@', 2: '' },
                { 0: ']]' },
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from(Sex);
            $.$mol_assert_like([...sexism.parse('')], []);
            $.$mol_assert_like([...sexism.parse('male')], [{ male: 'male', female: '' }]);
            $.$mol_assert_like([...sexism.parse('female')], [{ male: '', female: 'female' }]);
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $.$mol_regexp.from({ Sex });
            $.$mol_assert_like([...sexism.parse('')], []);
            $.$mol_assert_like([...sexism.parse('male')], [{ Sex: 'male', male: 'male', female: '' }]);
            $.$mol_assert_like([...sexism.parse('female')], [{ Sex: 'female', male: '', female: 'female' }]);
        },
        'sequence with groups'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = $.$mol_regexp.from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...regexp.parse('2020-01-02')];
            $.$mol_assert_like(found, [{
                    year: '2020',
                    month: '01',
                    day: '02',
                }]);
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $.$mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            const found = [...regexp.parse('/foo/mi')];
            $.$mol_assert_like(found, [{
                    prefix: '/',
                    0: 'foo',
                    postfix: '/',
                    1: 'mi',
                }]);
        },
        'recursive sequence with groups'() {
            const { begin, end, digit, repeat } = $.$mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = $.$mol_regexp.from([begin, { date: [{ year }, dash, { month }] }, dash, { day }, end]);
            const found = [...regexp.parse('2020-01-02')];
            $.$mol_assert_like(found, [{
                    date: '2020-01',
                    year: '2020',
                    month: '01',
                    day: '02',
                }]);
        },
        'parse multiple'() {
            const { digit } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from({ digit });
            $.$mol_assert_like([...regexp.parse('123')], [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'variants'() {
            const { begin, or, end } = $.$mol_regexp;
            const sexism = $.$mol_regexp.from([begin, 'sex = ', { sex: ['male', or, 'female'] }, end]);
            $.$mol_assert_like([...sexism.parse('sex = male')], [{ sex: 'male' }]);
            $.$mol_assert_like([...sexism.parse('sex = female')], [{ sex: 'female' }]);
            $.$mol_assert_like([...sexism.parse('sex = malefemale')], [{ 0: 'sex = malefemale' }]);
        },
        'force after'() {
            const { letter, force_after } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from([letter, force_after('.')]);
            $.$mol_assert_equal(regexp.exec('x.')[0], 'x');
            $.$mol_assert_equal(regexp.exec('x5'), null);
        },
        'forbid after'() {
            const { letter, forbid_after } = $.$mol_regexp;
            const regexp = $.$mol_regexp.from([letter, forbid_after('.')]);
            $.$mol_assert_equal(regexp.exec('x.'), null);
            $.$mol_assert_equal(regexp.exec('x5')[0], 'x');
        },
        'byte except'() {
            const { byte_except, letter, tab } = $.$mol_regexp;
            const name = byte_except(letter, tab);
            $.$mol_assert_equal(name.exec('a'), null);
            $.$mol_assert_equal(name.exec('\t'), null);
            $.$mol_assert_equal(name.exec('(')[0], '(');
        },
    });
})($ || ($ = {}));
//regexp.test.js.map
;
"use strict";
//enforce.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'strong'() {
            const res = $.$hyoo_marked_line.parse('**text**').next().value;
            $.$mol_assert_equal(res.strong, '**text**');
            $.$mol_assert_equal(res.marker, '**');
            $.$mol_assert_equal(res.content, 'text');
        },
        'emphasis'() {
            const res = $.$hyoo_marked_line.parse('//text//').next().value;
            $.$mol_assert_equal(res.emphasis, '//text//');
            $.$mol_assert_equal(res.marker, '//');
            $.$mol_assert_equal(res.content, 'text');
        },
        'insertion'() {
            const res = $.$hyoo_marked_line.parse('++text++').next().value;
            $.$mol_assert_equal(res.insertion, '++text++');
            $.$mol_assert_equal(res.marker, '++');
            $.$mol_assert_equal(res.content, 'text');
        },
        'deletion'() {
            const res = $.$hyoo_marked_line.parse('--text--').next().value;
            $.$mol_assert_equal(res.deletion, '--text--');
            $.$mol_assert_equal(res.marker, '--');
            $.$mol_assert_equal(res.content, 'text');
        },
        'code'() {
            const res = $.$hyoo_marked_line.parse(';;text;;').next().value;
            $.$mol_assert_equal(res.code, ';;text;;');
            $.$mol_assert_equal(res.marker, ';;');
            $.$mol_assert_equal(res.content, 'text');
        },
        'nested simple'() {
            const res = $.$hyoo_marked_line.parse('**//foo//bar**').next().value;
            $.$mol_assert_equal(res.strong, '**//foo//bar**');
            $.$mol_assert_equal(res.marker, '**');
            $.$mol_assert_equal(res.content, '//foo//bar');
        },
        'nested simple overlap'() {
            const res = [...$.$hyoo_marked_line.parse('**//foo**bar//')];
            $.$mol_assert_equal(res[0].strong, '**//foo**');
            $.$mol_assert_equal(res[0].marker, '**');
            $.$mol_assert_equal(res[0].content, '//foo');
            $.$mol_assert_equal(res[1][0], 'bar//');
        },
        'link'() {
            const res = $.$hyoo_marked_line.parse('\\\\text\\url\\\\').next().value;
            $.$mol_assert_equal(res.link, '\\\\text\\url\\\\');
            $.$mol_assert_equal(res.marker, '\\\\');
            $.$mol_assert_equal(res.content, 'text');
            $.$mol_assert_equal(res.uri, 'url');
        },
        'embed'() {
            const res = $.$hyoo_marked_line.parse('""text\\url""').next().value;
            $.$mol_assert_equal(res.embed, '""text\\url""');
            $.$mol_assert_equal(res.marker, '""');
            $.$mol_assert_equal(res.content, 'text');
            $.$mol_assert_equal(res.uri, 'url');
        },
        'link with embed'() {
            const res = $.$hyoo_marked_line.parse('\\\\""text\\url1""\\url2\\\\').next().value;
            $.$mol_assert_equal(res.link, '\\\\""text\\url1""\\url2\\\\');
            $.$mol_assert_equal(res.marker, '\\\\');
            $.$mol_assert_equal(res.content, '""text\\url1""');
            $.$mol_assert_equal(res.uri, 'url2');
        },
    });
})($ || ($ = {}));
//line.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'test'($) {
            const root = Object.assign(Object.assign({}, $_1.$mol_jack), { 'foo': input => [input.struct('FOO')], 'FOO': input => [input.struct('FAIL')] });
            $_1.$mol_assert_like($.$mol_tree2_from_string(`
					test
						case foo
						case tree FOO
				`)
                .hack(root)
                .toString(), $.$mol_tree2_from_string(`
					test
						case foo
						case tree FOO
				`)
                .toString());
            $_1.$mol_assert_fail(() => {
                $.$mol_tree2_from_string(`
					test
						case \\foo
						case \\bar
				`)
                    .hack(root);
            });
        },
        'jack test'($) {
            const tests = $.$mol_tree2_from_string(`
				test
					name \\commented code
					case
						one
						no two
					case tree
						ONE
				test
					name \\name of struct node as value node
					case type
						one
						\\one
					case tree
						\\ONE
						\\
				test
					name \\kids of struct node
					case kids tree one two
					case tree two
				test
					name \\first element of list
					case head
						one
						two
						three
					case tree ONE
				test
					name \\list without first element
					case headless
						one
						two
						three
					case tree
						TWO
						THREE
				test
					name \\reversed list
					case reversed
						one
						two
						three
					case tree
						THREE
						TWO
						ONE
				test
					name \\quote tree
					name \\make tree node by type, value and sub list
					case tree head
						\\
						\\one
							\\two
						three
					case struct
						\\head
						struct \\
						data
							\\one
							\\two
						struct \\three
				test
					name \\evaluated jack code
					case jack head
						one
						two
						three
					case tree ONE
				test
					name \\define and use custom simple macro
					case jack
						hack PI float 3.14
						hack pi PI
						pi
					case float 3.14
				test
					name \\define and use custom macro with arguments
					case jack
						hack tail head reversed from
						tail
							one
							two
							three
					case tree THREE
			`);
            const res = tests.hack(Object.assign(Object.assign({}, $_1.$mol_jack.meta), { 'one': input => [input.struct('ONE')], 'two': input => [input.struct('TWO')], 'three': input => [input.struct('THREE')], 'ONE': input => [input.struct('XXX')], 'TWO': input => [input.struct('XXX')], 'THREE': input => [input.struct('XXX')] }));
        },
    });
})($ || ($ = {}));
//jack.test.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    $,
                    event_click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $_1.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $_1.$mol_assert_not(clicked);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//button.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe'() {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_work = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//work.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        '$mol_syntax2_md_flow'() {
            const check = (input, right) => {
                const tokens = [];
                $.$mol_syntax2_md_flow.tokenize(input, (...token) => tokens.push(token));
                $.$mol_assert_like(JSON.stringify(tokens), JSON.stringify(right));
            };
            check('Hello,\nWorld..\r\n\r\n\nof Love!', [
                ['block', 'Hello,\nWorld..\r\n\r\n\n', ['Hello,\nWorld..', '\r\n\r\n\n'], 0],
                ['block', 'of Love!', ['of Love!', ''], 19],
            ]);
            check('# Header1\n\nHello!\n\n## Header2', [
                ['header', '# Header1\n\n', ['#', ' ', 'Header1', '\n\n'], 0],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 11],
                ['header', '## Header2', ['##', ' ', 'Header2', ''], 19],
            ]);
            check('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```', [
                ['code', '```\nstart()\n```\n\n', ['```', '', 'start()\n', '```', '\n\n'], 0],
                ['code', '```js\nrestart()\n```\n\n', ['```', 'js', 'restart()\n', '```', '\n\n'], 17],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 38],
                ['code', '```\nstop()\n```', ['```', '', 'stop()\n', '```', ''], 46],
            ]);
            check('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n', [
                ['table', '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n', ['| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n', '\n'], 0],
                ['table', '| Cell11 | Cell12\n| Cell21 | Cell22\n', ['| Cell11 | Cell12\n| Cell21 | Cell22\n', ''], 68],
            ]);
        },
    });
})($ || ($ = {}));
//md.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'equal paths'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $.$mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $.$mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $.$mol_diff_path([1, 2], [3, 4], [5, 6]);
            $.$mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//path.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return result without errors'() {
            $.$mol_assert_equal($.$mol_try(() => false), false);
        },
    });
})($ || ($ = {}));
//try.test.js.map
;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $.$mol_test({
        'base64 encode string'() {
            $.$mol_assert_equal($.$mol_base64_encode('Hello, ΧΨΩЫ'), 'SGVsbG8sIM6nzqjOqdCr');
        },
        'base64 encode binary'() {
            $.$mol_assert_equal($.$mol_base64_encode(png), 'GgoASUh42g==');
        },
    });
})($ || ($ = {}));
//encode.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'tree parsing'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b c d').insert(new $_1.$mol_tree, null, null, null).toString(), 'a b \\\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromString('a b').insert(new $_1.$mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([]).toString(), '/\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $_1.$mol_assert_equal($_1.$mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n').sub[0]), '[]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $_1.$mol_assert_equal(JSON.stringify($_1.$mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $_1.$mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $_1.$mol_assert_equal(res.toString(), new $_1.$mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $_1.$mol_tree {
            }
            Tree.$ = $.$mol_ambient({
                $mol_fail: error => errors.push(error.message)
            });
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $_1.$mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//tree.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test({
        'Class as component'() {
            class Foo extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $_1.$mol_jsx("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $_1.$mol_jsx(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $_1.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $_1.$mol_jsx_view {
                render() {
                    view = this;
                    return $_1.$mol_jsx("br", { id: "/foo" });
                }
            }
            let view;
            $_1.$mol_assert_equal(Br.of($_1.$mol_jsx(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $_1.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.value);
                }
            }
            const dom = $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $_1.$mol_assert_equal(title.ownerDocument, doc);
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'($) {
            const doc = $_1.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task extends $_1.$mol_object2 {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $_1.$mol_mem
            ], Task.prototype, "title", null);
            class App extends $_1.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $_1.$mol_jsx("div", null, this.task().title());
                }
            }
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "task", null);
            __decorate([
                $_1.$mol_mem
            ], App.prototype, "valueOf", null);
            const task = new Task;
            task.$ = $;
            const autorun = $.$mol_atom2_autorun(() => $_1.$mol_jsx_attach(doc, () => $_1.$mol_jsx(App, { "$": $, id: "/foo", task: () => task })));
            autorun.$ = $;
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//equals.test.js.map
;
"use strict";
//equals.js.map
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $_1.$mol_test({
            'simple props'($) {
                const app = $_1.$mol_view_tree_test_simple.make({ $ });
                $_1.$mol_assert_equal(app.some(), 1);
                $_1.$mol_assert_equal(app.bool(), true);
                $_1.$mol_assert_equal(app.str(), 'test');
                $_1.$mol_assert_ok(Array.isArray(app.arr()));
                $_1.$mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_ok(app.value() !== 1);
                app.value(1);
                $_1.$mol_assert_equal(app.value(), 1);
            },
            'left binding'($) {
                const app = $_1.$mol_view_tree_test_binding.make({ $ });
                $_1.$mol_assert_not(app.head_complete_enabled());
                $_1.$mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                $_1.$mol_assert_ok(app.Test() instanceof $_1.$mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $_1.$mol_assert_equal(app.outer_width(), val);
                $_1.$mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $_1.$mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $_1.$mol_assert_ok(app.outer_width() !== val);
                $_1.$mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $_1.$mol_assert_equal(app.Test().width(), val);
                $_1.$mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $_1.$mol_view_tree_test_attributes.make({ $ });
                $_1.$mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $_1.$mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $_1.$mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//tree.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree2_wasm_to_bytes = $.$mol_data_pipe($.$mol_tree2_wasm_to_bin, $.$mol_tree2_bin_to_bytes);
})($ || ($ = {}));
//bytes.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree2_wasm_to_module = $.$mol_data_pipe($.$mol_tree2_wasm_to_bytes, $.$mol_wasm_module);
})($ || ($ = {}));
//module.js.map

//# sourceMappingURL=node.test.js.map
