/*! For license information please see stories-components-ui-button-stories.fbf8b616.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkvenditi_ui_v2=self.webpackChunkvenditi_ui_v2||[]).push([[779],{"./src/stories/components/ui/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component},LoaderCircle=createLucideIcon("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var utils=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(base="tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-xl tw-text-[16px] tw-font-[500] tw-transition-colors focus-visible:tw-outline-none disabled:tw-pointer-events-none tw-gap-[0.8rem]",config={variants:{variant:{primary:"tw-bg-primary-purple-75 tw-text-generic-white hover:tw-bg-primary-purple-100 focus:tw-bg-primary-purple-100 active:tw-bg-primary-purple-100 disabled:tw-bg-generic-grey disabled:tw-text-secondary-gray-80",secondary:"tw-bg-generic-white tw-text-primary tw-border tw-border-secondary-gray-80 hover:tw-bg-secondary-gray-20 focus:tw-bg-secondary-gray-20 active:tw-bg-secondary-gray-20 disabled:tw-text-secondary-gray-80 disabled:tw-border-secondary-gray-60"},size:{medium:"tw-px-[2.4rem] tw-py-[0.6rem] tw-min-h-[3.6rem]",large:"tw-px-[2.4rem] tw-py-[1.2rem] tw-min-h-[4.8rem]"},isLoading:{true:"tw-cursor-not-allowed tw-pointer-events-none"}},defaultVariants:{variant:"primary",size:"medium"}},props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)});var base,config;const Button=react.forwardRef((({className,variant,size,asChild=!1,isLoading=!1,children,...props},ref)=>{const Comp=asChild?dist.DX:"button";return(0,jsx_runtime.jsx)(Comp,{className:(0,utils.cn)(buttonVariants({variant,size,isLoading,className})),ref,...props,children:isLoading?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LoaderCircle,{className:"tw-h-[1.8rem] tw-w-[1.8rem] tw-animate-spin"}),(0,jsx_runtime.jsx)("span",{className:"tw-sr-only",children:"Loading"})]}):children})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};const Plus=createLucideIcon("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),button_stories={title:"Components/UI/Button",component:Button,tags:["autodocs"],argTypes:{asChild:{control:"boolean"},variant:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["medium","large"]},children:{control:"text"},isLoading:{control:"boolean"}},args:{variant:"primary",size:"medium",children:"Label",isLoading:!1}},Default={decorators:[(Story,context)=>(0,jsx_runtime.jsxs)("div",{className:"tw-flex tw-items-center tw-justify-center tw-gap-4 tw-h-[18rem]",children:[(0,jsx_runtime.jsx)(Button,{disabled:!0,size:context.args.size,variant:context.args.variant,children:context.args.children}),(0,jsx_runtime.jsx)(Story,{}),(0,jsx_runtime.jsxs)(Button,{size:context.args.size,variant:context.args.variant,children:[(0,jsx_runtime.jsx)(Plus,{className:"tw-h-[1.8rem] tw-w-[1.8rem]"}),context.args.children]})]})]},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  decorators: [(Story, context) => <div className="tw-flex tw-items-center tw-justify-center tw-gap-4 tw-h-[18rem]">\n        <Button disabled size={context.args.size} variant={context.args.variant}>\n          {context.args.children}\n        </Button>\n        <Story />\n        <Button size={context.args.size} variant={context.args.variant}>\n          <Plus className="tw-h-[1.8rem] tw-w-[1.8rem]" />\n          {context.args.children}\n        </Button>\n      </div>]\n}',...Default.parameters?.docs?.source}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);